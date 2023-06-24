import HeroSection from "@/components/HeroSection/HeroSection";
import Page from "@/components/Page/Page";
import PageContainer from "@/components/PageContainer/PageContainer";
import { getContentByPage, getContentMarkdownByPage } from "@/lib/notion";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import useNotion from "@/hooks/useNotion";
import styles from "@/styles/companhia.module.scss";
import { API_PAGE_NAME } from "@/utils/constants";

function Companhia({ contentMarkdown, content }) {
  const { coverFile } = useNotion(content);

  return (
    <>
      <HeroSection src={coverFile}>
        <div>
          <h1>Teatro Feiticeira do Norte</h1>
        </div>
      </HeroSection>
      <PageContainer className={styles.container}>
        <ReactMarkdown className="markdown">{contentMarkdown}</ReactMarkdown>
      </PageContainer>
    </>
  );
}

export default Companhia;

export async function getServerSideProps() {
  const { markdown } = await getContentMarkdownByPage(API_PAGE_NAME.COMPANHIA);
  const content = await getContentByPage(API_PAGE_NAME.COMPANHIA);

  return {
    props: {
      contentMarkdown: markdown.parent,
      content
    }
  };
}
