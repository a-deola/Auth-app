import { PropsWithChildren } from "react";

function FormCon(props: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center">
      <div className="border rounded  px-8 py-10 md:w-2/5">
        {props.children}
      </div>
    </div>
  );
}

export default FormCon;
