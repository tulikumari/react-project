import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Footer from '../footer';
import TextField from '@material-ui/core/TextField';
import Swiper from 'react-id-swiper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

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

  const [value, setValue]= [];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
          <Header />

          {/* Forward Thinking */}
          <Grid container  direction="row" justify="center">
            <Grid item xs={11} md={10} className="header_gap">
              
              <Grid container direction="row">
                <Grid item sm={12} md={6} className="about_left">
                   <h1  className="about_title">About Us</h1>
                   <p>
                   Aimedis combines your health data, onliner prescriptions, video consultation with doctors and psychologists, information, medical hardware, your smart devices, and more on a single platform on your PC, your smartphone or your tablet, anytime, worldwide and in multiple languages.
                   </p>
                </Grid>
                <Grid item xs={12} sm={6} className="about_right">
                   <img src="../../assets/images/about_IMac.png" alt="" title="" /> 
                </Grid>
              </Grid>

              {/* Tab start */}
              <div>
                <AppBar position="static" color="default" className="tab_menu">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    <Tab label="Team" {...a11yProps(0)} />
                    <Tab label="Board" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel>
                  <Grid container direction="row" className="pt-40">
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame2.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame3.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame4.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                  </Grid>
                  <Grid container direction="row">
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame2.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame3.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame4.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                  </Grid>
                  <Grid container direction="row">
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame2.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} className="about_sec">
                        <div className="about_img_sec">
                           <div className="img_mask"><img src="../../assets/images/about_img_frame3.png" alt="" title="" /></div>
                           <div className="img">
                             <div><div><img src="../../assets/images/doc_img.png" alt="" title="" /></div></div>
                           </div>
                        </div>
                        <h1>Dr. Michael J. Kaldasch</h1>
                        <p>CEO, MD & founder</p>
                        <div className="social">
                           <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                           <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3}>
                         <div className="about_join_more">
                           <img src="../../assets/images/join_team.png" alt="" title="" />
                         </div>
                      </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
              </div>
              {/* End of tab start */}
              
              {/* contact */}
              <Grid container  direction="row" justify="center">
                <Grid item xs={11} md={11} className="about_contact">
                  <h2 className="about_contact_subtitle mob_hid">We are here for you</h2>
                  <h1  className="about_contact_title mob_hid">Have a questions? Contact us!</h1>
                  <Grid container direction="row">
                    <div  className="about_contact_right desk_hid">
                      <p>Official Aimedis Support Group is on <span>Telegram</span></p>
                      <div><a href="#">View channel</a></div>
                      <img src="../../assets/images/telegram.png" alt="" title="" /> 
                    </div>
                    <Grid item sm={12} md={7} className="about_contact_left" >
                      <h2 className="about_contact_subtitle desk_hid">We are here for you</h2>
                      <h1  className="about_contact_title desk_hid">Have a questions? Contact us!</h1>
                      <form>
                        <label>Name or Company</label>
                        <input type="text" />
                        <label className="mt-30">E-mail address</label>
                        <input type="text" />
                        <label className="mt-30">Message</label>
                        <textarea row="4"></textarea>
                        <input type="submit" value="SEND" />
                      </form>
                    </Grid>
                    <Grid item xs={12} sm={5} className="about_contact_right mob_hid">
                      <p>Official Aimedis Support Group is on <span>Telegram</span></p>
                      <div><a href="#">View channel</a></div>
                      <img src="../../assets/images/telegram.png" alt="" title="" /> 
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
              {/* End of contact */}

            </Grid>
          </Grid>
          {/* End of Forward Thinking */}

          {/* Map */}
          <div className="map_area">
           <div className="map_address">
            <Grid container  direction="row" justify="center">
              <Grid item xs={11} md={10}>
                    <div className="inner">
                      <div>
                        <h2>OUR LOCATION</h2>
                        <p>
                          Sint Michaëlstraat 4,<br />5935 BL Steyl, Netherlands
                        </p>
                        <div><a href="#">See on google maps</a></div>
                      </div>
                    </div>  
                </Grid>
              </Grid>
              </div>
            <img src="../../assets/images/about_map.jpg" alt="" title="" className="map_img" />
          </div>
          {/* End of Map */}


          <Footer />

    </Grid>
  );
}
export default index;