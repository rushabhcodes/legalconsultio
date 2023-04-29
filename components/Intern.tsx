import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import Link from "next/link";
import React from "react";

export default function Intern() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <h1 className="text-center font-semibold text-4xl p-10 bg-slate-200">Interships</h1>

      <h2 className="text-center font-semibold text-2xl p-5 mt-5">
        Want to be an Intern?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 lg:gap-16 p-20">
        <div>
          <img src="/images/intern.jpg" alt="" />
        </div>
        <div className="p">
          <p className="text-xl py-10">
            Start your law career at the best place. Learn from the experts in
            this field through the practical methods. Send us your CV and Cover
            Letter.
          </p>
          <button
            onClick={openModal}
            className="bg-gray-600 text-white p-4 font-semibold border-dotted border-black rounded hover:bg-gray-400"
          >
            Upload Now
          </button>
        </div>
      </div>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    How would you like to upload your CV?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-5">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        <Link href={"https://wa.me/+919764934519"}>
                          <div className="flex flex-col justify-center items-center content-center">
                            <img
                              className="h-10 w-10"
                              src="/icons/contact-whatsapp.png"
                              alt="Whatsapp Image"
                            />
                            <h1>Whatsapp</h1>
                          </div>
                        </Link>
                      </button>

                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        <Link href={"mailto:harshmail432004@gmail.com"}>
                          <div className="flex flex-col justify-center items-center">
                            <img
                              className="h-10 w-10"
                              src="/icons/contact-email.png"
                              alt="Email Image"
                            />
                            <h1>Mail</h1>
                          </div>
                        </Link>
                      </button>
                    </div>
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
