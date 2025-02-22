import CustomSelect, { SelectProps } from ".";

function GenderSelector(props: SelectProps) {
  const options = [
    {
      value: "mr",
      label: "หญิง",
    },
    {
      value: "mrs",
      label: "ชาย",
    },
  ];

  return <CustomSelect {...props} options={options} placeholder="เลือกเพศ" />;
}
export default GenderSelector;
