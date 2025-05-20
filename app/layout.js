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
    const hasNewsletterShown = localStorage.getItem("newsletterShown");
  
    if (!hasNewsletterShown) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
        localStorage.setItem("newsletterShown", "true");
      }, 2000); // Show after 4 seconds
  
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
  <meta name="google-adsense-account" content="ca-pub-8428150181572011" />
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
 <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />

<div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 30 }}>
  <button
    onClick={() => setShowChat(!showChat)}
    style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "12px 10px", // Padding for the button
      backgroundColor: "#0084FF", // Flat blue background
      color: "white", // White text color
      fontSize: "16px", // Adjusted font size for better readability
      borderRadius: "50px", // Rounded corners for a smoother look
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
      minWidth: "80px", // Minimum width for consistent button size
      height: "50px", // Height for a balanced button
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)"; // Slight scaling effect on hover
      e.target.style.backgroundColor = "#0084FF"; // Darker blue on hover
      e.target.style.boxShadow = "0px 6px 18px rgba(0, 0, 0, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)"; // Reset scale when mouse leaves
      e.target.style.backgroundColor = "#0084FF"; // Reset color
      e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.1)";
    }}
  >
    {showChat ? (
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>Close</span> // Close text
    ) : (
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>Chat</span> // Chat text
    )}
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
