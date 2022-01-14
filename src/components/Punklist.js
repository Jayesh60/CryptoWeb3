import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'

const Punklist = ({punkListData, setSelectedPunk}) => {
    return (
        <div className='punkList'>
            {punkListData.map((punk) => {
                const {traits, name, image_url, token_id } = punk;
               
                return(
                    <div 
                    onClick={()=> setSelectedPunk(token_id)}
                    key={token_id}
                    >
                        <CollectionCard 
                            id={token_id}
                            name={name}
                            traits={traits}
                            image={image_url}
                        />
                        <hr/>
                    </div>


                );
           } 
          )
        }
    
        </div>
    );
};


export default Punklist
