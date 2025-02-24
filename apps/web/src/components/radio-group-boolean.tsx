import { useControllableState } from "@/hooks/use-controllable-state";
import { useId } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface RadioGroupBooleanProps {
  true_label: string;
  false_label: string;
  value: boolean;
  onValueChange?: (data: boolean) => void;
  disabled?: boolean;
}

function RadioGroupBoolean(props: RadioGroupBooleanProps) {
  const [data = props.value, setData] = useControllableState({
    prop: props.value,
    onChange: props.onValueChange,
  });

  const id = useId();

  return (
    <RadioGroup
      value={data ? "1" : "2"}
      disabled={props.disabled}
      onValueChange={(state) => {
        if (state == "1") {
          setData(true);
        } else {
          setData(false);
        }
      }}
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="1"
          id={`${id}-1`}
          className="hover:cursor-pointer"
        />
        <Label htmlFor={`${id}-1`} className="hover:cursor-pointer">
          {props.true_label}
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="2"
          id={`${id}-2`}
          className="hover:cursor-pointer"
        />
        <Label htmlFor={`${id}-2`} className="hover:cursor-pointer">
          {props.false_label}
        </Label>
      </div>
    </RadioGroup>
  );
}
export default RadioGroupBoolean;
