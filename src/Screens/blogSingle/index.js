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
         
              
             
          <div className="blog_single_img header_gap">
            <img src="../../assets/images/blog_single_banner1.jpg" alt="" title="" /> 
          </div>
          <Grid container  direction="row" justify="center">
            <Grid item xs={11} md={10}>
              
              <h1 className="blog_single_title mt-40">AR and VR are the new tools in your doctor’s bag</h1>
             
              <Grid container  direction="row" justify="center">
                  <Grid item sm={12} md={7}>
                    
                    <div className="mt-20">
                      <a href="#" className="blog_blue_link">
                        <img src="../../assets/images/pencil_icon_blue.png" alt="" title="" /> CHRIS WELCH
                      </a>
                      <a href="#" className="blog_blue_link">
                        <img src="../../assets/images/calender-icon_blue.png" alt="" title="" /> 2 WEEK AGO
                      </a>
                    </div>
                    <div className="grey_line mt-30"></div>
                    <p className="blog_single_content mt-20">
                      Medicine has always been an obscure discipline to practise.  	    
                      doctor has been looking at with awe and respect, and until quite recently, was often an unapproachable person. However, this is changing rapidly. He is a service provider and you, the patient, are a consumer, and thus protected by the prevailing consumer laws.
                    </p>
                    <p className="blog_single_bold mt-20 mb-20">
                      Being good at medicine is not good enough
                    </p>      
                    <p className="blog_single_content2">
                      160 years ago, in 1858, Henry Gray published Gray’s Anatomy – the bible for every doctor. Back then, body snatchers were a prime source of obtaining cadavers for dissections. About 70 years later, the first antibiotic was discovered in the form of penicillin. Fast forward another 40 years, and people were still dying from simple infections. Today, these things would sound so alien! No antibiotics, illegally obtained bodies for dissection, people dying from simple infection rather than grave, life-threatening diseases. Medicine has come a long way since the time of Mr Gray (Surgeons use a Mr instead of Dr in the UK).
                      <br /><br />
                      Today, a doctor is not expected to do his job, he has to be in a sensitive manner, warranted by the profession. He needs to have proper bedside manners in most of the medical schools. However, in the age of technology, this is not enough!
                    </p>   

                    <div className="blog_testinomial">
                      <p>«Today, medical schools have started recruiting the importance of telemedicine in the healthcare ecosystem.»</p>
                      <span>Irina Danilenko – doctor</span>
                    </div> 
                </Grid>
              </Grid>
            </Grid>
          </Grid>
              
          

          <Grid container  direction="row" justify="center">
            <Grid item xs={11} md={10}>
              
              <Grid container  direction="row" justify="center">
                <Grid item sm={12} md={10}>
                  <div className="blog_single_img mt-50">
                    <img src="../../assets/images/blog.jpg" alt="" title="" /> 
                  </div>
                </Grid>
              </Grid>

              <Grid container  direction="row" justify="center">
                <Grid item sm={12} md={7}>
                    <p className="blog_single_content2 mt-40">
                      Medical advances on the fronts of new drug discoveries have slowed down. Instead, pharmaceuticals are being used to improve their chances. The next big thing is biologicals and personalized medicine.
                      <br /><br />
                      However, when it comes to the doctor’s clinic, a lot of things are changing as well. He has the tools to capture the patient’s data without having to spend on his computer. With IoT devices and integrated software, things are becoming easier for doctors. That said, there is still a huge scope for technology in his clinic.
                    </p>
                    <ul className="blog_category mt-20">
                      <li>Fashion</li>
                      <li>Design</li>
                      <li>Art</li>
                      <li>Marketing</li>
                      <li>Management</li> 
                      <li>Communications</li>
                    </ul>
                </Grid>
              </Grid>
              
              <Grid container  direction="row" justify="center">
                <Grid item sm={12} md={10}>
                  <div className="blog_single_img mt-50">
                    <img src="../../assets/images/blog_video.jpg" alt="" title="" /> 
                  </div>
                  <div className="grey_line mt-50"></div>
                  <div className="mt-40">
                    <p className="blog_like">Like it? Share it! 
                     <a href="#" className="blog_social_link">
                       <img src="../../assets/images/facebook_grey.png" alt="" title="" className="yes_icon" />
                       <img src="../../assets/images/facebook_b.png" alt="" title="" className="hover_icon" />
                      </a>
                      <a href="#" className="blog_social_link">
                       <img src="../../assets/images/twitter_grey.png" alt="" title="" className="yes_icon" />
                       <img src="../../assets/images/Group9_b.png" alt="" title="" className="hover_icon" />
                      </a>
                      <a href="#" className="blog_social_link">
                       <img src="../../assets/images/In_grey.png" alt="" title="" className="yes_icon" />
                       <img src="../../assets/images/In_b.png" alt="" title="" className="hover_icon" />
                      </a>
                    </p>
                  </div>
                </Grid>
              </Grid>

              
              <h1  className="blog_learn_title mt-50">You might like these articles too</h1>
              <Grid container direction="row">
                <Grid item sm={11} md={4}>
                  <div className="learn_new_article">
                    <div>
                      <img src="../../assets/images/learn_img1.jpg" alt="" title="" className="hover" />
                    </div>
                    <h2><a href="#">Why Japan, the Tech giant, still needs to improve Health Tech</a></h2>
                    <p>
                    Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by…
                    </p>
                  </div>
                </Grid>
                <Grid item sm={11} md={4}>
                  <div className="learn_new_article">
                    <div>
                      <img src="../../assets/images/learn_img2.jpg" alt="" title="" className="hover" />
                    </div>
                    <h2><a href="#">Why diagnosing leprosy in the Philippines is not a big problem any more: Learns</a></h2>
                    <p>
                    Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick…
                    </p>
                  </div>
                </Grid>
                <Grid item sm={11} md={4}>
                  <div className="learn_new_article">
                    <div>
                      <img src="../../assets/images/learn_img3.jpg" alt="" title="" className="hover" />
                    </div>
                    <h2><a href="#">Why diagnosing leprosy in the Philippines is not a big problem any more: Learns</a></h2>
                    <p>
                    Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick…
                    </p>
                  </div>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          {/* End of Forward Thinking */}

          <Grid className="pagging"></Grid>

          <Footer />

    </Grid>
  );
}
export default index;