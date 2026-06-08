import Link from "next/link";
import useSWR from "swr";
import type { PostMeta } from "./types";

interface BlogCardProps {
  post: PostMeta;
}

const fetcher = (args: string) => fetch(args).then((res) => res.json());

const BlogCard = ({ post }: BlogCardProps) => {
  const { data } = useSWR(`/api/views/${post.slug}`, fetcher);
  const views = new Number(data?.total);

  return (
    <div className="card transition-colors">
      <Link
        href={"/posts/" + post.slug}
        className="md:flex min-h-full"
        rel="noopener"
      >
        <div className="w-full md:w-40 shrink-0">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-40 md:h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col w-full justify-between">
          <div>
            <h3 className="text-base font-medium mb-2 leading-relaxed">
              {post.title}
            </h3>
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {post.desc}
            </p>
          </div>
          <div className="flex justify-between items-center mt-3 text-xs" style={{ color: "var(--text-light)" }}>
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span>{views.toLocaleString()} views</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
