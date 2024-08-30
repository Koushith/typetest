import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"
import AppBg from '../../assets/background.png'
import StarsPattern from '../../assets/starts-pattern.png'
import Mesh from '../../assets/mesh-bg.png'
import { Navbar } from "../navbar/navbar.component"

export const AppLayout = () => {
    return (
        <ApplayoutContainer>
            <div className="main-container">

            <Navbar/>
            <img src={Mesh} className="mesh-bg" alt="Mesh Background" />
            {/* <Link to="/">Landing</Link> */}
           <Outlet />
            </div>
        </ApplayoutContainer>
    )   
}

const ApplayoutContainer = styled.main`
    height: 100vh; /* Ensures the container takes up the full viewport height */
    width: 100vw; /* Ensures the container takes up the full viewport width */
   background-image: url(${StarsPattern});
    background-size: cover; /* Ensures the background image covers the entire container */
    background-position: center; /* Centers the background image */
    background-repeat: no-repeat; /* Prevents the background image from repeating */
    position: relative;

    background-color: #151729;

    .mesh-bg {
        position: absolute;
        right: 0; /* Aligns the mesh image to the right side */
        top: 0;
        height: 100%; /* Sets the height to match the parent's height */
        object-fit: cover; /* Ensures the image covers its container */
        z-index: 1; /* Ensures it is above the background but below other content */
    }


    .main-container{
        max-width:1681px;
        margin: 0 auto;
    }
`
