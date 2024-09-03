//@ts-nocheck

import styled from "styled-components"
import Leaderboard from '../../assets/leaderboard.png'
import Crown from '../../assets/crown.png'
import axios from "axios";
import { useState, useEffect } from "react";


export const Top3 = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLeaderboard = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get("http://localhost:8000/api/user/leaderboard");
            console.log('Leaderboard:', res.data);

            // Calculate scores and sort the leaderboard
            const sortedLeaderboard = res.data
                .map((user: { wpm: any; accuracy: any; }) => ({
                    ...user,
                    score: ((user.wpm + user.accuracy) * 10 / 2).toFixed(1)
                }))
                .sort((a: { score: number; }, b: { score: number; }) => b.score - a.score);

            // Set the sorted top 3 leaderboard
            setLeaderboard(sortedLeaderboard.slice(0, 3));
            setIsLoading(false);
        } catch (error: any) {
            console.error('Error fetching leaderboard:', error.response ? error.response.data : error.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    return (
        <Top3Container>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {leaderboard.length > 0 ? (
                        <>
                            <div className="second">
                                <p className="name">{leaderboard[1]?.name || 'N/A'}</p>
                                <p className="score">{leaderboard[1]?.score || '0'}</p>
                            </div>

                            <div className="first">
                                <img src={Crown} alt="Leaderboard" className="crown" />
                                <p className="name">{leaderboard[0]?.name || 'N/A'}</p>
                                <p className="score">{leaderboard[0]?.score || '0'}</p>
                            </div>

                            <div className="third">
                                <p className="name">{leaderboard[2]?.name || 'N/A'}</p>
                                <p className="score">{leaderboard[2]?.score || '0'}</p>
                            </div>
                        </>
                    ) : (
                        <p>No data available</p>
                    )}
                </>
            )}
        </Top3Container>
    );
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

