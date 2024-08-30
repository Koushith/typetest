import styled from "styled-components"
import MonkeyType from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <NavContainer>
           <div>
           <img src={MonkeyType} alt="Monkeytype Logo" className="logo"/>
           <p className="logo-text">Typing Contest</p>
           </div>
            <div className="avatar-container">
                @Koushith
                <div>
                    <img src={"p"} alt="" srcset="placeholder" />
                </div>
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
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    gap: 1rem;
    justify-content: center;

    div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center
    }
}
`