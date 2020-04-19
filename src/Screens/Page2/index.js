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
          <Grid container  direction="row" justify="center">
            <Grid item xs={11} md={10} className="header_gap">
              
              <Grid container direction="row" className="product_gap">
                <Grid item sm={12} md={6} className="product_left">
                   <h1  className="product_title">Your health data in one place.</h1>
                   <div className="product_right desk_hid">
                    <img src="../../assets/images/product_img1.png" alt="" title="" /> 
                   </div>
                   <p>
                   Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                   </p>
                   <div className="mt-30"><a href="#" className="product_play"><i></i> <span>PLAY VIDEO</span></a></div>
                </Grid>
                <Grid item xs={12} sm={6} className="product_right mob_hid">
                   <img src="../../assets/images/product_img1.png" className="mob_hid" alt="" title="" /> 
                </Grid>
              </Grid>

              <Grid container direction="row" className="product_gap">
                <Grid item xs={12} sm={6} className="product_right mob_hid">
                   <img src="../../assets/images/product_img2.png" alt="" title="" className="mob_hid" /> 
                </Grid>
                <Grid item sm={12} md={6} className="product_left">
                   <h1  className="product_title">Video chat with doctor.</h1>
                   <div className="product_right desk_hid">
                    <img src="../../assets/images/product_img2.png" alt="" title="" /> 
                   </div>
                   <p>
                   Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                   </p>
                   <div className="mt-30"><a href="#" className="product_play"><i></i> <span>PLAY VIDEO</span></a></div>
                </Grid>
              </Grid>

              <Grid container direction="row" className="product_gap">
                <Grid item sm={12} md={6} className="product_left">
                   <h1  className="product_title">Your health data in one place.</h1>
                   <div className="product_right desk_hid">
                    <img src="../../assets/images/product_img1.png" alt="" title="" /> 
                   </div>
                   <p>
                   Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                   </p>
                   <div className="mt-30"><a href="#" className="product_play"><i></i> <span>PLAY VIDEO</span></a></div>
                </Grid>
                <Grid item xs={12} sm={6} className="product_right mob_hid">
                   <img src="../../assets/images/product_img1.png" alt="" title="" className="mob_hid" /> 
                </Grid>
              </Grid>

              <Grid container direction="row" className="product_gap">
                <Grid item xs={12} sm={6} className="product_right mob_hid">
                   <img src="../../assets/images/product_img2.png" alt="" title="" className="mob_hid" /> 
                </Grid>
                <Grid item sm={12} md={6} className="product_left">
                   <h1  className="product_title">Video chat with doctor.</h1>
                   <div className="product_right desk_hid">
                    <img src="../../assets/images/product_img2.png" alt="" title="" /> 
                   </div>
                   <p>
                   Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                   </p>
                   <div className="mt-30"><a href="#" className="product_play"><i></i> <span>PLAY VIDEO</span></a></div>
                </Grid>
              </Grid>

              <Grid container direction="row" className="product_gap">
                <Grid item sm={12} md={6} className="product_left">
                   <h1  className="product_title">Your health data in one place.</h1>
                   <div className="product_right desk_hid">
                    <img src="../../assets/images/product_img1.png" alt="" title="" /> 
                   </div>
                   <p>
                   Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                   </p>
                   <div className="mt-30"><a href="#" className="product_play"><i></i> <span>PLAY VIDEO</span></a></div>
                </Grid>
                <Grid item xs={12} sm={6} className="product_right mob_hid">
                   <img src="../../assets/images/product_img1.png" alt="" title="" className="mob_hid" /> 
                </Grid>
              </Grid>

              <Grid container direction="row" className="product_gap">
                <Grid item xs={12} sm={6} className="product_right mob_hid">
                   <img src="../../assets/images/product_img2.png" alt="" title="" className="mob_hid" /> 
                </Grid>
                <Grid item sm={12} md={6} className="product_left">
                   <h1  className="product_title">Video chat with doctor.</h1>
                   <div className="product_right desk_hid">
                    <img src="../../assets/images/product_img2.png" alt="" title="" /> 
                   </div>
                   <p>
                   Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                   </p>
                   <div className="mt-30"><a href="#" className="product_play"><i></i> <span>PLAY VIDEO</span></a></div>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          {/* End of Forward Thinking */}

          {/* Platform overview */}
          <Grid container  direction="row" justify="center" className="overview_section">
            <Grid item xs={11} md={10}>
              <Grid container direction="row">
                <Grid item xs={12} sm={6}>
                  <h1 className="product_title product_overview_title">
                   Aimedis is mobile and with cool features
                  </h1>
                  <ul className="overview_list product_overview_list">
                    <li className="overview-open">
                      <div className="overview_left">
                        <span>1</span>
                        <div>
                          <h2>Fully responsive</h2>
                          <p>In every actual browser</p>
                        </div>
                        <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                      </div>
                      <div className="overview_detail_mob">
                       <img src="../../assets/images/mob_img.png" alt="" title="" />
                      </div>
                    </li>
                    <li>
                      <div className="overview_left">
                        <span>2</span>
                        <div>
                          <h2>Multilanguage</h2>
                          <p>also fully functional abroad</p>
                        </div>
                        <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                      </div>
                    </li>
                    <li>
                      <div className="overview_left">
                        <span>3</span>
                        <div>
                          <h2>Easy to use</h2>
                          <p>also for unexperienced patients simple & fast</p>
                        </div>
                        <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <a href="#"><img src="../../assets/images/avail_store.png" alt="" title="" className="avail_btn" /></a>
                    
                    <a href="#"><img src="../../assets/images/play_store.png" alt="" title="" className="avail_btn ml-20" /></a>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} className="overview_right" align="center">
                 <img src="../../assets/images/mob_img.png" alt="" title="" className="product_overview_img" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* End of Platform overview */}


          {/* Discover */}
          <Grid container  direction="row" justify="center" className="discover">
            <Grid item xs={11} md={5}>
              <h2 className="title">Discover the best features for you.</h2>
              <form className="access_form">
                <TextField id="standard-basic" label="" placeholder="Your email address" className="early_access_box" />
                <button type="submit" className="early_access_btn">GET <span className="mob_hid">EARLY</span> ACCESS</button>
              </form>
            </Grid>
          </Grid>
          {/* End of Discover */}

          <Footer />

    </Grid>
  );
}
export default index;