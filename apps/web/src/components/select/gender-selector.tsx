import CustomSelect, { SelectProps } from ".";

function GenderSelector(props: SelectProps) {
  const options = [
    {
      value: "woman",
      label: "หญิง",
    },
    {
      value: "man",
      label: "ชาย",
    },
  ];

  return <CustomSelect {...props} options={options} placeholder="เลือกเพศ" />;
}
export default GenderSelector;
