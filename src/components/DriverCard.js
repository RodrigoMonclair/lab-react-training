function DriverCard({name, rating, img, car:{model, licensePlate}}){

    const num = Math.round(rating);

    const starArr = ['☆', '☆', '☆', '☆', '☆'];
  
    for (let i = 0; i < num; i++) {
      starArr[i] = '★';
    }

    return(
        <div className="driverCard">
            <img src={img}></img>
            <div className="textCard">
                <p> <strong>{name}</strong></p>
                <p>{starArr.join('')}</p>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard