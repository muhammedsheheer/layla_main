"use client";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/4.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="z-10 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="max-w-[500px] text-center font-times_new_roman text-5xl text-[#fff] md:leading-[60px]">
            Discover Unforgettable Flavour — Only at Layla
          </h1>
          <p className="max-w-[450px] text-center font-[500] leading-[160%] text-[#fff]">
            Whether you’re planning an intimate dinner or a grand celebration,{" "}
            <strong>Layla</strong> invites you to embark on a culinary journey
            like no other. From carefully curated flavours to the finest
            hand-selected ingredients, every dish reflects our unwavering
            commitment to excellence. Step into a dining experience where
            tradition blends seamlessly with innovation, and each bite tells a
            story of passion, craftsmanship, and unforgettable taste.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#fff]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
