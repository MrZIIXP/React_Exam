import { useState } from "react";

export const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className=" py-[10px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[16px] text-left w-full"
      >
        <div className="text-[28px] leading-[42px] text-[#7772F1] font-medium">
          {isOpen ? "−" : "+"}
        </div>
        <h4 className="text-[20px] leading-[30px] font-semibold text-[#1E212C]">
          {title}
        </h4>
      </button>

      {isOpen && (
        <div className="pt-[16px] pl-[44px] text-[16px] leading-[24px] text-[#424551]">
          {children}
        </div>
      )}
    </div>
  );
};
