import React, { useRef, useCallback, useState, useEffect } from "react";
import { MappedSlides } from "../slides/MappedSlides";


const SlidesShow = ({ speed = "500", slides, parentCallBack }) => {
  const slideshow = useRef(null);

  const next = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `${speed}ms ease-out all`;
      const sizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener("transitionend", transition);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  }, [speed]);

  const prev = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";
      const sizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${speed}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  const order = slides?.map((data) => data.id);

  return (
    <>
      <MappedSlides
        next={next}
        prev={prev}
        slideshow={slideshow}
        slides={slides}
        parentCallBack={parentCallBack}
        order={order}
      />
    </>
  );
};

export default SlidesShow;
