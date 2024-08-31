import { useState } from "react";
import clsx from "clsx";

import { Props } from "./";
import { Button } from "./../";

const Popover = ({ onLogout, username }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={clsx([
        "w-36 transition-all ease-linear duration-200 z-10",
        show &&
          "w-40 border border-solid border-gray-200 rounded bg-white p-2 ",
      ])}
    >
      <Button
        onClick={() => {
          setShow((prev) => !prev);
        }}
        className={clsx([
          "transition-all ease-linear duration-300",
          show && "mb-1",
        ])}
      >
        {username}
      </Button>

      {show && (
        <div>
          <Button onClick={onLogout}>logout</Button>
        </div>
      )}
    </div>
  );
};

export default Popover;
