"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import MenuItem from "../MenuItem";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [LoginInDialogOpen, setLoginInDialogOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <Dialog>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" onClick={() => {}}>
            Airbnb your home
          </div>
          <div className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200  flex  flex-row  items-center  gap-3 rounded-full cursor-pointer hover:shadow-md transition" onClick={toggleOpen}>
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Image className="rounded-full" height={30} width={30} alt="Avatar" src="/images/placeholder.jpg" />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              <>
                <DialogTrigger className="text-left">
                  <MenuItem label="Login" />
                </DialogTrigger>
                <MenuItem label="Sign up" />
              </>
            </div>
          </div>
        )}
      </div>
      <DialogContent className="sm:max-w-[425px] p-[0.6rem]">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">Hello World</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="flex flex-col gap-2 p-6">
          <div className="flex flex-row items-center gap-4 w-full">
            <Button className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg  transition w-full text-white py-3 text-base font-semibold border-[2px]">Submit</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserMenu;
