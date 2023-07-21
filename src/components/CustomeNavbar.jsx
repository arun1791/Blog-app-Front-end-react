import { NavLink as ReactLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
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
  NavbarText,
  
} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import { useNavigate } from "react-router-dom";




const  CustomeNavbar =()=>
{
  let navigate=useNavigate(); 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(isOpen);

    const[login, setLogin]=useState(false);
    const[user,setUser]=useState(undefined);

    useEffect(()=>{

      setLogin(isLoggedIn())
      setUser(getCurrentUserDetail())
    },[login])

    const logout=()=>{
      doLogout(()=>{
        setLogin(false)
        navigate("/")
      })
    }
    
  return (
    <Navbar color='dark' 
      dark
      expand="md"
      fixed=""
      className="px-5"
      >
        <NavbarBrand tag={ReactLink} to="/">MATRUPEETH</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)}/>
        <Collapse isOpen={isOpen} navbar>
          {/* <Nav className="me-auto" navbar> */}
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink tag={ReactLink}  to="/" >New Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink}  to="/about" >About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink}  to="/services" >Service</NavLink>
            </NavItem>
            
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/contact">Contact us</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {
              login &&(
                <>
                <NavItem>
                <NavLink tag={ReactLink}  to="/user/profile-info">
                  Profile Info
                </NavLink>
              </NavItem>
                
              <NavItem>
                <NavLink  tag={ReactLink}  to="/user/dashboard">
                  {user.email}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={logout} >
                  Logout
                </NavLink>
              </NavItem>
                </>
                
              )
            }

         {
          !login && (
            <>
             <NavItem>
              <NavLink tag={ReactLink}  to="/login" >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink}  to="/signup" >
                Signup
              </NavLink>
            </NavItem>
            </>
          )
         }
          </Nav>
          {/* <Nav navbar>
          <NavbarText>ARUN PAL</NavbarText>
          </Nav> */}
        </Collapse>
      </Navbar>


  );
}

export default CustomeNavbar;