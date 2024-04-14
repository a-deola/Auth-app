type NoteProps = {
  question: string;
  prompt: string;
  route: string;
};

function FormBtm(props: NoteProps) {
  return (
    <div className="text-center">
      <p>
        {props.question}
        <a href={props.route} className="font-bold hover:underline">
          {props.prompt}
        </a>
      </p>
    </div>
  );
}

export default FormBtm;
