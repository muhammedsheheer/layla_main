"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/logo.png"
              width={162}
              height={35}
              alt="Foodo"
              className="w-36"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7 pt-14">
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/"
                className="flex w-full justify-start p-0 text-start font-times_new_roman text-3xl font-normal text-white"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="flex w-full justify-start p-0 text-start font-times_new_roman text-3xl font-normal text-white"
              >
                Order Online
              </Link>
              {/* <Link
              href="/about-us"
              className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white"
            >
              Our Story
            </Link> */}
              <p
                className="flex w-full justify-start p-0 text-start font-times_new_roman text-3xl font-normal text-white"
                onClick={() => {
                  setActiveCard((prev: boolean) => !prev);
                }}
              >
                Menu
              </p>
              {activeCard && (
                <div className="flex flex-col items-start gap-2 pl-3 font-normal lg:gap-8 xl:gap-10">
                  <Button
                    variant="link"
                    className="p-0 text-base text-white"
                    asChild
                  >
                    <Link href="/main-menu">Main Menu</Link>
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 text-base text-white"
                    asChild
                  >
                    <Link href="/kids-menu">Kids Menu</Link>
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 text-base text-white"
                    asChild
                  >
                    <Link href="/drinks-menu">Drinks Menu</Link>
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 text-base text-white"
                    asChild
                  >
                    <Link href="/dessert-menu">Dessert Menu</Link>
                  </Button>
                </div>
              )}
              {/* <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <div className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white">
                  Menus
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 w-56 rounded-none border-[#CDAE64] bg-[#000] hover:cursor-pointer">
                <DropdownMenuRadioGroup
                  value={positiond}
                  onValueChange={setPositiond}
                >
                  <DropdownMenuRadioItem
                    value="main"
                    onClick={() => {
                      setOpen(false);
                      router.push("/main-menu");
                    }}
                  >
                    Main Menu
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem
                    value="takeout"
                    onClick={() => {
                      setOpen(false);
                      router.push("/takeout-menu");
                    }}
                  >
                    Takeout Menu
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem
                    value="kids"
                    onClick={() => {
                      setOpen(false);
                      router.push("/kids-menu");
                    }}
                  >
                    Kids Menu
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem
                    value="drinks"
                    onClick={() => {
                      setOpen(false);
                      router.push("/drinks-menu");
                    }}
                  >
                    Drinks & Cocktail Menu
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem
                    value="dessert"
                    onClick={() => {
                      setOpen(false);
                      router.push("/dessert-menu");
                    }}
                  >
                    Dessert & Hot Drinks Menu
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu> */}
              <Link
                href="/contact"
                className="flex w-full justify-start p-0 text-start font-times_new_roman text-3xl font-normal text-white"
              >
                Contact
              </Link>
              <Link
                href="/table-booking"
                className="flex w-full justify-start p-0 text-start font-times_new_roman text-3xl font-normal text-white"
              >
                Reservation
              </Link>
            </div>
            {/* <Link
              href=""
              className="font-playfair flex w-full justify-start p-0 text-3xl font-normal text-white"
            >
              Food & Drinks
            </Link> */}

            {/* <Button
                            variant="link"
                            className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
                            asChild
                        >
                            <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                        >
                            <Link href="/about-us" className="flex gap-2 py-6"><ShieldQuestion /> <span>About</span> </Link>
                        </Button>
                        <Button
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                            asChild
                        >
                            <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact</span></Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                        >
                            <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Booking</span> </Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white"
                        >
                            <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
                        </Button> */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
