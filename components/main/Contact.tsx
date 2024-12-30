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

const Contact = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]" id="contact">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Contact Details */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <HiOutlineLocationMarker size={28} className="text-purple-500" />
                <div>
                  <h3 className="text-lg font-semibold">Location:</h3>
                  <p className="text-gray-400">Iloilo, Philippines</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <HiOutlineMail size={28} className="text-purple-500" />
                <div>
                  <h3 className="text-lg font-semibold">Email:</h3>
                  <p className="text-gray-400">keyceanseneres@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <HiOutlinePhone size={28} className="text-purple-500" />
                <div>
                  <h3 className="text-lg font-semibold">Phone:</h3>
                  <p className="text-gray-400"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="#sponsor"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>
            <a
              href="#learn"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>
            <a
              href="mailto:senereskeyceanklyk@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">senereskeyceanklyk@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
