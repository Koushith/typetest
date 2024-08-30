import styled from "styled-components"

export const LeaderboardScreen = () => {
    return (
        <LeaderboardContainer>
            <h1>Leaderboard</h1>
            <Leaderboard />
        </LeaderboardContainer>
    )
}

const Leaderboard = () => {
    return (
        <LeaderBoardContainer>
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
                <p>100%</p>
                <p className="score">1234x%</p>
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
                <p>100%</p>
                <p className="score">1234x%</p>
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
                <p>100%</p>
                <p className="score">1234x%</p>
            </div>
        </LeaderBoardContainer>
    )
}

const LeaderboardContainer = styled.main`
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 48px;
  }
  position: relative;
  z-index: 20; /* Ensure this is above the mesh pattern */
`;

const LeaderBoardContainer = styled.div`
  position: relative;
  z-index: 20; /* Ensure this is above the mesh pattern */
  padding: 60px;
  border-radius: 20px;
  background: linear-gradient(59.61deg, rgba(30, 34, 55, 0.8) 19.25%, rgba(0, 8, 18, 0.8) 110.99%);
  margin-top: 30px;

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(95, 89, 89, 0.54);
    padding-bottom: 10px;
    
    .meta-info {
      display: flex;
      align-items: center;
      
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      .name {
        font-size: 28px;
        font-weight: 600;
        color: #fff;
      }

      .wallet-addr {
        font-size: 24px;
        font-weight: 600;
        color: #B7B3B3;
        margin-top: -10px;
      }
    }

    p {
      font-size: 28px;
      font-weight: 500;
      color: #B7B3B3;
    }
  }

  .score {
    font-weight: 700;
    font-size: 38px;
    line-height: 61px;
    color: #fff !important;
  }
`;