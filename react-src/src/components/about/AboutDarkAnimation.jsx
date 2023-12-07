import React, { useContext } from "react";
import { PostsContext } from "../../context/posts.context";
import resume from "../../assets/images/resume.docx";

const About = () => {
  const { media, loadingMedia } = useContext(PostsContext);

  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-box dark-img-box">
            {loadingMedia ? (
              <p>Loading...</p>
            ) : (
              <img src={media[2].source_url} alt="developer head shot"></img>
            )}
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-dealay="100"
        >
          <div className="typo-box about-me">
            <h3>Matthew Alvarez</h3>
            <h5>
              A <span className="color-theme">Full Stack Developer</span> based
              in <span className="color-theme">New York</span>
            </h5>
            <p>
              Crafting exceptional digital experiences is my forte. As a
              full-stack developer, I specialize in designing stylish and modern
              websites and web services that captivate users. With expertise in
              React, Node, and various technologies, I bring innovation and
              proficiency to every project. Explore my portfolio for a showcase
              of my creative prowess – let's bring your ideas to life!
            </p>
            <div className="row about-list">
              <div className="col-md-12">
                <div className="media">
                  <label>E-mail</label>
                  <p>mattalvarez354@yahoo.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>516-252-2329</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>New York, NY, USA</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href={resume} download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
