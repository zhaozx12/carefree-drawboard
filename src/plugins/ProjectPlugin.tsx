import Upload from "rc-upload";
import { observer } from "mobx-react-lite";
import { useMemo, useState, useEffect, useCallback } from "react";
import { Flex, useToast } from "@chakra-ui/react";

import { Dictionary, getRandomHash } from "@noli/core";
import { langStore, translate } from "@noli/business";

import type { IPlugin } from "@/types/plugins";
import { toast } from "@/utils/toast";
import { Toast_Words } from "@/lang/toast";
import { Projects_Words } from "@/lang/projects";
import { setCurrentProjectName, useCurrentProject } from "@/stores/projects";
import {
  ILoadedProject,
  fetchAllProjects,
  loadLocalProject,
  loadProject,
  saveProject,
} from "@/actions/manageProjects";
import CFSelect from "@/components/CFSelect";
import { CFText } from "@/components/CFText";
import { CFInput } from "@/components/CFInput";
import { CFButton } from "@/components/CFButton";
import { CFDivider } from "@/components/CFDivider";
import { CFHeading } from "@/components/CFHeading";
import { drawboardPluginFactory } from "./utils/factory";
import Render from "./components/Render";
import { floatingRenderEvent } from "./components/Floating";

const ProjectPlugin = ({ pluginInfo, ...props }: IPlugin) => {
  const t = useToast();
  const id = `project_${getRandomHash()}`;
  const lang = langStore.tgt;
  const { uid, name } = useCurrentProject();
  const [selectedUid, setSelectedUid] = useState("");
  const [userInputName, setUserInputName] = useState(name);
  const [allProjects, setAllProjects] = useState<Dictionary<string> | undefined>();
  const allProjectUids = useMemo(() => Object.keys(allProjects ?? {}), [allProjects]);

  const updateUids = useCallback(() => {
    fetchAllProjects().then((projects) => {
      projects ??= [];
      const uid2name = projects.reduce((acc, { uid, name }) => {
        acc[uid] = name;
        return acc;
      }, {} as Dictionary<string>);
      setAllProjects(uid2name);
      if (!!uid2name[uid]) {
        setSelectedUid(uid);
      }
    });
  }, []);

  useEffect(() => {
    floatingRenderEvent.on(({ id: incomingId, expand }) => {
      if (id === incomingId && expand) updateUids();
    });
  }, [id]);

  function onRenameProject() {
    setCurrentProjectName(userInputName);
    onSaveProject();
  }
  function onSaveProject() {
    saveProject(t, lang, async () => {
      toast(t, "success", translate(Toast_Words["save-project-success-message"], lang));
      updateUids();
    });
  }
  async function onLoadProjectSuccess(res: ILoadedProject) {
    setSelectedUid(res.uid);
    setUserInputName(res.name);
    toast(t, "success", translate(Toast_Words["load-project-success-message"], lang));
  }
  function onLoadProject() {
    if (!selectedUid) {
      toast(t, "warning", translate(Toast_Words["please-select-project-message"], lang));
      return;
    }
    loadProject(t, lang, selectedUid, onLoadProjectSuccess);
  }
  function onLoadLocalProject(res: ILoadedProject) {
    loadLocalProject(t, lang, res, onLoadProjectSuccess);
  }

  return (
    <Render id={id} {...props}>
      <Flex w="100%" h="100%" direction="column">
        <CFHeading>{translate(Projects_Words["project-plugin-header"], lang)}</CFHeading>
        <CFDivider />
        <CFInput value={userInputName} onChange={(e) => setUserInputName(e.target.value)} />
        <CFButton mt="12px" onClick={onRenameProject}>
          {translate(Projects_Words["save-project"], lang)}
        </CFButton>
        <CFDivider />
        {allProjects ? (
          allProjectUids.length > 0 ? (
            <CFSelect
              value={selectedUid}
              options={allProjectUids}
              onOptionClick={(uid) => setSelectedUid(uid)}
              optionConverter={(uid) => allProjects[uid]}
              menuListProps={{
                maxH: "116px",
                overflowY: "scroll",
              }}
            />
          ) : (
            <CFText>{translate(Projects_Words["no-projects-available"], lang)}</CFText>
          )
        ) : (
          <CFText>{translate(Projects_Words["loading-available-project"], lang)}</CFText>
        )}
        <CFButton mt="12px" onClick={onLoadProject}>
          {translate(Projects_Words["load-project"], lang)}
        </CFButton>
        <CFDivider />
        <Upload
          accept=".noli"
          customRequest={({ file }) => {
            const reader = new FileReader();
            reader.onload = () =>
              onLoadLocalProject(JSON.parse(reader.result as string) as ILoadedProject);
            reader.readAsText(file as Blob);
          }}>
          <CFButton w="100%">{translate(Projects_Words["load-local-project"], lang)}</CFButton>
        </Upload>
      </Flex>
    </Render>
  );
};

const _ = observer(ProjectPlugin);
drawboardPluginFactory.register("project")(_);
export default _;
