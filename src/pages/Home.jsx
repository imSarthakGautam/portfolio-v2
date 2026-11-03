function Home() {
  return (
    <div className="container home">

      <section className="home-hero">

        <p className="hero-eyebrow">
          DEVELOPER · ENGINEER · LIFELONG LEARNER
        </p>

        <h1 className="hero-name">
          Sarthak Gautam.
        </h1>

        <p className="hero-description">
          Backend engineer interested in playing around with 0s and 1s to build systems and architectures.
        </p>
        <p>Kathmandu, Nepal</p>

        <div className="hero-links">
          <a href="https://github.com/imSarthakGautam" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/in/imsarthakgautam/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href="mailto:sarthakgautam.dev@gmail.com">
            Email ↗
          </a>
        </div>

      </section>

    </div>
  );
}

export default Home;