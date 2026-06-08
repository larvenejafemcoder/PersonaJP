import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import ScrollReveal from "../../components/animations/ScrollReveal";
import useSWR from "swr";
import { useEffect } from "react";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface PostPageProps {
  data: {
    title: string;
    publishedAt: string;
    thumbnail: string;
    icon?: string;
  };
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const POSTS_PATH = path.join(process.cwd(), "data", "posts");
  const files = fs
    .readdirSync(POSTS_PATH)
    .filter((filePath) => /\.mdx?$/.test(filePath));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const POSTS_PATH = path.join(process.cwd(), "data", "posts");
  const { slug } = context.params as IParams;
  const source = fs.readFileSync(
    path.join(POSTS_PATH, slug + ".mdx"),
    "utf8"
  );

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: { data, slug, mdxSource },
  };
};

const fetcher = (args: string) => fetch(args).then((res) => res.json());

const PostPage = ({ data, slug, mdxSource }: PostPageProps) => {
  const { data: viewsData } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(viewsData?.total);

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" });
  }, [slug]);

  return (
    <div>
      <article className="section" style={{ paddingTop: "10rem", paddingBottom: "12rem" }}>
        <div className="max-w-[84vw] mx-auto max-w-3xl">
          <ScrollReveal delay={0.1}>
            <header className="mb-12">
              {data.icon && <span className="text-3xl block mb-4" aria-hidden="true">{data.icon}</span>}
              <h1 className="section-title mb-6">
                {data.title}
              </h1>
              <div
                className="flex justify-between items-center text-xs pb-6"
                style={{ color: "var(--text-light)", borderBottom: "1px solid var(--border)" }}
              >
                <time dateTime={data.publishedAt}>{data.publishedAt}</time>
                <span>
                  {`${Number(views) > 1 ? views.toLocaleString() : "---"} views`}
                </span>
              </div>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mb-12 overflow-hidden card">
              <Image
                src={data.thumbnail}
                alt={data.title}
                width={2000}
                height={2000}
                className="object-cover w-full aspect-video"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              className="prose prose-sm max-w-none leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <MDXRemote
                {...mdxSource}
                components={{
                  a: (props) => (
                    <a
                      style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}
                      {...props}
                    />
                  ),
                  ul: (props) => (
                    <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
                  ),
                  ol: (props) => (
                    <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />
                  ),
                  blockquote: (props) => (
                    <blockquote
                      className="my-6 p-4 italic text-sm"
                      style={{
                        borderLeft: "2px solid var(--border)",
                        color: "var(--text-secondary)",
                      }}
                      {...props}
                    />
                  ),
                  p: (props) => <p className="mb-4" {...props} />,
                  img: (props) => (
                    <img className="mx-auto my-8 card" {...props} alt={props.alt || ""} />
                  ),
                  hr: (props) => (
                    <hr style={{ borderColor: "var(--border)", margin: "2rem 0" }} {...props} />
                  ),
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
