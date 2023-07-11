import React from "react";
import ICICIModal from "./BankingPartners/ICICIlModal";
import AXISModal from "./BankingPartners/AXISModal";

const BankingPartners = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-3xl p-10 bg-slate-200">
          Our Banking Partners
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <ICICIModal />
        <AXISModal />
      </div>
    </>
  );
};

export default BankingPartners;
