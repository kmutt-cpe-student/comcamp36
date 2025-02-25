import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function PreferFoodSelector({
  onValueChange = () => {},
  ...props
}: SelectProps) {
  const preset = [
    {
      value: "ปกติ",
      label: "ปกติ",
    },
    {
      value: "ฮาลาล",
      label: "ฮาลาล",
    },
    {
      value: "มังสวิรัติ",
      label: "มังสวิรัติ",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="อาหารที่รับประทาน"
      placeholder="ระบุอาหารอื่น ๆ"
    />
  );
}

export default PreferFoodSelector;
