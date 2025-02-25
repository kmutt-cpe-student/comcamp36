import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function ParentRelationSelector({
  onValueChange = () => {},
  ...props
}: SelectProps) {
  const preset = [
    {
      value: "บิดา",
      label: "บิดา",
    },
    {
      value: "มารดา",
      label: "มารดา",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="ความสัมพันธ์กับผู้ปกครอง"
      placeholder="ระบุความสัมพันธ์"
    />
  );
}

export default ParentRelationSelector;
