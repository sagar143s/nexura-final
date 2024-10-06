"use client";
import { photoItems } from "@/data/works";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
export default function works1({
  itemsLength = 12,
  parantClass = "col-md-3",
}) {
  return (
    <div className="container relative">
      {/* Photo Grid */}
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
                {({ ref }) => (
                  <div
                    className="post-prev-img rounded-0 mt-30 wow fadeScaleIn"
                    data-wow-duration="1s"
                  >
                    <a href={elm.href} className="lightbox-gallery-2 mfp-image" style={{ textDecoration: "none" }}>
                      <Image
                        ref={ref}
                        src={elm.src}
                        width={500}
                        height={500}
                        alt="photoshoot"
                      />
                       <div className="image-content text-center mt-4">
  <h4 style={{ marginBottom: "0" }}>{elm.title}</h4>
  <p style={{ marginTop: "0", marginBottom: "0" }} className="mt-0">{elm.desc}</p>
</div>
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
