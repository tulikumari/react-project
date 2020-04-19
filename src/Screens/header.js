import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class Header extends Component {
  state = {
    anchorEl: undefined,
    open: false,
    isOpen: false
  };
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  toggle = () => {
    this.setState({ isOpen: !(this.state.isOpen) })
  }

  render() {
    return (
      <Grid>
        <Grid className="header">
          <Grid container direction="row" justify="center">
            <Grid item xs={11} md={11}>
              <Grid container direction="row">
                <Grid item xs={3} className="header_logo"><img src="../../assets/images/logo.png" alt="" title="" /></Grid>
                <Grid item xs={9}>
                  <Grid className="customMenu">
                    <Navbar color="light" light expand="md">
                      <NavbarToggler onClick={this.toggle} className={`MenuToggleCstm ${this.state.isOpen ? "active" : ""}`} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                          <NavItem className="mobile_login desk_hid"> 
                            <NavLink href="">Home</NavLink> 
                          </NavItem>

                          <NavItem active={window.location.pathname === "/"} >
                            <NavLink href="/">Home</NavLink> 
                          </NavItem>

                          <NavItem active={window.location.pathname === "/page2"}> 
                            <NavLink href="/page2">Product</NavLink> 
                           </NavItem>

                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                              ADDITIONAL SERVICES
                            </DropdownToggle>
                            <DropdownMenu right className="addonsCstm">
                              <DropdownItem>
                                <NavLink href="https://aimedis-consult.com/" target="_blank" >CONSULTING</NavLink>
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>
                                <NavLink href="https://elements.aimedis.com/" target="_blank" >ELEMENTS</NavLink>
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>
                                <NavLink href="https://aimedis.com/icuservices/" target="_blank" >ICU</NavLink>
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>
                                <NavLink href="https://aimedis.com/qm/" target="_blank" >QM</NavLink>
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>
                                <NavLink href="https://www.aimedis-staff.com/" target="_blank" >STAFF</NavLink>
                              </DropdownItem>
                              {/* <DropdownItem divider /> */}
                            </DropdownMenu>
                          </UncontrolledDropdown>


                          <NavItem active={window.location.pathname === "/blog"}> 
                             <NavLink href="/blog">Blog</NavLink> 
                          </NavItem>

                          <NavItem active={window.location.pathname === "/about"}> 
                            <NavLink href="/about">About Us</NavLink> 
                          </NavItem>

                          <NavItem active={window.location.pathname === "/institute"}> 
                            <NavLink href="/institute">Institutions</NavLink> 
                          </NavItem>

                          <NavItem active={window.location.pathname === "/token_sale"}> 
                             <NavLink href="/token_sale">AIM ASSET & BLOCKCHAIN</NavLink> 
                          </NavItem>

                          <NavItem className="login"> <NavLink href="">LOGIN</NavLink> </NavItem>
                          <NavItem className="desk_hid" active={window.location.pathname === "/carrer"}> <NavLink href="/carrer">Career | <span className="header_yell_span">We are hiring!</span></NavLink></NavItem>
                          <NavItem className="desk_hid" active={window.location.pathname === "/investor"}> <NavLink href="/investor">For investors</NavLink> </NavItem>
                          <NavItem className="desk_hid" active={window.location.pathname === "/support_ticket"}> <NavLink href="/support_ticket">Support</NavLink> </NavItem>

                        </Nav>
                      </Collapse>
                    </Navbar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Header;
