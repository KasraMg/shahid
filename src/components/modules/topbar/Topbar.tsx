import { LuMenu } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";
import { Link } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../../shadcn/ui/accordion";
import { MdContentCopy } from "react-icons/md";

const Topbar = () => {
  return (
    <header
      dir="rtl"
      className="flex w-full flex-col items-center pl-[86px] pt-12 sm:!pl-4 lg:pl-7 lg:pt-3.5"
    >
      <div className="header-container flex w-full items-center justify-between">
        <div className="logo flex items-center gap-2 rounded-[692.1px_0_0_692.1px] bg-white py-1 pl-14 pr-10 sm:!px-4 lg:rounded-[516.04px_0_0_516.04px] lg:p-2 lg:!py-1 lg:pl-10 lg:pr-7">
          <Sheet>
            <SheetTrigger asChild>
              <LuMenu className="cursor-pointer text-4xl sm:text-2xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center text-2xl">خوش آمدید</SheetTitle>
              </SheetHeader>
             <div className="mt-12 space-y-5" dir="rtl">
             <Link className="flex gap-3 text-xl" to={"/adminPanel/users"}><LuUsers/>مدیریت کاربران </Link>

             {/* <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem> */}

              <Link className="flex gap-3 text-xl" to={"/adminPanel/contentManagement"}><MdContentCopy/> مدیریت محتوا </Link>
             </div>
            </SheetContent>
          </Sheet>
          <img
            src="/images/logo.svg"
            alt="logo"
            className="lg:h-[34px] lg:w-[79px]"
          />
        </div>
        <div className="block text-[37.11px] text-[#381B00] lg:hidden">
          بِسْمِ اللّهِ الرَّحْمَنِ الرَّحيمِ
        </div>
        <button className="Record_your_memories relative rounded-[66.03px] border border-[#381B00] bg-transparent px-11 pb-2 pt-3 text-[19.52px] text-[#381B00] lg:rounded-[37.18px] lg:px-6 lg:pb-2 lg:pt-3 lg:text-[11px]">
          شاهین مشکل گشا
          <p className="absolute -right-2 -top-2 bg-[#e8d4ba] p-0.5 text-base text-orange-600 lg:text-xs">
            ادمین
          </p>
        </button>
      </div>
      <div className="allah-mobile-container hidden w-full items-center justify-center pr-7 lg:flex">
        <div className="allah-mobile mt-2 text-[17.09px] text-[#381B00] lg:mt-4">
          بِسْمِ اللّهِ الرَّحْمَنِ الرَّحيمِ
        </div>
      </div>
    </header>
  );
};

export default Topbar;
