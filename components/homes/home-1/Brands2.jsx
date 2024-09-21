import React from "react";
import Image from "next/image";

export default function Brands2() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="section-title-tiny mb-30">
          Our Esteemed Clients
          </h1>

          <div className="logo-grid">
            <a href="https://taseesrealestate.ae" target="_blank" rel="noopener noreferrer">
              <Image
                className="logo-grid-img"
                src="/assets/images/clients-logos/logo-grid/tasees.png"
                width="150"
                height="43"
                alt="Tasees"
              />
            </a>
            <a href="https://bullandbearz.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="logo-grid-img"
                src="/assets/images/clients-logos/logo-grid/bullandbearz.png"
                width="150"
                height="43"
                alt="Logo 2"
              />
            </a>
            <a href="https://masca.ae" target="_blank" rel="noopener noreferrer">
              <Image
                className="logo-grid-img"
                src="/assets/images/clients-logos/logo-grid/masca.jpg"
                width="150"
                height="43"
                alt="Logo 3"
              />
            </a>
            <a href="https://wpmoda.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="logo-grid-img"
                src="/assets/images/clients-logos/logo-grid/wpmoda.png"
                width="100"
                height="43"
                alt="Logo 4"
              />
            </a>
            {/* <a href="https://www.example5.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="logo-grid-img"
                src="/assets/images/clients-logos/logo-grid/peak.jpg"
                width="100"
                height="33"
                alt="Logo 5"
              /> */}
            {/* </a>  */}
          </div>
        </div>
      </div>
    </div>
  );
}
