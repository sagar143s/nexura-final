import Map from "@/components/common/Map";

import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Contact from "@/components/homes/home-10/Contact";
import Head from "next/head"; // Import Head component

import { menuItemsDark } from "@/data/menu";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = true;
const onePage = false;
export const metadata = {
  title: "SquareCom IT Solutions | Dubai's Leading IT Experts",
  description: "SquareCom IT Solutions offers innovative IT services in Dubai. We specialize in software development, networking, cybersecurity, and digital transformation. Partner with us for cutting-edge technology solutions tailored to your business.",
  keywords: "SquareCom IT Solutions, Dubai IT company, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, digital transformation UAE, cloud services Dubai, IT consulting Dubai, web development Dubai, mobile app development Dubai, IT support Dubai, managed IT services, technology solutions Dubai, custom software solutions, business IT solutions"
};
export default function StrongContactPageDark() {
  return (
    <>
     <Head>
        {/* Tawk.to Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6736742d4304e3196ae2b9ea/1icmbbkjc';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
      </Head>
      <div className="theme-strong">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header1Multipage links={menuItemsDark} />
            </nav>
            <main className="main">
              <ParallaxContainer
                className="page-section bg-dark-alpha-30 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-strong/contact.png)",
                }}
                id="home"
              >
                <div className="container position-relative pt-sm-30">
                  {/* Home Section Content */}
                  <div className="home-content text-center">
                    <h1 className="hs-title-7 mb-0">
                      <span
                        className="wow charsAnimIn-2"
                        data-splitting="chars"
                      >
                        Contact <span className="font-alt">Us</span>
                      </span>
                    </h1>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </ParallaxContainer>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
                id="contact"
              >
                <Contact />
              </section>
              <div className="google-map light-content">
                <Map />
              </div>
            </main>

            <footer className="footer-1 bg-dark-2 light-content">
            <Footer1 dark />
            </footer>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
