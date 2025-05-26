import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icon";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pt-12 md:pt-24">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* big screen */}
      <div className="hidden flex-col gap-8 md:flex md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          <motion.h5
            className="pb-16 text-center font-oswald text-4xl font-[400] capitalize text-[#fff] md:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Scroll Us
          </motion.h5>
          <div className="z-40 flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="z-40 flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              {/* <Link href={""}>
                <Icons.instagram className="z-40 h-24 w-24 text-[#E2B583]" />
              </Link>
              <div>
                <Link
                  href={""}
                  target="_blank"
                  className="text-md text-center font-open_sans font-[400] uppercase text-[#E2B583] md:text-xl"
                >
                  layla
                </Link>
              </div> */}
              <Link
                href={
                  "https://www.instagram.com/laylarestaurant.uk?utm_source=qr&igsh=NmdpbDdmZHBkMDYy"
                }
                target="_blank"
              >
                <Icons.instagram className="z-40 h-24 w-24 text-[#fff]" />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/laylarestaurant.uk?utm_source=qr&igsh=NmdpbDdmZHBkMDYy"
                }
                target="_blank"
              >
                <span className="text-md text-center font-open_sans font-[400] uppercase text-[#fff] md:text-xl">
                  layla
                </span>
              </Link>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/story/3.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*mobile view */}
      <div className="z-40 flex flex-col gap-8 md:hidden md:gap-20">
        <div className="z-40 flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          <motion.h5
            className="pb-10 text-center font-oswald text-4xl font-[400] capitalize text-[#fff] md:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Scroll Us
          </motion.h5>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="z-40 flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              {/* <Link href={""}>
                <Icons.instagram className="h-24 w-24 text-[#E2B583]" />
              </Link>
              <div>
                <Link
                  href={""}
                  target="_blank"
                  className="text-center font-open_sans text-xs font-[400] uppercase text-[#E2B583] md:text-xl"
                >
                  layla
                </Link>
              </div> */}
              <Link
                href={
                  "https://www.instagram.com/laylarestaurant.uk?utm_source=qr&igsh=NmdpbDdmZHBkMDYy"
                }
                target="_blank"
              >
                <Icons.instagram className="z-40 h-24 w-24 text-[#fff]" />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/laylarestaurant.uk?utm_source=qr&igsh=NmdpbDdmZHBkMDYy"
                }
                target="_blank"
              >
                <span className="text-md text-center font-open_sans font-[400] uppercase text-[#fff] md:text-xl">
                  layla
                </span>
              </Link>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/story/3.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            {/* <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div> */}

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.jpg"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
