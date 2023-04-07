import { Dictionary, Lang } from "@noli/core";

import { allAvailablePlugins, AvailablePlugins } from "@/types/plugins";

const _pluginsLangRecords: Record<Lang, Record<AvailablePlugins, string>> = {
  zh: {
    meta: "参数信息",
    "txt2img.sd": "文本转图片",
    settings: "设置",
  },
  en: {
    meta: "Meta",
    "txt2img.sd": "Txt2Img",
    settings: "Settings",
  },
};

export const Plugins_Words: Record<AvailablePlugins, string> = {} as any;
export const pluginsLangRecords: Dictionary<Dictionary<string>> = {};

function injectScope(scope: string, data: Dictionary<string>) {
  Object.entries(data).forEach(([key, value]) => {
    data[key] = `${scope}.${value}`;
  });
}
function reverseMapping(data: Dictionary<string>) {
  return Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]));
}

allAvailablePlugins.forEach((plugin) => {
  (Plugins_Words as any)[plugin] = plugin;
});
const scope = "plugins";
injectScope(scope, Plugins_Words);
Object.entries(_pluginsLangRecords).forEach(([lang, record]) => {
  const reversedRecord = reverseMapping(record);
  injectScope(scope, reversedRecord);
  pluginsLangRecords[lang] = reverseMapping(reversedRecord);
});