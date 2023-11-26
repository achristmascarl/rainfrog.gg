import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { Ubuntu_Mono, Cutive_Mono } from "next/font/google";
import "../styles/globals.scss";
import { c } from "../utils";
import Navbar from "@/components/Navbar";
import { MobileMenu } from "@/components/Menu";

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

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <Navbar
        className={c(ubuntuMono.variable, cutiveMono.variable)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className={c(ubuntuMono.variable, cutiveMono.variable)}>
        <MobileMenu mobileMenuOpen={mobileMenuOpen} />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
