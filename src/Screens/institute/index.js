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
          <Grid className="header_gap">

           <Grid container  direction="row" justify="center" className="institute_relative">
            <Grid item xs={11} md={10} className="institute_content">
              <Grid container direction="row">
                <Grid item xs={12} sm={7} className="institute_left">
                  <p className="institute_subtitle">institutions</p>
                  <h1 className="institute_title">
                    Who gets the most out of Aimedis
                  </h1>
                  <ul className="overview_list product_overview_list">
                    <li className="overview-open">
                      <div className="overview_left">
                        <span>1</span>
                        <div>
                          <h2>Insurance companies</h2>
                          <p>Excepteur sint accaecut cupidatat n every actual browser</p>
                        </div>
                        <i>&darr;</i>
                      </div>
                      <div className="overview_detail_mob institute_mob_detail">
                       <div className="institute_mob_download">
                         <a href="#" className="institute_download">DOWNLOAD THE CASE STUDY (8.4 MB)</a>
                       </div>
                       <img src="../../assets/images/carrer.jpg" alt="" title="" />
                      </div>
                    </li>
                    <li>
                      <div className="overview_left">
                        <span>2</span>
                        <div>
                          <h2>Hospitals</h2>
                          <p>Excepteur sint accaecut cupidatatn every actual browser</p>
                        </div>
                        <i>&darr;</i>
                      </div>
                    </li>
                    <li>
                      <div className="overview_left">
                        <span>3</span>
                        <div>
                          <h2>Pharma Companies</h2>
                          <p>Excepteur sint accaecut cupidatatn every actual browser</p>
                        </div>
                        <i>&darr;</i>
                      </div>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="mob_hid">
              <Grid className="institute_right" className="institute_right pt75">
                  <img src="../../assets/images/institute1.png" alt="" title="" />
              </Grid>
            </Grid>
           </Grid>
           

           <Grid className="mob_hid">
           <Grid container  direction="row" justify="center" className="institute_mt150 institute_relative">
            <Grid item xs={11} md={10} className="institute_content">
              <Grid container direction="row">
                <Grid item xs={12} sm={7} className="institute_left">
                  <p className="institute_subtitle">INSURANCE COMPANIES</p>
                  <h1 className="institute_title">
                    Dois aute irure dolor
                  </h1>
                  <p className="institute_detail w70">Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.</p>
                  <div><a href="#" className="institute_download">DOWNLOAD THE CASE STUDY (8.4 MB)</a></div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="institute_right" className="institute_right">
                 <img src="../../assets/images/institute2.png" alt="" title="" />
            </Grid>
           </Grid>
           </Grid>

          <Grid className="mob_hid">
           <Grid container  direction="row" justify="center" className="institute_mt150 institute_relative">
           <Grid className="institute_right" className="institute_right_l">
                 <img src="../../assets/images/institute3.png" alt="" title="" />
            </Grid>
            <Grid item xs={11} md={10} className="institute_content">
              <Grid container direction="row">
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6} className="institute_left">
                  <p className="institute_subtitle">Hospitals</p>
                  <h1 className="institute_title">
                    Dois aute irure
                  </h1>
                  <p className="institute_detail">Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.</p>
                  <div><a href="#" className="institute_download">DOWNLOAD THE CASE STUDY (8.4 MB)</a></div>
                </Grid>
              </Grid>
            </Grid>
           </Grid>
           </Grid>

           <Grid className="mob_hid">
            <Grid container  direction="row" justify="center" className="institute_mt150 institute_relative">
            <Grid item xs={11} md={10} className="institute_content">
              <Grid container direction="row">
                <Grid item xs={12} sm={7} className="institute_left institute_pt150">
                  <p className="institute_subtitle">Pharma Companies</p>
                  <h1 className="institute_title">
                    Dois aute irure dolor
                  </h1>
                  <p className="institute_detail w70">Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.</p>
                  <div><a href="#" className="institute_download">DOWNLOAD THE CASE STUDY (8.4 MB)</a></div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="institute_right" className="institute_right">
                 <img src="../../assets/images/institute4.png" alt="" title="" />
            </Grid>
           </Grid>
           
           <div className="institute_mt150"></div>
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