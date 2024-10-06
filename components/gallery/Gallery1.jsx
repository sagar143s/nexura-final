"use client";
import { photoItems } from "@/data/gallery";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
export default function Gallery1({
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
                {({ ref, open }) => (
                  <div
                    className="post-prev-img rounded-0 mt-30 wow fadeScaleIn"
                    data-wow-duration="1s"
                  >
                    <a className="lightbox-gallery-2 mfp-image">
                      <Image
                        ref={ref}
                        onClick={open}
                        src={elm.src}
                        width={500}
                        height={500}
                        alt="photoshoot"
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
