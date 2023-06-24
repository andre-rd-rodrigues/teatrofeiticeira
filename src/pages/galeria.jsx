import Page from "@/components/Page/Page";
import { getGallery } from "@/lib/notion";
import styles from "@/styles/galeria.module.scss";
import { randomNumber } from "@/utils/tools";
import { useMemo, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Galeria({ content }) {
  const [index, setIndex] = useState(-1);

  const imagesAndCaptions = useMemo(
    () =>
      content.flatMap((block, index) => {
        const caption = block?.image.caption[0].plain_text;
        const src = block?.image.external.url;

        return {
          src,
          original: src,
          caption,
          width: 700,
          height: 500,
          index,
          customOverlay: (
            <div className={styles.caption}>
              <div>{caption}</div>
            </div>
          )
        };
      }),
    [content]
  );

  return (
    <Page title="Galeria" className={styles.container}>
      <Gallery
        images={imagesAndCaptions}
        onClick={(index) => setIndex(index)}
        enableImageSelection={false}
      />
      <Lightbox
        slides={imagesAndCaptions}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </Page>
  );
}

export default Galeria;

export async function getServerSideProps() {
  const content = await getGallery();

  return {
    props: {
      content
    }
  };
}
