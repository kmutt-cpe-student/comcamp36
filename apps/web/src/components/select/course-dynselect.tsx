import { SelectProps } from ".";
import DynamicSelect from "./dynamic-select";

function CourseSelector({ onValueChange = () => {}, ...props }: SelectProps) {
  const preset = [
    {
      value: "วิทย์-คณิต",
      label: "วิทยาศาสตร์-คณิตศาสตร์",
    },
    {
      value: "วิทย์-คอม",
      label: "วิทยาศาสตร์-คอมพิวเตอร์",
    },
    {
      value: "ศิลป์-คำนวณ",
      label: "ศิลป์-คำนวณ",
    },
    {
      value: "สาขาคอมพิวเตอร์ธุรกิจ",
      label: "ปวช. สาขาคอมพิวเตอร์ธุรกิจ",
    },
    {
      value: "สาขาช่างไฟฟ้ากำลัง (อิเล็กทรอนิกส์)",
      label: "ปวช. สาขาช่างไฟฟ้ากำลัง (อิเล็กทรอนิกส์)",
    },
    {
      value: "สาขาเมคคาทรอนิกส์และหุ่นยนต์",
      label: "ปวช. สาขาเมคคาทรอนิกส์และหุ่นยนต์",
    },
  ];

  return (
    <DynamicSelect
      {...props}
      onValueChange={onValueChange}
      preset={preset}
      formLabel="สายการเรียน (อื่น ๆ โปรดระบุ)"
      placeholder="ระบุสายการเรียน"
    />
  );
}

export default CourseSelector;
