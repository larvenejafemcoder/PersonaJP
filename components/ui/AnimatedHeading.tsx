import type { HeadingProps } from "./types";

const AnimatedHeading = ({ children, className = "", as: Tag = "h2" }: HeadingProps) => {
  return (
    <Tag className={`section-title ${className}`}>
      {children}
    </Tag>
  );
};

export default AnimatedHeading;
