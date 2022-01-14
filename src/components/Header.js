import React from 'react';
import "./Header.css";
import Logo from "../Blockchain/assets/header/nft.jpg";
import Theme from '@material-ui/icons/FlareRounded';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
        <div className='header'>
                <div className='logoContainer'>
                    <img className='punklogo' src={Logo}  alt=''/>
                </div>
                <div className='searchBar'> 
                    <div className='searchIcon' >
                        <SearchIcon/>
                    </div>
                        <input className='searchInput' placeholder='Nft Artwork, Collection and User etc...' />
                </div>
                <div className='header_right'>
                    <a href="https://testnets.opensea.io/collection/j-punks" target={"blank"}> Marketplace</a>
                   <a href='#' >Mint</a>
                   <a href='#'>Create</a>
                </div>
                <div className='header_actions'>
                    <div className='themeIcon'>
                        <Theme/>
                    </div>       
                </div>
                <div className='loginButton'>
                    Get In          
                </div>
        </div>
    );
}

export default Header