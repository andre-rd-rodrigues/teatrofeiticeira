import HomepageEvent from "@/components/HomepageEvent/HomepageEvent";
import NextEventsSection from "@/components/NextEvents/NextEventsSection";
import PageContainer from "@/components/PageContainer/PageContainer";

export default function Home() {
  return (
    <>
      <HomepageEvent />
      <PageContainer>
        <NextEventsSection />
      </PageContainer>
    </>
  );
}
