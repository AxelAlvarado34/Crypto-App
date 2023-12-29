import { useEffect, useState } from "react"
import { Formulary } from "./components/Formulary"
import { setQuote } from "../services/API";
import { Information } from "./components/Information";
import { Spinner } from "./components/Spinner";

function App() {

  const [dataInfo, setDataInfo] = useState({});
  const { currency, crypto } = dataInfo;

  const [fullData, setFullData] = useState({});

  const[spinner, setSpinner] = useState(false);

  const getData = async () => {
    const response = await setQuote(currency, crypto);
    setFullData(response);
  }

  useEffect(() => {
    
    getData()

  }, [dataInfo])

  console.log(fullData);

  return (
    <div>
      <Formulary
        setDataInfo={setDataInfo}
        setSpinner={setSpinner}
      />

      {
        spinner ? <Spinner/> : null
      }

      <div className="flex justify-center items-center card-div" >
        {
          Object.keys(dataInfo).length > 0 && !spinner ? <Information fullData={fullData} /> : null
        }
      </div>

    </div>
  )
}

export default App
