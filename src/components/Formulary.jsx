import React, { useEffect, useState } from 'react'

import '../styles/form.css'
import { getData, setQuote } from '../../services/API';
import { dataArray } from '../../data';
import { Alert } from './Alert';

export const Formulary = ({ setDataInfo, setSpinner }) => {

    const [currencyData, setCurrencyData] = useState([]);


    //FIELDS FORM
    const [currency, setCurrency] = useState('');
    const [crypto, setCrypto] = useState('');

    //ALERT STATE
    const [alert, setAlert] = useState(false);


    //SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([currency, crypto].includes('')) {
            setAlert(true);
            return;
        }

        setSpinner(true);

        setTimeout(() => {
            setSpinner(false);
        }, 3200);

        setAlert(false);

        const quoteObject = { currency, crypto };

        setDataInfo(quoteObject);
    }

    const getCurrencyData = async () => {
        const response = await getData();
        setCurrencyData(response);
    }

    useEffect(() => {
        getCurrencyData();
    }, [currency, crypto])

    return (
        <div className='main-form'>

            <div>
                <figure>
                    <img src="img/imagen-criptos.png" alt="img-criptos" className='form-banner' />
                </figure>
            </div>

            <div className='form-div'>

                <h1 className='text-white mb-5 font-black text-4xl uppercase text-center'>automatic cryptocurrency <br /> quoter</h1>

                <form className='form'
                    onSubmit={handleSubmit}
                >

                    {
                        alert ? <Alert /> : null
                    }

                    <div className='campo mb-7'>
                        <label htmlFor="coin" className='text-white font-black text-2xl uppercase'>select your currency : </label>
                        <select name="coin" id="coin" className='p-3 rounded-md shadow-md text-center bg-gray-400'

                            onChange={(e) => {
                                setCurrency(e.target.value);
                            }}

                        >
                            <option value="">Select</option>

                            {
                                dataArray.map((data) => {
                                    const { id, name } = data;
                                    return <option value={id} key={id}>{name}</option>
                                })
                            }

                        </select>

                    </div>

                    <div className='campo'>
                        <label htmlFor="crypto" className='text-white font-black text-2xl uppercase'>select your cryptocurrency : </label>
                        <select name="crypto" id="crypto" className='p-3 rounded-md shadow-md text-center bg-gray-400'

                            onChange={(e) => {
                                setCrypto(e.target.value);
                            }}

                        >

                            <option value="">Select</option>

                            {
                                currencyData.map((coin) => {
                                    const { Name, FullName, Id } = coin.CoinInfo
                                    return <option value={Name} key={Id} className='p-2'>{FullName}</option>
                                })
                            }
                        </select>

                    </div>


                    <input
                        type="submit"
                        className='w-full text-center text-white p-5 rounded-lg mt-5 bg-indigo-600 text-2xl font-black uppercase hover:bg-indigo-800 transition-all cursor-pointer'
                        value={'Send'}
                    />
                </form>
            </div>

        </div>
    )
}
