import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function GraduationSelector({
  onValueChange = () => {},
  ...props
}: SelectProps) {
  const preset = [
    {
      value: "มัธยมศึกษาปีที่ 4",
      label: "มัธยมศึกษาปีที่ 4",
    },
    {
      value: "มัธยมศึกษาปีที่ 5",
      label: "มัธยมศึกษาปีที่ 5",
    },
    {
      value: "ปวช. 1",
      label: "ปวช. 1",
    },
    {
      value: "ปวช. 2",
      label: "ปวช. 2",
    },
    {
      value: "ปวช. 3",
      label: "ปวช. 3",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="ระดับชั้นการศึกษา"
      placeholder="ระบุระดับชั้นการศึกษาอื่น ๆ"
    />
  );
}

export default GraduationSelector;
