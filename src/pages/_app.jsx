import Layout from "@/app/layout";
import { fontContent, fontHeading } from "@/app/fonts";
import "../app/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${fontContent.variable} ${fontHeading.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
