import { useParams, Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function BlogPost() {
  const { slug } = useParams();

  const path = `../content/blog/${slug}.md`;
  const content = files[path];

  if (!content) {
    return (
      <section className="article-page">
        <h1>Article not found</h1>
        <Link to="/blog" className="back-link">
          ← Back to writing
        </Link>
      </section>
    );
  }

  // Extract optional frontmatter
  const frontmatter = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  const metadata = {};

  if (frontmatter) {
    frontmatter[1].split("\n").forEach((line) => {
      const [key, ...value] = line.split(":");

      if (key && value.length) {
        metadata[key.trim()] = value
          .join(":")
          .trim()
          .replace(/^["']|["']$/g, "");
      }
    });
  }

  // Extract the first Markdown heading as the article title
  const title = content.match(/^# (.+)$/m)?.[1] || slug;

  // Remove frontmatter and first heading from the article body
  const articleContent = content
    .replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "")
    .replace(/^# .+\n?/, "");

  return (
    <article className="article-page">
      <Link to="/blog" className="back-link">
        ← Back to writing
      </Link>

      <header className="article-header">
        {metadata.date && (
          <time dateTime={metadata.date} className="article-date">
            {new Date(`${metadata.date}T00:00:00`).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}

        <h1>{title}</h1>

        {metadata.description && (
          <p className="article-description">{metadata.description}</p>
        )}
      </header>

      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {articleContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogPost;
