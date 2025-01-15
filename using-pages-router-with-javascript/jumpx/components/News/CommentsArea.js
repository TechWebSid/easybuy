import React from "react";
import Link from "next/link";
import Image from "next/image";

import userImg1 from "../../public/images/blog-details/comment1.jpg";
import userImg2 from "../../public/images/blog-details/comment2.jpg";
import userImg3 from "../../public/images/blog-details/comment3.jpg";

const CommentsArea = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">2 Comments:</h3>

        <ol className="comment-list">
          <li className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={userImg1}
                    className="avatar"
                    alt="image"
                    width={70}
                    height={70}
                  />
                  <b className="fn">Aarav</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>March 15, 2024 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Great insights on the evolution of web development! The section about edge computing 
                  particularly resonates with my experience. We've seen significant performance improvements 
                  after implementing edge functions in our latest project.
                </p>
              </div>

              <div className="reply">
               
              </div>
            </div>

            <ol className="children">
              <li className="comment">
                <div className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src={userImg2}
                        className="avatar"
                        alt="image"
                        width={70}
                        height={70}
                      />
                      <b className="fn">Prakhar</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <span>March 15, 2024 at 11:15 am</span>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      I agree with your point about edge computing. Have you explored using 
                      Vercel's Edge Functions or Cloudflare Workers? We've found them incredibly 
                      powerful for handling real-time data processing while maintaining low latency 
                      across different regions.
                    </p>
                  </div>

                  <div className="reply">
                  
                  </div>
                </div>
              </li>
            </ol>
          </li>

          <li className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={userImg3}
                    className="avatar"
                    alt="image"
                    width={70}
                    height={70}
                  />
                  <b className="fn">Shreya</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>March 15, 2024 at 11:45 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  The emphasis on sustainability in web development is crucial. We've recently 
                  started implementing green hosting solutions and optimizing our image delivery 
                  pipeline. It's amazing to see how these changes not only benefit the environment 
                  but also improve our site's performance.
                </p>
              </div>

              <div className="reply">
              
              </div>
            </div>
          </li>
        </ol>

        {/* Comment form */}
        <div className="comment-respond">
          <h3 className="comment-reply-title">Leave a Reply</h3>

          <form className="comment-form">
            <p className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              Required fields are marked <span className="required">*</span>
            </p>
            <p className="comment-form-author">
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required="required"
              />
            </p>
            <p className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required="required" />
            </p>
            <p className="comment-form-url">
              <label>Website</label>
              <input type="url" id="url" name="url" />
            </p>
            <p className="comment-form-comment">
              <label>Comment</label>
              <textarea
                name="comment"
                id="comment"
                cols="45"
                rows="5"
                required="required"
              ></textarea>
            </p>
            <p className="form-submit text-center">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value="Post A Comment"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentsArea;
