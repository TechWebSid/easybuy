import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../public/images/blog/blog1.png";
import blogImg2 from "../../public/images/blog/blog2.png";
import blogImg3 from "../../public/images/blog/blog3.png";
import blogImg4 from "../../public/images/blog/blog4.png";
import blogImg5 from "../../public/images/blog/blog5.png";
import blogImg6 from "../../public/images/blog/blog6.png";
import blogImg7 from "../../public/images/blog/blog7.png";
import blogImg8 from "../../public/images/blog/blog8.png";
import blogImg9 from "../../public/images/blog/blog9.png";

const NewsGridCard = () => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg1}
                      alt="Image"
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
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Web Development: Exploring New Technologies</h3>
                  </Link>

                  <p>
                    Discover the latest advancements in web development that are
                    revolutionizing how websites are created, designed, and
                    maintained.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg2}
                      alt="Image"
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
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 3 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>App Development Trends in 2024</h3>
                  </Link>

                  <p>
                    The mobile app development landscape is rapidly evolving
                    with new frameworks and tools that make app creation faster
                    and more efficient than ever before.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg3}
                      alt="Image"
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
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 4 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Digital Marketing: Trends and Strategies</h3>
                  </Link>

                  <p>
                    Learn how digital marketing strategies have evolved in the
                    past year and what approaches will dominate in 2024.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg4}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>23 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>E-Commerce: Boosting Sales with the Right Strategy</h3>
                  </Link>

                  <p>
                    Explore how e-commerce platforms are evolving, and learn
                    strategies that can help boost sales and improve customer
                    retention.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg5}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>24 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>API Integration for Seamless User Experience</h3>
                  </Link>

                  <p>
                    Discover the importance of API integration in modern web
                    and app development, and how it enhances user experiences
                    by enabling smooth data transfer and functionality.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg6}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>25 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Securing Your Business: A Digital Strategy</h3>
                  </Link>

                  <p>
                    Learn how to secure your business through a combination of
                    cybersecurity, cloud solutions, and best practices to keep
                    your data safe.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg7}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>25 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Freelancing: Navigating the Digital Marketplace</h3>
                  </Link>

                  <p>
                    Freelancing is growing rapidly. Learn how to build a
                    sustainable career by navigating the digital marketplace
                    and establishing your brand.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg8}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>26 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 5 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Artificial Intelligence: The Future of Technology</h3>
                  </Link>

                  <p>
                    AI is transforming industries. Explore how businesses are
                    using AI to improve efficiencies, reduce costs, and create
                    new opportunities.
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <Image
                      src={blogImg9}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>27 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 6 Comments
                    </li>
                  </ul>

                  <Link href="/news/news-details">
                    <h3>Building Resilient Infrastructure with Cloud Solutions</h3>
                  </Link>

                  <p>
                    Cloud infrastructure is critical for modern businesses. Learn
                    how businesses are leveraging cloud solutions to ensure
                    resilience and scalability.
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

export default NewsGridCard;
