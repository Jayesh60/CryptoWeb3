import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import Punklist from './components/Punklist';
import Desc from './components/Desc';


function App() {
const[punkListData, setPunkListData] = useState([]);
const[setSelected, setSelectedPunk] = useState(0);
console.log(setSelected);


useEffect 
(() => {
  async function getMyNfts() {
    const Data = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xbd2d1eB8311f04b7312458B8e8FBD5733B23B818&order_direction=asc');
    console.log(Data.data.assets);
    setPunkListData(Data.data.assets);
    
  }
getMyNfts();
},[]);

  return (
    <div className='app'>
     <Header/> 
     {punkListData.length > 0 && (
      <div>
      {/* <Desc punkListData={punkListData} setSelected={setSelected}  /> */}
      <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
      </div>
     )};
    </div>
  );
}

export default App;
