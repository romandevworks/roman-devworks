import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Roman DevWorks",
  description: "Discord bots & digital automation — built by Roman DevWorks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* global spotlight glow */}
        <div className="spotlight"></div>

        {/* top navigation */}
        <Navbar />

        {/* page content */}
        <div className="pt-24">{children}</div>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
