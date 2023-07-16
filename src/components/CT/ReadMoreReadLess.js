import { useState } from "react";
import './ReadMore.css'

const ReadMoreReadLess = ({children}) =>{

    const [isReadMoreShown,setIsReadMoreShown] = useState(false)
    const toggle = () =>{
        setIsReadMoreShown(prevState =>!prevState )
    }
    return(
        <div className="read-more-read-less">
        
            {isReadMoreShown? children : children.substr(0,310)}

            <button onClick={toggle} className="toggle-read-more">{isReadMoreShown ? 'Read Less' : '...Read More'}</button>

        </div>
    )
}

export default ReadMoreReadLess;