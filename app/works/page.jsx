import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";

import React from "react";
import { menuItemsDark } from "@/data/menu";
import Works from "@/components/works/works1";

export const metadata = {
  title: "Nexura IT Solutions | Dubai's Leading IT Experts",
  description: "Nexura IT Solutions offers innovative IT services in Dubai. We specialize in software development, networking, cybersecurity, and digital transformation. Partner with us for cutting-edge technology solutions tailored to your business.",
  keywords: "Nexura IT Solutions, Dubai IT company, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, digital transformation UAE, cloud services Dubai, IT consulting Dubai, web development Dubai, mobile app development Dubai, IT support Dubai, managed IT services, technology solutions Dubai, custom software solutions, business IT solutions"
};
export default function MainAboutPage1Dark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section pb-100 pb-sm-60 bg-dark-1 bg-dark-alpha-70 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/studio.png)",
                  }}
                >
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark"></div>{" "}
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            {/* <h2
                              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                              data-wow-duration="1.2s"
                            >
                              Gallery 2 Columns
                            </h2> */}
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                <AnimatedText text="Our Projects: Shaping the Future" />
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </ParallaxContainer>
              </section>
              <>
                <>
                  {/* Section */}
                  <section className="page-section light-content pt-0">
                    <Works itemsLength={8} parantClass="col-md-4" />
                  </section>
                  {/* End Section */}
                  {/* Divider */}
                  <hr className="mt-0 mb-0" />
                </>

                {/* End Divider */}
                {/* Call Action Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Decorative Waves */}
                    <div className="position-relative">
                      <div
                        className="decoration-21 d-none d-lg-block"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.5"
                      >
                        <Image
                          src="/assets/images/decoration-3.svg"
                          className="svg-shape"
                          width={148}
                          height={148}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* End Decorative Waves */}
                    <div className="row wow fadeInUp">
                      <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                        <p className="section-descr mb-0">
                          Looking for exclusive digital services? Contact us,
                          and we'll start productive cooperation.
                        </p>
                      </div>
                      <div className="col-md-4 col-lg-3 text-md-end">
                        <div className="local-scroll">
                          <Link
                            href={`/contactus`}
                            className="btn btn-mod  btn-w btn-large btn-round btn-hover-anim"
                          >
                            <span>Contact us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
