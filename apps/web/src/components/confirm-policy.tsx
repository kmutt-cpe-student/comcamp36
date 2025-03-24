function ConfirmPolicy() {
  return (
    <div className="font-noto-sans-thai-looped flex h-full w-full flex-col gap-2 text-left">
      <FirstArt>
        โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น ครั้งที่ 36
        (ต่อไปนี้จะเรียกว่า “โครงการ”)
        ขอชี้แจงข้อกำหนดในการยืนยันสิทธิเข้าร่วมโครงการ ดังนี้
      </FirstArt>
      <br />

      <Header title="เงินมัดจำ" index={1} />
      <Article>
        โครงการมีการเรียกเก็บค่ามัดจำการเข้าร่วมจำนวน 350 บาท
        เพื่อเป็นหลักประกันในการเข้าร่วมกิจกรรม
        โดยจะชำระคืนให้แก่นักเรียนผู้เข้าร่วมโครงการในพิธีปิดของโครงการในรูปแบบเงินสด{" "}
        <span className="font-bold underline">ยกเว้น</span>{" "}
        นักเรียนผู้เข้าร่วมโครงการทำผิดข้อกำหนดต่อไปนี้
      </Article>
      <Article>
        <div className="px-8">
          <ul className="list-disc pl-14">
            <li>
              นักเรียนผู้เข้าร่วมโครงการเข้าร่วมกิจกรรมไม่ครบตามจำนวนชั่วโมงที่กำหนด
            </li>
            <li>นักเรียนผู้เข้าร่วมโครงการไม่เข้าร่วมพิธีปิดของโครงการ</li>
            <li>
              นักเรียนผู้เข้าร่วมโครงการประพฤตตนผิดกฎระเบียบของโครงการอย่างร้ายแรง
            </li>
            <li>
              ตรวจสอบพบว่าข้อมูลที่ใช้ในการสมัครเข้าโครงการ หรือ
              ข้อมูลเพิ่มเติมสำหรับยืนยันสิทธิของนักเรียนผู้เข้าร่วมโครงการเป็นเท็จ
            </li>
          </ul>
        </div>
        โดยหากนักเรียนผู้เข้าร่วมโครงการทำผิดข้อกำหนดข้างต้น
        ทางโครงการขอสงวนสิทธิไม่คืนเงินมัดจำทุกกรณี
      </Article>

      <br />

      <Header title="การคุ้มครองข้อมูลส่วนบุคคล" index={2} />
      <Article>
        เนื่องจากในบริเวณกิจกรรมของโครงการ มีการบันทึกภาพบรรยากาศภายในโครงการ
        ทั้งภาพนิ่ง ภาพเคลื่อนไหว และเสียง
        ซึ่งอาจถูกใช้ในการประชาสัมพันธ์ในช่องทางต่าง ๆ การยืนยันสิทธิ์
        จะถือเป็นการอนุญาตให้โครงการบันทึกภาพนิ่ง ภาพเคลื่อนไหว
        และเสียงของนักเรียนผู้เข้าร่วมโครงการ
      </Article>

      <Header title="การมอบประกาศนียบัตรเข้าร่วมกิจกรรม" index={3} />
      <Article>
        โครงการขอสงวนสิทธิมอบเกียรติบัตรให้แก่นักเรียนผู้เข้าร่วมโครงการที่ผ่านข้อกำหนดการได้รับประกาศนียบัตรที่ทางโครงการกำหนดเท่านั้น
        โดยอาจรวมถึงแต่ไม่จำกัดเพียง
        <div className="px-8">
          <ul className="list-disc pl-14">
            <li>
              นักเรียนผู้เข้าร่วมโครงการต้องเข้าร่วมกิจกรรมครบตามจำนวนชั่วโมงที่กำหนด
            </li>
            <li>
              นักเรียนผู้เข้าร่วมโครงการต้องไม่ทำผิดกฎระเบียบร้ายแรงของโครงการ
            </li>
          </ul>
        </div>
      </Article>

      <br />
    </div>
  );
}

interface HeaderProps {
  title: string;
  index: number;
}

function Header({ title, index }: HeaderProps) {
  return (
    <p className="font-bold">
      {index}. {title}
    </p>
  );
}

interface ArticleProps {
  children: React.ReactNode;
  // children: string
}

function Article({ children }: ArticleProps) {
  return <small className="leading-8">{children}</small>;
}

function FirstArt({ children }: ArticleProps) {
  return <small className="indent-14 leading-8">{children}</small>;
}

export default ConfirmPolicy;
