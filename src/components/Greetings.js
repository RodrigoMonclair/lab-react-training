function Greetings({lang, children}){
    
    return(
        <div className="salutation">
            {(lang === "de")? <p>Hallo {children}</p>: <p>Bonjour {children}</p>}
        </div>
    )
}

export default Greetings;