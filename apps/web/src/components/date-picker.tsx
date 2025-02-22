"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useControllableState } from "@/hooks/use-controllable-state";
import { formatThaiBuddhist } from "@/libs/date";
import { cn } from "@/libs/utils";
import { th } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { DropdownNavProps, DropdownProps } from "react-day-picker";

interface DatePickerProps {
  value: Date;
  onValueChange?: (data: Date) => void;
}

function DatePicker({ value, onValueChange }: DatePickerProps) {
  const [data, setData] = useControllableState({
    prop: value,
    defaultProp: value,
    onChange: onValueChange,
  });

  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>,
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    _e(_event);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "border-vermilion-1/30 focus-visible:ring-vermilion/60 h-12 w-full",
              !data && "text-muted-foreground",
            )}
          >
            {data ? formatThaiBuddhist(data) : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          locale={th}
          mode="single"
          selected={data}
          onSelect={setData}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          className="border-vermilion/60 rounded-md border p-2"
          classNames={{
            month_caption: "mx-0",
          }}
          captionLayout="dropdown"
          defaultMonth={new Date()}
          startMonth={new Date(1980, 6)}
          hideNavigation
          components={{
            DropdownNav: (props: DropdownNavProps) => {
              return (
                <div className="flex w-full items-center gap-2">
                  {props.children}
                </div>
              );
            },
            Dropdown: (props: DropdownProps) => {
              return (
                <Select
                  value={String(props.value)}
                  onValueChange={(value) => {
                    if (props.onChange) {
                      handleCalendarChange(value, props.onChange);
                    }
                  }}
                >
                  <SelectTrigger className="h-8 w-fit font-medium first:grow">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                    {props.options?.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={String(option.value)}
                        disabled={option.disabled}
                      >
                        {isNaN(parseInt(option.label))
                          ? option.label
                          : String(parseInt(option.label) + 543)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            },
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
export default DatePicker;
