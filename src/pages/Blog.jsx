import { Link } from 'react-router-dom';

const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function getPostDetails(path, content) {
  const slug = path.split('/').pop().replace('.md', '');

  const frontmatter = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  const metadata = {};

  if (frontmatter) {
    frontmatter[1].split('\n').forEach((line) => {
      const separator = line.indexOf(':');

      if (separator === -1) return;

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, '');

      metadata[key] = value;
    });
  }

  const title = content.match(/^# (.+)$/m)?.[1] || slug;

  return {
    slug,
    title,
    date: metadata.date || '',
  };
}

function Blog() {
  const posts = Object.entries(files)
    .map(([path, content]) => getPostDetails(path, content))
    .sort((a, b) => {
      return new Date(b.date || 0) - new Date(a.date || 0);
    });

  return (
    <section className="archive-page">
      <header className="archive-header">
        <h1>Archive</h1>
      </header>

      <div className="archive-list">
        {posts.map((post) => (
          <article className="archive-row" key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="archive-title"
            >
              <span>{post.title}</span>
              <span className="archive-leader" aria-hidden="true" />
            </Link>

            {post.date && (
              <time className="archive-date" dateTime={post.date}>
                {new Date(`${post.date}T00:00:00`).toLocaleDateString('en', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </time>
            )}
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="archive-empty">No articles yet.</p>
      )}
    </section>
  );
}

export default Blog;