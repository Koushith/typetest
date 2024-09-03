import styled from "styled-components";
import StartPattern from '../../assets/starts-pattern.png';
import { Top3 } from "../../components";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/modal.component";
import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { Reclaim } from '@reclaimprotocol/js-sdk';
import { useAccount } from "wagmi";
import axios from "axios";

export const LandingScreen = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [statusUrl, setStatusUrl] = useState("");
    const [proof, setProof] = useState();
    const [requestUrl, setRequestUrl] = useState("");
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const account = useAccount()



    const updateScore = async (wpm: any, accuracy: any, name: any) => {
        try {
            // Retrieve the token from local storage
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('No token found in local storage');
                return;
            }

            // Make the request to the API with the token in the headers
            const res = await axios.post(
                "http://localhost:8000/api/user/add-points",
                {
                    wpm,
                    accuracy,
                    name
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log('Points updated:', res.data);
        } catch (error: any) {
            console.error('Error updating points:', error.response ? error.response.data : error.message);
        }
    };


    const getVerificationReq = async () => {
        const APP_ID = "0xA56e5c903856b2f365EAC54B5a322862EB1FBe93";
        const reclaimClient = new Reclaim.ProofRequest(APP_ID);
        const providerIds = [
            '9b3855d2-607b-4836-a92f-18579902b5ef', // monkey speed
        ];
        await reclaimClient.buildProofRequest(providerIds[0], false, 'V2Linking')
        const APP_SECRET = "0x89d84de3ff850b4ff583b3fe8415209c474f365abb35b26bc837b14edb828a71"  // your app secret key.
        reclaimClient.setSignature(
            await reclaimClient.generateSignature(APP_SECRET)
        )
        const { requestUrl, statusUrl } =
            await reclaimClient.createVerificationRequest()
        console.log('Request URL:', requestUrl)
        setRequestUrl(requestUrl)
        await reclaimClient.startSession({
            onSuccessCallback: (proof: any) => {
                console.log('Verification success', proof)
                // Your business logic here

                if (proof) {
                    setModalOpen(false)

                    const parametersString = proof[0].claimData.parameters;
                    console.log("steamId", parametersString);
                    const parameters = JSON.parse(parametersString);

                    const claimData = parameters.paramValues;

                    console.log("claimData", claimData);

                    setProof(claimData)
                    updateScore(claimData.wpm, claimData.accuracy, claimData.name)

                }
            },
            onFailureCallback: (error: any) => {
                console.error('Verification failed', error)
                // Your business logic here to handle the error
            }
        })
    };


    return (
        <LeaderboardContainer>
            <div className="cta-section">
                <h1>
                    Go to Monkeytype, create an account
                    and do a 60-second challenge and verify
                    your speed!!!
                </h1>

                <a href="https://monkeytype.com/" target="_blank" className="button">
                    Go To <br /> Monkeytype.Com
                </a>

                <button onClick={() => {
                    getVerificationReq()
                    openModal()
                }} className="button reclaim-btn">
                    Submit Your <br /> Speed!!
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
            ><div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column', padding: 20 }}>

                    {requestUrl ? <QRCode
                        value={requestUrl}
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
                    /> : <h1>Generating QR Code...</h1>}
                    <p style={{ marginTop: 20 }}>Waiting for the Proofs to be Submitted..</p>
                </div>
            </Modal>
        </LeaderboardContainer>
    );
};

const Top3Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLeaderboard = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get("http://localhost:8000/api/user/leaderboard");
            console.log('Leaderboard:', res.data);
            setLeaderboard(res.data);
            setIsLoading(false);
        } catch (error: any) {
            console.error('Error fetching leaderboard:', error.response ? error.response.data : error.message);
        }
    }

    useEffect(() => {
        fetchLeaderboard();
    }
        , []);


    return (
        <Top3Container>

            {isLoading ? <h1>Loading...</h1> : leaderboard.slice(0, 3).map((user: any, index: number) => (
                <div className="card" key={index}>
                    <div className="meta-info">
                        <img
                            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Luna"
                            alt="avatar" />
                        <div>
                            <p className="name">{user.name}</p>
                            <p className="wallet-addr">{user.walletAddress}</p>
                        </div>
                    </div>
                    <p>{user.wpm} wpm</p>
                </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <Link to='/leaderboard'>GOTO Leaderboard</Link>
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