import projects from '../data/projects.json';

function Projects() {
  const sortedProjects = [...projects].sort((a, b) => {
    return Number(b.year) - Number(a.year);
  });

  return (
    <section className="projects-page">
      <header className="projects-header">
        <p className="eyebrow">SELECTED WORKS</p>

        <h1>Projects</h1>

        <p>
          A selection of things I've built, experimented with,
          and learned from along the way.
        </p>
      </header>

      <div className="projects-list">
        {sortedProjects.map((project, index) => (
          <article className="project-entry" key={project.title}>
            <div className="project-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="project-content">
              <div className="project-heading">
                <h2>{project.title}</h2>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {sortedProjects.length === 0 && (
        <p className="projects-empty">
          Projects will appear here soon.
        </p>
      )}
    </section>
  );
}

export default Projects;