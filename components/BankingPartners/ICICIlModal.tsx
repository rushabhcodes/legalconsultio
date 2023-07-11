import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useState, useRef } from "react";
import icici from "../../public/logos/ICICI_Bank_Logo.png";

export default function ICICIModal() {
  let [isOpen, setIsOpen] = useState(false);
  let headRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div onClick={openModal}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="shadow-2xl p-10 m-16 mb-0 lg:mb-16 rounded-md"
        >
          <Image
            className=" overflow-auto"
            src={icici}
            alt="Kotak Mahindra Bank logo"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
          initialFocus={headRef}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="  fixed  inset-0 overflow-y-scroll">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    <h1 ref={headRef}> ICICI Bank Details </h1>
                  </Dialog.Title>
                  <div className="mt-2 grid grid-cols-2">
                    <div>Name:</div><div>Prakash Thakkar</div>
                    <div>Account No:</div><div>004901504646</div>
                    <div>Account Type:</div><div>Saving</div>
                    <div>IFSC Code:</div><div>ICIC0000049</div>
                    <div>Branch:</div><div>Dahanu</div>
                    <div>Bank:</div><div>Icici</div>
                    <div>Google Pay:</div> <div>8149767999</div>
                    <div>Phone pe:</div><div>8149767999</div>
                    <div>Paytm :</div><div>8149767999</div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 sm:text-sm lg:text-lg xl:text-xl md:text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
