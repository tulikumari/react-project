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
                  
                    <Grid container  direction="row">
                    <Grid item xs={12} md={8}>
                          <h1 className="jobpost_title mt-40">For Investors</h1>
                          <h2 className="jobpost_subtitle mt-40">Executive Summary</h2>

                          <p className="jobpost_content mt-30">
                          Suspendisse interdum est at odio faucibus volutpat. Curabitur tincidunt ex non malesuada finibus. Etiam auctor, ante eu sollicitudin sodales, purus nibh venenatis dui, eu venenatis elit lorem quis purus. Donec sed tincidunt justo, sit amet pellentesque eros. In hac habitasse platea dictumst. Proin vitae dui vitae purus ultrices laoreet ultricies id lectus. In facilisis, enim eu aliquet fermentum, mauris nulla venenatis odio, ut tincidunt turpis dui eleifend nunc. Vivamus eleifend massa iaculis metus accumsan dapibus.<br /><br />
Vivamus semper placerat elit, vel dapibus nibh porttitor id. Etiam non velit risus. Ut quis erat vitae nulla accumsan fringilla et et neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Cras mollis augue ac massa suscipit blandit. Sed a nisl in ligula pulvinar tempor.
Proin et mollis erat. Morbi id lorem felis. Phasellus malesuada mauris eu convallis ornare. Quisque sit amet aliquam elit, eget ullamcorper magna. Sed elit augue, dapibus id congue quis, commodo sit amet arcu. 
                          </p>
                          <div className="investor_btn_div">
                            <a href="#" className="investor_btn">DOWNLOAD FULL BUSINESS PLAN (8.4 MB)</a>
                          </div>
                        </Grid>
                      </Grid>
                  
                </Grid>
              </Grid>
              <div className="height-100"></div>
            </div>
         
         
          {/* End of Forward Thinking */}


          <Footer />

    </Grid>
  );
}
export default index;