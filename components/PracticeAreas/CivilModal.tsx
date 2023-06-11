import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useState, useRef } from "react";
import civil from "../../public/images/civil.png";

export default function CivilModal() {
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
      <div className="border-solid shadow-2xl border-black  text-center p-10 rounded">
        <div className="items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Image
              className="mx-auto h-32"
              src={civil}
              alt="Civil Image"
              width={128}
              height={128}
            />
          </motion.div>
        </div>

        <h1 className="text-center font-bold text-3xl py-5">Civil</h1>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <button
            onClick={openModal}
            className="bg-gray-600 text-white p-4 font-semibold border-dotted border-black rounded py-3 hover:bg-gray-400"
          >
            Know More
          </button>
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
                    <h1 ref={headRef}> CIVIL </h1>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      When it comes to criminal cases, people have some clarity
                      that some crime has been committed. Although, there might
                      be lack of in-depth clarity to ordinary citizens, they
                      have an idea since imprisonment is a deterrent for most.
                      The difference between criminal law and civil law lies
                      with the types of cases dealt with. While acts affecting
                      the society due to harm caused, like murder, violence,
                      theft are examples of criminal laws. On the contrary,
                      disputes related to property, terms of business, and
                      tenancy matters are different types of civil cases.
                      However, a layman commonly assumes only property disputes
                      to fall under the umbrella of civil matters in the courts.
                      To bring clarity on this aspect, the different types of
                      civil suits in CPC (Civil Procedure Code, 1908) have been
                      explained below. This will bring some clarity on the kind
                      of matters heard and decided by the civil courts in India.{" "}
                      <br />
                      <span className="font-serif font-bold">
                        What are the 4 Types of Civil Cases as per CPC?{" "}
                      </span>{" "}
                      <br />
                      The different kinds of civil suits mentioned in the Code
                      of Civil Procedure, 1908 have been explained below. The
                      categorization depends upon the nature of disputes/
                      matters brought in the civil courts.
                      <br />
                      <span className="font-serif font-bold">
                        Regular Civil Suit :-
                      </span>{" "}
                      <br />
                      Suits in general under part 1 of CPC 1908 fall under the
                      category of regular suits. It usually includes disputes
                      related to title, recovery of money, declaration, suit for
                      redemption, rendition of accounts, etc. Also, the
                      pecuniary limit for such matters is less than or equal to
                      Rs 5 lakh. Additionally, in an ordinary or regular suit,
                      the defendant is entitled to defend his/ her case before
                      the court. <br />
                      <span className="font-serif font-bold">
                        Special Civil Suit :-
                      </span>{" "}
                      <br />
                      There are some types of civil suits in India having
                      special characteristics to distinguish them from ordinary
                      matters. Such examples of civil cases have been provided
                      under part 4 of the Civil Procedure Code. Suit by or
                      against the government or government officers in their
                      official capacity, or suit for enforcement of a public
                      right, exemption, etc. are some of the examples of civil
                      cases regarded as special under CPC.
                      <br />
                      <span className="font-serif font-bold">
                        Summary Suits :-
                      </span>{" "}
                      <br />
                      Suits filed under the Order XXXVII of Civil Procedure
                      Code, 1908 are termed as summary suits. Matters related to
                      promissory notes, hundis, bills of exchange, etc.
                      constitute summary suits fall under this category. In
                      summary suits, the defendant has to apply for the court’s
                      leave to defend the case since the same does not come as a
                      right. The time limit to prove the defendant&apos;s facts
                      is also very limited (10 days). <br />
                      <span className="font-serif font-bold">
                        Suits Exclusively Triable by Court of Small Causes :-
                      </span>{" "}
                      <br />
                      Petty matters civil in nature, whose value does not exceed
                      Rs 500 or Rs 1000 (as decided by the concerned State
                      governments) are decided by a court of small causes. Such
                      courts were established in India under the Presidency
                      Small Cause Courts Act,1882. As per section 24 of the Act,
                      an appeal against matters decided by the courts of small
                      causes lies with the District Courts. For a civil matter
                      in Kolkata having value less than Rs 500, it may be taken
                      up by small-cause courts in the concerned district. A
                      civil lawyer in Kolkata may help with representation
                      before the court. <br />
                      <span className="font-serif font-bold">
                        Most Common Types of Civil Cases in India :-
                      </span>
                      <br />
                      The Code of Civil procedure mostly lays the process to be
                      followed in the civil courts. However, there are several
                      statutes which provide for the laws which eventually lead
                      to a civil dispute. For example, the Indian Contract Act,
                      1872 provides for what a contract is and how it is
                      considered valid. This and other such examples of civil
                      cases have been explained below.
                      <br />
                      <span className="font-serif font-bold">
                        Contract Disputes :-{" "}
                      </span>{" "}
                      <br />
                      A contract mentions the various terms and conditions to
                      which the parties agree. A dispute occurs when one or both
                      the parties diverge from the conditions agreed between the
                      parties. A contract dispute includes controversy among
                      landlord-tenant, consumers, businesses, etc. whereby
                      certain terms are agreed upon by the parties involved. In
                      such cases, usually the contract document is the base for
                      discussion, unless some term is contrary to the applicable
                      law under Indian Contract Act, 1872 or otherwise. <br />
                      <span className="font-serif font-bold">
                        Injunction:-
                      </span>{" "}
                      <br />
                      ‘Stay orders’ are commonly understood by ordinary people
                      for the purpose of refraining someone from doing a
                      specific act which steps on their rights. Court orders in
                      one of the types of civil cases when parties are required
                      to refrain or do some particular act, are termed as
                      injunction. It is of the following types:
                      <br />
                      Preliminary injunction (Issued prior to the trial when
                      wrongful action is obvious on the face of application){" "}
                      <br />
                      Temporary Injunction (Issued when status quo is needed for
                      preventing an irreparable damage or to preserve the
                      subject matter during trial)
                      <br />
                      Permanent Injunction (A perpetual order to make a person
                      do or cease from doing a particular act)
                      <br />
                      <span className="font-serif font-bold">Torts :-</span>
                      <br />
                      An act or omission causing injury or harm to another
                      whereby usually, the duty of care is compromised is called
                      tort. A suit for compensation against damages incurred
                      results in a civil action of torts. Examples of tort cases
                      include negligence, strict and absolute liability,
                      nuisance, etc.
                      <span className="font-serif font-bold">
                        Class Action :-
                      </span>
                      <br />
                      When a number of people have suffered the same loss due to
                      the act of another, which is one among the examples of
                      civil cases, it is termed as class action. Any one of
                      those persons can initiate the civil action with or on
                      behalf of the others in the court of appropriate
                      jurisdiction. Examples may include wage claims, dangerous
                      gas emission in an area, etc.
                      <br />
                      <span className="font-serif font-bold">
                        Suit for Recovery :-
                      </span>
                      <br />
                      To recover money from someone who owes the same and is not
                      willing to pay back, suit for recovery initiates action
                      through courts. Order 4 of the Civil Procedure Code
                      provides for the same. <br />
                      <span className="font-serif font-bold">
                        Suit Against Government :-
                      </span>
                      <br />
                      The state as well as central government and the
                      corresponding departments are considered as juristic
                      persons for suing and being sued. Hence, types of civil
                      cases under the special category can be done against the
                      government as well as per section 80 of the CPC Code.{" "}
                      <br />
                      <span className="font-serif font-bold">
                        Property Disputes :-
                      </span>
                      <br />
                      When it comes to civil disputes, property is said to be
                      the major subject matter. Whether it is for land partition
                      or possession, there are a variety of matters that have
                      the potential of making people each other’s enemy. All
                      such kinds of civil cases are witnessed in the courts.
                      <br />
                      <span className="font-serif font-bold">
                        Suit for Declaration of Rights/ Title Suit :-
                      </span>
                      <br />
                      There are times when the rightful owner of a property is
                      unknown, or there is a dispute regarding who should be the
                      rightful owner among a bunch of people. In such cases,
                      people have to knock on the doors of a civil court to
                      legally analyse who the real owner is. <br />
                      <span className="font-serif font-bold">
                        Suit for Eviction :-
                      </span>{" "}
                      <br />
                      It is usually the matter when a tenant occupying the
                      landlord’s property refuses to leave the premises. Rather
                      than using force, a suit for eviction is lodged in the
                      court to evict the tenant after determining the tenancy.
                      Suppose a property is located in Kolkata and the owner is
                      forcefully evicting the tenant before the term agreed
                      upon, even in such a case the tenant can approach the
                      court through a lawyer in Kolkata. <br />
                      <span className="font-serif font-bold">
                        Specific Relief :-
                      </span>{" "}
                      <br />
                      When the parties to a contract seek some specific act to
                      be performed by the other party in furtherance of the
                      terms agreed upon, or implied, the action is pursued in
                      civil court. The matter is initiated under the Specific
                      Relief Act, 1963. <br />
                      <span className="font-serif font-bold">
                        Closure :-
                      </span>{" "}
                      <br />
                      Civil matters are infamous for taking more and more time.
                      There are some reasons behind the same. First, the judges
                      dealing with civil matters are also the ones who deal with
                      criminal and other matters. Secondly, criminal matters
                      have more risk of infringing the innocent accused rights
                      and tampering with evidence. Hence, they are prioritised
                      over the civil ones. Lastly, civil matters are complex
                      enough for someone to understand quickly just by going
                      through the facts. The above categorization of types of
                      civil cases must have already proven to be a glimpse of
                      such complexity. <br />
                    </p>
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
