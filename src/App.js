import './App.css';
import Header from './components/Header';
import Punklist from './components/Punklist';
import Main from './components/Main';
import {useState, useEffect} from 'react' 
import axios from 'axios'

function App() {

  const [punkListData, setPunkListData] = useState([]);
  const[selectedPunk, setSelectedPunk] =useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x136CF066D99891F24fce8ab4b299a4A1cA9314cD&order_direction=asc')
    console.log(openseaData.data.assets)
    setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className="app" >
    <Header />
    {
      punkListData.length > 0 && (
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} 
        />
        </>
      )
    }
  </div>
  );
}

export default App;
