import styled from "styled-components"
import MonkeyType from '../../assets/logo.png'
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const Navbar = () => {
    const navigate = useNavigate()

    const { address } = useAccount(); // Assuming 'address' is the wallet address

    const register = async () => {
        if (address) {
            try {
                const { data } = await axios.post(`http://localhost:8000/api/user/login/${address}`);
                localStorage.setItem('token', data.token);

            } catch (error) {
                console.error('Error during registration or login:', ((error as any).response ? (error as any).response.data : error.message) as any);
            }
        }
    };

    useEffect(() => {
        register();
    }, [address]);

    return (
        <NavContainer>
            <div onClick={() => {
                navigate('/')
            }}
                style={{ cursor: 'pointer' }}
            >
                <img src={MonkeyType} alt="Monkeytype Logo" className="logo" />
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