import styled from "styled-components"
import StartPattern from '../../assets/starts-pattern.png'
import { Top3 } from "../../components"

export const LandingScreen = () => {
    return (
        <LeaderboardContainer>
            <div className="cta-section">
<h1>Go to Monkeytype, create an account 
and do a 60 second challenge and verify
your speed!!!</h1>

<a href="https://monkeytype.com" target="_next" className="button">
    Go To <br/> Monkeytype.Com
</a>

<a href="https://monkeytype.com" target="_next" className="button reclaim-btn">
    Submit Your <br/> Speed!!
</a>
            </div>
            <div className="leader-board">
                <div>
                    <Top3 />
                </div>
                <div>
                    <Top3Leaderboard />
                </div>

            </div>
        </LeaderboardContainer>
    )
}

const Top3Leaderboard = () => {
    return (
        <Top3Container>
            <div className="card">
                    <div className="meta-info">
                        <img
                            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Luna"
                            alt="avatar" />
                        <div>
                            <p className="name">koushith</p>
                            <p className="wallet-addr">wallet addr</p>
                        </div>
                    </div>

                    <p>12234 wpm</p>
                
            </div>

            <div className="card">
                    <div className="meta-info">
                        <img
                            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Luna"
                            alt="avatar" />
                        <div>
                            <p className="name">koushith</p>
                            <p className="wallet-addr">wallet addr</p>
                        </div>
                    </div>

                    <p>12234 wpm</p>
                
            </div>

            <div className="card">
                    <div className="meta-info">
                        <img
                            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Luna"
                            alt="avatar" />
                        <div>
                            <p className="name">koushith</p>
                            <p className="wallet-addr">wallet addr</p>
                        </div>
                    </div>

                    <p>12234 wpm</p>
                
            </div>
        </Top3Container>
    )
}

const Top3Container = styled.main`
/* Rectangle 3 */

width: 831.37px;
padding:60px;
border-radius:20px;
background: linear-gradient(59.61deg, rgba(30, 34, 55, 0.8) 19.25%, rgba(0, 8, 18, 0.8) 110.99%);

margin-top:30px;

.card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(95, 89, 89, 0.54);
    padding-bottom: 10px;
    .meta-info{
        display: flex;
        align-items: center;
      

        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

       .name{
font-size:28px;
font-weight:600;
color:#fff;
       }

       .wallet-addr{
        font-size:24px;
font-weight:600;
color:#B7B3B3;
margin-top:-10px

       }
    }
    p{
font-size:28px;
font-weight:600;
color:#fff;
       }
}

`




const LeaderboardContainer = styled.main`
/* background: #151729; */
color: #A4A4A4;
height: 100vh;
/* position: relative; */
display:flex;
align-items: center;
justify-content: space-between;

gap: 100px;

.star-pattern{
    position: absolute;
    width: 100%;
    height: 100%;
   

    /* img{
        width: 100%;
        height: 100%;
        object-fit: cover;
       
    } */
    
    }


.cta-section{

    max-width: 835px;
    display: flex;
    flex-direction: column;

    h1{
        /* Go to Monkeytype, create an account and do a 60 second challenge and verify your speed!!! */
text-align: center;
font-style: normal;
font-weight: 400;
font-size: 45px;
line-height: 88%;

    }
}


.button {
    margin-top:40px;
    display: inline-block;
    padding: 20px 40px;
    background-color: #f4a8e2; /* Light pink background color */
    color: #665490; /* Purple text color */
    font-size: 1.75rem; /* Slightly reduced font size */
    font-weight: bold;
    text-align: center;
    border-radius: 25px; /* Rounded corners */
    border: 4px solid #3b75d1; /* Blue border */
    text-decoration: none; /* No underline on the text */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    transition: transform 0.2s ease-in-out; /* Smooth scaling effect on hover */
    height: 80px; /* Reduced height to fit the text */
    line-height: 1.2; /* Adjusts the spacing between lines */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.button:hover {
    transform: scale(1.05); /* Slightly enlarge the button on hover */
}

.button:active {
    transform: scale(0.98); /* Slightly shrink the button on click */
}


.reclaim-btn{
    background:#674AA5;
    color:#FCB7FB;
}

`