import visaLogo from '../assets/images/visa.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="creditCard" style={{ backgroundColor: `${bgColor}`, color:`${color}`}}>
      <div className="visa">
        <img src={visaLogo} style={{ width: '60px' }} />
      </div>

      
        <p className='number'> <strong>.... .... .... {number.substring(12)}</strong></p>
     

      <div className='datas'>
        <p>Expires{expirationMonth}/{expirationYear} </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}
export default CreditCard;
