import { React, useEffect, useState } from "react";
import LandingContainer from "./landingContainer";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LandingCta() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return (
    <div className="relative py-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        {/* <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div> */}
      </div>
      <LandingContainer>
        <div className="relative">
          <div className="flex items-center justify-center h-[40vh] px-2 sm:px-0">
            <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Our Product is Awesome
              </h1>
              <p className="text-center text-sm sm:text-base md:text-xl text-gray-300">
                Some Description about why is that
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href={isAuthenticated ? "/dashboard" : "/api/auth/signin"}
                  className="relative flex h-10 sm:h-12 w-full items-center justify-center px-4 sm:px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm sm:text-base font-semibold text-white">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
