import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackgroundSlider from "@/components/BackgroundSlider";
import Footer from "@/components/Footer";
import BankingPartners from "@/components/BankingPartners";
import Intern from "@/components/Intern";
import MyModal from "@/components/Practice";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: any }) {
  console.log(data);
  return (
    <main>
      <Navbar />
      <BackgroundSlider />
      <MyModal />
      <BankingPartners />
      <Intern />
      <Footer />
    </main>
  );
}
