import React from 'react'
import './CollectionCard.css';
import weth from "../Blockchain/assets/weth.png";

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className='CollectionCard'>
            <img className='cryptoImage' src={image} alt= ''/>
            <div className='details'>
                <div className='name'>
                    {name} 
                    <div className='id'> 
                    •#{id}
                    </div>
                </div>
                
                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt=''/>

                    <div className='price'>
                        {traits[0]?.value}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard

