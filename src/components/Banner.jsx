'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../ComponentStyle/Banner.css';
 

const Banner = () => {
  const bannerContents = useRef([]);
  const bannerRef = useRef(null);
  const bannerSections = useRef([]);
  const [isInBanner, setIsInBanner] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = bannerRef.current;
      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();
      const inView = top < window.innerHeight && bottom > 0;
      const scrolledAbove160vh = window.scrollY < window.innerHeight * 2.1;

      setIsInBanner(inView && scrolledAbove160vh);

      bannerSections.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveIndex(index);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    bannerContents.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      bannerContents.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const banners = [
    { video: "/assets/video/1_1.mp4", experience: '100 years of', name: 'phantom' },
    { video: "/assets/video/2_1.mp4", title: 'a century of power and influence' },
    { video: "/assets/video/3_1.mp4", name: 'phantom', title: 'extended' },
  ];

  return (
    <section className="banner-section" ref={bannerRef}>
      {banners.map((banner, index) => (
        <div
          className="banner-container"
          key={index}
          ref={(el) => (bannerSections.current[index] = el)}
        >
          <video
            className="banner-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={banner.video} type="video/mp4" />
          </video>

          <div
            className="banner-content"
            ref={(el) => (bannerContents.current[index] = el)}
          >
            {banner.experience && (
              <p className="banner-experience">{banner.experience}</p>
            )}
            {banner.name && <h2 className="banner-name">{banner.name}</h2>}
            {banner.title && <p className="banner-title">{banner.title}</p>}
            <button className="discover-button">discover now</button>
          </div>
        </div>
      ))}

      {isInBanner && (
        <div className="carcel-postion-layout-banner">
          {['circle', 'circle', 'circle'].map((icon, idx) => (
            <button
              key={idx}
              className={`viedo-btn  ${activeIndex === idx ? 'active-btn' : ''}`}
            >
              <i className={`fas fa-${icon}`}></i>
            </button>
          ))}
        </div>

      )}
    </section>
  );
};

export default Banner;
