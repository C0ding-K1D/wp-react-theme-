import React from "react";
import { FaServer } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

const ServiceContent = [
  {
    icon: <FaGlobe />,
    title: "Web Development",
    descriptions: `Crafting engaging websites with a focus on seamless user experiences and cutting-edge technologies. Elevate your online presence with responsive design and intuitive navigation.
    `,
    animationDealy: "",
  },
  {
    icon: <FaCodeBranch />,
    title: "Software Development",
    descriptions: `Excelling in tailoring software solutions to address unique business challenges. Designing and building custom software that empowers your business to thrive and succeed.
    `,
    animationDealy: "100",
  },
  {
    icon: <FaShoppingBag />,
    title: "E-Commerce Development",
    descriptions: `Specializing in creating robust and scalable e-commerce platforms. Delivering end-to-end solutions for seamless online shopping experiences and increased sales.
    `,
    animationDealy: "200",
  },
  {
    icon: <FaClipboardList />,
    title: "CMS Development",
    descriptions: `Building intuitive and efficient Content Management Systems (CMS) for easy website content management. Take control without compromising design or functionality.
    `,
    animationDealy: "300",
  },
  {
    icon: <FaServer />,
    title: "API Development",
    descriptions: `Specializing in API development and integration to connect systems seamlessly. Empowering your digital ecosystem with enhanced functionality and streamlined processes.
    `,
    animationDealy: "400",
  },
  {
    icon: <FaMobile />,
    title: "Mobile Apps",
    descriptions: `Expertise in transforming ideas into functional and aesthetically pleasing mobile applications. Developing standout apps for iOS and Android that resonate with users.
    `,
    animationDealy: "500",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-dealay={val.animationDealy}
          >
            <div className="feature-box-01">
              <div>
                <div className="icon">
                  <i>{val.icon}</i>
                </div>
                <div className="feature-content">
                  <h5>{val.title}</h5>
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
        {/* End .col */}
      </div>
    </>
  );
}
