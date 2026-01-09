import CenteredCTA from "@/components/Helper/CenteredCTA";
import CenteredLTRCTA from "@/components/Helper/CenteredLTRCTA";
import FullWidthCTA from "@/components/Helper/FullWidthCTA";
import FullWidthLTRCTA from "@/components/Helper/FullWidthLTRCTA";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden h-full mx-auto pt-20 pb-20">
      <div className="mb-10">
        <FullWidthCTA />
        <CenteredCTA />
        <FullWidthLTRCTA />
        <CenteredLTRCTA />
      </div>
    </div>
  );
};

export default page;
