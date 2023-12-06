import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2020-2021</span>
              <h6>Full Stack Engineer</h6>
              <p>Nucamp</p>
            </li>

            <li>
              <span className="dark-bg">2014-2016</span>
              <h6>Graphic Design</h6>
              <p>Briarcliffe College</p>
            </li>

            {/* <li>
              <span className="dark-bg">2010-2012</span>
              <h6>Visual Designer</h6>
              <p>Jakarta Design Institute</p>
            </li> */}
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2022-2023</span>
              <h6>Software Engineer</h6>
              <p>TD Bank</p>
            </li>

            <li>
              <span className="theme-bg">2022-2023</span>
              <h6>Software Engineer</h6>
              <p>Veroskills</p>
            </li>

            <li>
              <span className="theme-bg">2017-2021</span>
              <h6>Market Asset Protection Manager</h6>
              <p>Walmart</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Node js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 86 + "%" }}
                >
                  <span>86%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Postman</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 80 + "%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>UI/UX</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 88 + "%" }}
                >
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Git and Github</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
