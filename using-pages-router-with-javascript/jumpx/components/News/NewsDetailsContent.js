import React from "react";
import NewsSidebar from "./NewsSidebar";
import Link from "next/link";
import CommentsArea from "./CommentsArea";
import Image from "next/image";

import blogDetailImg from "../../public/images/blog-details/blog-details.jpg";

const NewsDetailsContent = () => {
  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={blogDetailImg}
                    alt="Image"
                    width={900}
                    height={500}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> March 15, 2024
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">Tech Insights Team</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>The Evolution and Future of Web Development: A 2024 Perspective</h3>

                  <p>
                    Web development continues to evolve at an unprecedented pace, 
                    with new frameworks, tools, and methodologies emerging regularly. 
                    As we progress through 2024, the focus has shifted towards creating 
                    more performant, accessible, and sustainable web applications.
                  </p>

                  <p>
                    Modern web development has transcended traditional boundaries, 
                    embracing concepts like JAMstack, serverless architecture, and 
                    AI-powered development tools. Full-stack developers now work with 
                    an extensive ecosystem of technologies, from React and Next.js to 
                    GraphQL and containerization platforms.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                      "The future of web development lies in creating seamless, 
                      performant experiences that prioritize user needs while 
                      maintaining robust security and accessibility standards."
                    </p>
                  </blockquote>

                  <p>
                    One of the most significant shifts in recent years has been the 
                    adoption of edge computing and distributed systems. These technologies 
                    enable developers to deploy applications closer to end-users, 
                    resulting in faster load times and improved user experiences. 
                    Additionally, the rise of Web3 technologies and decentralized 
                    applications has opened new possibilities for creating more 
                    transparent and user-centric platforms.
                  </p>

                  <p>
                    Artificial Intelligence and Machine Learning integration have 
                    become increasingly important in web development. From automated 
                    testing and code generation to intelligent user interfaces and 
                    predictive analytics, AI is reshaping how we build and maintain 
                    web applications.
                  </p>

                  <p>
                    As we look to the future, sustainability and environmental impact 
                    are becoming key considerations in web development. Green hosting, 
                    efficient code practices, and optimized asset delivery are no 
                    longer optional but essential aspects of modern web development.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-share-alt"></i>
                    </span>
                    <Link href="#">Share</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/" target="_blank">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="#">
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Comments Area */}
                <CommentsArea />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailsContent;
