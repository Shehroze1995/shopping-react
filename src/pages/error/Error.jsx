import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="onRenderAnimate text-center">
      <section className="w-11/12 max-w-lg m-auto grid place-items-center gap-4 my-24">
        <p className="text-5xl font-extrabold text-gray-500">404 :&#40; </p>
        <article className="text-center font-extrabold text-2xl">
          <p>Sorry, we couldn&apos;t find the page</p>
          <p>you were looking for.</p>
        </article>
        <p>Please return to our home page to continue browsing our site.</p>
        <Link to={`/`} className="text-blue-500">
          <u>Back to Home</u>
        </Link>
      </section>
    </main>
  );
};

export default Error;
