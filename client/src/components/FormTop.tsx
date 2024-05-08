type FormTopProps = {
  text: string;
};
function FormTop(props: FormTopProps) {
  return (
    <div className="mb-5">
      <h2 className="font-medium text-xl">{props.text}</h2>
      <p>to get started</p>
    </div>
  );
}

export default FormTop;
