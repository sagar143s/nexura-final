"use client";
import { photoItems } from "@/data/website";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

export default function Gallery1({
  itemsLength = 12,
  parantClass = "col-md-3",
}) {
  return (
    <div className="container relative">
<p>At SquareCom IT Solutions, we specialize in creating dynamic and user-friendly websites tailored to meet your business needs. Our team is dedicated to delivering high-quality, responsive designs that enhance user experience and drive results. Whether you need a simple landing page or a complex e-commerce platform, we provide customized solutions that help your business thrive in the digital world.</p>

<p>We offer web development across a variety of platforms and technologies, ensuring that your website is built to scale and adapt to future needs. From custom-built sites using React and Next.js, to powerful WordPress solutions, our development expertise covers all major frameworks. Our goal is to ensure your website is fast, secure, and optimized for search engines, giving your business a competitive edge online.</p>

<p>Whether you're looking to develop a website from scratch or redesign an existing one, SquareCom IT Solutions is here to guide you through every step of the process. We integrate the latest technologies, including mobile optimization, e-commerce solutions, and interactive features, to create a seamless digital experience for your customers across all devices.</p>


<h1 style={{textAlign:"center"}} className="mt-5 mb-5 ">Trusted by Leading Clients Worldwide</h1>
<Gallery>
        <div className="row mt-n30">
          {/* Photo Item */}
          {photoItems.slice(0, itemsLength).map((elm, i) => (
            <div key={i} className={parantClass}>
              <Item
                original={elm.src}
                thumbnail={elm.src}
                width={500}
                height={500}
              >
                {({ ref, open }) => (
                  <div
                    className="post-prev-img rounded-0 mt-30 wow fadeScaleIn"
                    data-wow-duration="1s"
                  >
                    <a
                      href={elm.href} // Direct link to the specified URL
                      className="lightbox-gallery-2 mfp-image"
                      target="blank"
                    >
                      <Image
                        ref={ref}
                        src={elm.src}
                        width={500}
                        height={500}
                        alt="Webs Development"
                      />
                    </a>
                  </div>
                )}
              </Item>
            </div>
          ))}
          {/* End Photo Item */}
        </div>
      </Gallery>
      {/* End Photo Grid */}
    </div>
  );
}
