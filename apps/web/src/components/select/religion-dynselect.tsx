import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function ReligionSelector({ onValueChange = () => {}, ...props }: SelectProps) {
  const preset = [
    {
      value: "พุทธ",
      label: "พุทธ",
    },
    {
      value: "คริสต์",
      label: "คริสต์",
    },
    {
      value: "อิสลาม",
      label: "อิสลาม",
    },
    {
      value: "ไม่นับถือศาสนา",
      label: "ไม่นับถือศาสนา",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="ศาสนา"
      placeholder="ระบุศาสนา"
    />
  );
}

export default ReligionSelector;
