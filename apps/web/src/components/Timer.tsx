export default function Timer() {
  return (
    <div className="flex border-[2px] border-red-[#525252] bg-[#000000]/35 rounded-[10px] px-5 py-2">
      <div className="border-2 border-red-500 text-vermilion flex-col items-center">
        <p className="text-5xl">01</p>
        <p>วัน</p>
      </div>
      <div>
        <p className="text-vermilion text-5xl mx-3">:</p>
      </div>
      <div className="text-vermilion flex-col items-center">
        <p className="text-5xl">23</p>
        <p>ชั่วโมง</p>
      </div>
      <div>
        <p className="text-vermilion text-5xl mx-3">:</p>
      </div>
      <div className="text-vermilion flex-col items-center">
        <p className="text-5xl">45</p>
        <p>นาที</p>
      </div>
      <div>
        <p className="text-vermilion text-5xl mx-3">:</p>
      </div>
      <div className="text-vermilion flex-col items-center">
        <p className="text-5xl">06</p>
        <p>วินาที</p>
      </div>
    </div>
  );
}
