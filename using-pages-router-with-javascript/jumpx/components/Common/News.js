import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../public/images/blog/blog1.png";
import blogImg2 from "../../public/images/blog/blog2.png";
import blogImg3 from "../../public/images/blog/blog3.png";

const News = () => {
  return (
    <>
      <section className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Latest Blog</span>
            <h2>Our Recent Blog</h2>
            <p>
              Stay updated with the latest insights, trends, and innovations in
              technology, business, and beyond. Explore articles crafted to
              inspire and inform.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg1}
                      alt="Is Machine Learning Right For You"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>20 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/news-grid">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Is Machine Learning Right For You?</h3>
                  </Link>

                  <p>
                    Discover how machine learning can transform your business.
                    Learn about its applications, benefits, and whether it's
                    the right fit for your goals.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg2}
                      alt="The State Of Artificial Intelligence"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>21 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/news-grid">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 3 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>The State Of Artificial Intelligence</h3>
                  </Link>

                  <p>
                    Explore the latest advancements in AI, its impact on
                    industries, and how it's shaping the future of technology
                    and society.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg3}
                      alt="Our Company Machine Learning"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>22 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/news-grid">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 4 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Our Company Machine Learning Initiatives</h3>
                  </Link>

                  <p>
                    Learn how our company leverages machine learning to deliver
                    innovative solutions, streamline processes, and enhance
                    customer experiences.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default News;
