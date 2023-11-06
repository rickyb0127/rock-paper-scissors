function Rules(props) {
  return (
    <div className="flex mobile:justify-center tablet:justify-end desktop:justify-end">
      <div className="flex w-[130px] px-[20px] py-[10px] mobile:mr-0 tablet:mr-[30px] desktop:mr-[30px] mb-[30px] cursor-pointer justify-center border-2 border-header-outline rounded-lg text-white tracking-[2px]" onClick={() => {props.setShowRulesModal(true)}}>RULES</div>
    </div>
  )
}

export default Rules;
