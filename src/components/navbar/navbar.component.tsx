import styled from "styled-components"
import MonkeyType from '../../assets/logo.png'
import { ConnectButton } from "@rainbow-me/rainbowkit"


export const Navbar = () => {
    return (
        <NavContainer>
           <div>
           <img src={MonkeyType} alt="Monkeytype Logo" className="logo"/>
           <p className="logo-text">Typing Contest</p>
           </div>
            <div className="avatar-container">
                
                <ConnectButton showBalance={true} />
            </div>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding:30px 0px;
.logo{
   width:200px; 
}
.logo-text{
    font-size: 1.5rem;
    font-weight: 800;
    color: #FCB7FB;
    margin-left:10px;
}

.avatar-container{
   z-index: 10;
}
`