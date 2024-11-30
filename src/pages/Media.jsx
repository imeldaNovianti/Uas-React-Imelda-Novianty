import React from 'react';
import { Link } from 'react-router-dom';

export default function Media() {
  return (
    <div className="media-container">
      <div className="media-header">
        <h4>Welcome to our Press Office</h4>
        <p>
          For any press-related inquiries, please get in touch with us at 
          <a href="mailto:pressoffice@imeldaCraftGalleryflowers.com" className="email-link">
            pressoffice@ImeldaCraftGallery.com
          </a>. Our editorial guidelines can be found below.
        </p>
      </div>

      <div className="media-body">
        {/* Section 1 */}
        <div className="media-row">
          <div className="media-section brand-assets">
            <h4>BRAND ASSETS</h4>
            <p>Our logo and brand guidelines can be found <Link to="/brand-assets" className="media-link">here</Link>.</p>
          </div>

          <div className="media-section image-library">
            <h4>IMAGE LIBRARY</h4>
            <p>All our glorious blooms can be found <Link to="/image-library" className="media-link">here</Link>.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="media-row">
          <div className="media-section editorial-guidelines">
            <h4>Editorial Guidelines</h4>
            <p>All editorial requests and questions can be emailed directly to 
              <a href="mailto:pressoffice@imeldaCraftGalleryflowers.com" className="media-link">
                pressoffice@imeldaCraftGalleryflowers.com
              </a>.
            </p>
          </div>

          <div className="media-section press-samples">
            <h4>Press Samples, Gifts & Competition Prizes</h4>
            <p>If you would like to feature us in an upcoming editorial, product roundup, or need donation of flowers as a competition prize, we can accommodate these requests.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="media-row">
          <div className="media-section brand-collaborations">
            <h4>Brand Collaborations</h4>
            <p>We are actively collaborating with brands that share the same values. If you are interested, please get in touch.</p>
          </div>

          <div className="media-section bloggers-influencers">
            <h4>Bloggers & Influencers</h4>
            <p>We are not currently running any sponsored blog or social media content promotions. If you'd like a press sample, feel free to reach out.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="media-row">
          <div className="media-section editorials-tv">
            <h4>Editorials & TV Production</h4>
            <p>We are happy to provide flowers for photo or video editorials, fashion shoots, or TV productions.</p>
          </div>
        </div>
      </div>

      <div className="back-to-about">
        <Link to="/about" className="back-link">Back to About Us</Link>
        <Link to="/home" className="back-link">Back to home</Link>

      </div>
    </div>
  );
}
