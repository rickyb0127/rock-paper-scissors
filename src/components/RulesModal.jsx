import closeIcon from "../assets/images/icon-close.svg";
import rulesImage from "../assets/images/image-rules.svg";

function RulesModal(props) {
  return (
    <div className="absolute z-[99999] w-[400px] h-[400px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md flex flex-col justify-around">
      <div className="flex justify-between items-center">
        <div className="flex pl-[30px] text-[28px] text-dark-text font-semibold">RULES</div>
        <div className="flex pr-[30px]"><img className="cursor-pointer" onClick={() => props.setShowRulesModal(false)} src={closeIcon} /></div>
      </div>
      <div className="flex justify-center">
        <img src={rulesImage} />
      </div>
    </div>
  )
}

export default RulesModal;