import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { headlineImg, heroSmallVideo, heroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? heroSmallVideo : heroVideo,
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(heroSmallVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#cta", {
      y: 0,
      delay: 1,
      duration: 1,
      opacity: 1,
      ease: "power4.out",
    });

    gsap.from("#headline", {
      scale: 1.1,
      duration: 1.5,
      opacity: 0.2,
      ease: "power1.in",
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black max-sm:top-20">
      <div className="flex-center flex-col">
        <div className="flex-center relative z-10">
          <img
            src={headlineImg}
            id="headline"
            alt="headline"
            className="w-full sm:w-4/5"
          />
          <p className="hero-title absolute top-16 sm:top-30">iPhone 16 Pro</p>
        </div>

        <video
          src={videoSrc}
          autoPlay
          muted
          playsInline
          key={videoSrc}
          className="absolute -top-18 h-180 w-full sm:-top-10 sm:h-200 sm:w-10/12 sm:object-cover"
        />

        <div
          id="cta"
          className="flex-center relative top-56 translate-y-20 flex-col opacity-0 sm:top-50"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="text-lg font-normal">
            From $999 or $41.62/mo. for 24 mo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
