import React, { useEffect, useState } from 'react'
import "./Nav.css"
import netflix from "./netflix.png"
import netflix_avatar from "./Netflix-avatar.png"
import { useHistory } from 'react-router'


function Nav() {

    const [show, handleShow] = useState(false)
    const history=useHistory()

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false)
        }
    }


    useEffect(() => {

        window.addEventListener("scroll", transitionNavbar)
        return () => {
            window.removeEventListener("scroll", transitionNavbar)
        }
    }, [])




    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">


                <img 
                onClick={()=>history.push("/")}
                className="nav__logo"
                    src={netflix} alt="" />

           


                <img onClick={()=>history.push("/profile")} 
                className="nav__avatar"
                    src={netflix_avatar} alt="" />

            </div>


        </div>
    )
}

export default Nav
