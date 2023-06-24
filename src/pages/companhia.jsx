import HeroSection from "@/components/HeroSection/HeroSection";
import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "@/styles/companhia.module.scss";

function Companhia() {
  return (
    <>
      <HeroSection src="/images/companhia.jpeg">
        <div>
          <h1>Teatro Feiticeira do Norte</h1>
        </div>
      </HeroSection>
      <PageContainer className={styles.container}>
        <h2>About Us</h2>

        <p>
          Welcome to <strong>Teatro Feiticeira do Norte</strong>, your premier
          destination for captivating theatrical experiences in{" "}
          <a href="#">City/Town</a>. As a local theater group, we are dedicated
          to bringing the magic of live performances to our vibrant community.
          From thought-provoking dramas to side-splitting comedies, we strive to
          entertain, inspire, and connect with our audiences.
        </p>

        <h2>Who We Are</h2>

        <p>
          At <strong>Teatro Feiticeira do Norte</strong>, we are a passionate
          ensemble of talented actors, directors, writers, and behind-the-scenes
          professionals who share a deep love for the art of theater. With years
          of experience and a commitment to excellence, we work collaboratively
          to create unforgettable productions that leave a lasting impact on
          both performers and spectators.
        </p>

        <h2>Our Vision</h2>

        <p>
          Our vision is to enrich the cultural landscape of{" "}
          <a href="#">City/Town</a> by producing high-quality theater that
          reflects the diversity and creativity of our community. We believe in
          the power of storytelling to foster empathy, ignite imagination, and
          create meaningful connections. Through our performances, we aim to
          inspire, challenge, and entertain audiences of all ages and
          backgrounds.
        </p>

        <h2>What We Offer</h2>

        <p>
          At <strong>Teatro Feiticeira do Norte</strong>, we offer a wide range
          of theatrical experiences for theater enthusiasts and newcomers alike.
          Our annual season showcases a diverse selection of plays and musicals,
          carefully curated to engage, entertain, and provoke thought. From
          classic works to contemporary masterpieces, each production is
          meticulously crafted to captivate audiences and transport them into a
          world of wonder.
        </p>

        <h2>Community Involvement</h2>

        <p>
          We are proud to be an integral part of the <a href="#">City/Town</a>{" "}
          community, and we actively seek opportunities to contribute and give
          back. We collaborate with local schools, organizations, and charitable
          initiatives to promote arts education and provide access to the
          transformative power of theater. We also offer workshops, classes, and
          outreach programs to nurture emerging talent and encourage
          participation in the performing arts.
        </p>

        <h2>Get Involved</h2>

        <p>
          Join us on this exhilarating journey by becoming a part of{" "}
          <strong>Teatro Feiticeira do Norte</strong>. Whether you have a
          passion for acting, directing, stage design, or simply enjoy being
          part of a vibrant artistic community, we welcome individuals of all
          backgrounds and skill levels. Discover the joy of theater, forge
          lifelong friendships, and make memories that will last a lifetime.
        </p>

        <h2>Support Us</h2>

        <p>
          As a nonprofit theater group, we rely on the generous support of
          individuals, businesses, and organizations to bring our productions to
          life. If you believe in the transformative power of theater and would
          like to contribute to our mission, we invite you to consider making a
          donation or becoming a sponsor. Your support allows us to continue
          creating exceptional theatrical experiences and fostering a thriving
          arts community in <a href="#">City/Town</a>.
        </p>

        <h2>Contact Us</h2>

        <p>
          Thank you for your interest in{" "}
          <strong>Teatro Feiticeira do Norte</strong>. If you have any
          questions, feedback, or would like to get involved, please don&apos;t
          hesitate to reach out to us. You can contact us through our website or
          by phone at <a href="tel:phone_number">[phone number]</a>. We look
          forward to hearing from you and welcoming you into our theatrical
          family.
        </p>

        <p>
          Experience the magic of live theater with{" "}
          <strong>Teatro Feiticeira do Norte</strong> – where stories come
          alive, emotions are shared, and memories are made.
        </p>
      </PageContainer>
    </>
  );
}

export default Companhia;
