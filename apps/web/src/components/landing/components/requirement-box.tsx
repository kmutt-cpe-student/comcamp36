import Image from "next/image";

interface reqBoxItem {
  text: string;
  imageSrc: string;
}

export default function RequirementItem({ text, imageSrc }: reqBoxItem) {
  return (
    <div className="flex max-w-xs flex-col items-center text-center">
      <Image width={300} height={300} src={imageSrc} alt="Requirement Icon" />
      <p className="mt-4 w-fit whitespace-pre-line border-t border-white pt-2 text-lg">
        {text}
      </p>
    </div>
  );
}
