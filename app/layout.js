"use client";

import { useEffect, useState, useRef } from "react";
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
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NewsLetter from "@/components/newsletterForms/Form1";

export default function RootLayout({ children }) {
  const path = usePathname();
  const [showNewsletter, setShowNewsletter] = useState(false);
  const inactivityTimeoutRef = useRef(null);

  // Initialize WOW.js and handle header changes on scroll
  useEffect(() => {
    init_wow();
    parallaxMouseMovement();

    const mainNav = document.querySelector(".main-nav");
    if (mainNav) {
      if (mainNav.classList.contains("transparent")) {
        mainNav.classList.add("js-transparent");
      } else if (!mainNav.classList.contains("dark")) {
        mainNav.classList.add("js-no-transparent-white");
      }
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();

    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);

  // Dynamically import Bootstrap JS on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module loaded
      });
    }
  }, []);

  // Show newsletter after 2 seconds if it hasn't been shown before
  useEffect(() => {
    const hasNewsletterShown = localStorage.getItem("newsletterShown");

    if (!hasNewsletterShown) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
        localStorage.setItem("newsletterShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle inactivity timeout to close the newsletter after 15 seconds
  useEffect(() => {
    const handleUserActivity = () => {
      // Clear existing timeout
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }

      // Reset inactivity timer
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowNewsletter(false);
      }, 15000); // 15 seconds
    };

    // Add event listeners for user activity
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("scroll", handleUserActivity);
    window.addEventListener("click", handleUserActivity);

    // Clean up event listeners on unmount
    return () => {
      clearTimeout(inactivityTimeoutRef.current);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("scroll", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
    };
  }, []);

  return (
    <html lang="en" className="no-mobile no-touch">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KQJXF9PJ');
            `,
          }}
        />
        {/* End Google Tag Manager */}

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
      </Head>
      <body className="appear-animate body">
        {/* Show background overlay and centered newsletter */}
        {showNewsletter && (
          <>
            <div className="newsletter-overlay" />
            <div className="center-newsletter">
              <NewsLetter />
            </div>
          </>
        )}
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQJXF9PJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
