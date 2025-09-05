import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero-title", {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 16 Pro</p>
      </div>
    </section>
  );
};

export default Hero;
