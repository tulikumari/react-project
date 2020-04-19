import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Footer from '../footer';
import TextField from '@material-ui/core/TextField';
import Swiper from 'react-id-swiper';

const index = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Grid>
          <Header />

          {/* Forward Thinking */}
         
          <div className="carrer_inner">
              <div className="jobpost_inner2">    
                <Grid container  direction="row" justify="center" className="header_gap">
                  <Grid item xs={11} md={8}>
                  
                  
                          <h1 className="jobpost_title mt-40">Careers</h1>
                          <h2 className="jobpost_subtitle mt-20">Open positions</h2>
                          
                          <div className="carrer_box mt-40">
                            <Grid container  direction="row">
                              <Grid item xs={11} md={8}>
                                <h2>Web devoloper</h2>
                                <p>React native / JS, Node JS, NoSQL, PHP</p>
                                <div className=" mt-10">
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/map_pin_icon_grey.png" alt="" title="" /> VENLO
                                    </a>
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/full_time_icon_grey.png" alt="" title="" /> FULL-TIME
                                    </a>
                                </div>
                              </Grid>
                              <Grid item xs={11} md={4} className="carrer_btn_sec">
                                <a href="#" className="carrer_read_btn">READ MORE</a>
                              </Grid>
                            </Grid>
                          </div>

                          <div className="carrer_box mt-40">
                            <Grid container  direction="row">
                              <Grid item xs={11} md={8}>
                                <h2>Web devoloper</h2>
                                <p>React native / JS, Node JS, NoSQL, PHP</p>
                                <div className=" mt-10">
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/map_pin_icon_grey.png" alt="" title="" /> VENLO
                                    </a>
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/full_time_icon_grey.png" alt="" title="" /> FULL-TIME
                                    </a>
                                </div>
                              </Grid>
                              <Grid item xs={11} md={4} className="carrer_btn_sec">
                                <a href="#" className="carrer_read_btn">READ MORE</a>
                              </Grid>
                            </Grid>
                          </div>

                          <div className="carrer_box mt-40">
                            <Grid container  direction="row">
                              <Grid item xs={11} md={8}>
                                <h2>Web devoloper</h2>
                                <p>React native / JS, Node JS, NoSQL, PHP</p>
                                <div className=" mt-10">
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/map_pin_icon_grey.png" alt="" title="" /> VENLO
                                    </a>
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/full_time_icon_grey.png" alt="" title="" /> FULL-TIME
                                    </a>
                                </div>
                              </Grid>
                              <Grid item xs={11} md={4} className="carrer_btn_sec">
                                <a href="#" className="carrer_read_btn">READ MORE</a>
                              </Grid>
                            </Grid>
                          </div>

                          <div className="carrer_box mt-40">
                            <Grid container  direction="row">
                              <Grid item xs={11} md={8}>
                                <h2>Web devoloper</h2>
                                <p>React native / JS, Node JS, NoSQL, PHP</p>
                                <div className=" mt-10">
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/map_pin_icon_grey.png" alt="" title="" /> VENLO
                                    </a>
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/full_time_icon_grey.png" alt="" title="" /> FULL-TIME
                                    </a>
                                </div>
                              </Grid>
                              <Grid item xs={11} md={4} className="carrer_btn_sec">
                                <a href="#" className="carrer_read_btn">READ MORE</a>
                              </Grid>
                            </Grid>
                          </div>

                          <div className="carrer_box mt-40">
                            <Grid container  direction="row">
                              <Grid item xs={11} md={8}>
                                <h2>Web devoloper</h2>
                                <p>React native / JS, Node JS, NoSQL, PHP</p>
                                <div className=" mt-10">
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/map_pin_icon_grey.png" alt="" title="" /> VENLO
                                    </a>
                                    <a href="#" className="blog_blue_link">
                                      <img src="../../assets/images/full_time_icon_grey.png" alt="" title="" /> FULL-TIME
                                    </a>
                                </div>
                              </Grid>
                              <Grid item xs={11} md={4} className="carrer_btn_sec">
                                <a href="#" className="carrer_read_btn">READ MORE</a>
                              </Grid>
                            </Grid>
                          </div>
                          
                          <div className="carrer_bot_gap"></div>
                          <Grid container direction="row" spacing={4}>                 
                            <Grid item sm={12} md={6} className="carrer_bot_content">
                              <h1  className="product_title">Our Culture</h1>
                              <p>
                              Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.
                              </p>
                            </Grid>
                            <Grid item xs={12} md={6} className="carrer_bot_img">
                              <img src="../../assets/images/carrer.jpg" alt="" title="" /> 
                            </Grid>
                          </Grid>
                          <div className="carrer_bot_gap"></div>
                          <Grid container direction="row" spacing={4}>                 
                            <Grid item xs={12} md={6} className="carrer_bot_img mob_hid">
                              <img src="../../assets/images/carrer2.jpg" alt="" title="" /> 
                            </Grid>
                            <Grid item sm={12} md={6} className="carrer_bot_content">
                              <h1  className="product_title">Our Mission</h1>
                              <p>
                              Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.
                              </p>
                            </Grid>
                            <Grid item xs={12} md={6} className="carrer_bot_img desk_hid">
                              <img src="../../assets/images/carrer2.jpg" alt="" title="" /> 
                            </Grid>
                          </Grid>
                      
                </Grid>
              </Grid>
              
            </div>
          </div> 
          <div className="mt-100"></div>
         
          {/* End of Forward Thinking */}


          <Footer />

    </Grid>
  );
}
export default index;