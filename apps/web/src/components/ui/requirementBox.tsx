import Image from "next/image";

interface reqBoxItem {
  text: string;
  imageSrc: string;
}

export default function RequirementItem({ text, imageSrc }: reqBoxItem) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <Image width={300} height={300} src={imageSrc} alt="Requirement Icon" />
      <p className="mt-4 text-lg border-t border-white w-fit pt-2 whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
