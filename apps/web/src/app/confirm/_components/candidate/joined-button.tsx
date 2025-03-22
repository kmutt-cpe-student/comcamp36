import { Button } from "@/components/ui/button";

interface JoinedButtonProps {
  isAllDone: boolean;
}

function JoinedButton({ isAllDone }: JoinedButtonProps) {
  if (!isAllDone) {
    return (
      <Button type="button" disabled={!isAllDone}>
        เข้าร่วม!
      </Button>
    );
  }

  return <Button type="button">เข้าร่วม!</Button>;
}
export default JoinedButton;
