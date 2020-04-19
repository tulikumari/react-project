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
              
              
              <Grid container direction="row">
                <Grid item xs={12} sm={7} className="blog_left mob_hid">
                   <img src="../../assets/images/blog.jpg" alt="" title="" /> 
                </Grid>
                <Grid item sm={12} md={5} className="blog_right">
                 <div className="inner">
                   <h2>Featured post</h2>
                   <h1  className="product_title">AR and VR are the new tools in your doctor's bag</h1>
                   <div className="blog_img_mobile desk_hid"><img src="../../assets/images/blog.jpg" alt="" title="" /></div>
                   <p>
                   Medicine has always been an obscure discipline to practise. A doctor has been looking at with awe and respect…
                   </p>
                  </div>
                </Grid>
              </Grid>

              
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