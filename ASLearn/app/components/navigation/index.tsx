"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { UserAuth } from "@/app/context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      googleSignIn()
    } catch(error) {
      console.error(error)
    }
  }

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
        <div className="container my-1 max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center h-full ml-5 mr-10">
            {/* Wrap the Logo component with a Link to the root directory */}
            <Link href="/">
                <Logo />
            </Link>
            <ul className="hidden md:flex gap-x-6 text-black">
              <section className="hidden md:flex gap-x-6 text-black m-auto"> {/*PUT ALL TEXT NAVBAR HERE!!!!*/}
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <p>Lessons</p>
                </Link>
              </li>
              </section>
              <li>
                {!user ? (
                    <button onClick={handleSignIn} className="h-10 px-5 m-2 text-white transition-colors duration-150 
                                   bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700">
                      Sign In
                    </button>
                  ) : (
                    <button onClick={handleSignOut} className="h-10 px-5 m-2 text-white transition-colors duration-150 
                                   bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700">
                      Sign Out
                    </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
