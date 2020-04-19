import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Footer from '../footer';
import TextField from '@material-ui/core/TextField';
import Swiper from 'react-id-swiper';

const params = {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleFullyResponsive: true,
      toggleFullyMultilanguage: false,
      toggleEasytouse: false,
      toggleISOcertification: false,
      toggleTestedby: false
    };
    this.fullyResponsive = this.fullyResponsive.bind(this);
    this.Multilanguage = this.Multilanguage.bind(this);
    this.Easytouse = this.Easytouse.bind(this);
    this.ISOcertification = this.ISOcertification.bind(this);
    this.Testedby = this.Testedby.bind(this);
  }
  fullyResponsive() {
    this.setState({
      toggleFullyResponsive: true,
      toggleFullyMultilanguage: false,
      toggleEasytouse: false,
      toggleISOcertification: false,
      toggleTestedby: false
    });
  }
  Multilanguage() {
    this.setState({
      toggleFullyResponsive: false,
      toggleFullyMultilanguage: true,
      toggleEasytouse: false,
      toggleISOcertification: false,
      toggleTestedby: false
    });
  }
  Easytouse() {
    this.setState({
      toggleFullyResponsive: false,
      toggleFullyMultilanguage: false,
      toggleEasytouse: true,
      toggleISOcertification: false,
      toggleTestedby: false
    });
  }
  ISOcertification() {
    this.setState({
      toggleFullyResponsive: false,
      toggleFullyMultilanguage: false,
      toggleEasytouse: false,
      toggleISOcertification: true,
      toggleTestedby: false
    });
  }
  Testedby() {
    this.setState({
      toggleFullyResponsive: false,
      toggleFullyMultilanguage: false,
      toggleEasytouse: false,
      toggleISOcertification: false,
      toggleTestedby: true
    });
  }
  render() {
    return (
      <Grid>
        <Header />
        {/* Hero section */}
        <Grid spacing={1}>
          <Grid className="hero_section_bg hero_sec_relate">
            <div className="hero_section_mask">
              <Grid container direction="row" justify="center">
                <Grid item xs={11} md={10}>
                  <Grid container direction="row">
                    <Grid item md={6}>
                      <h1 className="aimedis-is-the-healt">Aimedis is the health platform of the future.</h1>
                      <p className="aimedis-has-been-dev">
                        Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.
                       </p>
                      <form className="access_form">
                        <TextField id="standard-basic" label="" placeholder="Your email address" className="early_access_box" />
                        <button type="submit" className="early_access_btn">GET <span className="mob_hid">EARLY</span> ACCESS</button>
                        <p class="form_condition">By filling my email and clicking on “GET EARLY ACCESS“  I agree to the <a href="#">Conditions Of Use</a> and the <a href="#">Data Protection Policy</a>.</p>
                      </form>
                    </Grid>
                  </Grid>
                  {/*Sale banner*/}
                  <div className="hero_sec_sale">
                    <div className="inner">
                      <i className="icon"></i>
                      <div>
                        <h2>Buy Aimedis Tokens here</h2>
                      </div>
                      <i className="cross_icon">x</i>
                    </div>
                  </div>
                  {/*End of Sale banner*/}
                </Grid>
              </Grid>
              <div className="video-layer1"></div>
              <div className="video-layer2"></div>
              <div className="video-layer3">
                <a href="#"><img src="../../assets/images/Group_w.png" alt="" title="" /></a>
              </div>

            </div>
          </Grid>
        </Grid>
        {/* End of Hero section */}

        {/* FHIR section */}
        <Grid container direction="row" justify="center">
          <Grid item xs={11} md={10}>
            <Grid container direction="row">
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img1.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img2.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img3.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img4.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img5.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img6.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img7.png" alt="" title="" /></Grid>
              <Grid item xs={6} sm={6} md={3} align="center" className="phir_sec"><img src="../../assets/images/brand_img8.png" alt="" title="" /></Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* End of FHIR section */}

        {/* Offer section */}
        <Grid container direction="row" justify="center" className="offer_section">
          <div className="inner">
            <Grid container direction="row" justify="center">
              <Grid item xs={11} md={10}>
                <h2 className="offer_subtitle">platform features</h2>
                <h1 className="offer_title">What Aimedis offers</h1>
                <Grid container direction="row">
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Your_health_data_in_one_place.png" alt="" title="" /></i>
                        <p>Your health data in <br />one place</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Your health data in <br />one place</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Videochat_with_doctors.png" alt="" title="" /></i>
                        <p>Videochat with <br />doctors</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Videochat with <br />doctors</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Independent.png" alt="" title="" /></i>
                        <p>Doctors appointments</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Doctors appointments</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} className="mob_hid"></Grid>
                  <Grid item xs={6} sm={6} md={3} className="mob_hid"></Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Independent.png" alt="" title="" /></i>
                        <p>Independent Second <br />Opinion</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Independent Second <br />Opinion</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Connect.png" alt="" title="" /></i>
                        <p>Connect fitness <br />trackers</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Connect fitness <br />trackers</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Care.png" alt="" title="" /></i>
                        <p>Care for your family</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Care for your family</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} className="mob_hid"></Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/002-prescription.png" alt="" title="" /></i>
                        <p>Prescription online</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Prescription online</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_bg_front mt-50">
                      <div className="offer_bg_table">
                        <i><img src="../../assets/images/Medical_tourism.png" alt="" title="" /></i>
                        <p>Medical tourism</p>
                      </div>
                    </div>
                    <div className="offer_bg_back mt-50">
                      <div className="offer_bg_table">
                        <i></i>
                        <p>Medical tourism</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} align="center" className="offer_bg">
                    <div className="offer_all mt-50">
                      <div className="offer_bg_table">
                        <p>See full product <br />overview</p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        {/* End of Offer section */}

        {/* Forward Thinking */}
        <Grid container direction="row" justify="center">
          <Grid item xs={11} md={10}>

            <Grid container direction="row">
              <Grid item sm={12} md={5} className="forward_left">
                <h2 className="subtitle">forward thinking</h2>
                <h1 className="title">The Technology</h1>
                <p>
                  Blockchain smart contracts smart graphs artificial intelligence highest security standards payments cryptocurrencies ICD ATC HL7 FHIR HIPPA IHE DICOM.<br /><br />

                  Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help patients to support each other on a new level.
                   </p>
                <div className="mt-30"><a href="#" className="grey_btn">DOWNLOAD TECH SPEC (3.4 MB)</a></div>
              </Grid>
              <Grid item xs={12} sm={1}></Grid>
              <Grid item xs={12} sm={6} className="forward_right">
                <Grid container direction="row">
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/Optimal_Security.png" alt="" title="" />
                    <p>Optimal Security</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/Blockchain.png" alt="" title="" />
                    <p>Blockchain & Smart contracts</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/Smart.png" alt="" title="" />
                    <p>Smart graphs & AI</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/Payment.png" alt="" title="" />
                    <p>Payment & cryptocurrencies</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/Care.png" alt="" title="" />
                    <p>AIMSafe drug safety</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/ICD10.png" alt="" title="" />
                    <p>ICD 10</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/HL7.png" alt="" title="" />
                    <p>HL7, FHIR, DICOM, HIPAA, IHE</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className="forward_right_article">
                    <img src="../../assets/images/ATC.png" alt="" title="" />
                    <p>ATC</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        {/* End of Forward Thinking */}

        {/* Platform overview */}
        <Grid container direction="row" justify="center" className="overview_section">
          <Grid item xs={11} md={10}>
            <h2 className="overview_subtitle">Platform Overview</h2>
            <h1 className="overview_title">Aimedis Ecosystem</h1>
            <Grid container direction="row">
              <Grid item xs={12} sm={12} md={5}>
                <ul className="overview_list">

                  <li className="overview-open" onClick={this.fullyResponsive}>
                    <div className="overview_left">
                      <span>1</span>
                      <div>
                        <h2>Fully responsive</h2>
                        <p>In every actual browser</p>
                      </div>
                      <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                    </div>
                    <div className="overview_detail_mob">
                      <img src="../../assets/images/mob_img.png" alt="" title="" />
                    </div>
                  </li>

                  <li onClick={this.Multilanguage} >
                    <div className="overview_left">
                      <span>2</span>
                      <div>
                        <h2>Multilanguage</h2>
                        <p>also fully functional abroad</p>
                      </div>
                      <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                    </div>
                  </li>

                  <li onClick={this.Easytouse}>
                    <div className="overview_left">
                      <span>3</span>
                      <div>
                        <h2>Easy to use</h2>
                        <p>also for unexperienced patients simple & fast</p>
                      </div>
                      <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                    </div>
                  </li>

                  <li onClick={this.ISOcertification}>
                    <div className="overview_left">
                      <span>4</span>
                      <div>
                        <h2>ISO 27001 certification</h2>
                        <p>For optimal security through regular security audits</p>
                      </div>
                      <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                    </div>
                  </li>

                  <li onClick={this.Testedby}>
                    <div className="overview_left">
                      <span>5</span>
                      <div>
                        <h2>Tested by doctors & hospitals</h2>
                        <p>Tested by active physicians and medical IT specialists</p>
                      </div>
                      <i><span className="mob_hid">&rarr;</span> <span className="desk_hid">&darr;</span></i>
                    </div>
                  </li>

                </ul>
              </Grid>
              <Grid item xs={12} sm={7} className="overview_right">

                {this.state.toggleFullyResponsive &&
                  <div><img src="../../assets/images/IMac.png" alt="" title="" className="overview_img" /></div>
                }

                {this.state.toggleFullyMultilanguage &&
                  <div><img src="../../assets/images/iPhoneX-01.png" alt="" title="" className="overview_img" /></div>
                }
                {this.state.toggleEasytouse &&
                  <div><img src="../../assets/images/IMac.png" alt="" title="" className="overview_img" /></div>
                }
                {this.state.toggleISOcertification &&
                  <div><img src="../../assets/images/iPhoneX-01.png" alt="" title="" className="overview_img" /></div>
                }
                {this.state.toggleTestedby &&
                  <div><img src="../../assets/images/IMac.png" alt="" title="" className="overview_img" /></div>
                }

              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* End of Platform overview */}

          {/* Testinomial */}
          <Grid container  direction="row" justify="center" className="testinomial_section">
            <Grid item xs={11} md={10}>
              <h2 className="testinomial_subtitle">what users say</h2>
              <h1  className="testinomial_title">Testimonials</h1>
              <Grid container direction="row">
                <Grid item xs={12}>
                
                  {/* Slider */}
                  <Grid className="testiSlider">
                    <Swiper {...params}>
                      <div className="testiCntnt">
                        <div><img src="../../assets/images/testinomial_img1.png" alt="" title="" /></div>
                        <div className="testiCntntIner">
                          <p>"Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick, easy and efficient treatment."</p>
                          <div className="testiCntntLbl">
                            <label>Thomas Muenkel</label>
                            <span><a>General practitioner Solingen, Germany</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="testiCntnt">
                        <div><img src="../../assets/images/testinomial_img2.png" alt="" title="" /></div>
                        <div className="testiCntntIner">
                          <p>"Aimedis allows us to exchange data fast, safe and reliable between hospitals and practices and offers services the German health card has never managed to offer."</p>
                          <div className="testiCntntLbl">
                            <label>Dr. med. Florian Zwecker</label>
                            <span><a>Chief physician, medical amb. center University hospital Bochum, Germany</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="testiCntnt">
                        <div><img src="../../assets/images/testinomial_img3.png" alt="" title="" /></div>
                        <div className="testiCntntIner">
                          <p>"Aimedis connects me with my patients all around the clock and allows me to support them even after my practice times are over. This gives real value to our medical treatments."</p>
                          <div className="testiCntntLbl">
                            <label>Maziaar Maafi</label>
                            <span><a>Orthopedist Krefeld, Germany</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="testiCntnt">
                        <div><img src="../../assets/images/testinomial_img1.png" alt="" title="" /></div>
                        <div className="testiCntntIner">
                          <p>"Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick, easy and efficient treatment."</p>
                          <div className="testiCntntLbl">
                            <label>Thomas Muenkel</label>
                            <span><a>General practitioner Solingen, Germany</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="testiCntnt">
                        <div><img src="../../assets/images/testinomial_img2.png" alt="" title="" /></div>
                        <div className="testiCntntIner">
                          <p>"Aimedis allows us to exchange data fast, safe and reliable between hospitals and practices and offers services the German health card has never managed to offer."</p>
                          <div className="testiCntntLbl">
                            <label>Dr. med. Florian Zwecker</label>
                            <span><a>Chief physician, medical amb. center University hospital Bochum, Germany</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="testiCntnt">
                        <div><img src="../../assets/images/testinomial_img3.png" alt="" title="" /></div>
                        <div className="testiCntntIner">
                          <p>"Aimedis connects me with my patients all around the clock and allows me to support them even after my practice times are over. This gives real value to our medical treatments."</p>
                          <div className="testiCntntLbl">
                            <label>Maziaar Maafi</label>
                            <span><a>Orthopedist Krefeld, Germany</a></span>
                          </div>
                        </div>
                      </div>
                    </Swiper>
                  </Grid>
                  {/* End of Slider */}
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* End of Testinomial */}

        {/* Information go */}
        <Grid container direction="row" justify="center" className="info_go">
          <Grid item xs={11} md={10}>
            <h2 className="subtitle">information on the go</h2>
            <h1 className="title">Aimedis is mobile</h1>
            <Grid container direction="row">
              <Grid item sm={12} md={4}>
                <div className="info_go_bg">
                  <div className="info_go_img">
                    <img src="../../assets/images/icon_apple_blue.png" alt="" title="" className="nohover" />
                    <img src="../../assets/images/icon_apple.png" alt="" title="" className="hover" />
                  </div>
                  <div className="info_go_detail">
                    on iPhone and iPad from iOS 9
                     </div>
                  <div className="info_go_btn">
                    <button>GO TO App Store</button>
                  </div>
                </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <div className="info_go_bg">
                  {/* <div class="soon">soon</div> */}
                  <div className="info_go_img">
                    <img src="../../assets/images/icon_android.png" alt="" title="" className="nohover" />
                    <img src="../../assets/images/icon_android_w.png" alt="" title="" className="hover" />
                  </div>
                  <div className="info_go_detail">
                    on Android
                    smartphones and
                    tablet from Android 4
                     </div>
                  <div className="info_go_btn">
                    <button>GO TO GOOGLE PLAY</button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* End of Information go */}

        {/* Learn New */}
        <Grid container direction="row" justify="center" className="learn_new">
          <Grid item xs={11} md={10}>
            <h2 className="subtitle">Learn what's new</h2>
            <h1 className="title">Aimedis Blog</h1>
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
        {/* End of Learn New */}

        {/* Discover */}
        <Grid container direction="row" justify="center" className="discover">
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
}