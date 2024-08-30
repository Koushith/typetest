import styled from "styled-components"
import Leaderboard from '../../assets/leaderboard.png'
import Crown from '../../assets/crown.png'

export const Top3 = () => {
    return (
        <Top3Container>
            <div className="second">


                <p className="name">Jack</p>
                <p className="score">1234</p>

            </div>

            <div className="first">
                <img src={Crown} alt="Leaderboard" className="crown" />

                <p className="name">Jack</p>
                <p className="score">1234</p>

            </div>

            <div className="third">


                <p className="name">Jack</p>
                <p className="score">1234</p>

            </div>
        </Top3Container>
    )
}

const Top3Container = styled.main`

display: flex;
align-items: flex-end;
/* justify-content: center; */
z-index: 30;


.name{
    font-weight: 500;
    font-size: 36px;
    text-align: center;



font-weight: 600;
font-size: 37px;
line-height: 58px;
text-align: center;

color: #FFFFFF;




}

.score{
    font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 48px;
text-align: center;


color: #009BD6;
}
.rank{
    font-weight: 500;
    font-size: 12px;
    text-align: center;
}



.third{
    background-color:#1E2237;
    border-radius: 8px;
    height:265px;
    width:254px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    .score{
        color:#00FF44;
    }

}

.first{
    border-radius: 30px 30px 0px 0px;
    /* Rectangle 5 */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
width: 285.63px;
height: 372.85px;
z-index: 10;
background: #252A40;
border-radius: 30px 30px 0px 0px;

.crown{
    object-fit: cover;
    /* width: 100px;
    height: 100px; */
    margin-bottom:10px;
}

.score{
    color:#FFAA00;
}

}

.second{
    /* background-color: #1E2237; */
    background-color:#1E2237;
    border-radius: 8px;
    height:265px;
    width:254px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;

}
`

