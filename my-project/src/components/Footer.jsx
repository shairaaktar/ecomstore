// import React from "react";
// import styled from 'styled-components'

// const Footer=()=>{
//     return(
//       <>
//        <div className='bg-base-200'>
//         <div className=" align-element">
//         <footer className="footer bg-base-200 text-base-content p-10 ">
//   {/* <nav>
//     <h6 className="footer-title">Services</h6>
//     <a className="link link-hover">Branding</a>
//     <a className="link link-hover">Design</a>
//     <a className="link link-hover">Marketing</a>
//     <a className="link link-hover">Advertisement</a>
//   </nav> */}
//   <aside>
//     <svg
//       width="50"
//       height="50"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       className="fill-current">
//       <path
//         d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//     </svg>
//     <p>
//       ACME Industries Ltd.
//       <br />
//       Providing reliable tech since 1992
//     </p>
//   </aside>
//   <nav>
//     <h6 className="footer-title">OUR STORES</h6>
//     <a className="link link-hover">New York</a>
//     <a className="link link-hover">London SF</a>
//     <a className="link link-hover">Cockfosters BP</a>
//     <a className="link link-hover">Los Angeles</a>
//     <a className="link link-hover">Chicago</a>
//     <a className="link link-hover">Las Vegas</a>
//   </nav>
//   <nav>
//     <h6 className="footer-title">USEFUL LINKS</h6>
//     <a className="link link-hover">Privacy Policy</a>
//     <a className="link link-hover">Returns</a>
//     <a className="link link-hover">Terms & Condition</a>
//     <a className="link link-hover">Contact Us</a>
//     <a className="link link-hover">Latest News</a>
//     <a className="link link-hover">Our Sitemap</a>
//   </nav>
//   <form>
//     <h6 className="footer-title">Newsletter</h6>
//     <fieldset className="form-control w-80">
//       <label className="label">
//         <span className="label-text">Enter your email address</span>
//       </label>
//       <div className="join">
//         <input
//           type="text"
//           placeholder="username@site.com"
//           className="input input-bordered join-item" />
//         <button className="btn btn-primary join-item">Subscribe</button>
//       </div>
//     </fieldset>
//   </form>
// </footer>


//         </div>
        

//       </div>
//       <div className='bg-base-200'>
//         <div className="navbar align-element">
//         <footer className="footer  text-neutral-content items-center p-4">
//   <aside className="grid-flow-col items-center">
//     {/* <svg
//       width="36"
//       height="36"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       className="fill-current">
//       <path
//         d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//     </svg> */}
//     <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
//   </aside>
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//       </svg>
//     </a>
//   </nav>
// </footer>

//         </div>
        
//       </div>
//       </>
     
// //         <div className="bg-neutral">
// //         <footer className="footer  bg-base-200 text-base-content rounded p-10">
// //   <nav className="grid grid-flow-col gap-4">
// //     <a className="link link-hover  " href="about">About us</a>
// //     <a className="link link-hover">Contact</a>
// //     <a className="link link-hover">Jobs</a>
// //     {/* <a className="link link-hover">Press kit</a> */}
// //   </nav>
// //   <nav>
// //     <div className="grid grid-flow-col gap-4 ">
// //       <a>
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="24"
// //           height="24"
// //           viewBox="0 0 24 24"
// //           className="fill-current">
// //           <path
// //             d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
// //         </svg>
// //       </a>
// //       <a>
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="24"
// //           height="24"
// //           viewBox="0 0 24 24"
// //           className="fill-current">
// //           <path
// //             d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
// //         </svg>
// //       </a>
// //       <a>
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="24"
// //           height="24"
// //           viewBox="0 0 24 24"
// //           className="fill-current">
// //           <path
// //             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
// //         </svg>
// //       </a>
// //     </div>
// //   </nav>
// //   <aside>
// //     <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
// //   </aside>
// // </footer>
// // </div>


// //         <div className="bg-neutral">
// //         <Wrapper>
// //             <section>

// //         <div className="w-layout-blockcontainer container w-container">

// //             <div className='flexbox footer'>
// //             <div className='footer-colum first'>
// //         <p>LOGO</p>
// //         <div>The only invested plan you'll ever need</div>
        
    
// //       </div>  
// //       <div className='footer-column'></div>
// //       <div className='footer-column'>
// //         <h3 className='heading-6'>Product</h3>
// //         <a>Premium</a>
// //         <a>What's new</a>
// //         <a>Learn</a>
        
// //       </div>
// //       <div className='footer-column'>
// //         <h3 className='heading-6'>Team</h3>
// //         <a>About us</a>
// //         <a>Support</a>
// //       </div>
// //       <div className='footer-column'>
// //         <h3 className='heading-6'>Contact Us</h3>
// //         <a>info@stock.com</a>
// //         <a>01*********</a>
// //       </div>

// //          </div>
       
// //        <h5>&copy;{new Date().getFullYear()}
// //        <span>
// //            ComfySloth
// //        </span>
// //        </h5>
// //        <h5>All rights reserved</h5>
// //        </div>
// //        </section>
// //    </Wrapper>
// //    </div>
//     )
 
    
// }

// // const Wrapper=styled.footer`

// // //  height:5rem;
// // //  display:flex;
// // //  flex-direction:column;
// // //  justify-content:center;
// // //  align-items:center;
// // //  background:var(--clr-black)'
// // //  text-align:center;
// // //  span{
// // //   color:var(--clr-primary-5);
// // //  }
// //    section{
// //     // margin-top:250px;
// //     padding:5vh 60px 8vh;
// //     display:block;
// //     padding-bottom:8vh;
// //   }
// //   .w-layout-blockcontainer{
// //     max-width:940px;
// //     margin-left;auto;
// //     margin-right:auto;
// //     display:block;
// //   }
// //  h5{
// //  color:var(--clr-white);
// // //  margin:0.2rem;

// //  font-weight:400;
// //  text-transform:none;
// //  line-height:1.25
// //  }
// //  .container{
    
// //     max-width:1000px;
// //     flex-direction: row;
// //     margin-top:0;
// //     margin-left:auto;
// //     margin-right:auto;
// //     padding-top:40px;
// //     padding-left:0;
// //   }
// //     .h3{
// //     text-he
// //     }
// //   .flexbox{
// //     flex-direction:row;
// //     justify-content:space-between;
// //     align-items:center;
// //      margin:-30px 5px 0;
// //     display:flex;

// //   }
// //      .footer-column{
// //     width:16.6667%;
// //     height:200px;
// //     flex-direction:column;
// //     align-items:flex-start;
// //     margin-top:30px;
// //     // margin-left:10px;
// //     // margin-right:10px;
// //     display:flex;
// //   }
// //    .footer-column.first{
// //      flex-direction:column;
// //      align-items:flex-start;
   
// //      display:flex;
// //    }

// //   h5 {
// //     color: var(--clr-white);
// //     // margin: 0.1rem;

// //     font-weight: 400;
// //     text-transform: none;
// //     line-height: 1.25;
// //   }
// //       @media (min-width: 776px) {
// //     flex-direction: row;
// //   }
// // `

// export default Footer;

import React from "react";
import styled from "styled-components";
import {InstagramOutlined} from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="bg-neutral">
          <div className="align-element">
            <footer className="footer bg-neutral text-base-content text-white p-10 ">
              <div className="footer-colum first">
              <aside>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-current"
                >
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                 House:5, Shah Makdum Avenue, Uttara Sector: 12 dhaka-1230 Bangladesh
                  <br />
                 
                </p>
                </aside>  
              
                <div className="grid grid-flow-col gap-4">
                
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" text-blue-500 hover:text-blue-500 transition duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    </svg>
  </a>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="fill-current text-pink-500 hover:text-pink-700 transition duration-300"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.976 1.254 2.243 1.316 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.975.976-2.243 1.254-3.608 1.316-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.976-.975-1.254-2.243-1.316-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.975-.976 2.243-1.254 3.608-1.316 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.67.014-4.947.072-1.284.059-2.452.325-3.351 1.224-.899.899-1.165 2.067-1.224 3.351-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.059 1.284.325 2.452 1.224 3.351.899.899 2.067 1.165 3.351 1.224 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.284-.059 2.452-.325 3.351-1.224.899-.899 1.165-2.067 1.224-3.351.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.284-.325-2.452-1.224-3.351-.899-.899-2.067-1.165-3.351-1.224-1.277-.058-1.688-.072-4.947-.072z" />
          <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-10.845c-.796 0-1.441-.645-1.441-1.441 0-.796.645-1.441 1.441-1.441s1.441.645 1.441 1.441c0 .796-.645 1.441-1.441 1.441z" />
        </svg>
      </a>
      <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="fill-current text-green-500 hover:text-green-700 transition duration-300"
        >
          <path d="M12.014 2c-5.523 0-9.986 4.465-9.986 9.986 0 1.761.461 3.485 1.335 4.985l-1.442 5.278 5.451-1.431c1.458.839 3.125 1.29 4.826 1.29 5.522 0 9.986-4.463 9.986-9.986 0-5.522-4.464-9.986-9.986-9.986zm-4.441 14.447l-.318.318-3.285.86.86-3.285.318-.318c-.391-.745-.62-1.588-.62-2.436 0-4.142 3.368-7.511 7.511-7.511 4.141 0 7.511 3.368 7.511 7.511 0 4.141-3.368 7.511-7.511 7.511-1.027 0-2.027-.2-2.961-.592l.013.009zm6.482-2.229c-.15-.075-.891-.44-1.03-.489-.14-.048-.241-.075-.342.075-.1.148-.391.487-.48.586-.087.1-.174.112-.323.037-.149-.074-.631-.232-1.203-.74-.443-.394-.744-.878-.832-1.026-.086-.149-.009-.228.065-.303.067-.065.149-.173.224-.261.074-.087.099-.149.15-.248.05-.099.025-.186-.012-.261-.037-.075-.342-.828-.469-1.134-.122-.296-.248-.256-.342-.261-.1-.005-.186-.006-.286-.006-.099 0-.261.037-.398.186-.136.148-.522.507-.522 1.23 0 .722.533 1.421.608 1.52.074.099 1.046 1.598 2.536 2.243.355.152.632.243.849.31.356.113.681.097.937.059.285-.043.891-.365 1.017-.717.125-.352.125-.654.087-.717-.037-.062-.14-.1-.29-.174z" />
        </svg>
      </a>
      </div>
      </div>
    
              <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Guides</a>
                {/* <a className="link link-hover">Los Angeles</a>
                <a className="link link-hover">Chicago</a>
                <a className="link link-hover">Las Vegas</a> */}
              </nav>
              <nav>
                <h6 className="footer-title">USEFUL LINKS</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Returns</a>
                <a className="link link-hover">Terms & Condition</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Latest News</a>
                <a className="link link-hover">Our Sitemap</a>
              </nav>
              <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
               
     <a
      href="mailto:youremail@example.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black-500 hover:text-red-700 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.511l-10 6.248L2 6.511V6h20zM2 18V8.672l10 6.249 10-6.248V18H2z" />
      </svg>
    </a>
                  <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered join-item"
                    />
                    <button className="btn btn-primary join-item">
                      Subscribe
                    </button>
                  </div>
                </fieldset>
              </form>
            </footer>
          </div>
        </div>
        <div className="bg-neutral">
          <div className="navbar align-element">
            <footer className="footer  items-center p-4">
              <aside className="grid-flow-col items-center text-white">
                <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
              </aside>
              {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"> */}
                {/* <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a> */}
                {/* <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a> */}
                {/* <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a> */}
                 {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" text-blue-500 hover:text-blue-500 transition duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    </svg>
  </a>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="fill-current text-pink-500 hover:text-pink-700 transition duration-300"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.976 1.254 2.243 1.316 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.975.976-2.243 1.254-3.608 1.316-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.976-.975-1.254-2.243-1.316-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.975-.976 2.243-1.254 3.608-1.316 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.67.014-4.947.072-1.284.059-2.452.325-3.351 1.224-.899.899-1.165 2.067-1.224 3.351-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.059 1.284.325 2.452 1.224 3.351.899.899 2.067 1.165 3.351 1.224 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.284-.059 2.452-.325 3.351-1.224.899-.899 1.165-2.067 1.224-3.351.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.284-.325-2.452-1.224-3.351-.899-.899-2.067-1.165-3.351-1.224-1.277-.058-1.688-.072-4.947-.072z" />
          <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-10.845c-.796 0-1.441-.645-1.441-1.441 0-.796.645-1.441 1.441-1.441s1.441.645 1.441 1.441c0 .796-.645 1.441-1.441 1.441z" />
        </svg>
      </a>
      <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="fill-current text-green-500 hover:text-green-700 transition duration-300"
        >
          <path d="M12.014 2c-5.523 0-9.986 4.465-9.986 9.986 0 1.761.461 3.485 1.335 4.985l-1.442 5.278 5.451-1.431c1.458.839 3.125 1.29 4.826 1.29 5.522 0 9.986-4.463 9.986-9.986 0-5.522-4.464-9.986-9.986-9.986zm-4.441 14.447l-.318.318-3.285.86.86-3.285.318-.318c-.391-.745-.62-1.588-.62-2.436 0-4.142 3.368-7.511 7.511-7.511 4.141 0 7.511 3.368 7.511 7.511 0 4.141-3.368 7.511-7.511 7.511-1.027 0-2.027-.2-2.961-.592l.013.009zm6.482-2.229c-.15-.075-.891-.44-1.03-.489-.14-.048-.241-.075-.342.075-.1.148-.391.487-.48.586-.087.1-.174.112-.323.037-.149-.074-.631-.232-1.203-.74-.443-.394-.744-.878-.832-1.026-.086-.149-.009-.228.065-.303.067-.065.149-.173.224-.261.074-.087.099-.149.15-.248.05-.099.025-.186-.012-.261-.037-.075-.342-.828-.469-1.134-.122-.296-.248-.256-.342-.261-.1-.005-.186-.006-.286-.006-.099 0-.261.037-.398.186-.136.148-.522.507-.522 1.23 0 .722.533 1.421.608 1.52.074.099 1.046 1.598 2.536 2.243.355.152.632.243.849.31.356.113.681.097.937.059.285-.043.891-.365 1.017-.717.125-.352.125-.654.087-.717-.037-.062-.14-.1-.29-.174z" />
        </svg>
      </a> */}
              {/* </nav> */}
            </footer>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.footer`
  .footer-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    
  }

    nav{
    // margin-right:1rem;
    // margin-left:1rem;
    padding-right:3rem;
     padding-left:3rem;
   
    }
      .footer-column.first{
    flex-direction:column;
    align-items:flex-start;
    margin-top:5px;
    margin-left:0;
    display:flex;
  }
    aside{
     padding-right:4rem;
     padding-bottom:2rem;
     
    }
`;

export default Footer;
