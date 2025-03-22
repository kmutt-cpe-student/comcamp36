import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function OsGroupSelector({ onValueChange = () => {}, ...props }: SelectProps) {
  const preset = [
    {
      value: "Windows",
      label: "Windows (11/10)",
    },
    {
      value: "macOs (ARM)",
      label: "macOs ชิป Silicon (M1/M2/.....)",
    },
    {
      value: "macOs (Intel)",
      label: "macOs ชิป Intel",
    },
    {
      value: "No",
      label: "ไม่มีโน็ตบุ็ค",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="ระบบปฎิบัติการของโน็ดบุ็คที่นำมาค่าย"
      placeholder="ระบุระบบปฎิบัติการของโน็ดบุ็คที่นำมาค่าย"
    />
  );
}

export default OsGroupSelector;
