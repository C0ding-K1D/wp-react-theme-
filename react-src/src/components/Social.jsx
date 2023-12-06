import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/C0ding-K1D" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/matthew-alvarez-778b3a22b/",
  },
  {
    Social: <AiFillMediumCircle />,
    link: "https://medium.com/@Matthew_Alvarez",
  },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
