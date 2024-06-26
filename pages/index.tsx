import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackgroundSlider from "@/components/BackgroundSlider";
import Footer from "@/components/Footer";
import BankingPartners from "@/components/BankingPartners";
// import Intern from "@/components/Intern";
import MyModal from "@/components/Practice";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: any }) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  console.log(data);
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };
  if (showConsent) {
    return (
      <main>
        <Navbar />
        <BackgroundSlider />
        <MyModal />
        <BankingPartners />
        {/* <Intern /> */}
        <Footer />
      </main>
    );
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white md:m-6 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Disclamer
                  </Dialog.Title>
                  <div className="mt-4 text-xs ">
                    <p className="text-xs md:text-base text-gray-500">
                      As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. The user acknowledges the following:
                      <br />
                      There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;
                      The user wishes to gain more information about us for his/her own information and use;
                      The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site would not create any lawyer-client relationship.
                      The information provided under this website is solely available at your request for information purpose only and should not be interpreted as soliciting or advertisement.

                      We are not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice, as the material contained in this document does not constitute/substitute professional advice that may be required before acting on any matter. Neither this website nor the web pages and the information contained herein constitute a contract, or will form the basis of a contract. While, every care has been taken in preparing the content of this website and web pages to ensure accuracy at the time of publication and creation, however, Vaish Associates assumes no responsibility for any errors, which despite all precautions may be found herein. All disputes, if any, are subject to the exclusive jurisdiction of courts at Dahanu, India only.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 m-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={acceptCookie}

                    >
                      I agree
                    </button>
          
                    <Link href={"https://google.com"} >
                      <button
                        type="button"
                        className=" inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 m-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        I disagree
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <main>
        <Navbar />
        <BackgroundSlider />
        <MyModal />
        <BankingPartners />
        {/* <Intern /> */}
        <Footer />
      </main>
    </>);
}
