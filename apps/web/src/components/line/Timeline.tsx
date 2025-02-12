import Image from "next/image";
import styles from "./art.module.css"; // Import the CSS module

export default function StudentReq() {
  return (
    <div className="font-prompt text-white bg-[#231F20] bg-cover bg-no-repeat bg-fixed bg-center py-10 relative">
      <div className="pb-20">
        <div className="px-5 flex justify-center items-center mt-10">
          <h2 className="text-4xl md:text-4xl lg:text-5xl text-center font-game-of-squid text-[#FFC94A]">
            Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 place-items-center md:flex md:flex-row justify-center gap-[2%] px-10 py-10 relative">
          {/* Timeline Line */}
          <div className="absolute bg-[#FFFFFF] z-0 w-2 left-1/2 top-10 bottom-0 md:w-full md:h-1 md:left-0 md:right-0 md:top-1/2 md:transform md:translate-y-2"></div>

          {/* Box 1 */}
          <div className={`${styles.boxtime} bg-[#006A71] z-10`}>
            <div className={styles.timeImgFrame}>
              <Image
                width={300}
                height={300}
                src="./timeline/01register.svg"
                alt="Requirement Icon"
              />
              <div className="flex flex-col items-center text-center p-4">
                <p className="drop-shadow-lg font-bold text-xl md:text-sm lg:text-lg">
                  1-10 <span className="text-[#FFC94A]">March</span> 2025
                </p>
                <h1 className="text-3xl md:text-2xl lg:text-3xl drop-shadow-lg pt-4">
                  รับสมัคร
                </h1>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className={`${styles.boxtime} bg-[#FFC94A] z-10`}>
            <div className={styles.timeImgFrame}>
              <Image
                width={300}
                height={300}
                src="./timeline/02release.svg"
                alt="Requirement Icon"
              />
              <div className="flex flex-col items-center text-center p-4 text-black">
                <p className="drop-shadow-lg font-bold text-xl md:text-base lg:text-lg">
                  16 <span>March</span> 2025
                </p>
                <h1 className="text-3xl md:text-2xl lg:text-3xl drop-shadow-lg pt-4">
                  ประกาศผล
                </h1>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className={`${styles.boxtime} bg-[#006A71] z-10`}>
            <div className={styles.timeImgFrame}>
              <Image
                width={300}
                height={300}
                src="./timeline/03confirm.svg"
                alt="Requirement Icon"
              />
              <div className="flex flex-col items-center text-center p-4">
                <p className="drop-shadow-lg font-bold text-xl md:text-sm lg:text-lg">
                  16-18 <span className="text-[#FFC94A]">March</span> 2025
                </p>
                <h1 className="text-3xl md:text-2xl lg:text-3xl drop-shadow-lg pt-4">
                  ยืนยันสิทธิ์
                </h1>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className={`${styles.boxtime} bg-[#FFC94A] z-10`}>
            <div className={styles.timeImgFrame}>
              <Image
                width={300}
                height={300}
                src="./timeline/04thatday.svg"
                alt="Requirement Icon"
              />
              <div className="flex flex-col items-center text-center p-4 text-black">
                <p className="drop-shadow-lg font-bold text-xl md:text-base lg:text-lg">
                  7-11 April 2025
                </p>
                <h1 className="text-3xl md:text-2xl lg:text-3xl drop-shadow-lg pt-4">
                  วันค่าย
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
