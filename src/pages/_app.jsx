import Layout from "@/app/layout";
import { poppins, fontHeading } from "@/app/fonts";
import "../app/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${fontHeading.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
