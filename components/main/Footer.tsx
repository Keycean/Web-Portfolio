import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <h3 className="text-secondary font-light text-xs md:text-sm text-center mt-8 md:mt-0 md:text-left">Copyright © 2024 Keycean Klyk Señeres | All Rights Reserved</h3>
        </div>
    </div>
  )
}

export default Footer