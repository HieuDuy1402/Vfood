import { useEffect, useState } from 'react';
import './BackToTopBtn.css'
import {assets} from '../../assets/assets'

const BackToTopBtn = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setBackToTopBtn(true)
            }else{
                setBackToTopBtn(false)
            }
        })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
      {backToTopBtn && (
        <button className='btn-up' onClick={scrollUp}><img src={assets.up_icon}/></button>
      )}
    </div>
  )
}

export default BackToTopBtn
