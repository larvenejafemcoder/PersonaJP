import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface SectionProps extends BaseProps {
  dark?: boolean;
  id?: string;
}

export interface HeadingProps extends BaseProps {
  as?: "h1" | "h2" | "h3" | "h4";
}

export interface ProductCardData {
  href: string;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  tech?: string;
}

export interface NewsItem {
  date: string;
  events: string[];
}

export interface MicroblogEntry {
  title: string;
  data: { date: string; content: string }[];
}

export interface PostMeta {
  title: string;
  desc: string;
  publishedAt: string;
  thumbnail: string;
  icon?: string;
  slug: string;
}
