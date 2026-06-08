import Head from "next/head";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

interface MainProps {
  children: React.ReactNode;
  router: { asPath: string };
}

const Main = ({ children, router }: MainProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Head>
        <title>Yang Tuấn Anh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/waffle_logo.png" />
      </Head>

      <Navbar path={router.asPath} />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Main;
