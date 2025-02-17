function PrivacyPolicy() {
  return (
    <div className="font-noto-sans-thai-looped flex h-full w-full flex-col gap-2">
      <Header title="นโยบายความเป็นส่วนตัว" index={1} />
      <Article>
        นโยบายความเป็นส่วนตัว โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ ครั้งที่
        36 ให้ความสําคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
        โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม
        ใช้ หรือ เปิดเผยข้อมูลส่วนบุคคลรวมถึงสิทธิต่าง ๆ
        ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
      </Article>
      <Header title="การเก็บรวบรวมข้อมูลส่วนบุคคล" index={2} />
      <Header title="ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม" index={3} />
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
  children: string;
}

function Article({ children }: ArticleProps) {
  return <small>{children}</small>;
}

export default PrivacyPolicy;
