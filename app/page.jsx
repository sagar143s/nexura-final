import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react"
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItemsDark } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";
export const metadata = {
  title: "Nexura IT Solutions | Dubai's Leading IT Experts",
  description: "Nexura IT Solutions offers innovative IT services in Dubai. We specialize in software development, networking, cybersecurity, and digital transformation. Partner with us for cutting-edge technology solutions tailored to your business.",
  keywords: "Nexura IT Solutions, Dubai IT company, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, digital transformation UAE, cloud services Dubai, IT consulting Dubai, web development Dubai, mobile app development Dubai, IT support Dubai, managed IT services, technology solutions Dubai, custom software solutions, business IT solutions"
};


export default function Home1MainDemoMultiPageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-90 light-content parallax-5 parallax-mousemove-scene scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/banner.jpg)",
                }}
                id="home"
              >
                <Hero1 />
              </ParallaxContainer>
              <Home1 dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
