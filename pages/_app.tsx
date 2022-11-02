import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

// Inspo: https://website-git-blog-delbaoliveira.vercel.app/ at https://github.com/delbaoliveira/website/tree/bc24c27d9051db831957eedd835b95aabffa1e2e
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nilufar Bava | Web Dev Lead | Prisma</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
