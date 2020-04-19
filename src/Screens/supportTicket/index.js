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
         
          <div className="investor_inner">
                <Grid container  direction="row" justify="center" className="header_gap">
                  <Grid item xs={11} md={8}>
                  
                    <Grid container  direction="row" justify="center">
                    <Grid item xs={12} md={8}>
                          <h1 className="jobpost_title mt-40" align="center">Support Message</h1>
                        
                          <p className="support_content mt-30" align="center">
                            If you have a question or are experiencing issues with Aimedis, you can send us a Sopprt Message and we will back to you ASAP
                          </p>
                         
                        <div className="support_form_sec">
                            <div className="support_msg">
                              <span>Support Message was send <br />succesfuly!</span>
                              <i><img src="../../assets/images/white_tick.png" alt="" title="" /></i>
                            </div>
                            <label className="mt-50">Name</label>
                            <div className="green_border"><input type="text" className="mt-10" value="Artem Moliavko" /></div>
                            <label className="mt-20">E-mail address</label>
                            <div className="red_border"><input type="text" className="mt-10" value="mail@aimedis.com" /></div>
                            <p className="support_red_error">An E-mail address must contain single @</p>
                            <label className="mt-20">E-mail address</label>
                            <input type="text" className="mt-10" value="" /> 
                            <label className="mt-20">Message</label>
                            <textarea className="mt-10"></textarea> 
                            <div align="center" className="mt-30">
                              <input type="submit" value="Send" />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                  
                </Grid>
              </Grid>
              <div className="height-200"></div>
            </div>
         
         
          {/* End of Forward Thinking */}


          <Footer />

    </Grid>
  );
}
export default index;