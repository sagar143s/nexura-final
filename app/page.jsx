import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "SquareCom IT Solutions | Dubai's Leading IT Experts",
  description:
    "SquareCom IT Solutions offers innovative IT services in Dubai. We specialize in software development, networking, cybersecurity, and digital transformation. Partner with us for cutting-edge technology solutions tailored to your business.",
  keywords:
    "SquareCom IT Solutions, Dubai IT company, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, digital transformation UAE, cloud services Dubai, IT consulting Dubai, web development Dubai, mobile app development Dubai, IT support Dubai, managed IT services, technology solutions Dubai, custom software solutions, business IT solutions",
};

export default function Home1MainDemoMultiPageDark() {
  return (
    <>
      {/* Google Tag Manager */}
      <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W594CQK8');`}
      </script>
      {/* End Google Tag Manager */}

      {/* Trustpilot Script */}
      <script>
        {`(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', 'w59XOlGTvbTZs1im');`}
      </script>

      <div className="dark-mode">
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-W594CQK8"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}

            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
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
          </div>
        </div>
      </div>
    </>
  );
}
