"use client";
import { photoItems } from "@/data/smm";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

export default function Gallery1({
  itemsLength = 12,
  parantClass = "col-md-3",
}) {
  return (
    <div className="container relative">
<p>
    At Nexura IT Solutions, we specialize in crafting dynamic and engaging digital marketing strategies tailored to elevate your brand's online presence. Our dedicated team focuses on delivering high-quality, user-friendly solutions that enhance customer engagement and drive measurable results. Whether you need targeted social media campaigns, compelling content creation, or comprehensive SEO strategies, we provide customized marketing solutions that help your business thrive in the digital landscape.
</p>

<p>
    We offer digital marketing services across various platforms and technologies, ensuring your brand effectively reaches its target audience. From strategic social media management to robust analytics and reporting, our expertise spans all major marketing channels. Our goal is to ensure your campaigns are impactful, data-driven, and optimized for success, giving your business a competitive edge in the crowded online marketplace.
</p>

<p>
    Whether you’re looking to launch a new marketing initiative or revamp your existing strategies, Nexura IT Solutions is here to guide you through every step of the process. We integrate the latest trends and technologies, including influencer partnerships, mobile optimization, and engaging multimedia content, to create a seamless digital experience for your audience across all platforms.
</p>

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
