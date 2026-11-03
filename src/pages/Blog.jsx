import resources from '../data/resources.json';

function Blog() {
  const sortedResources = [...resources].sort(
    (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
  );

  return (
    <section className="archive-page">
      <header className="archive-header">
        <h1>Resources</h1>
        <p>
          A collection of useful articles, ideas, and references
          worth exploring and revisiting.
        </p>
      </header>

      <div className="archive-list">
        {sortedResources.map((resource, index) => (
          <article className="archive-row" key={`${resource.url}-${index}`}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="archive-title"
            >
              <span>{resource.title}</span>
              <span className="archive-leader" aria-hidden="true" />
            </a>

            <div className="archive-meta">
              <span className="archive-source">{resource.source}</span>

              <time dateTime={resource.dateAdded} className="archive-date">
                {new Date(`${resource.dateAdded}T00:00:00`).toLocaleDateString(
                  'en',
                  {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  }
                )}
              </time>
            </div>
          </article>
        ))}
      </div>

      {sortedResources.length === 0 && (
        <p className="archive-empty">No resources added yet.</p>
      )}
    </section>
  );
}

export default Blog;