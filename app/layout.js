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

  // Show newsletter after 1 second if it hasn't been shown before
  useEffect(() => {
    const hasNewsletterShown = localStorage.getItem("newsletterShown");

    if (!hasNewsletterShown) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
        localStorage.setItem("newsletterShown", "true");
      }, 1000); // Show after 1 second

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
      }, 15000); // Close after 15 seconds of inactivity
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
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="appear-animate body">
        {showNewsletter ? (
          <>
            {/* Semi-transparent background overlay */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
                zIndex: 10, // Above all other content
              }}
            />
            {/* Centered newsletter popup */}
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20, // Above the overlay
                padding: '20px',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                width: '300px', // Adjust the width as needed
              }}
            >
              <NewsLetter />
            </div>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
