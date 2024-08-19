import { useGSAP } from "@gsap/react";
import gsap from "gsap";
//è un plugin quindi va iniziato
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  //necessita un scrollRef che poi andremo a prendere i suoi children
  const scrollRef = useRef();
  // TODO: Implement the gsap scroll trigger
  useGSAP(() => {
    //come prendere i childrend usando reactRef
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach(box => {
      gsap.to(box, {
        x: 200 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: '100%',
        scale: 1.5,
        // le caratteristiche del scrollTrigger
        scrollTrigger: {
          //l'oggetto cui il trigger si attiva
          trigger: box,
          // animazione si attiva quando il bottom di box == bottom di viewport
          start: 'bottom bottom',
          // animazione finisce quando il top di box hits 20% del viewport
          end: 'top 5%',
          // smooth animation
          scrub: true,  
        },
        ease: "power1.inOut",
      })
    })
    //By using the scope option, you can ensure that the GSAP animations are only applied to the desired elements, improving the performance and efficiency of your animations.
  }, {scope: scrollRef});

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
