import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DrinksMenu from "./(section)/DrinksMenu";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000] z-40">
        <Navbar position="absolute" />
        <div className="h-[15vh] w-full bg-[#000]" id="hero"></div>
        <DrinksMenu />
        <Footer />
      </div>
    </main>
  );
};

export default page;
