type BtnProps = {
  btnName: string;
};
function LgBtn(props: BtnProps) {
  return (
    <button
      type="submit"
      className="btn w-full bg-[#FF70A6] rounded-none text-white border-2 hover:border-[#FF70A6] hover:text-[#FF70A6] focus:outline-none hover:bg-transparent"
    >
      {props.btnName}
    </button>
  );
}

export default LgBtn;
