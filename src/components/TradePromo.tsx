import { rightImg } from "../utils";

const TradePromo = () => {
  return (
    <div className="w-full bg-gray-300 p-6 sm:p-4 flex sm:flex-row flex-col justify-center items-center">
      <p className="text-sm font-extralight text-center leading-snug">
        Get $160–$600 in credit toward iPhone 16 or iPhone 16 Pro when you trade
        in iPhone 12 or higher.*
      </p>

      <a href="#" className="link ml-1 text-sm">
        Buy
        <img src={rightImg} alt="right" className="ml-1 w-2 h-2" />
      </a>
    </div>
  );
};

export default TradePromo;
