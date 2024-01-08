import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <>
            <main>
                <section className="errorPage">
                    <h1 className="errorPage__title">404</h1>
                    <p className="errorPage__text">Oops! The page you are requesting does not exist.</p>
                    <Link className="errorPage__link" to="/">go to home page</Link>
                </section>
            </main>
        </>
    );
}