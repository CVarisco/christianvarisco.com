import { useState, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-gray-200 overflow-hidden mi-w-90% sm:min-w-[600px]">
      <div className="flex justify-between items-center">
        <button
          className="py-5 w-full text-xl text-left font-serif flex justify-between"
          onClick={toggleAccordion}
        >
          {title}
        </button>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl pl-5"
        >
          {isOpen ? "-" : "+"}
        </motion.span>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: isOpen
            ? (contentRef.current as HTMLElement | null)?.scrollHeight
            : 0,
        }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="pb-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
