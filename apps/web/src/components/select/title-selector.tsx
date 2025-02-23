import CustomSelect, { SelectProps } from ".";

function TitleSelector(props: SelectProps) {
  const options = [
    {
      value: "mr",
      label: "นาย",
    },
    {
      value: "mrs",
      label: "นาง",
    },
    {
      value: "miss",
      label: "นางสาว",
    },
    {
      value: "master",
      label: "เด็กชาย",
    },
    {
      value: "miss_young",
      label: "เด้กหญิง",
    },
  ];

  return <CustomSelect {...props} options={options} />;
}
export default TitleSelector;
