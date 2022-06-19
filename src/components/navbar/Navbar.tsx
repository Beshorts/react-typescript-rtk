import React from 'react';
import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Wrapper } from "./Navbar.styles";
import SearchBar from "../searchBar/SearchBar";
import Menu from "../menu/Menu";

const Navbar = () => {
    return(
        <Wrapper className="navBar" role="navigation">
            <SearchBar />
            {/*Logo component needs to be implemented => use Heading element as child  */}
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <Menu >
                <Badge
                  badgeContent={0} 
                  color="primary" 
                  overlap="circular" 
                  showZero
                >
                  <ShoppingCartOutlined style={{fontSize:22}} />
                </Badge>
            </Menu>
        </Wrapper>
    )
};

export default Navbar;