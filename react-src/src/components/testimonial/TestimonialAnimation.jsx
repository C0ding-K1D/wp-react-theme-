import React, { useContext } from "react";
import { PostsContext } from "../../context/posts.context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const { loadingMedia, media } = useContext(PostsContext);

  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      desc: `  Matthew has been an invaluable asset to our team, showcasing a remarkable blend of technical expertise, innovation, and dedication. His proficiency in the field of technology is impressive, and he has repeatedly demonstrated his ability to tackle complex technical challenges with ingenuity and precision. Matthew’s work has consistently delivered outstanding results, and his attention to detail, problem-solving skills, and commitment to staying at the forefront of industry trends make him an indispensable team member.`,
      reviewerName: "Jennifer Dusovic",
    },
    {
      desc: ` Matthew Alvarez is a high performing software engineer. We worked together to define and develop a complex portal to improve developer experience across the enterprise. He is fully capable of taking abstract requirements and developing a programmatically sound application solution. Matt is a smart and passion engineer who can 10x on any assigned project. Working with Matt was a true highlight. Put this guy to work.`,
      reviewerName: "Allan Latty",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {TestimonilContent.map((testimonial, index) => (
          <div
            key={index}
            className="testmonial-box media"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="avatar">
              {loadingMedia ? (
                <p>Loading...</p>
              ) : (
                <img src={media[index].source_url} alt="review comments" />
              )}
            </div>

            <div className="testmonial-text media-body">
              <p>{testimonial.desc}</p>
              <div className="testmonial-info">
                <h6>{testimonial.reviewerName}</h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
