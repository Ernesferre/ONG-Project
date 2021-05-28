import React, { useRef, useCallback, useState } from "react";
import { MappedSlides } from "../slides/MappedSlides";
import { ReactComponent as LeftArrow } from "../../../assets/arrowLeft.svg";
import { ReactComponent as RightArrow } from "../../../assets/arrowRight.svg";


const SlidesShow = ({ speed = "500" }) => {
  const slideshow = useRef(null);
  const fakeData = [
    { title: "title1", img: "", order: 1 },
    { title: "title2", img: "", order: 2 },
    { title: "title3", img: "", order: 3 },
    { title: "title4", img: "", order: 4 },
    { title: "title5", img: "", order: 5 },
    { title: "title6", img: "", order: 6 },
    { title: "title7", img: "", order: 7 },
    { title: "title8", img: "", order: 8 },
    { title: "title9", img: "", order: 9 },
    { title: "title10", img: "", order: 10 },
  ];

  const [saveData, setSaveData] = useState(fakeData);

  console.log({saveData});
  

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

  const order = saveData.map((data) => data.order);

  return (
    <>
      <MappedSlides
        next={next}
        prev={prev}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        slideshow={slideshow}
        saveData={saveData}
        parentCallBack={setSaveData}
        order={order}
      />
    </>
  );
};

export default SlidesShow;
