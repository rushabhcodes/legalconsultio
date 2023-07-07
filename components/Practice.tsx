import BankingModal from "./PracticeAreas/BankingModal";
import CivilModal from "./PracticeAreas/CivilModal";
import CriminalModal from "./PracticeAreas/CriminalModal";
import FamilyModal from "./PracticeAreas/FamilyModal";

export default function Practice() {
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-3xl p-10  bg-slate-200">
          Practice Areas
        </h1>
        {/* make a respinsive grid with cards in it which will be 3 columns on desktop and 1 column on on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-20 p-20">
          {/* Banking And Finance */}
          <BankingModal />

          {/* Civil */}
          <CivilModal />

          {/* Criminal */}
          <CriminalModal />

          {/* Family Disputes */}
          <FamilyModal />
        </div>
      </div>
    </>
  );
}
