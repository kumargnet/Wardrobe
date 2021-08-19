

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
let mainLogo = '/assets/images/logo.png';
const Header = (props) => {
const [isOpen, setIsOpen] = React.useState(false);
const openModal = () => {
setIsOpen(true);
}
const closeModal = () => {
setIsOpen(false);
}
const [isOpen2, setIsOpen2] = React.useState(false);
const openModal2 = () => {
setIsOpen2(true);
}
const closeModal2 = () => {
setIsOpen2(false);
}
return (
<>
{/*------------Page Header Start ------------------*/}
<section className=" navbar-fixed-top" style={{ backgroundImage: ")" }}>
<div className="container">
   <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
         <Link to="/" className="main-nav__logo navbar-brand">
         <img src={mainLogo} className="main-logo" alt="Awesome Image" />
         </Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom_navber">
               <li className="nav-item active">
                  <Link to="/">
                  Home</Link>
               </li>
               <li className="nav-item">
                  <Link to="/Privacy1" >
                  About Us</Link>
               </li>
               <li className="nav-item">
                  <Link to="/Terms1">
                  Mission</Link>
               </li>
               <li className="nav-item">
                  <Link className="get_app" onClick={openModal}>
                  Sign In</Link>
               </li>
               <li className="nav-item">
                  <Link className="get_app" onClick={openModal2}>
                  Sign up</Link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</div>
</section>

<Modal className="sign_in_model"
   isOpen={isOpen}
   onRequestClose={closeModal}
   >
   <div className="modal-dialog">
      <div className="modal-content  login_signup_modal">
         <div className="row">
            <div className="col-sm-6 login_img">
               <img src="assets/images/login_img.png" />
            </div>
            <div className="col-sm-6">
               <div className="login_details">
                  <h3>Welcome to Strollen</h3>
                  <form>
                     <div className="form-group log_in">
                        <input type="text" placeholder="Email Address" />
                     </div>
                     <div className="form-group log_in">
                        <input type="text" placeholder="Password" />
                     </div>
                     <div className="form-group text-center">
                        <button className="Sign_In">  <a href="search.html" >  Sign In  <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i> </a></button> 
                     </div>
                     <div className="form-group text-center forgot">
                        <p><a href=""> Forgotten your password?</a> </p>
                     </div>
                     <div className="form-group text-center">
                        <p> or</p>
                     </div>
                     <div className="form-group text-cneter face">
                        <p><a href="" > <img src="assets/images/face.png" />  </a> </p>
                        <p><a href="" > <img src="assets/images/face1.png" /> </a></p>
                        <p><a href="" > <img src="assets/images/face2.png" /></a> </p>
                     </div>
                     <div className="form-group text-center new_mem">
                        <p> <span> <a href="" > Haven’t registered yet? </a> </span>  <a href=""> Sign Up </a></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <button type="button" className="close" onClick={closeModal} ><img src="assets/images/close.png" /></button>
      </div>
   </div>
</Modal>




<Modal className="sign_in_model2"
   isOpen={isOpen2}
   onRequestClose={closeModal2}
   >
   <div className="modal-dialog login_signup_modal">
         <div className="modal-content">
            <div className="row">
               <div className="col-sm-6 login_img">
                  <img src="assets/images/login_img2.png" />
               </div>
               <div className="col-sm-6">
                  <div className="login_details">
					<h3>Sign Up</h3>
                     <form className="mt_20">
                     <div className="row">
						<div className="col-md-12">
                        <div className="form-group log_in">
                           <input type="text" placeholder="Company Name" />
                        </div>
                        </div>
						
						<div className="col-md-12">
                        <div className="form-group log_in">
                           <input type="email" placeholder=" Bussiness Email " />
                        </div>
                        </div>
						
						
						
						<div className="col-md-12">
                        <div className="form-group log_in">
                           <input type="password" placeholder="Password" />
                        </div>
                        </div>
						
						<div className="col-md-12">
							<div className="form-group log_in photo_upload" >
								<img src="assets/images/cam.png" />
							   <input type="file" />
							</div>
						</div>
                        
						
						
						<div className="col-md-12">
                        <div className="form-group log_in">
                           <input type="text" placeholder="Meet me at" />
                        </div>
                        </div>
						
						<div className="col-md-12">
							<div className="form-group log_in slect_me" >
								<img src="assets/images/icons.png" />
							   <select> 
									<option> City </option>
							   </select>
							</div>
						</div>
                        
						
						<div className="col-md-12">
							<div className="form-group log_in slect_me">
								<img src="assets/images/icons.png" />
							   <select> 
									<option> State </option>
							   </select>
							</div>
                        </div>
						
						
						
						<div className="col-md-12">
                        <div className="form-group text-center">
                           <button className="Sign_In">  <a href="search.html">  Sign Up  <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i> </a></button>
                        </div>
                        <div className="form-group text-center new_mem">
                           <p> <span>  Already registered? </span>  <a> Sign In </a></p>
                        </div>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
            </div>
            <button type="button" className="close" onClick={closeModal2}><img src="assets/images/close.png" /></button>
         </div>
      </div>
</Modal>

</>
);
}
export default Header;

