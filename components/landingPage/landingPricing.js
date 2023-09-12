import Link from "next/link";
import React from "react";
import LandingContainer from "./landingContainer";
import { useSession, signIn, signOut } from "next-auth/react";

const LandingPricing = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  return (
    <div className="relative text-gray-300" id="pricing">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
      </div>
      <LandingContainer>
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Pricing
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div
            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border 
          rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 
          shadow-none m-2 flex-1 max-w-md"
          >
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
              Basic
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                $9
              </span>{" "}
              / Month
            </p>
            <ul className="list-none list-inside mb-6 text-center">
              <li className="font-bold text-primary">Our Awesome Feature 1</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 3</li>
              <li>Our Awesome Feature 4</li>
              <li>Our Awesome Feature 5</li>
              <li>Our Awesome Feature 6</li>
            </ul>

            <Link
              href="#"
              className="relative flex h-9 w-full items-center justify-center px-4 before:absolute 
              before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 
              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-sm font-semibold text-black">
                Purchase Plan
              </span>
            </Link>
          </div>
          <div
            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border 
          rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 
          shadow-none m-2 flex-1 max-w-md"
          >
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
              Standard
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                $19
              </span>{" "}
              / Month
            </p>
            <ul className="list-none list-inside mb-6 text-center">
              <li className="font-bold text-primary">Our Awesome Feature 1</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
            </ul>

            <Link
              href="#"
              className="relative flex h-9 w-full items-center justify-center px-4 
              before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 
              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-sm font-semibold text-black">
                Purchase Plan
              </span>
            </Link>
          </div>
          <div
            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border 
          rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 
          shadow-none m-2 flex-1 max-w-md"
          >
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
              Ultimate
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                $49
              </span>{" "}
              / Month
            </p>
            <ul className="list-none list-inside mb-6 text-center">
              <li className="font-bold text-primary">Our Awesome Feature 1</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
              <li>Our Awesome Feature 2</li>
            </ul>
            <Link
              href="#"
              className="relative flex h-9 w-full items-center justify-center px-4 before:absolute 
              before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 
              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-sm font-semibold text-black">
                Purchase Plan
              </span>
            </Link>
          </div>
        </div>
      </LandingContainer>
    </div>
  );
};

export default LandingPricing;
