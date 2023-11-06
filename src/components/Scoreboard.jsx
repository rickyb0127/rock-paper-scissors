import logo from "../assets/images/logo.svg";

function Scoredboard(props) {
  return (
    <div className="flex mobile:w-[90vw] tablet:w-[75vw] desktop:w-[50vw] max-w-[1000px] mt-[40px] ml-auto mr-auto p-[20px] border-2 border-header-outline rounded-lg justify-between">
      <div className="flex flex-col">
        <img src={logo} />
      </div>
      <div className="flex w-[135px] bg-white rounded justify-center items-center">
        <div className="flex flex-col my-[10px] items-center">
          <div className="flex tracking-[2px] text-score-text font-semibold">
            SCORE
          </div>
          <div className="flex my-[-15px] text-[60px] font-semibold text-dark-text">
            {props.score}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scoredboard;