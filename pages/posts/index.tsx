import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import BlogCard from "../../components/ui/BlogCard";
import ScrollReveal from "../../components/animations/ScrollReveal";
import SectionLabel from "../../components/ui/SectionLabel";
import type { PostMeta } from "../../components/ui/types";

interface PostsProps {
  posts: PostMeta[];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>記事</SectionLabel>
            <h1 className="section-title">Posts</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "4rem", backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {posts.map((post: PostMeta) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const POSTS_PATH = path.join(process.cwd(), "data", "posts");
  const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((filePath) => /\.mdx?$/.test(filePath));

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath), "utf8");
    const { data } = matter(source);
    const slug = filePath.split(".")[0];

    return {
      title: data.title,
      desc: data.desc,
      publishedAt: data.publishedAt,
      thumbnail: data.thumbnail,
      slug,
    };
  });
  posts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
  return { props: { posts } };
};

export default Posts;
