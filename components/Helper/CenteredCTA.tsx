import React from "react";
import FillWhiteButton from "./FillWhiteButton";
import Link from "next/link";

const CenteredCTA = () => {
  return (
    <div className="relative w-[90vw] mb-10 rounded-lg mx-auto h-[280px] lg:h-[380px] bg-[url('/images/FullWidthCTA-bg.webp')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full">
        <div className="relative z-4 flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[40%] w-[92%]">
            <div className="flex justify-center flex-col w-full h-full items-center gap-6">
              <h3 className="text-[26px] text-center lg:text-[42px] leading-[1.1em] text-white">
                Elevate your vision to a new level with our revolutionary
                knowledge.
              </h3>
              <Link href="/contact">
                <FillWhiteButton>Contact Us</FillWhiteButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredCTA;
