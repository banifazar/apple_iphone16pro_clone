import { rightImg } from "../utils";

const TradePromo = () => {
  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center bg-gray-300 p-6 sm:flex-row sm:p-4">
      <p className="text-center text-sm leading-snug font-extralight">
        Get $160–$600 in credit toward iPhone 16 or iPhone 16 Pro when you trade
        in iPhone 12 or higher.*
      </p>

      <a href="#" className="link ml-1 text-sm">
        Buy
        <img src={rightImg} alt="right" className="ml-1 h-2 w-2" />
      </a>
    </section>
  );
};

export default TradePromo;
