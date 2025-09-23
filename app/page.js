import Image from "next/image";
import Hero from "./Components/Home/components/Hero";
import IntroIIC from "./Components/Home/components/IntroIIC";
import Navbar from "./Components/Home/components/Navbar";
import Events from "./Components/Home/components/Events";
import Resources from "./Components/Home/components/Resources";
import Footer from "./Components/Home/components/Footer";
import JoinUs from "./Components/Home/components/JoinUs";
import FAQComponent from "./Components/Home/components/Faqs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="min-h-screen w-full px-4">
        <Image
          src="/images/incub.png"
          alt="Description of image"
          layout="responsive"
          width={700}
          height={400}
        />
      </div>
      <IntroIIC />
      <Events />
      <Resources />
      <FAQComponent />
      <JoinUs />
      <Footer />
    </>
  );
}
