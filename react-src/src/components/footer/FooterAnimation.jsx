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

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-right">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes{" "}
            </a>
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
