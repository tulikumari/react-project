import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Footer from '../footer';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Grid>
          <Header />

          {/* Forward Thinking */}
          <Grid container direction="row" justify="center">
            <Grid item xs={11} md={10} className="header_gap">

              <Grid container direction="row">
                <Grid item sm={12} md={6} className="about_left">
                  <h1 className="about_title">About Us</h1>
                  <p>
                    Aimedis combines your health data, onliner prescriptions, video consultation with doctors and psychologists, information, medical hardware, your smart devices, and more on a single platform on your PC, your smartphone or your tablet, anytime, worldwide and in multiple languages.
                   </p>
                </Grid>
                <Grid item xs={12} sm={6} className="about_right">
                  <img src="../../assets/images/about_IMac.png" alt="" title="" />
                </Grid>
              </Grid>

              {/* Tab start */}
              <div className="aboutTabsCntnt">

                {/* Tabs  */}
                <AppBar position="static">
                  <Tabs value={value} onChange={this.handleChange} className="aboutTabs"  >
                    <Tab label="Aimedis Board" className="aboutTabsIner" />
                    <Tab label="Medical Board" className="aboutTabsIner" />
                    <Tab label="Advisory Board" className="aboutTabsIner" />
                  </Tabs>
                </AppBar>

                {/* Start of Tab 1 */}
                {value === 0 && <TabContainer>
                  <Grid container direction="row" className="pt-40">

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/DSC_8311-290.png" alt="" title="" /></div></div>
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
                          <div><div><img src="../../assets/images/BenPortrait.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Ben O. El Idrissi</h1>
                      <p>MD COO & founder</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame3.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/Mohammed1.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Mohammed E. Al Fardan</h1>
                      <p>Managing Director Middle East</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/FB_IMG.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Roxana Nasoi</h1>
                      <p>M.Sc. CCO & partnerships</p>
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
                          <div><div><img src="../../assets/images/Portaitx2.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Miguel Sanchez de</h1>
                      <p>Pedro CFO</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>
                  </Grid>

                </TabContainer>}
                {/* End of Tab 1 */}

                {/* Start of Tab 2 */}
                {value === 1 && <TabContainer>

                  <Grid container direction="row" className="pt-40">

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfGuelker-1.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Hartmut Guelker</h1>
                      <p>MD, PhD Cardiologist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame2.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfHoemberg.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Volker Hömberg</h1>
                      <p>MD, PhD Neurologist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame3.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/DrFountoukidis.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Lazaros Fountoukidis</h1>
                      <p>MD, PhD Psychiatrist & Psychotherapist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfSchinkoethe.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Timo Schinkoethe</h1>
                      <p>PhD CEO of Cankado</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                  </Grid>

                  <Grid container direction="row" className="pt-40">

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfHeuer.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Hubertus Heuer</h1>
                      <p>MD, PhD Cardiologist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame2.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfMehdorn.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Maximilian Mehdorn</h1>
                      <p>MD, PhD Neurosurgeon</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame3.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/YangChulBoering.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Yang-Chul Boering</h1>
                      <p>MD, PhD Cardiologist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={3} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame4.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfSabin.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Georg Sabin</h1>
                      <p>MD, PhD Cardiologist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                  </Grid>

                </TabContainer>}
                {/* End of Tab 2 */}

                {/* Start of Tab 2 */}
                {value === 2 && <TabContainer>

                  <Grid container direction="row" className="pt-40">

                    <Grid item xs={6} md={4} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/ProfDruyen.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Thomas Druyen</h1>
                      <p>PhD Future Scientist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={4} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/WhatsApp-Image.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Yehoushua Westover</h1>
                      <p>Entrepreneur & Fintech Expert</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                    <Grid item xs={6} md={4} className="about_sec">
                      <div className="about_img_sec">
                        <div className="img_mask"><img src="../../assets/images/about_img_frame1.png" alt="" title="" /></div>
                        <div className="img">
                          <div><div><img src="../../assets/images/portrait.png" alt="" title="" /></div></div>
                        </div>
                      </div>
                      <h1>Prof. Bernhard Breil</h1>
                      <p>PhD Health IT Scientist</p>
                      <div className="social">
                        <a href="#"><img src="../../assets/images/about_facebook.png" alt="" title="" /></a>
                        <a href="#"><img src="../../assets/images/about_In.png" alt="" title="" /></a>
                      </div>
                    </Grid>

                  </Grid>

                </TabContainer>}
                {/* End of Tab 2 */}

              </div>


              {/* contact */}
              <Grid container direction="row" justify="center">
                <Grid item xs={11} md={11} className="about_contact">
                  <h2 className="about_contact_subtitle mob_hid">We are here for you</h2>
                  <h1 className="about_contact_title mob_hid">Have a questions? Contact us!</h1>
                  <Grid container direction="row">
                    <div className="about_contact_right desk_hid">
                      <p>Official Aimedis Support Group is on <span>Telegram</span></p>
                      <div><a href="#">View channel</a></div>
                      <img src="../../assets/images/telegram.png" alt="" title="" />
                    </div>
                    <Grid item sm={12} md={7} className="about_contact_left" >
                      <h2 className="about_contact_subtitle desk_hid">We are here for you</h2>
                      <h1 className="about_contact_title desk_hid">Have a questions? Contact us!</h1>
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
              <Grid container direction="row" justify="center">
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
      </div>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default SimpleTabs;