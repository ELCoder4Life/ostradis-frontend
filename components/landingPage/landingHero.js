import LandingContainer from "./landingContainer";
import { React, useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import ProductHunt from "../elements/productHunt";
import Button from "../elements/button";

export default function LandingHero() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const words = ["Text A", "Text B", "Text C"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTyping, setCurrentTyping] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentTyping(words[currentWordIndex].substr(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex >= words[currentWordIndex].length) {
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 180);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, charIndex, words]);

  return (
    <>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <LandingContainer>
          <div className="relative pt-32 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <ProductHunt />
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Your Awesome Product <br />
                <span className="text-primary">{currentTyping}</span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
                <span className="font-bold text-white underline">
                  Lorem ipsum
                </span>{" "}
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-4">
                <>
                  <Button link="#" text="View Demo" />
                  <Button
                    link={isAuthenticated ? "/dashboard" : "/api/auth/signin"}
                    text="Awesome CTA"
                    type="primary"
                  />
                </>
              </div>
              <div className="py-8 mt-16 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Lorem ipsum
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Lorem ipsum
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <div className="text-center flex-1">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Lorem ipsum
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
    </>
  );
}
