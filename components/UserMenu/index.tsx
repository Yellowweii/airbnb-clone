"use client";
import React, { MouseEventHandler, useState } from "react";
import { AiOutlineMenu, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import MenuItem from "../MenuItem";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, name, password } = e.target as typeof e.target & {
      email: { value: string };
      name: { value: string };
      password: { value: string };
    };
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        name: name.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
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
              </>
            </div>
          </div>
        )}
      </div>
      <DialogContent className="sm:max-w-[425px] p-[0.6rem]">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">Register</DialogTitle>
        </DialogHeader>
        <div className="text-xl font-semibold">Welcome to Airbnb</div>
        <div className="font-light text-neutral-500">Create an account!</div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <Input type="email" id="email" placeholder="Your email" />
          </div>
          <div>
            <Input type="text" id="name" placeholder="Your name" />
          </div>
          <div>
            <Input type="password" id="password" placeholder="Your password" />
          </div>
          <div className="px-6 pt-4">
            <Button className="w-full font-bold" type="submit">
              Continue
            </Button>
          </div>
        </form>
        <DialogFooter className="flex flex-col gap-2 p-6 pt-0">
          <div className="flex flex-col items-center gap-4 w-full">
            <Button variant="outline" className="rounded-lg transition w-full py-3 text-base font-semibold border-[2px]">
              <FcGoogle className="mr-2" size={20} />
              Continue with Google
            </Button>
            <Button variant="outline" className="rounded-lg  transition w-full py-3 text-base font-semibold border-[2px]">
              <AiFillGithub className="mr-2" size={20} />
              Continue with Github
            </Button>
            <div className="flex justify-center flex-row items-center gap-2 text-neutral-500 font-light text-sm">
              <div>Already have an account?</div>
              <Button className="p-0" variant="link">
                Login
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserMenu;
