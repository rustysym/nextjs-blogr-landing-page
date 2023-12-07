import { Overpass, Ubuntu } from "next/font/google";
import "./globals.css";
import "./reset.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  preload: true,
});
const ubuntu = Ubuntu({
  preload: true,
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});
export const metadata = {
  title: "Blogr Landing Page | Emre Kalfa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overpass.variable} ${ubuntu.variable} antialiased md:subpixel-antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
