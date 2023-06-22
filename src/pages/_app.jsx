import Layout from "@/components/Layout/Layout";
import { poppins, fontHeading } from "@/fonts";
import "@/styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${fontHeading.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
