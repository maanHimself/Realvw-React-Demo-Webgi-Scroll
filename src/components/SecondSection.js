import gsap from "gsap";
import { useEffect } from "react";

export default function SecondSection() {
  useEffect(() => {
    const tl = gsap
      .timeline({ default: { ease: "none" } })
      .fromTo(
        ".section-2-container",
        {
          opacity: 0,
          x: "-110%",
        },
        {
          opacity: 1,
          x: "0%",
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".section-2-container",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,
          },
        }
      )

      // ---------------------------------  EXIT SECTION 2

      .to(".section-2-container", {
        opacity: 0,
        x: "-110%",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          immediateRender: false,
        },
      });
  }, []);
  return (
    <section id="view2" className="section">
      <div className="section-2-container" style={{ transform: "translate3d(0%, 0px, 0px)", opacity: 1 }}>
        <div className="section-2-text-bg" style={{ opacity: 0.1 }}>
          Forever
        </div>
        <div className="section-2-content">
          <div className="section-2-title">
            <h2>created to last</h2>
            <h1>
              For
              <br />
              ever
            </h1>
          </div>
          <p>
            Customize your unique ring with graphic angles and pure lines that combine to create the pure beauty of the
            collection.
          </p>
        </div>
      </div>
    </section>
  );
}
