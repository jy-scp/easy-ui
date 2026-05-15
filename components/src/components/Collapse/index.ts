import {
  CollapseRoot,
  CollapsePanel,
  CollapseTrigger,
  CollapseContent,
} from "./Collapse";

export { usePanelContext } from "./Collapse";
export type {
  CollapseProps,
  CollapsePanelProps,
  CollapseTriggerProps,
  CollapseContentProps,
} from "./Collapse";

export const Collapse = Object.assign(CollapseRoot, {
  Panel: CollapsePanel,
  Trigger: CollapseTrigger,
  Content: CollapseContent,
});
