import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="footer-detail">
          <h4>Abstract</h4>
          <p>Branches</p>
        </div>
        <div className="footer-detail">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div className="footer-detail">
          <h4>Community</h4>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribble</p>
          <p>Podcast</p>
        </div>
        <div className="footer-detail">
          <div className="footer-details-1">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Legal</p>
          </div>
          <div className="footer-details-2">
            <p className="heading">Contact Us</p>
            <p className="email-info">info@abstract.com</p>
          </div>
        </div>
      </div>
      <div className="footer-detail-3">
        
        <p>Copyright 2022 </p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
