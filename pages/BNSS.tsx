
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

type ComparisonEntry = {
  "BNSS Sections": string;
  Subject: string;
  "CrPC Sections": string;
  "Summary of comparison": string;
  page: number;
};

import comparisons from "./../components/BNSS/Comparison summary BNSS to CrPC.json" assert { type: "json" };;


const groupByPage = (data: ComparisonEntry[]): Record<number, ComparisonEntry[]> => {
  return data.reduce((acc, item) => {
    const page = item.page;
    if (!acc[page]) acc[page] = [];
    acc[page].push(item);
    return acc;
  }, {} as Record<number, ComparisonEntry[]>);
};


const BNSS = () => {
  // Normalize the imported data to match the ComparisonEntry type
  const normalizedComparisons: ComparisonEntry[] = (comparisons as any[]).map((item) => ({
    "BNSS Sections": item["BNSS Sections"] ?? "",
    Subject: item.Subject ?? "",
    "CrPC Sections": item["CrPC Sections"] ?? "",
    "Summary of comparison": item["Summary of comparison"] ?? item["Summary of Comparison"] ?? "",
    page: item.page,
  }));

  const groupedData = groupByPage(normalizedComparisons);
  const pages = Object.keys(groupedData).sort((a, b) => Number(a) - Number(b));
  const [currentPage, setCurrentPage] = useState(Number(pages[0]));

  const handlePrev = () => {
    const currentIndex = pages.indexOf(String(currentPage));
    if (currentIndex > 0) {
      setCurrentPage(Number(pages[currentIndex - 1]));
    }
  };

  const handleNext = () => {
    const currentIndex = pages.indexOf(String(currentPage));
    if (currentIndex < pages.length - 1) {
      setCurrentPage(Number(pages[currentIndex + 1]));
    }
  };

  return (
    <div>
      <div className="max-w-screen bg-court bg-fixed bg-repeat-round h-60 sm:h-72 lg:h-80 rounded-b-2xl">
        <Navbar />
        <h1 className="font-bold flex justify-center text-center pt-24 sm:pt-32 lg:pt-40 px-4">
          <span className="text-gray-950 text-3xl sm:text-4xl lg:text-6xl bg-white rounded px-2 bg-opacity-30">
            COMPARISON SUMMARY BNSS to CrPC
          </span>
        </h1>
      </div>

      <div className="px-4 py-8 overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left text-xs sm:text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-2 sm:px-4">BNSS Sections</th>
              <th className="border px-2 py-2 sm:px-4">Subject</th>
              <th className="border px-2 py-2 sm:px-4">CrPC Sections</th>
              <th className="border px-2 py-2 sm:px-4">Summary of Comparison</th>
            </tr>
          </thead>
          <tbody>
            {groupedData[currentPage]?.map((comparison, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border px-2 py-2 whitespace-pre-line">{comparison["BNSS Sections"]}</td>
                <td className="border px-2 py-2 whitespace-pre-line">{comparison.Subject}</td>
                <td className="border px-2 py-2 whitespace-pre-line">{comparison["CrPC Sections"]}</td>
                <td className="border px-2 py-2 whitespace-pre-line">{comparison["Summary of comparison"]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === Number(pages[0])}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {pages.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === Number(pages[pages.length - 1])}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BNSS;
