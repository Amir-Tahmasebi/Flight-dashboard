import { useAppSelector } from "../../lib";
import { profile } from "./../../lib";
import { useHeader } from ".";
import { Popover } from "../../components";

const Header = () => {
  const { username } = useAppSelector(profile.selectedProfile);
  const { handleClick } = useHeader();

  return (
    <header className="h-16 border-b border-solid border-gray-200 flex justify-between items-start">
      <span>Header</span>
      <Popover onLogout={handleClick} username={username} />
    </header>
  );
};

export default Header;
