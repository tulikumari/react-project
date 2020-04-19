import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
    <Grid className="footer_sec"> 
      <Grid container direction="row" justify="center">
        <Grid item xs={10}>
         <Grid container direction="row">
            <Grid item xs={12} md={4} className="fot_logo">
              <img src="../../assets/images/fot_logo.jpg" alt="" title="" />
            </Grid>
            <Grid item xs={12} md={5} className="fot_link">
              <Grid container direction="row">
                <Grid item xs={5}>
                  <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/page2">product</a></li>
                    <li><a href="/blog">blog</a></li>
                    <li><a href="/about">about us</a></li>
                    <li><a href="/institute">institutions</a></li>
                    <li><a href="/token_sale">Token sale</a></li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="/carrer">Career |</a> <span>We are hiring!</span></li>
                    <li><a href="/investor">For investors</a></li>
                    <li><a href="/support_ticket">Support</a></li>
                  </ul>
                </Grid>
              </Grid>    
            </Grid>
            <Grid item xs={12} md={3} className="fot_social">
             <div class="inner">
              <a href="#">
                <img src="../../assets/images/facebook.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/facebook_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/Group9.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/Group9_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/Group10.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/Group10_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/Group11.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/Group11_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/btc.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/btc_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/medium.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/medium_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/insta.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/insta_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/In.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/In_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/reddit.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/reddit_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/youtube.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/youtube_b.png" alt="" title="" className="hover_icon" />
              </a>
              <a href="#">
                <img src="../../assets/images/mail.png" alt="" title="" className="yes_icon" />
                <img src="../../assets/images/mail_b.png" alt="" title="" className="hover_icon" />
              </a>
             </div>
            </Grid>
          </Grid>

          <Grid container direction="row" className="copyright">
            <Grid item xs={12} md={9} className="mob_hid">
                Copyright 2018 Aimedis B.V. 
            </Grid>
            <Grid item xs={12} md={3} className="terms_link">
               <a href="/terms">Terms</a>
               <a href="/policy">Policy</a>
            </Grid>
            <Grid item xs={12} className="desk_hid mob_copyright">
                Copyright 2018 Aimedis B.V. 
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid> 
   );
  }
}

export default Footer;
