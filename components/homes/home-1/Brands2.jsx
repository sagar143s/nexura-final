"use client"
import React from "react";
import Image from "next/image";

export default function Brands2() {
  const logoContainerStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    margin: "0 15px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",  // Uniform width
    height: "80px",  // Uniform height
  };

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-12 text-center">
        <h1 className="section-title-tiny mb-30 size-13" >Our Valued Partners</h1>

          {/* Logo marquee container */}
          <div style={{ overflow: "hidden", width: "100%", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                animation: "scroll 20s linear infinite",
                whiteSpace: "nowrap",
              }}
            >
              {/* Duplicate Logo items for continuous scrolling */}
              {[...Array(2)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <a href="https://taseesrealestate.ae" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/ts.png"
                        width="150"
                        height="80"
                        alt="Tasees"
                      />
                    </div>
                  </a>
                  <a href="https://bullandbearz.com" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/bb.png"
                        width="150"
                        height="80"
                        alt="Bull and Bearz"
                      />
                    </div>
                  </a>
                  <a href="https://masca.ae" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/masca.jpg"
                        width="150"
                        height="80"
                        alt="Masca"
                      />
                    </div>
                  </a>
                  <a href="https://tsperfumes.com" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/ts.png"
                        width="150"
                        height="80"
                        alt="Masca"
                      />
                    </div>
                  </a>
                  <a href="https://wpmoda.com" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/wp.png"
                        width="150"
                        height="80"
                        alt="WP Moda"
                      />
                    </div>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/alrowaad.png"
                        width="150"
                        height="80"
                        alt="Al Rowaad"
                      />
                    </div>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/shopcin.png"
                        width="150"
                        height="80"
                        alt="ShopCin"
                      />
                    </div>
                  </a>
                  <a href="https://bossini.ae" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/bossini.svg"
                        width="150"
                        height="80"
                        alt="Bossini"
                      />
                    </div>
                  </a>
                  <a href="https://joyrefinery.ae" target="_blank" rel="noopener noreferrer">
                    <div style={logoContainerStyle}>
                      <Image
                        src="/assets/images/clients-logos/logo-grid/ff.png"
                        width="150"
                        height="80"
                        alt="Joy Refinery"
                      />
                    </div>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-marquee {
          display: flex;
          animation: scroll 30s linear infinite; /* Smooth animation speed */
        }
      `}</style>
    </div>
  );
}
