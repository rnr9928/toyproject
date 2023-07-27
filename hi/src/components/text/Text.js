import React, { useEffect, useRef, useState } from 'react';
import "../../styled/Text.scss"
import gsap from 'gsap';

const AnimatedComponent = () => {
  const rootRef = useRef(null);
  const changeBtnRef = useRef(null);
  const slideBarRef = useRef(null);
  const barRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);

  const [mode, setMode] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const changeBtn = changeBtnRef.current;
    const slideBar = slideBarRef.current;
    const bar = barRef.current;
    const textOne = textOneRef.current;
    const textTwo = textTwoRef.current;

    const whiteColor = getComputedStyle(root).getPropertyValue('--white');
    const blackColor = getComputedStyle(root).getPropertyValue('--black');

    const slideTL = gsap.timeline();
    const maskTL = gsap.timeline();
    const mainTL = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        gsap.set(textTwo, { opacity: 0 });
        gsap.set(bar, { scaleY: 0.1 });
        gsap.set(textOne.querySelector('h1'), { opacity: 1 });
      },
    });

    gsap.set(textTwo, { opacity: 0 });
    gsap.set(bar, { scaleY: 0.1 });

    slideTL
      .to(bar, 1, {
        y: 225,
        scaleY: 1,
        ease: 'back.out',
      })
      .to(
        slideBar,
        1.5,
        {
          x: 600,
          delay: 0.05,
          ease: 'back.inOut(0.8)',
        },
        '+=0.5'
      )
      .to(
        slideBar,
        1.5,
        {
          x: 0,
          delay: 0.05,
          ease: 'back.inOut(0.8)',
        },
        '+=0.5'
      )
      .to(
        slideBar,
        1.5,
        {
          x: 600,
          delay: 0.05,
          ease: 'back.inOut(0.8)',
        },
        '+=0.5'
      )
      .to(bar, 1, {
        y: 500,
        scaleY: 0.1,
        ease: 'back.in',
      });

    maskTL
      .to(textOne, 1.5, {
        ease: 'back.inOut(0.8)',
        clipPath: 'polygon(0 0, 91% 0, 81% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set(textTwo, { opacity: 1 });
        },
      })
      .to(
        textOne,
        1.5,
        {
          delay: 0.05,
          ease: 'back.inOut(0.8)',
          clipPath: 'polygon(0 0, 18% 0, 8% 100%, 0% 100%)',
          onComplete: () => {
            gsap.set(textOne.querySelector('h1'), { opacity: 0 });
          },
        },
        '+=0.5'
      )
      .to(
        textOne,
        1.5,
        {
          delay: 0.05,
          ease: 'back.inOut(0.8)',
          clipPath: 'polygon(0 0, 91% 0, 81% 100%, 0% 100%)',
        },
        '+=0.5'
      );

    mainTL.add(slideTL).add(maskTL, 1.5);

    // 애니메이션 정리 함수
    return () => {
      mainTL.kill();
    };
  }, []);

  const changeColor = () => {
    setMode((prevMode) => !prevMode);
    const root = rootRef.current;
    const whiteColor = getComputedStyle(root).getPropertyValue('--white');
    const blackColor = getComputedStyle(root).getPropertyValue('--black');

    if (mode) {
      root.style.setProperty('--white', blackColor);
      root.style.setProperty('--black', whiteColor);
    } else {
      root.style.setProperty('--white', whiteColor);
      root.style.setProperty('--black', blackColor);
    }
  };

  return (
    <div className="container" ref={rootRef}>
      <div className="slide-bar" id="slidebar" ref={slideBarRef}>
        <div className="bar" id="bar" ref={barRef}></div>
      </div>
      <div className="text-block" id="textone" ref={textOneRef}>
        <h1>반갑습니다 !</h1>
      </div>
      <div className="text-block" id="texttwo" ref={textTwoRef}>
        <h1>장경국의 <br /> 웹 포토폴리오입니다!</h1>
      </div>
      <button id="changeBtn" onClick={changeColor} ref={changeBtnRef}></button>
    </div>
  );
};

export default AnimatedComponent;
