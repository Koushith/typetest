import styled from "styled-components";
import StartPattern from '../../assets/starts-pattern.png';
import { Top3 } from "../../components";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/modal.component";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

export const LandingScreen = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <LeaderboardContainer>
            <div className="cta-section">
                <h1>
                    Go to Monkeytype, create an account 
                    and do a 60-second challenge and verify
                    your speed!!!
                </h1>

                <a href="https://monkeytype.com" target="_next" className="button">
                    Go To <br/> Monkeytype.Com
                </a>

                <button onClick={openModal} className="button reclaim-btn">
                    Submit Your <br/> Speed!!
                </button>
            </div>
            <div className="leader-board">
                <div>
                    <Top3 />
                </div>
                <div>
                    <Top3Leaderboard />
                </div>
            </div>
            <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Submit Reclaim Proof"
        width="600px"
      ><div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:'column'}}>
        
        <QRCode
              value={"qrCode"}
              size={256}
              fgColor="#2E2E2E"
              bgColor="#F5F5F5"
              logoImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed33fb00-7809-49c5-a502-ec3a38b48134/da3tr2v-99a73f4b-3e33-43be-ba6f-a0a06d2fd729.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkMzNmYjAwLTc4MDktNDljNS1hNTAyLWVjM2EzOGI0ODEzNFwvZGEzdHIydi05OWE3M2Y0Yi0zZTMzLTQzYmUtYmE2Zi1hMGEwNmQyZmQ3MjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7M0iA44YWOO9rYO9Ikbg5tAHDaEGbwR2xN59KLoJGBw"
              logoWidth={64}
              logoHeight={64}
              eyeRadius={[
                { outer: [10, 10, 0, 10], inner: [0, 0, 0, 0] },
                { outer: [10, 10, 10, 0], inner: [0, 0, 0, 0] },
                { outer: [10, 0, 10, 10], inner: [0, 0, 0, 0] },
              ]}
              qrStyle="dots"
              style={{ borderRadius: "10px" }}
            />
        <p>This is the content inside the modal. You can pass any React element here.</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
      </Modal>
        </LeaderboardContainer>
    );
};

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
    );
};

const Top3Container = styled.div`
    width: 100%;
    min-width: 831px;
    padding: 60px;
    border-radius: 20px;
    background: linear-gradient(59.61deg, rgba(30, 34, 55, 0.8) 19.25%, rgba(0, 8, 18, 0.8) 110.99%);
    z-index: 40;
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
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }

            .name {
                font-size: 24px;
                font-weight: 600;
                color: #fff;
            }

            .wallet-addr {
                font-size: 18px;
                font-weight: 500;
                color: #B7B3B3;
                margin-top: -5px;
            }
        }

        p {
            font-size: 24px;
            font-weight: 600;
            color: #fff;
        }
    }
`;

const LeaderboardContainer = styled.main`
    color: #A4A4A4;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 0 50px;
    position: relative;

    .cta-section {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        z-index: 10;

        h1 {
            text-align: center;
            font-style: normal;
            font-weight: 400;
            font-size: 45px;
            line-height: 1.2;
            margin-bottom: 30px;
        }
    }

    .button {
        margin-top: 20px;
        padding: 20px 40px;
        background-color: #f4a8e2; 
        color: #665490;
        font-size: 1.75rem;
        font-weight: bold;
        line-height: 1;
        text-align: center;
        border-radius: 25px; 
        border: 4px solid #3b75d1; 
        text-decoration: none; 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
        transition: transform 0.2s ease-in-out;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }

    .button:hover {
        transform: scale(1.05); 
    }

    .button:active {
        transform: scale(0.98); 
    }

    .reclaim-btn {
        background: #674AA5;
        color: #FCB7FB;
    }

    .leader-board {
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 20px;

        .cta-section {
            max-width: 100%;
            h1 {
                font-size: 32px;
            }
        }

        .button {
            font-size: 1.5rem;
            padding: 15px 30px;
            height: auto;
            line-height: normal;
        }

        .leader-board {
            width: 100%;
        }
    }
`;