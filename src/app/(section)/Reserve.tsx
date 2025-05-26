import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full overflow-hidden bg-[#000] py-8 md:py-12">
      <div className="flex w-full flex-col md:flex-row">
        {/* <div className="w-full md:w-1/2">
          <motion.img
            src={"/images/home/story/5.png"}
            alt={"image"}
            className="relative z-10 h-full w-full object-cover"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div> */}
        <motion.div
          className="flex w-full flex-col items-center justify-center gap-5 px-4 pt-6 md:px-20 md:pt-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-center font-oswald text-4xl font-[300] tracking-[5px] text-[#fff] md:text-5xl">
            RESERVE TABLE
          </h1>
          <p className="max-w-[500px] text-center font-manrope text-sm font-[300] text-[#fff] md:text-base">
            We are also able to offer comfortable private dining for any kind of
            function - parties, business meetings, reunions, birthdays, wedding
            breakfasts and get togethers. We have a separate room with a mix of
            cosy booth seating and additional tables and can provide a la carte.
            Please call to discuss numbers and requirements.
          </p>
          <div>
            <Link href={"/table-booking"}>
              <Button className="relative z-40 flex flex-row items-center justify-center gap-1 rounded-none bg-transparent px-6 py-6 font-manrope text-sm font-[600] uppercase text-white ring-1 ring-[#fff] hover:bg-[#c3a96c] md:px-5 md:py-6">
                Book Now <ArrowRight className="text-[#fff]" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reserve;
