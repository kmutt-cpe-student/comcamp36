import { motion } from "framer-motion";
import Image from "next/image";

interface reqBoxItem {
  text: string;
  imageSrc: string;
}

export default function RequirementItem({ text, imageSrc }: reqBoxItem) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      className="flex max-w-xs flex-col items-center text-center"
    >
      <Image width={300} height={300} src={imageSrc} alt="Requirement Icon" />
      <p className="mt-4 w-fit whitespace-pre-line border-t border-white pt-2 text-lg">
        {text}
      </p>
    </motion.div>
  );
}
