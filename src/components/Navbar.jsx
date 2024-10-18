import React from "react";
import { Menu } from "@headlessui/react";

function Navbar() {
  return (
    <>
      <section className="shadow mt-0 py-5 w-screen lg:h-max">
        <div className="flex items-center mx-auto font-medium h-16 justify-between px-4 w-screen lg:h-24">
          <a href="/" className="h-14">
            <h1 className="tracking-tighter text-3xl text-black font-extrabold p-5 border-solid border-black border-2 py-1">
              Restra
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-6 lg:border-black lg:border-2 lg:rounded-sm xl:mr-5 pl-4">
            <a href="#home" className="font-bold hover:text-primary">HOME</a>
            <a href="#about" className="font-bold hover:text-primary">ABOUT</a>
            <a href="#jobs" className="font-bold hover:text-primary">JOBS</a>
            <a href="/account/login" className="px-4 py-2 bg-primary text-black font-bold border-0 rounded">
              BOOK A TABLE
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-x-2 z-10">
            <Menu as="div">
              <Menu.Button>
                <svg
                  className="text-4xl"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Menu.Button>

              <Menu.Items
                as="ul"
                className="absolute inset-0 z-50 w-screen h-screen bg-white text-gray-900 mt-0 pt-3 shadow-lg">
                
                {/* Close Button */}
                <div className="flex justify-end pr-6">
                  <Menu.Button as="button" className="text-4xl text-black">
                    &times; {/* Close icon */}
                  </Menu.Button>
                </div>
                
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      href="#home"
                      className={`block px-6 py-4 text-lg font-bold ${
                        active ? "bg-primary text-white" : ""
                      }`}>
                      HOME
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      href="#about"
                      className={`block px-6 py-4 text-lg font-bold ${
                        active ? "bg-primary text-white" : ""
                      }`}>
                      ABOUT
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      href="#jobs"
                      className={`block px-6 py-4 text-lg font-bold ${
                        active ? "bg-primary text-white" : ""
                      }`}>
                      JOBS
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      href="/account/login"
                      className={`block px-6 py-4 text-lg font-bold ${
                        active ? "bg-primary text-white" : ""
                      }`}>
                      BOOK A TABLE
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
