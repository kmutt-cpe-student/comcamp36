"use client";

import { motion, MotionProps } from "framer-motion";
import { ComponentProps, FC, ReactNode } from "react";

const FadeObserverDiv: FC<
  ComponentProps<"div"> &
    MotionProps & {
      children: ReactNode;
    }
> = (props) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeObserverDiv;
