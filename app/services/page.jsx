import AnimatedText from "@/components/common/AnimatedText";
import Services from "@/components/homes/home-3/Services";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItemsDark } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";


const onePage = false;
const dark = true;
import { brutalistMultipage, brutalistMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Brutalist Services Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function BrutalistServicesPageDark() {
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
                  <h1 className="hs-title-2 font-alt uppercase mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text="OUR SERVICES" />
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
                  </h1>
                </div>
              </ParallaxContainer>
              <section
                className={`page-section  scrollSpysection ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="services"
              >
                <div className="container position-relative pt-40 pt-md-30 pt-sm-50">
                  <div
                    className="row mb-80 mb-md-50 wow fadeInUp"
                    data-wow-offset="0"
                  >
                    <div className="col-lg-5 mb-md-40">
                      <p className="section-descr-large mb-0">
                      Innovative IT Services for{" "}
                        <span className="mark-decoration-2">
                        Web, App Development, SEO, and Digital Marketing
                        </span>{" "}
                        to Accelerate Your Business Growth and Success
                      </p>


                    
                    </div>

                    <div className="col-lg-7">
                      <p className="mb-0">
                      At Nexura IT Solutions, we specialize in delivering a full spectrum of IT services designed to elevate your business in today's competitive digital environment. From dynamic web development to custom Android and iOS apps, digital marketing strategies, SEO optimization, and more, our team is equipped to handle every aspect of your technology needs. Whether you're building from the ground up or scaling your digital presence, we are committed to helping you achieve sustainable growth and innovation. Trust Nexura IT Solutions to guide your business through the future of technology.
                      </p>
                    </div>
                  </div>
                  <Services />
                </div>
              </section>
            </main>
            
              <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
