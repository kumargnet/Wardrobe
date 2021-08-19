

import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import Header from '../include/Header';
const Home = (props) => {
return (
<>
<Header />
<section className="home_bnr" id="Home">
   <img src="assets/images/bnr_bg.png" width="100%" />
   <div className="home_bnr_content">
      <div className="container">
         <div className="row">
            <div className="col-sm-8">
               <strong>Explore Your clothes <br /> with     Strollen</strong>
               <p>Lorem Ipsum is simply dummy text of the   <br /> printing and    typesetting industry.  </p>
               <div className="bnr_btn">
                  <a href=""><i className="fa fa-apple" aria-hidden="true">  </i> App Store</a>
                  <a href=""><i className="fab fa-google-play" aria-hidden="true">  </i>Google Play </a>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="mobile_img">
                  <img src="assets/images/mobile.png" />
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="about_us" id="About">
   <div className="container">
      <div className="row">
         <div className="col-sm-6">
            <div className="mobile_img1">
               <img src="assets/images/mobile1.png" />
            </div>
         </div>
         <div className="col-sm-6 about_cnt">
            <h1 className="home_title">
               About Us
            </h1>
            <p>Quisque sagittis ut elit eget dictum. Mauris vitae neque et elit tincidunt consequat et in quam. Duis nisi diam, maximus sit amet nisl ac, fringilla bibendum mi. Etiam laoreet sit amet ex lobortis maximus. Sed vehicula dolor sed enim vulputate, id congue turpis tincidunt.</p>
            <a href="" className="view_more">View More</a>
         </div>
      </div>
   </div>
</section>
<section className="about_us" id="Mission">
   <div className="container">
      <div className="row">
         <div className="col-sm-6 about_cnt">
            <h1 className="home_title">
               Mission
            </h1>
            <p>Quisque sagittis ut elit eget dictum. Mauris vitae neque et elit tincidunt consequat et in quam. Duis nisi diam, maximus sit amet nisl ac, fringilla bibendum mi. Etiam laoreet sit amet ex lobortis maximus. Sed vehicula dolor sed enim vulputate, id congue turpis tincidunt.</p>
            <a href="" className="view_more">View More</a>
         </div>
         <div className="col-sm-6">
            <div className="mobile_img1">
               <img src="assets/images/mobile3.png" />
            </div>
         </div>
      </div>
   </div>
</section>
<section className="about_us Amazing" id="Mission1">
   <div className="container">
      <div className="row">
         <div className="col-sm-12 text-center amazing">
            <h1 className="home_title">
               Amazing features to use our app
            </h1>
            <p>
               This is yet another place to highlight feature your great app and talk bit about compatibility<br />
               maybe who knows, the decision is yours to make! Don't be hurry. 
            </p>
         </div>
      </div>
   </div>
</section>
<section className="vio">
   <div className="container">
      <div className="row">
         <div className="col-sm-8 col-sm-offset-2">
            <div className="video1">
               <img src="assets/images/v.png" width="100%" />
            </div>
            <div className="row">
               <div className="col-sm-4">
                  <div className="am_icon">
                     <img src="assets/images/user.png" />
                  </div>
                  <div className="am_icon_cnt">
                     <strong>1971</strong>
                     <p>Happy users</p>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="am_icon">
                     <img src="assets/images/download.png" />
                  </div>
                  <div className="am_icon_cnt">
                     <strong>1002</strong>
                     <p>Downloads</p>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="am_icon">
                     <img src="assets/images/likes.png" />
                  </div>
                  <div className="am_icon_cnt">
                     <strong>1289</strong>
                     <p>Likes</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="about_us screenshot">
   <div className="container mb-4">
      <div className="row">
         <div className="col-sm-12 text-center amazing">
            <h1 className="home_title">
               App Screenshot
            </h1>
            <p>
               This is yet another place to highlight feature your great app and talk bit about compatibility
               maybe who knows, the decision is yours to make! Don't be hurry.  
            </p>
         </div>
      </div>
   </div>
   <img src="assets/images/apps.png" />
</section>
<section className="availabel" id="Get_app">
   <div className="container">
      <div className="row">
         <div className="col-sm-6">
            <div className="mobile2">
               <img src="assets/images/mobile2.png" />
            </div>
         </div>
         <div className="col-sm-6 availble_content1">
            <div className="availble_content">
               <strong>Available on iOS and Android</strong>
               <p>Strollen is the best app landing page which <br />will help you showcase your business.</p>
               <div className="bnr_btn">
                  <a href=""><i className="fa fa-apple" aria-hidden="true">  </i> App Store</a>
                  <a href=""><i className="fab fa-google-play" aria-hidden="true">  </i>Google Play </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="Contact_us" id="Contact">
   <div className="container">
      <div className="row">
         <div className="col-sm-12 text-center amazing">
            <h1 className="home_title">
               Contact Us
            </h1>
         </div>
         <div className="col-sm-7">
            <div className="form_in">
               <form>
                  <div className="col-sm-6">
                     <div className="form-group">
                        <input type="text" name="" placeholder="First Name" className="form-control" />
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="form-group">
                        <input type="text" name="" placeholder="Last Name" className="form-control" />
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="form-group">
                        <input type="text" name="" placeholder="Phone Number" className="form-control" />
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="form-group">
                        <input type="text" name="" placeholder="Email" className="form-control" />
                     </div>
                  </div>
                  <div className="col-sm-12">
                     <div className="form-group">
                        <textarea placeholder="Write message here..." className="form-control"></textarea> 
                     </div>
                  </div>
                  <div className="col-sm-4 col-sm-offset-4">
                     <input type="submit" name="" value="Submit" />
                  </div>
               </form>
            </div>
         </div>
         <div className="col-sm-5">
            <div className="map">
               <img src="assets/images/map.png" />
            </div>
         </div>
      </div>
   </div>
</section>
<footer className="footer">
   <div className="container">
      <div className="row">
         <div className="col-sm-12">
            <p>© 2021 Wardrobe, All Rights Reserved.</p>
         </div>
      </div>
   </div>
</footer>
</>
);
}
export default Home;

