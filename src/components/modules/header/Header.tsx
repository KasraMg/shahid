import React from "react";

type Props = {};

const Header = (props: Props) => {
  return ( 
    <header className="flex w-full flex-col items-center  pl-[86px] pt-12 lg:pl-7 lg:pt-3.5">
      <div className="header-container flex w-full items-center justify-between">
        <div className="logo flex items-center rounded-[692.1px_0_0_692.1px] bg-white py-1 pl-14 pr-20 lg:rounded-[516.04px_0_0_516.04px] lg:p-2 lg:pl-10 lg:pr-7">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="lg:h-[34px] lg:w-[79px]"
          />
        </div>
        <div className="block text-[37.11px] text-[#381B00] lg:hidden">
          بِسْمِ اللّهِ الرَّحْمَنِ الرَّحيمِ
        </div>
        <button className="Record_your_memories rounded-[66.03px] border border-[#381B00] bg-transparent px-11 pb-2 pt-3 text-[19.52px] text-[#381B00] lg:rounded-[37.18px] lg:px-6 lg:py-0.5 lg:text-[11px]">
          ثبت خاطرات شما
        </button>
      </div>
      <div className="allah-mobile-container hidden w-full items-center justify-center pr-7 lg:flex">
        <div className="allah-mobile mt-2 text-[17.09px] text-[#381B00]">
          بِسْمِ اللّهِ الرَّحْمَنِ الرَّحيمِ
        </div>
      </div>
    </header>
  );
};

export default Header;
