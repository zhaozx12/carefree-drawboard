import { observer } from "mobx-react-lite";
import { InputProps } from "@chakra-ui/react";

import { isUndefined } from "@noli/core";
import { langStore, translate } from "@noli/business";

import type { INumberField, ISubscribableFields } from "@/types/metaFields";
import { getMetaField, setMetaField } from "@/stores/meta";
import CFSlider from "@/components/CFSlider";
import TextField from "./TextField";

export interface NumberFieldProps extends InputProps {
  field: ISubscribableFields;
  definition: INumberField;
}
function NumberField({ field, definition, ...props }: NumberFieldProps) {
  if (isUndefined(definition.min) || isUndefined(definition.max)) {
    return <TextField field={field} definition={{ type: "text" }} {...props} />;
  }
  let step = definition.step;
  if (!isUndefined(step) && definition.isInt) step = Math.round(step);
  return (
    <CFSlider
      min={definition.min}
      max={definition.max}
      step={step}
      value={getMetaField(field) as number}
      onChange={(value) => setMetaField(field, value)}
      scale={definition.scale}
      label={definition.label ?? translate(`${field}-field-label`, langStore.tgt)}
      precision={definition.isInt ? 0 : definition.precision}
    />
  );
}

export default observer(NumberField);