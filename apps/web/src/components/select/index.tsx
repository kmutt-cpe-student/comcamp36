"use client";

import { Check } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useControllableState } from "@/hooks/use-controllable-state";

export interface SelectProps {
  value: string;
  onValueChange?: (data: string) => void;
  placeholder?: string;
  includeFilter?: string[];
  excludeFilter?: string[];
  allowDeselect?: boolean;
  disabled?: boolean;
}

interface CustomSelectProps {
  options: {
    value: string;
    label: string;
  }[];
}
const CustomSelect = ({
  value,
  onValueChange,
  placeholder,
  includeFilter,
  excludeFilter,
  allowDeselect,
  options,
  disabled,
}: SelectProps & CustomSelectProps) => {
  const [data = "", setData] = useControllableState<string | undefined>({
    prop: value,
    onChange(value) {
      if (onValueChange) {
        onValueChange(value ? value : "");
      }
    },
  });

  const filteredOptions = options.filter((option) => {
    const isIncluded = includeFilter
      ? includeFilter.includes(option.value)
      : true;
    const isExcluded = excludeFilter
      ? !excludeFilter.includes(option.value)
      : true;
    return isIncluded && isExcluded;
  });

  return (
    <Select
      value={value}
      onValueChange={(value) => setData(value === "undefine" ? "" : value)}
      disabled={disabled}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {options.find((option) => option.value === data)?.label ||
            placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {allowDeselect && (
          <SelectItem value="undefine">
            <p>ไม่มี</p>
            {data === "" && (
              <div className="absolute right-2 top-2">
                <Check className="size-4" />
              </div>
            )}
          </SelectItem>
        )}
        {filteredOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
            {data === option.value && (
              <div className="absolute right-2 top-2">
                <Check className="size-4" />
              </div>
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
