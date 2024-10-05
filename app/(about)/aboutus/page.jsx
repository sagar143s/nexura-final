import AnimatedText from "@/components/common/AnimatedText";
import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItemsDark } from "@/data/menu";
import Features from "@/components/homes/home-10/Features";
import Banner from "@/components/homes/home-3/Banner";
import Team from "@/components/homes/home-1/Team";
import Link from "next/link";
import { qualities } from "@/data/features";
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
  title: "Nexura IT Solutions | Dubai's Leading IT Experts",
  description: "Nexura IT Solutions offers innovative IT services in Dubai. We specialize in software development, networking, cybersecurity, and digital transformation. Partner with us for cutting-edge technology solutions tailored to your business.",
  keywords: "Nexura IT Solutions, Dubai IT company, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, digital transformation UAE, cloud services Dubai, IT consulting Dubai, web development Dubai, mobile app development Dubai, IT support Dubai, managed IT services, technology solutions Dubai, custom software solutions, business IT solutions"
};
export default function BrutalistAboutPageDark() {
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
                      <AnimatedText text="About Us" />
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
                className={`page-section  scrollSpysection pt-0 pb-0 ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="about"
              >
                <div className="container position-relative">
                  <div className="row page-section relative z-index-1">
                    <div className="col-sm-9">
                      <p
                        className="section-descr-large mb-60 mb-sm-40 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                      Nexura IT Solutions, based in Dubai and led by CEO Sultan Mohammad Hassan Alshehhi, is a full-service tech company specializing in development, networking, and support. We deliver innovative digital solutions that empower businesses with impactful technology and experiences.
                      </p>
                      <ul
                        className="section-features font-alt clearlist uppercase wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        {qualities.map((quality, index) => (
                          <li key={index}>{quality}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Image */}
                  <div
                    className="row section-image-1-wrap"
                    data-rellax-y=""
                    data-rellax-speed={1}
                    data-rellax-percentage="0.3"
                  >
                    <div className="col-5 offset-7 col-sm-4 offset-sm-8">
                      <Image
                        src="/assets/images/demo-brutalist/dubai.png"
                        width={689}
                        height={855}
                        className="section-image-1"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  {/* End Image */}
                </div>
              </section>
              <section
                className="page-section bg-dark-1 bg-dark-alpha-70 light-content bg-scroll pb-0 z-index-1"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-2.)",
                }}
              >
                <Banner />
              </section>

              <section
                className={`page-section overflow-hidden  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <Features />
              </section>

              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href={`/main-pages-about-1${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}

              <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section>







            </main>
              <Footer1 dark />
          </div>
        </div>
      </div>
    </>
  );
}
