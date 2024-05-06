import { Rubik } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const rubik = Rubik({ subsets: ["latin"], display: "swap" });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <main className="flex">
            <NavBar />
            <div className="flex flex-col w-full">
            <Header />
            {children}
            <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
