type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  onAdd: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};
function Input(props: InputProps) {
  return (
    <input
      className="border text-sm rounded-lg p-3 focus:outline-none focus:shadow-lg shadow-[#EAEAEA]"
      type={props.type}
      name={props.name}
      onChange={props.onAdd}
      placeholder={props.placeholder}
      value={props.value}
      onBlur={props.onBlur}
    />
  );
}

export default Input;
