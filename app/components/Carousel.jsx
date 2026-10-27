"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slideImages } from "../data/slideData";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.3" y="3.5" width="11.4" height="10" rx="1.4" />
      <path d="M5 2v3M11 2v3M2.5 6.3h11" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M1.5 8s2.2-4 6.5-4 6.5 4 6.5 4-2.2 4-6.5 4S1.5 8 1.5 8Z" />
      <circle cx="8" cy="8" r="1.7" />
    </svg>
  );
}

export default function Carousel() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="blog-section" aria-labelledby="blog-title">
      <div className="blog-heading">
        <h1 id="blog-title">Blog</h1>
        <p>Fique ligado e atualizado pelas ultimas notícias do nosso blog.</p>
        <span className="heading-rule" aria-hidden="true" />
      </div>

      <div className="carousel-shell">
        {isMounted && (
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            loop
            speed={650}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              600: { slidesPerView: 2, spaceBetween: 24 },
              900: { slidesPerView: 3, spaceBetween: 26 },
            }}
            className="blog-swiper"
          >
            {slideImages.map((article) => (
              <SwiperSlide key={article.id}>
                <article className="blog-card">
                  <div className="blog-card-image-wrap">
                    <Image
                      className="blog-card-image"
                      src={article.src}
                      alt={article.alt}
                      fill
                      sizes="(max-width: 600px) 78vw, (max-width: 900px) 42vw, 24vw"
                      loading={article.id <= 3 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-category">{article.category}</span>
                    <h2>{article.title}</h2>
                    <div className="blog-meta">
                      <span><CalendarIcon />{article.date}</span>
                      <i aria-hidden="true" />
                      <span><EyeIcon />{article.views}</span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}