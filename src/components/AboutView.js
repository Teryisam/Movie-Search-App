// AboutView.tsx
import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About this App" />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <p className="lead">
                This is a movie browser application built to demonstrate full-stack
                ownership: real-time search, detail exploration, and responsive
                UI. The frontend is built with React and React Router, and deployed
                on Vercel. The app consumes TheMovieDB API to fetch movie data and
                displays rich metadata and imagery with graceful fallbacks.
              </p>
              <p>
                Key features include:
              </p>
              <ul>
                <li>API-driven movie search and filtering</li>
                <li>Detail view with poster, overview, and metadata</li>
                <li>Responsive, accessible UI using Bootstrap</li>
                <li>Deployment pipeline showing end-to-end delivery</li>
              </ul>
              <p className="mt-4">
                The project showcases real-world engineering habits: clean React
                component structure, search state syncing, and thoughtful UX for
                both discovery and exploration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutView;
