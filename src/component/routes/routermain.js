import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Page1 from "./../../Screens/Page1";
import Page2 from "./../../Screens/Page2";
import About from "./../../Screens/about";
import Blog from "./../../Screens/blog";
import BlogSingle from "./../../Screens/blogSingle";
import JobPost from "./../../Screens/jobpost";
import Carrer from "./../../Screens/carrer";
import Investor from "./../../Screens/investor";
import Policy from "./../../Screens/policy";
import Terms from "./../../Screens/terms";
import SupportTicket from "./../../Screens/supportTicket";
import TokenSale from "./../../Screens/tokenSale";
import Institute from "./../../Screens/institute";

class Routermain extends Component {
    render() {
        return (
            <Grid>
                <Switch>
                     <Route exact path="/" component={Page1} />  
                     <Route exact path="/page2" component={Page2} />  
                     <Route exact path="/about" component={About} />
                     <Route exact path="/blog" component={Blog} />  
                     <Route exact path="/blogsingle" component={BlogSingle} />
                     <Route exact path="/jobpost" component={JobPost} /> 
                     <Route exact path="/carrer" component={Carrer} />  
                     <Route exact path="/investor" component={Investor} />   
                     <Route exact path="/policy" component={Policy} />  
                     <Route exact path="/terms" component={Terms} /> 
                     <Route exact path="/support_ticket" component={SupportTicket} />    
                     <Route exact path="/token_sale" component={TokenSale} /> 
                     <Route exact path="/institute" component={Institute} /> 
                </Switch>
            </Grid>
        )
    }
}
export default Routermain; 
