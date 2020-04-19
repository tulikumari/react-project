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

          {/* Token Sale */}
          <Grid container  direction="row" justify="center">
            <Grid item xs={11} md={10} className="header_gap">
            <Grid container direction="row">
                <Grid item sm={12} md={12}>
                 <div className="inner">
                   <h1 className="token_sale_title mt-50">Aimedis Digital Asset (AIM)</h1>
                   <p className="token_sale_content mt-20">
                   The Aimedis ERC20 based digital asset (AIM) can already be used to buy medical services inside the Aimedis ecosystem and the Aimedis second opinion portal. We accept the token at a value of 0,15 USD per AIM and give the token holder the possibility to buy the services including videochat with doctors, prescriptions and second opinions with a discount compared to fiat money or other cryptocurrency payments. A cash payout of the tokens is not possible but you can sell the token on one of our partner exchanges right after listing.
                   </p>

                   <h1 className="token_sale_title mt-50">Whitepaper for the Aimedis digital asset (AIM)</h1>
                   <p className="token_sale_content mt-20">
                   Find the technical specifications, details of our dual blockchain model, the business model and more inside this document. You can download it in the language of your choice.
                   </p>
                   <div className="mt-20"><a href="#" className="grey_btn">Read Whitepaper</a></div>

                   <h1 className="token_sale_title mt-50">Aimedis Digital Asset sale agreement</h1>
                   <p className="token_sale_content mt-20">
                   This is the AIM digital asset sale agreement, including restricted countries and a disclaimer.
                   </p>
                   <div className="mt-20"><a href="#" className="grey_btn">Read Sale Agreement</a></div>

                   <h1 className="token_sale_title mt-50">The AIMsocial medical social network</h1>
                   <p className="token_sale_content mt-20">
                   With Aimedis V2 we launch AIMsocial, the first decentralized and incentiviced social medical network. AIMsocial revolutionizes the way patients communicate and support their way to healthyness and well-being. With the release the AIM digital asset will give patients and caregivers the possibility to get paid for their efforts and work inside the network, because we believe that helping others must be incentivized.
                   </p>

                  </div>
                </Grid>
              </Grid>
            </Grid>
            </Grid>  
          {/* End of Token Sale */}

          <Grid className="pagging"></Grid>

          <Footer />

    </Grid>
  );
}
export default index;