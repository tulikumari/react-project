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
                          <h1 className="jobpost_title mt-40">Policy</h1>

                          <p className="jobpost_content mt-30">
                          Among the types of Personal Data that this Application collects, by itself or through third parties, there are: general activity data, body measurements & indexes, movement activity, food related activity , sleeping activity, heart rate and other vital data, blood type, gender, date of birth, Cookies, Usage Data, first name, last name, phone number, address, username, email address, password, company name, profession, fax number, country, state, province, ZIP/Postal code, city, picture, workplace, various types of Data, field of activity, User ID, marital status, website, billing address, house number, prefix , language, profile picture, budget and academic background.
<br /><br />
Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
The Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
                          </p>
                           <p className="investor_title mt-30">Mode and place of processing the Date</p>
                           <h2 className="jobpost_subtitle mt-20">Methods of processing</h2>
                           <p className="jobpost_content mt-30">
                           Any use of Cookies – or of other tracking tools – by this Application or by the owners of third party services used by this Application serves the purpose of providing the service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.<br />
Users are responsible for any third party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
                          </p>
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