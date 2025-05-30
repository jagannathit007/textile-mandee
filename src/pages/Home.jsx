import { FiSearch } from "react-icons/fi";
import googleplay from "../assets/googleplay.png"
import appstore from "../assets/appstore.png"
import { RiArrowDownDoubleFill } from "react-icons/ri";
import category1 from "../assets/category1.png"
import category2 from "../assets/category2.png"
import category3 from "../assets/category3.png"
import category4 from "../assets/category4.png"
import category5 from "../assets/category5.png"
import scanQR from "../assets/scanQR.png"
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Home = () => {
  return (
    <>
        <section className="main_hero">
            <div className="container-fluid">
                <div className="hero py-4">
                  <div className="hero_search text-white rounded mx-auto py-3 fs-5 me-lg-5 px-5 fw-bold position-relative">
                    <FiSearch className="text-white fs-5 position-absolute hero_search_icon"/> <input type="text" placeholder="Search Members" />
                  </div>
                  <div className="inner_hero text-center text-white">
                    <h1>TexTile Mandee</h1>
                    <h2>India’s <span>#1</span> <br/> <span>Textile</span> Business app</h2>
                    <p className="my-5">India’s First Textile B2B Digital Hub</p>
                    <div className="hero_inner_store gap-3 pt-xl-4">
                      <img src={googleplay} alt="google play store" />
                      <img src={appstore} alt="apple store" />
                    </div>
                  </div>
                  <button className="hero_down text-white border-0 d-flex align-items-center mx-auto mb-3 fw-medium fs-5">Scroll Down <RiArrowDownDoubleFill /></button>
                </div>
            </div>
        </section>

        <section className="main_category">
            <div className="container-fluid">
              <div className="category">
                <div className="text-center">
                  <h1>Featured Categories</h1>
                  <p>Discover powerful features inside the app that are designed to revolutionize how you do business — smarter, faster, and better.</p>
                </div>

                <div className="category_slider d-flex align-items-end justify-content-sm-between justify-content-center mt-lg-5 mt-4">
                  <div className="category_small category_slide_inner">
                    <div className="category_inner_img">
                      <img src={category1} alt="category images" />
                    </div>
                    <div className="category_inner_text d-flex justify-content-between">
                      <h6>Outstation Broker</h6>
                      <a href="">View more</a>
                    </div>
                  </div>
                  <div className="category_medium category_slide_inner">
                    <div className="category_inner_img">
                      <img src={category2} alt="category images" />
                    </div>
                    <div className="category_inner_text d-flex justify-content-between">
                      <h5>Surat Trader</h5>
                      <a href="">View more</a>
                    </div>
                  </div>
                  <div className="category_big category_slide_inner">
                    <div className="category_inner_img">
                      <img src={category3} alt="category images" />
                    </div>
                    <div className="category_inner_text d-flex justify-content-between">
                      <h5>Value Addition</h5>
                      <a href="">View more</a>
                    </div>
                  </div>
                  <div className="category_medium category_slide_inner">
                    <div className="category_inner_img">
                      <img src={category4} alt="category images" />
                    </div>
                    <div className="category_inner_text d-flex justify-content-between">
                      <h5>Weaver</h5>
                      <a href="">View more</a>
                    </div>
                  </div>
                  <div className="category_small category_slide_inner">
                    <div className="category_inner_img">
                      <img src={category5} alt="category images" />
                    </div>
                    <div className="category_inner_text d-flex justify-content-between">
                      <h6>Buyer</h6>
                      <a href="">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section className="main_download">
          <div className="container">
            <div className="download position-relative p-xl-5 p-4">
              <h1>Download the app now !</h1>
              <p>Experience seamless online business <br/> only on the TexTile Mandee app</p>
              <div className="download_image gap-3 pt-xl-4 d-flex">
                      <img src={googleplay} alt="google play store" />
                      <img src={appstore} alt="apple store" />
              </div>
              <div className="qrscan">
                <img src={scanQR} alt="QR scan" />
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black text-white">
          <div className="container">
            <div className="footer d-lg-flex justify-content-between align-items-center mb-5">
              <div>
                <h1>TexTile Mandee</h1>
                <p className="mt-3">Join 1000+ textile professionals using TexTile Mandee.</p>
                <p>India’s First Textile B2B Digital Hub</p>
              </div>
              <div className="text-end mt-4 mt-lg-0">
                <div className="footer_image gap-3 pt-xl-4 d-flex">
                      <img src={googleplay} alt="google play store" />
                      <img src={appstore} alt="apple store" />
                </div>
                <div className="mt-lg-3 mt-4 gap-3 d-flex justify-content-lg-end">
                  <FaInstagram className="fs-3"/>
                  <FaFacebookSquare className="fs-3"/>
                  <FaXTwitter className="fs-3"/>
                  <FaLinkedin className="fs-3"/>
                </div>
              </div>
            </div>
            <hr className="mx-lg-5 border-2"/>
            <p className="mb-0 footer_bar">By continuing past this page, you agree to our <span>Terms of Service, Cookie Policy, Privacy Policy </span> and Content Policies. All trademarks are properties of their respective owners 2025 <span>©</span> TexTile Mandee™ Ltd. All rights reserved.</p>
          </div>
        </footer>
    </>
  )
}

export default Home
