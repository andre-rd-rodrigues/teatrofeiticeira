import Footer from "@/components/Footer/Footer";
import AppNavbar from "../AppNavbar/AppNavbar";

export default function Layout({ children }) {
  return (
    <>
      <AppNavbar />
      {children}
      <Footer />
    </>
  );
}
