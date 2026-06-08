import type { ReactNode } from "react";
import { useScrollReveal } from "./useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const { ref, visible } = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...(visible && { opacity: 1, transform: "translateY(0)" }),
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
