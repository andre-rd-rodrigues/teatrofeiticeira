import Footer from "@/components/Footer/Footer";
import "./globals.scss";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
