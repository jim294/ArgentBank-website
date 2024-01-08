import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <>
            <main>
                <section className="errorPage">
                    <h1 className="errorPage__title">404</h1>
                    <p className="errorPage__text">Oups! La page que vous demandez n'existe pas.</p>
                    <Link className="errorPage__link" to="/">Page d'accueil</Link>
                </section>
            </main>
        </>
    );
}