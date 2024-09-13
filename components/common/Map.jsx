"use client";

import { useState } from "react";

export default function Map() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <a href="#" className={`map-section ${mapOpen ? "js-active" : ""}`}>
        <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
          <div className="mt-icon">
            <i className="mi-location"></i>
          </div>
          <div className="mt-text">
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-open">
              Open the map <i className="mt-open-icon"></i>
            </div>
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-close">
              Close the map <i className="mt-close-icon"></i>
            </div>
          </div>
        </div>
      </a>


      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3910947248605!2d55.328561799999996!3d25.257426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d73394679f7%3A0x603231a862b0920e!2sNexura%20IT%20Technologies!5e0!3m2!1sen!2sae!4v1726241036057!5m2!1sen!2sae"
        width={600}
        height={450}
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </>
  );
}
