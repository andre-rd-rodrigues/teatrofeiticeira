import FullScreenEvent from "@/components/FullScreenEvent/FullScreenEvent";
import NextEventsSection from "@/components/NextEvents/NextEventsSection";
import PageContainer from "@/components/PageContainer/PageContainer";

export default function Home() {
  return (
    <>
      {/*     <FullScreenEvent /> */}
      <PageContainer>
        <NextEventsSection />
      </PageContainer>
    </>
  );
}
