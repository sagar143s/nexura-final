"use client";
import { useEffect } from "react";
import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";

import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  return (
    <html lang="en" className="no-mobile no-touch ">
      <head>

      <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

{/* <!-- Google Tag Manager --> */}
<script
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KQJXF9PJ');`
  }}
/>
{/* <!-- End Google Tag Manager --> */}


        <meta
          name="description"
          content="Nexura IT Solutions offers innovative IT services in Dubai. Specializing in software development, networking, cybersecurity, and digital transformation, we provide cutting-edge solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Nexura IT Solutions, IT services Dubai, software development Dubai, networking services UAE, cybersecurity Dubai, cloud solutions, IT consulting, web development Dubai, mobile app development, custom software solutions, business IT solutions, digital transformation services, managed IT services, enterprise IT solutions, IT infrastructure management, data security solutions, IT outsourcing Dubai, cloud migration services, IT support Dubai, DevOps solutions, IT automation, digital marketing services, SEO services, business continuity solutions, disaster recovery services, ERP solutions, CRM integration, blockchain development, artificial intelligence solutions, machine learning services, IT project management, tech support Dubai"
        />
        <meta name="author" content="Nexura IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1e1e1e" />
        
       <meta property="og:title" content="Nexura IT Solutions | Dubai's Leading IT Experts" />
        <meta property="og:description" content="Cutting-edge IT services and solutions in Dubai. Specializing in software development, networking, and digital transformation. Contact us for innovative technology solutions tailored to your business." />
        <meta property="og:url" content="https://nexurait.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/assets/images/nexura-og-image.jpg" />

       <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexura IT Solutions | Dubai's Leading IT Experts" />
        <meta name="twitter:description" content="Innovative IT services in Dubai including software development, networking, cybersecurity, and digital transformation. Tailored solutions for your business." />
        <meta name="twitter:image" content="/public/assets/images/nexura-twitter-card.jpg" />

        <link rel="canonical" href="https://nexurait.com" />





        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="appear-animate body">
      {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQJXF9PJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
        
        
        {children}</body>
    </html>
  );
}
