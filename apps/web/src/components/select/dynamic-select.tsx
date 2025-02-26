import { useEffect, useState } from "react";
import CustomSelect, { SelectProps } from ".";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface PresetEa {
  value: string;
  label: string;
}

interface DynamicSelectProps extends Omit<SelectProps, "onValueChange"> {
  onValueChange: (data: string) => void;
  preset: PresetEa[];
  formLabel: string;
}

export default function DynamicSelect(props: DynamicSelectProps) {
  const preset = props.preset;
  const options = [...preset, { value: "Other", label: "อื่น ๆ" }];

  const [selected, setSelected] = useState(() => {
    return preset.some((item) => item.value === props.value)
      ? props.value
      : "Other";
  });

  useEffect(() => {
    const newSelected = preset.some((item) => item.value === props.value)
      ? props.value
      : "Other";
    setSelected(newSelected);
  }, [props.value, preset]);

  const handleSelectChange = (value: string) => {
    setSelected(value);
    if (value === "Other") {
      props.onValueChange("");
    } else {
      props.onValueChange(value);
    }
  };

  return (
    <div className="flex gap-x-2">
      <div className="flex-1">
        <FormItem>
          <FormLabel>{props.formLabel}</FormLabel>
          <FormControl>
            <CustomSelect
              value={selected}
              onValueChange={handleSelectChange}
              options={options}
              disabled={props.disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </div>
      {selected === "Other" && (
        <div className="flex-1">
          <FormItem>
            <FormLabel>{props.placeholder}</FormLabel>
            <FormControl>
              <Input
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => {
                  e.preventDefault();
                  props.onValueChange(e.target.value);
                }}
                disabled={props.disabled}
              />
            </FormControl>
          </FormItem>
        </div>
      )}
    </div>
  );
}
