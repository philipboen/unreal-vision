import React from "react";
import Image from "next/image";

export const SideBar = () => {
  return (
    <div className="w-[320px] bg-secondary dark:bg-primary-foreground/50">
      <div className="flex w-full flex-col gap-4 p-6 px-4">
        <div className="mx-auto max-w-full  py-4">
          <div className="flex items-center space-x-2">
            <Image src="/assets/logo2.png" alt="logo" width={24} height={24} />
            <h1 className="font-serif text-lg font-semibold">Unreal Vision</h1>
          </div>
        </div>
        <div>Sidebar</div>
      </div>
    </div>
  );
};
