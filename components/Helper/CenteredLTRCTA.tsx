import React from "react";
import FillWhiteButton from "./FillWhiteButton";
import Link from "next/link";

const CenteredLTRCTA = () => {
  return (
    <div className="relative mx-auto w-[90vw] mb-10 h-[280px] lg:h-[300px] bg-[url('/images/FullWidthCTA-bg.webp')] bg-center bg-cover bg-no-repeat rounded-lg">
      <div className="w-full h-full">
        <div className="relative z-4 w-full h-full grid grid-cols-1 lg:grid-cols-12 px-30">
          <div className="col-span-6">
            <div className="flex justify-center flex-col w-full h-full items-center gap-6">
              <h3 className="text-[26px] lg:text-[42px] leading-[1.1em] text-white">
                Elevate your vision to a new level with our revolutionary
                knowledge.
              </h3>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex justify-center flex-col w-full h-full items-end gap-6">
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

export default CenteredLTRCTA;
