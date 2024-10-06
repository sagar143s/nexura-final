import AnimatedText from "@/components/common/AnimatedText";
import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItemsDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";

const onePage = false;
const dark = true;

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

export const metadata = {
  title: "Nexura IT Solutions | Dubai's Leading IT Experts",
  description: "Nexura IT Solutions offers innovative IT services in Dubai. We specialize in software development, networking, cybersecurity, and digital transformation. Partner with us for cutting-edge technology solutions tailored to your business.",
  keywords: "Nexura IT Solutions, Dubai IT company, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, digital transformation UAE, cloud services Dubai, IT consulting Dubai, web development Dubai, mobile app development Dubai, IT support Dubai, managed IT services, technology solutions Dubai, custom software solutions, business IT solutions"
};


export default function TermsAndConditionsPageDark() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section parallax-5 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-20 pt-sm-40">
                  <h2 className="hs-title-2 font-alt uppercase mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text="Terms and Conditions" />
                    </span>
                   <span
                      className="section-title-image wow fadeScaleIn"
                      data-wow-delay="0.3s"
                    >
                      <Image
                        src="/assets/images/demo-brutalist/shape-2.svg"
                        alt=""
                        width={35}
                        height={35}
                      />
                    </span>
                  </h2>
                </div>
              </ParallaxContainer>

              <div className="container" style={{paddingBottom:"3rem"}}>
                <section className="terms-content">
                  <h2 className="font-alt mt-40 light-content">Introduction</h2>
                  <p className="light-content"> 
                    Welcome to Nexura IT Solution. By accessing or using our
                    services, you agree to comply with and be bound by the
                    following terms and conditions. If you disagree with any
                    part of these terms, you may not use our website or
                    services.
                  </p>

                  <h2 className="font-alt mt-40 light-content">General Conditions</h2>
                  <p className="light-content"> 
                    Nexura IT Solution reserves the right to refuse service to
                    anyone for any reason at any time. You understand that your
                    content (excluding credit card information) may be
                    transferred unencrypted and involve transmissions over
                    various networks.
                  </p>

                  <h2 className="font-alt mt-40 light-content">Intellectual Property</h2>
                  <p className="light-content"> 
                                        The content, layout, design, data, databases, and graphics
                    on this website are protected by intellectual property laws.
                    Reproduction, distribution, or transmission of the content
                    on this site without prior written consent is prohibited.
                  </p>

                  <h2 className="font-alt mt-40 light-content">Limitations of Liability</h2>
                  <p className="light-content"> 
                    Nexura IT Solution will not be liable for any indirect,
                    special, or consequential damages arising out of or in
                    connection with the use of our services.
                  </p>

                  <h2 className="font-alt mt-40 light-content">Governing Law</h2>
                  <p className="light-content"> 
                    These terms and conditions are governed by and construed in
                    accordance with the laws of the jurisdiction in which
                    Nexura IT Solution operates.
                  </p>

                  <h2 className="font-alt mt-40 light-content">Changes to Terms</h2>
                  <p className="light-content"> 
                    Nexura IT Solution reserves the right to update the terms
                    and conditions at any time. We will notify users of any
                    changes by posting the new terms on our website.
                  </p>

                  <h2 className="font-alt mt-40 light-content">Contact Information</h2>
                  <p className="light-content"> 
                    If you have any questions about these Terms and Conditions,
                    please contact us at contact@nexura.com.
                  </p>
                </section>
              </div>
            </main>
            <Footer1 dark />
          </div>
        </div>
      </div>
    </>
  );
}
