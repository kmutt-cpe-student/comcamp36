import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function BloodGroupSelector({
  onValueChange = () => {},
  ...props
}: SelectProps) {
  const preset = [
    {
      value: "A",
      label: "A",
    },
    {
      value: "B",
      label: "B",
    },
    {
      value: "O",
      label: "O",
    },
    {
      value: "AB",
      label: "AB",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="กรุ๊ปเลือด"
      placeholder="ระบุกรุ๊ปเลือดอื่น ๆ"
    />
  );
}

export default BloodGroupSelector;
