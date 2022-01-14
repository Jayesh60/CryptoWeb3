import React from 'react'
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import More from '@material-ui/icons/MoreHoriz';
import './Desc.css';
import {useState, useEffect} from 'react';
import Punklist from './Punklist';



const Desc = ({selectedPunk, punkListData}) => {
      const {active, setactive} = useState(0);

    useEffect(() => {
        setactive(punkListData[selectedPunk])
    }, [Punklist, selectedPunk]);
    

    return (
            
        <div className='main'>
            <div className='mainThing'>

                <div className='highlighter'>

                    <div className='punk'>
                        <img className='selected'
                        src={active.image_original_url}
                        alt=""
                        />
                    </div>

                </div>

                <div className='details'>
                    <div className='name'>
                   <h1>{active.name}</h1>
                   </div>
                    <span className='itemnumber'>
                    •#{active.token_id}
                    </span>
                </div>

                <div className='owner'>
                        <img 
                        src={active.owner.profile_img_url}
                        alt=""
                        />

                        <div className='ownerdetails'>
                            <div className='ownername'>
                              @jayesh wadhe
                            </div>
                        </div>

                        <div className='handle' style={{color:'#fff'}}>
                            <Instagram/>
                            <Twitter/>
                            <More/>
                        </div>
                </div>
            </div>
             <hr/>
        </div>
    );
};

export default Desc;
