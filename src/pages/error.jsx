import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <>
      <main>
        <section className="errorPage">
          <h1>404</h1>
          <p>Oops! The page you are requesting does not exist.</p>
          <Link className="errorPage__link" to="/">
            go to home page
          </Link>
        </section>
      </main>
    </>
  );
}
