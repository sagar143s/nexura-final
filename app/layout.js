"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import NewsLetter from "@/components/newsletterForms/Form1";
import {
  parallaxMouseMovement,
  parallaxScroll,
} from "@/utlis/parallax";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";

import "swiper/css";
import "swiper/css/effect-fade";
import "jarallax/dist/jarallax.min.css";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import "tippy.js/dist/tippy.css";
import "../public/assets/css/styles.css";

export default function RootLayout({ children }) {
  const path = usePathname();
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showChat, setShowChat] = useState(false); // Chat visibility state
  const inactivityTimeoutRef = useRef(null);

  // Initialize animations and handle header changes on scroll
  useEffect(() => {
    init_wow();
    parallaxMouseMovement();

    const mainNav = document.querySelector(".main-nav");
    if (mainNav) {
      mainNav.classList.add(mainNav.classList.contains("transparent") ? "js-transparent" : "js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();

    return () => window.removeEventListener("scroll", headerChangeOnScroll);
  }, [path]);

  // Dynamically import Bootstrap JS on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  // Show newsletter after a delay if it hasn't been shown this session
  useEffect(() => {
    const hasNewsletterShown = sessionStorage.getItem("newsletterShown");

    if (!hasNewsletterShown) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
        sessionStorage.setItem("newsletterShown", "true");
      }, 4000); // Show after 4 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle inactivity to close newsletter after 10 seconds of no mouse movement
  useEffect(() => {
    const handleMouseMove = () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowNewsletter(false);
      }, 10000); // Close after 10 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Reset newsletter session flag when the page is closed or reloaded
  useEffect(() => {
    const handleUnload = () => sessionStorage.removeItem("newsletterShown");
    window.addEventListener("beforeunload", handleUnload);

    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="appear-animate body">
        {showNewsletter && (
          <>
            {/* Overlay */}
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                zIndex: 10,
              }}
            />
            {/* Centered Newsletter Popup */}
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
                padding: "20px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                maxWidth: "100%",
                width: "500px",
              }}
            >
              <NewsLetter closePopup={() => setShowNewsletter(false)} />
            </div>
          </>
        )}

        {/* Button to toggle Tawk.to chat */}
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 30 }}>
          <button
            onClick={() => setShowChat(!showChat)}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#0084ff",
              color: "white",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {showChat ? "Close Chat" : "Open Chat"}
          </button>
        </div>

        {/* Embedded Chat Window */}
        {showChat && (
          <div
            style={{
              position: "fixed",
              bottom: "80px", // Above the toggle button
              right: "20px",
              width: "300px", // Adjust width as needed
              height: "400px", // Adjust height as needed
              zIndex: 30,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <iframe
              src="https://tawk.to/chat/6736742d4304e3196ae2b9ea/1icmbbkjc"
              width="100%"
              height="100%"
              style={{ border: "none", borderRadius: "8px" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              title="Tawk.to Chat"
            ></iframe>
          </div>
        )}

        {children}
      </body>
    </html>
  );
}
