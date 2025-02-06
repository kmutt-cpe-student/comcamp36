"use client";

import { useEffect, useState } from "react";

type Props = { deadline: string };

export default function Timer({ deadline }: Props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
    return (
      <div className="flex border-[2px] border-[#525252] bg-[#000000]/35 backdrop-blur-xs rounded-[10px] px-5 py-2">
        <div className="w-full h-full flex items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-10 text-gray-200 animate-spin dark:text-gray-600 fill-vermilion"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex border-[2px] border-[#525252] bg-[#000000]/35 backdrop-blur-xs rounded-[10px] lg:px-8 px-5 py-2">
      <div className="text-vermilion flex-col items-center">
        <h2 className="lg:text-7xl text-4xl font-genmunu-libre w-full flex justify-center tabular-nums min-w-[2ch]">
          {formatTime(days)}
        </h2>
        <p className="lg:text-xl text-sm w-full flex justify-center">วัน</p>
      </div>
      <div>
        <h2 className="lg:text-7xl text-4xl text-vermilion font-genmunu-libre lg:mx-5 mx-3">
          :
        </h2>
      </div>
      <div className="text-vermilion flex-col items-center">
        <h2 className="lg:text-7xl text-4xl font-genmunu-libre w-full flex justify-center tabular-nums min-w-[2ch]">
          {formatTime(hours)}
        </h2>
        <p className="lg:text-xl text-sm w-full flex justify-center">ชั่วโมง</p>
      </div>
      <div>
        <h2 className="lg:text-7xl text-4xl text-vermilion font-genmunu-libre lg:mx-5 mx-3">
          :
        </h2>
      </div>
      <div className="text-vermilion flex-col items-center">
        <h2 className="lg:text-7xl text-4xl font-genmunu-libre w-full flex justify-center tabular-nums min-w-[2ch]">
          {formatTime(minutes)}
        </h2>
        <p className="lg:text-xl text-sm w-full flex justify-center">นาที</p>
      </div>
      <div>
        <h2 className="lg:text-7xl text-4xl text-vermilion font-genmunu-libre lg:mx-5 mx-3">
          :
        </h2>
      </div>
      <div className="text-vermilion flex-col items-center">
        <h2 className="lg:text-7xl text-4xl font-genmunu-libre w-full flex justify-center tabular-nums min-w-[2ch]">
          {formatTime(seconds)}
        </h2>
        <p className="lg:text-xl text-sm w-full flex justify-center">วินาที</p>
      </div>
    </div>
  );
}
