import axios from "axios";

const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;

const getData = async()=>{
    const response = await axios.get(url);
    const result = await response.data;

    const data = result.Data;

    return data;
}

const setQuote = async(coin, crypto)=>{
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

    const response = await axios.get(url);
    const result = await response.data;

    const datas = result.DISPLAY[crypto][coin];

    return datas;
}

export {
    getData,
    setQuote
}

