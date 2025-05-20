"use client";
import { useEffect, useState, useRef } from "react";
import Script from "next/script";
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
  const [showChat, setShowChat] = useState(false);
  const inactivityTimeoutRef = useRef(null);

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    parallaxScroll();

    const nav = document.querySelector(".main-nav");
    if (nav) {
      nav.classList.add(
        nav.classList.contains("transparent") ? "js-transparent" : "js-no-transparent-white"
      );
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    return () => window.removeEventListener("scroll", headerChangeOnScroll);
  }, [path]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  useEffect(() => {
    const shown = sessionStorage.getItem("newsletterShown");
    if (!shown) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
        sessionStorage.setItem("newsletterShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowNewsletter(false);
      }, 10000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
        <meta name="google-adsense-account" content="ca-pub-8428150181572011" />
      </head>
      <body className="appear-animate body">
        {/* Newsletter Popup */}
        {showNewsletter && (
          <>
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
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                width: "500px",
                maxWidth: "100%",
              }}
            >
              <NewsLetter closePopup={() => setShowNewsletter(false)} />
            </div>
          </>
        )}

        {/* Chat Button */}
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 30 }}>
          <button
            onClick={() => setShowChat(!showChat)}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 10px",
              backgroundColor: "#0084FF",
              color: "white",
              fontSize: "16px",
              borderRadius: "50px",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
              minWidth: "80px",
              height: "50px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 6px 18px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.1)";
            }}
          >
            {showChat ? "Close" : "Chat"}
          </button>
        </div>

        {/* Embedded Chat */}
        {showChat && (
          <div
            style={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              width: "300px",
              height: "400px",
              zIndex: 30,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <iframe
              src="https://tawk.to/chat/6736742d4304e3196ae2b9ea/1icmbbkjc"
              width="100%"
              height="100%"
              style={{ border: "none", borderRadius: "8px" }}
              title="Tawk.to Chat"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
          </div>
        )}

        {children}

        {/* Google Adsense */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8428150181572011"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
