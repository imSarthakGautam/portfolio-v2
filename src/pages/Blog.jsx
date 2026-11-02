import { Link } from 'react-router-dom';

const files = import.meta.glob(
  '../content/blog/*.md',
  {
    query: '?raw',
    import: 'default',
    eager: true
  }
);

function Blog() {
  const posts = Object.entries(files).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');

    const title = content.match(/^# (.+)$/m)?.[1] || slug;

    return {
      slug,
      title,
      content
    };
  });

  return (
    <section>
      <h1>Blog</h1>

      {posts.map((post) => (
        <article key={post.slug}>
          <h2>
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
        </article>
      ))}
    </section>
  );
}

export default Blog;