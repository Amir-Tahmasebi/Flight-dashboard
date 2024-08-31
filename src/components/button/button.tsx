
import { Props } from "./type";
import clsx from "clsx";

const Button = ({ children, className, endIcon, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={clsx([
        "w-full h-11 flex justify-center items-center bg-blue-800 text-base font-semibold text-white rounded-lg disabled:bg-slate-500",
        className,
      ])}
    >
      <span>{children}</span>
      {endIcon}
    </button>
  );
};

export default Button;
