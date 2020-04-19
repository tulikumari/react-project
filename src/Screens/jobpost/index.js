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
         
          <div className="jobpost_inner">
              <div className="jobpost_inner2">    
                <Grid container  direction="row" justify="center" className="header_gap">
                  <Grid item xs={11} md={8}>
                  
                    <Grid container  direction="row">
                    <Grid item xs={12} md={8}>
                          <h1 className="jobpost_title mt-40">Web Developer</h1>
                          <h2 className="jobpost_subtitle mt-20">React native / JS, Node JS, NoSQL, PHP</h2>
                          <div className=" mt-10">
                            <a href="#" className="blog_blue_link">
                              <img src="../../assets/images/map_pin_icon_blue.png" alt="" title="" /> VENLO
                            </a>
                            <a href="#" className="blog_blue_link">
                              <img src="../../assets/images/full_time_icon_blue.png" alt="" title="" /> FULL-TIME
                            </a>
                          </div>
                        
                          <p className="jobpost_content mt-30">
                            At World Vision, we're sharing a big dream for children. One that moves beyond just clean water or food or healthcare to offer a full solution to poverty.
                            <br /><br />
                            We want children to have everything they need to thrive, both physically and spiritually, so they can experience the kind of life God intends life in all its fullness.
                          </p>
                          <h3 className="jobpost_title2 mt-40 mb-40">Required Experience :</h3>
                          <ul className="jobpost_list">
                            <li>Bachelor’s degree in design, digital art, interaction design or related field or equivalent work experience (eight years).</li>
                            <li>Previous work experience implementing, managing and / or leading within the digital creative field, 8-10 years, preferably in an agency (internal or external) environment.</li>
                            <li>At least 5 years of UX design as a key, hands-on interaction / visual designer of a UI / UX team through the product development cycle.</li>
                            <li>Expansive knowledge of layout, typography, mobile technology and web-based graphics and animations, and expert knowledge of design programs including Adobe Creative Suite, Sketch, InVision.</li>
                          </ul>
                          <p className="jobpost_content mt-20">
                            Motion design skills preferred. A portfolio of sample projects will be requested.
                          </p>
                          <h3 className="jobpost_title2 mt-40 mb-40">Benefits :</h3>
                          <ul className="jobpost_list">
                            <li>Bachelor’s degree in design, digital art, interaction design or related field or equivalent work experience (eight years).</li>
                            <li>Previous work experience implementing, managing and / or leading within the digital creative field, 8-10 years, preferably in an agency (internal or external) environment.</li>
                            <li>At least 5 years of UX design as a key, hands-on interaction / visual designer of a UI / UX team through the product development cycle.</li>
                            <li>Expansive knowledge of layout, typography, mobile technology and web-based graphics and animations, and expert knowledge of design programs including Adobe Creative Suite, Sketch, InVision.</li>
                          </ul>
                        </Grid>
                      </Grid>
                      <div className="grey_line mt-40 mb-40"></div>
                      <Grid container  direction="row">
                        <Grid item xs={11} md={8}>
                          <p className="jobpost_content">
                            In order to apply to this posotion, please send:
                          </p>
                          <ul className="jobpost_list">
                            <li>CV</li>
                            <li>Cover Letter</li>
                            <li>link to LinkedIn profile (if there is one)</li>
                          </ul>
                          <p className="jobpost_content">
                            to email address <b>jobs@aimedis.com</b>
                          </p>
                          
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