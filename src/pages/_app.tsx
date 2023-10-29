import type { Metadata } from "next";
import Head from "next/head";
import { AppProps } from "next/app";
import { Ubuntu_Mono, Cutive_Mono } from "next/font/google";
import "../styles/globals.scss";
import { c } from "../utils";
import Navbar from "@/components/Navbar";

const ubuntuMono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
});
const cutiveMono = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cutive-mono",
});

export const metadata: Metadata = {
  title: "rainfrog.gg",
  description: "tattoos",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href={
            "data:image/svg+xml," +
            "<svg xmlns=%22http://www.w3.org/2000/svg%22 " +
            "viewBox=%220 0 100 100%22>" +
            "<text y=%22.9em%22 font-size=%2290%22>🐸</text>" +
            "</svg>"
          }
        />
      </Head>
      <Navbar className={c(ubuntuMono.variable, cutiveMono.variable)} />
      <main className={c(ubuntuMono.variable, cutiveMono.variable)}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
