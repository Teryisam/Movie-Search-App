// Home.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ initialSearch }: { initialSearch?: string }) => {
  const [query, setQuery] = useState(initialSearch || "");

  // const handleStart = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!query.trim()) return;
  //   // push to /search with the query via link or programmatic navigation
  //   window.location.href = `/search?query=${encodeURIComponent(query)}`;
  // };

  return (
    <>
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold mb-3">
                Browse Movies Instantly
              </h1>
              <p className="lead mb-4">
                Search, discover and view detailed information about movies in a
                fast, API-driven interface. Fully deployed (frontend on Vercel,
                backed by live data) — built with React, Next.js, and real-world
                production intent.
              </p>
              {/* <form
                onSubmit={handleStart}
                className="d-flex flex-wrap gap-2 mb-2"
                aria-label="Start movie search"
              >
                <input
                  type="text"
                  aria-label="Movie search input"
                  className="form-control form-control-lg"
                  placeholder="Search for a movie (e.g. Inception)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ maxWidth: "400px" }}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  aria-label="Search movies"
                >
                  Search
                </button>
              </form> */}
              {/* <small className="text-muted d-block">
                Employers can preview the live app:{" "}
                <a
                  href="https://odogwubank.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  odogwubank.vercel.app
                </a>
              </small> */}
            </div>
            <div className="col-lg-5 text-center mt-4 mt-lg-0">
              <div className="ratio ratio-16x9 shadow rounded">
                {/* Optional embed/demo screenshot or placeholder */}
                <img
                  src="screenshot-movie-app.jpg"
                  alt="Movie browser preview"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="h3 mb-3 text-center">Why This App</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-3 border rounded">
                <h5>Real-Time Search</h5>
                <p className="mb-0">
                  Instant movie lookup powered by TheMovieDB API, with responsive
                  navigation and detail views.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-3 border rounded">
                <h5>Fullstack Deployment</h5>
                <p className="mb-0">
                  Frontend hosted on Vercel, backend services live—demonstrates
                  ownership of end-to-end delivery.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-3 border rounded">
                <h5>Detail-Focused UX</h5>
                <p className="mb-0">
                  Clean interface, fallback handling, deep movie details, and
                  intuitive search flow.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/search" className="btn btn-outline-primary btn-lg">
              Start Searching
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
