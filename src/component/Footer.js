import React from 'react'
import "./Footer.css"

function Footer() {
    return (
       <footer className="app__footer">
           <div className="br" >
               
           </div>
           <div className="text">
               <img className="image" src="https://i.dlpng.com/static/png/6940813_preview.png" alt="" />
           <h3 >Copyrights reserved to Netflix India </h3>
      
           </div>

    <div className="contact">
        <h3>This Website is made by Divyansh Barar.</h3>
        <h4>Want to Contact?
            +91-9336899943.
        </h4>
        <div className="contact__imageDisplay">
            
        <img className="contact__image" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" alt="github" />
        <img className="contact__image" src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linkedin" />
        <a href="https://www.instagram.com/divyanshbarar/"> 
        <img className="contact__image" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="instagram"/>
        </a>
       <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" className="contact__image" />
 
        </div>
           </div>
           </footer>
    )
}

export default Footer
