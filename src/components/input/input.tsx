import clsx from "clsx";

import { Props } from "./";

const Input = ({ className, ...rest }: Props) => {
  return (
    <input
      className={clsx([
        "h-11 w-full mt-1.5 px-4 py-3 rounded-lg text-base border border-solid border-gray-300 outline-none placeholder:text-base",
        className,
      ])}
      {...rest}
    />
  );
};

export default Input;
