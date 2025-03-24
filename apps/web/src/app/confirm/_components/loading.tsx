import Bishop from "@/components/chess/bishop";
import Knight from "@/components/chess/knight";
import Spinner from "@/components/spinner";

function ConfirmLoading() {
  return (
    <div className="flex min-h-full w-full items-center justify-center gap-12">
      <Bishop className="w-[6rem] transition-all hover:scale-[1.3]" />
      <Spinner />
      <Knight className="w-[6rem] transition-all hover:scale-[1.3]" />
    </div>
  );
}
export default ConfirmLoading;
