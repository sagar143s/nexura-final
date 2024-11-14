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
import Head from "next/head";
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

  // Show newsletter after 2 seconds if it hasn't been shown in the session
  useEffect(() => {
    const hasNewsletterShown = sessionStorage.getItem("newsletterShown");

    if (!hasNewsletterShown) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
        sessionStorage.setItem("newsletterShown", "true"); // Set session flag
      }, 4000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle inactivity timeout to close the newsletter after 10 seconds of no mouse movement
  useEffect(() => {
    const handleMouseMove = () => {
      // Clear existing timeout
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }

      // Reset inactivity timer for newsletter popup
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowNewsletter(false);
      }, 10000); // Close after 10 seconds of no mouse movement
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listeners on unmount
    return () => {
      clearTimeout(inactivityTimeoutRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Clear the newsletter flag when the user closes or reloads the page
  useEffect(() => {
    const handleUnload = () => {
      sessionStorage.removeItem("newsletterShown");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />


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
      <body className="appear-animate body">
        {showNewsletter && (
          <>
            {/* Semi-transparent background overlay */}
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
                zIndex: 10, // Above all other content
              }}
            />
            {/* Centered newsletter popup */}
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20, // Above the overlay
                padding: "20px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                maxWidth: "100%", // Ensures responsiveness on small screens
                width: "500px", // Default width
              }}
            >
              <NewsLetter closePopup={() => setShowNewsletter(false)} />
            </div>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
