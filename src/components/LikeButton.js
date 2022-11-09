import {useState} from 'react'

function LikeButton(){
    const [contador, setContador] = useState(0)
    

    function add(){
        setContador(contador + 1)
    }
        

    return(
        <div className="btnLikes">
            <button onClick={add}>{contador} Likes</button>
        </div>
    )
}

export default LikeButton