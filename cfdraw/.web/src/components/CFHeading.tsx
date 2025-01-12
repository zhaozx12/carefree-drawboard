import { observer } from "mobx-react-lite";
import { Heading, HeadingProps } from "@chakra-ui/react";

function CFHeading(props: HeadingProps) {
  return <Heading size="sm" {...props}></Heading>;
}

export default observer(CFHeading);
