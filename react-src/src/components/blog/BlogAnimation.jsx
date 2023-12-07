import React, { useState, useEffect, useContext } from "react";
import { PostsContext } from "../../context/posts.context";
import Modal from "react-modal";
import Contact from "../../components/contact/ContactAnimation";
import cancel from "../../assets/images/cancel.svg";
// import axios from "axios";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const { posts, media, loadingMedia, loadingPosts } = useContext(PostsContext);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 col-md-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-post" onClick={toggleModalOne}>
            <div className="blog-img">
              <div className="data">
                <span>28</span>
                <small>Sep</small>
              </div>
              {loadingMedia ? (
                <p>Loading...</p>
              ) : (
                <img src={media[5].source_url} alt="blog post"></img>
              )}
            </div>
            {/* End blog-img */}

            <div className="blog-info">
              {loadingPosts ? (
                <p>Loading...</p>
              ) : (
                <h6>{posts[2].title.rendered}</h6>
              )}
              {loadingPosts ? (
                <p>Loading...</p>
              ) : (
                <p>{posts[2].excerpt.rendered.replace(/^<p>|<\/p>$/g, "")}</p>
              )}

              <div className="btn-bar">Read More</div>
            </div>
            {/* End blog-info */}
          </div>
          {/* End blog-post */}
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-lg-4 col-md-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="blog-post" onClick={toggleModalTwo}>
            <div className="blog-img">
              <div className="data">
                <span>27</span>
                <small>Sep</small>
              </div>

              {loadingMedia ? (
                <p>Loading...</p>
              ) : (
                <img src={media[4].source_url} alt="blog post"></img>
              )}
            </div>
            {/* End blog-img */}

            <div className="blog-info">
              {loadingPosts ? (
                <p>Loading...</p>
              ) : (
                <h6>{posts[1].title.rendered}</h6>
              )}
              {loadingPosts ? (
                <p>Loading...</p>
              ) : (
                <p>{posts[1].excerpt.rendered.replace(/^<p>|<\/p>$/g, "")}</p>
              )}
              <div className="btn-bar">Read More</div>{" "}
            </div>
            {/* End blog-info */}
          </div>
          {/* End blog-post */}
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-lg-4 col-md-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-post" onClick={toggleModalThree}>
            <div className="blog-img">
              <div className="data">
                <span>26</span>
                <small>Sep</small>
              </div>

              {loadingMedia ? (
                <p>Loading...</p>
              ) : (
                <img src={media[3].source_url} alt="blog post"></img>
              )}
            </div>
            {/* End blog-img */}

            <div className="blog-info">
              {loadingPosts ? (
                <p>Loading...</p>
              ) : (
                <h6>{posts[0].title.rendered}</h6>
              )}
              {loadingPosts ? (
                <p>Loading...</p>
              ) : (
                <p>{posts[0].excerpt.rendered.replace(/^<p>|<\/p>$/g, "")}</p>
              )}
              <div className="btn-bar">Read More</div>
            </div>
            {/* End blog-info */}
          </div>
          {/* End blog-post */}
        </div>
        {/* End .col for blog-1 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  {loadingMedia ? (
                    <p>Loading...</p>
                  ) : (
                    <img src={media[5].source_url} alt="blog post"></img>
                  )}
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    {loadingPosts ? (
                      <p>Loading...</p>
                    ) : (
                      <h2>{posts[2].title.rendered}</h2>
                    )}
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-1.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MATTHEW</label>
                        <span>28 SEP 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    {loadingPosts ? (
                      <p>Loading...</p>
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: posts[2].content.rendered,
                        }}
                      ></div>
                    )}
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  {loadingMedia ? (
                    <p>Loading...</p>
                  ) : (
                    <img src={media[4].source_url} alt="blog post"></img>
                  )}
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    {loadingPosts ? (
                      <p>Loading...</p>
                    ) : (
                      <h2>{posts[1].title.rendered}</h2>
                    )}
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MATTHEW</label>
                        <span>27 SEP 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    {loadingPosts ? (
                      <p>Loading...</p>
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: posts[1].content.rendered,
                        }}
                      ></div>
                    )}
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  {loadingMedia ? (
                    <p>Loading...</p>
                  ) : (
                    <img src={media[3].source_url} alt="blog post"></img>
                  )}
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    {loadingPosts ? (
                      <p>Loading...</p>
                    ) : (
                      <h2>{posts[0].title.rendered}</h2>
                    )}
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MATTHEW</label>
                        <span>26 SEP 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    {loadingPosts ? (
                      <p>Loading...</p>
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: posts[0].content.rendered,
                        }}
                      ></div>
                    )}
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}
    </>
  );
};

export default Blog;
