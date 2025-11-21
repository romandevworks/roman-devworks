import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundEffects from "../components/BackgroundEffects";

export const metadata = {
  title: "Roman DevWorks",
  description: "Discord bots, automation, and digital software by Roman DevWorks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Futuristic animated background */}
        <BackgroundEffects />

        {/* Top navigation */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
