import { useEffect, useState } from 'react';
import rockIcon from "../assets/images/icon-rock.svg";
import paperIcon from "../assets/images/icon-paper.svg";
import scissorsIcon from "../assets/images/icon-scissors.svg";

function SelectionView(props) {
  const selectableWeapons = [
    {
      id: 1,
      name: "rock",
      imgSrc: rockIcon
    },
    {
      id: 2,
      name: "paper",
      imgSrc: paperIcon
    },
    {
      id: 3,
      name: "scissors",
      imgSrc: scissorsIcon
    }
  ];

  const [userSelectedWeapon, setUserSelectedWeapon] = useState(null);
  const [computerSelectedWeapon, setComputerSelectedWeapon] = useState(null);
  const [resultText, setResultText] = useState("");

  const updateUserSelectedWeapon = (name) => {
    const selectedWeapon = selectableWeapons.find((weapon) => weapon.name === name);

    setUserSelectedWeapon(selectedWeapon);
  };

  const determineWinner = () => {
    const userWeapon = userSelectedWeapon.name;
    const computerWeapon = computerSelectedWeapon.name;
    let gameResult = "TIE";
    let updatedResultText = "";
    let updatedScore = props.score;

    if(userWeapon !== computerWeapon) {
      switch(userWeapon) {
        case "rock":
          gameResult = computerWeapon === "scissors" ? "WIN" : "LOSE";
          break;
        case "paper":
          gameResult = computerWeapon === "rock" ? "WIN" : "LOSE";
          break;
        case "scissors":
          gameResult = computerWeapon === "paper" ? "WIN" : "LOSE";
          break;
      };
    }

    switch(gameResult) {
      case "TIE":
        updatedResultText = "IT'S A TIE";
        break;
      case "WIN":
        updatedResultText = "YOU WIN";
        updatedScore += 1;
        break;
      case "LOSE":
        updatedResultText = "YOU LOSE";
        updatedScore -= 1;
        break;
    };

    setResultText(updatedResultText);
    props.setScore(updatedScore);
  };

  const clearSelections = () => {
    setUserSelectedWeapon(null);
    setComputerSelectedWeapon(null);
    setResultText("");
  };

  useEffect(() => {
    if(userSelectedWeapon) {
      const randomIndex = Math.floor(Math.random() * selectableWeapons.length);
      const newComputerSelectedWeapon = selectableWeapons[randomIndex];

      setComputerSelectedWeapon(newComputerSelectedWeapon);
    }
  },[userSelectedWeapon]);

  useEffect(() => {
    if(userSelectedWeapon && computerSelectedWeapon) {
      determineWinner();
    }
  },[userSelectedWeapon, computerSelectedWeapon]);

  return (
    <div className="flex justify-center pt-[50px]">
      { !userSelectedWeapon ?
        <div className="relative flex flex-col w-[450px] h-[450px] justify-around items-center">
          <div className="bg-triangle absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="flex w-full justify-between">
            <div className="flex icon-container cursor-pointer paper justify-center items-center" onClick={() => {updateUserSelectedWeapon("paper")}}>
              <div className="flex icon-inner justify-center items-center">
                <img className="h-[75px] w-[65px]" src={paperIcon} />
              </div>
            </div>
            <div className="flex icon-container cursor-pointer scissors justify-center items-center" onClick={() => {updateUserSelectedWeapon("scissors")}}>
              <div className="flex icon-inner justify-center items-center">
                <img className="h-[75px] w-[65px]" src={scissorsIcon} />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex"></div>
            <div className="flex icon-container cursor-pointer rock justify-center items-center" onClick={() => {updateUserSelectedWeapon("rock")}}>
              <div className="flex icon-inner justify-center items-center">
                <img className="h-[75px] w-[65px]" src={rockIcon} />
              </div>
            </div>
            <div className="flex"></div>
          </div>
        </div> :
        <div className="flex mobile:w-[90vw] tablet:w-[75vw] desktop:w-[50vw] max-w-[1000px] h-[450px] justify-center">
          <div className="mobile:flex flex-col mobile:w-[90vw] tablet:w-[75vw] desktop:w-[50vw] max-w-[1000px]">
            <div className="mobile:flex justify-between">
              <div className="flex flex-col gap-[40px] items-center">
                <div className="flex text-[23px] tracking-[2px] font-semibold text-white">YOU PICKED</div>
                <div className="flex">
                  <div className={`flex icon-container justify-center items-center ${userSelectedWeapon.name}`}>
                    <div className="flex icon-inner justify-center items-center">
                      <img className="h-[75px] w-[65px]" src={userSelectedWeapon.imgSrc} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile:hidden tablet:flex desktop:flex flex-col items-center gap-[8px] pt-[125px]">
                <div className="text-[28px] tracking-[2px] font-semibold text-white">{resultText}</div>
                <div className="flex">
                  <button className="bg-white text-dark-text tracking-[2px] font-semibold px-[40px] py-[10px] rounded-md" onClick={() => {clearSelections()}}>PLAY AGAIN</button>
                </div>
              </div>
              <div className="flex flex-col gap-[40px] items-center">
                <div className="flex text-[23px] tracking-[2px] font-semibold text-white">THE HOUSE PICKED</div>
                <div className="flex">
                  <div className={`flex icon-container justify-center items-center ${computerSelectedWeapon ? computerSelectedWeapon.name : ''}`}>
                    <div className={`flex icon-inner justify-center items-center ${!computerSelectedWeapon ? 'waiting': ''}`}>
                      {computerSelectedWeapon && <img className="h-[75px] w-[65px]" src={computerSelectedWeapon.imgSrc} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile:flex tablet:hidden desktop:hidden flex-col items-center gap-[8px]">
              <div className="text-[28px] tracking-[2px] font-semibold text-white">{resultText}</div>
              <div className="flex">
                <button className="bg-white text-dark-text tracking-[2px] font-semibold px-[40px] py-[10px] rounded-md" onClick={() => {clearSelections()}}>PLAY AGAIN</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SelectionView;