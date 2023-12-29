import '../styles/result.css'

export const Information = ({ fullData }) => {

    const { CHANGEDAY, PRICE, HIGH24HOUR, LOW24HOUR, SUPPLY, IMAGEURL } = fullData;


    return (
        <div className='card'>

            <figure className='figure'>
                <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto-img" className='result-img' />
            </figure>

            <div className="text">
                <p className='text-3xl font-black  uppercase price'>
                    Price : {''}
                    <span className='normal-case'>{PRICE}</span>
                </p>

                <p className='text-xl font-black  uppercase change'>
                    Change in the day  : {''}
                    <span className='normal-case'>{CHANGEDAY}</span>
                </p>

                <p className='text-xl font-black  uppercase high'>
                    last change high  : {''}
                    <span className='normal-case'>{HIGH24HOUR}</span>
                </p>

                <p className='text-xl font-black  uppercase low'>
                    last change low  : {''}
                    <span className='normal-case '>{LOW24HOUR}</span>
                </p>

                <p className='text-xl font-black uppercase value'>
                    Virtual value  : {''}
                    <span className='normal-case'>{SUPPLY}</span>
                </p>
            </div>
        </div>
    )
}
