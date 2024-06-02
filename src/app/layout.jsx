import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pablo Moreno-Rivera",
  description: "Pablo Moreno-Rivera's web dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
