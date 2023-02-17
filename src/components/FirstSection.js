import { useEffect } from "react";
import gsap from "gsap";

export default function FirstSection() {
  useEffect(() => {
    document.querySelector(".button-scroll").addEventListener("click", () => {
      const element = document.querySelector(".section-2-container");
      window.scrollTo({ top: element?.getBoundingClientRect().top, left: 0, behavior: "smooth" });
    });

    const tl = gsap
      .timeline({ default: { ease: "none" } })
      .fromTo(
        ".section-1-container",
        {
          opacity: 0,
          x: "100%",
        },
        {
          opacity: 1,
          x: "0%",
          ease: "power4.inOut",
          duration: 1.8,
        },
        "-=1"
      )
      .to(".section-1-container", {
        opacity: 0,
        xPercent: "100",
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".section-2-container",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          immediateRender: false,
          onRefresh: (self) => self.progress && self.animation.progress(1),
        },
      });
  }, []);
  return (
    <section id="view1" className="section">
      <div className="section-1-container" style={{ transform: "translate(0%, 0px)", opacity: 1 }}>
        <div className="section-1-content">
          <h1>
            Unique
            <br />
            Jewelry
          </h1>
          <div className="section-1-text">
            <p>
              Customize your unique ring with graphic angles and pure lines that combine to create the pure beauty of
              the collection.
            </p>
            <button tabIndex="-1" className="button button-scroll">
              <a href="#">Start now</a>
              <svg width={46} height={46} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 42.2a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 0 0 0 38.4Z"
                  stroke="#52322B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m15.3 23 7.7 7.7 7.7-7.7M23 15.3v15.4"
                  stroke="#52322B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
