import type { BaseProps } from "./types";

const SectionLabel = ({ children, className = "" }: BaseProps) => {
  return (
    <span className={`section-label block mb-6 ${className}`}>
      {children}
    </span>
  );
};

export default SectionLabel;
