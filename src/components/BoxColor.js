function BoxColor({r,g,b}){
    return(
        <div className="boxColor" style={{backgroundColor:`rgb(${r},${g},${b})`}}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor