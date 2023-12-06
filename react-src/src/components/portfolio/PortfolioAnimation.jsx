import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import item from "../../assets/images/portfolio/1.jpg";

const tabList = ["All", "Frontend", "Full Stack"];
const AllPortfolioContent = [
  {
    img: `${item}`,
    title: "Motion Graphy",
    subTitle: "Android App",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
  },
  {
    img: `${item}`,
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Elearning App",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: `${item}`,
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
  {
    img: `${item}`,
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
    portfolioLink:
      "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    img: `${item}`,
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: `${item}`,
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];
const BrandingPortfolioContent = [
  {
    img: `${item}`,
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },

  {
    img: `${item}`,
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: `${item}`,
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
];

const PhotographyPortfolioContent = [
  {
    img: `${item}`,
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: `${item}`,
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex justify-content-center">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <Gallery>
            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {AllPortfolioContent.map((val, i) => (
                  <div
                    className="col-sm-6 col-lg-4 grid-item product"
                    key={i}
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={val.delayAnimation}
                  >
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {BrandingPortfolioContent.map((val, i) => (
                  <div
                    className="col-sm-6 col-lg-4 grid-item product"
                    key={i}
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={val.delayAnimation}
                  >
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {PhotographyPortfolioContent.map((val, i) => (
                  <div
                    className="col-sm-6 col-lg-4 grid-item product"
                    key={i}
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={val.delayAnimation}
                  >
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </Gallery>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioAnimation;
