import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const courtAndForums = () => {
  return (
    <div>
      <div className="max-w-screen bg-court bg-fixed bg-repeat-round h-80 rounded-b-2xl">
        <Navbar />
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          <span className="text-gray-950  text-6xl bg-white px-2 bg-opacity-30">
            Court And Forums
          </span>
        </h1>
      </div>
      <div>
        <p className=" p-5 lg:p-20 text-left font-normal text-base lg:text-3xl font-serif ">
          Dahanu-Lawyers engaging in all the litigations and also focusing on
          the entire major disputes like that of the liaison with the officials
          of the government, foreign direct investment, legal and commercial
          services etc. Thriving with a team of the formulistic lawyers, we
          strive to reach the level of excellence with the highest set standard
          benchmark by our professionals. Serving for various banks, financial
          organizations, multinational companies as well as our individual
          clients we have catered broad sector of law practices. Legislative or
          regulatory laws, investments or partnerships, cyber laws or intellectual property rights, have been well practiced by the professional panel of Dahanu-Lawyers.
        </p>

        <h2 className="text-center text-2xl p-5 font-semibold  bg-black text-white font-serif">
          Indian law and its key branches at a glance
        </h2>

        <p className="bg-gray-900 text-white  lg:py-20 p-5 lg:px-40 lg:text-2xl  ">
          The law system that is operational in India is called Indian laws.
          Most of the provisions in Indian judiciary system are influenced by
          ancient texts including Arthshastra and Manusmriti. Just like Indian
          constitution, a large part of these provisions has been drawn from
          some popular laws of western countries. The Indian constitution itself
          is a great source of laws that are in effect in the country and there
          are bodies that issue certain rules to be followed by each and every
          Indian. Indian law system is considered to be one of the most complex
          law systems in the world. The reason lies in its being borrowed from
          so many countries across the globe. The prime aim of the system is to
          assure justice and equality to each and every Indian citizen. Each law
          is also expected to promote democratic values and a liberal society in
          India. A few prime branches of Indian law given below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <h3 className="font-semibold font-serif text-center text-lg p-2">
              Administrative Laws
            </h3>
            <p className="p-4">
              Administrative laws deal with the issues that fall under the
              domain of public legislation. These laws ensure the effective
              working of all the government bodies that are responsible for
              decision-making and have a deep impact upon the public. These
              bodies primarily include different types of tribunals, boards, and
              special commissions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <h3 className="font-semibold font-serif text-center text-lg p-2">
              Family Laws
            </h3>
            <p className="p-4">
              Family laws are an important stream of Indian laws that delivers
              justice to each and every Indian on the basis of his religion.
              There are 3 major branches of family laws in India- Hindu Laws,
              Christian laws and Muslim laws. These laws are very closely
              related to personal disputes including guardianship, marriage,
              divorce, inheritance and adoption of children.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <h3 className="font-semibold font-serif text-center text-lg p-2">
              Criminal Laws
            </h3>
            <p className="p-4">
              Criminal laws in India are formed to punish those who are found
              guilty of committing criminal offenses. Indian Penal Code (IPC) is
              the main criminal code of India. This comprehensive code was
              drafted in the year 1860 during the early British rule. Most of
              the cases pending in Indian courts solely are of criminal nature.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <h3 className="font-semibold font-serif text-center text-lg p-2">
              Civil Laws
            </h3>
            <p className="p-4">
              Civil laws in India deal with the cases and disputes that are of
              non-criminal nature. These include ownership of property,
              formation and breach of contracts, issues of child custody and the
              disputes related to business partnerships etc. All civil laws have
              come into existence with a view to protect peoples’ personal and
              intellectual properties.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <h3 className="font-semibold font-serif text-center text-lg p-2">
              Labour Laws
            </h3>
            <p className="p-4">
              Labour laws in India protect workers’ rights and take care of
              their welfare. Be it a Govt. employee or a private one, one is
              free to raise his voice against any atrocity and injustice done to
              him by anyone. Labour laws ensure that no person who gives his
              services to an individual or a company should remain deprived of
              what he deserves.
            </p>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
};

export default courtAndForums;
