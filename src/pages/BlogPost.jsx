import { useParams, Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import 'highlight.js/styles/github-dark.css';

const files = import.meta.glob(
  '../content/blog/*.md',
  {
    query: '?raw',
    import: 'default',
    eager: true
  }
);

function BlogPost() {
  const { slug } = useParams();

  const path = `../content/blog/${slug}.md`;

  const content = files[path];

  if (!content) {
    return <h1>Article not found</h1>;
  }

  return (
    <article>
      <Link to="/blog">← Back to Blog</Link>

      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogPost;