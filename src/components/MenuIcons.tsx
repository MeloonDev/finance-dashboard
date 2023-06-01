import "./MenuIcons.scss";
import { useState } from "react";
import {
  RiWalletFill,
  RiFile3Fill,
  RiTaskFill,
  RiLayout4Fill,
  RiMailFill,
  RiBarChart2Fill,
  RiSettings4Fill,
} from "react-icons/ri";

const icons = [
  { id: 0, item: <RiLayout4Fill /> },
  { id: 1, item: <RiWalletFill /> },
  { id: 2, item: <RiTaskFill /> },
  { id: 3, item: <RiMailFill /> },
  { id: 4, item: <RiFile3Fill /> },
  { id: 5, item: <RiBarChart2Fill /> },
  { id: 6, item: <RiSettings4Fill /> },
];

function MenuIcons() {
  const [activePosition, setActivePosition] = useState(-2);
  const [activeId, setActiveId] = useState(0);

  const changeActiveItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    setActiveId(id);
    setActivePosition(e.currentTarget.offsetTop - 2);
  };

  return (
    <div className="wrapper">
      {icons.map((icon) => (
        <button
          className={activeId === icon.id ? "active icon" : "icon"}
          key={icon.id}
          onClick={(e) => {
            changeActiveItem(e, icon.id);
          }}
        >
          {icon.item}
        </button>
      ))}
      <div
        className="indicator"
        style={{
          transform: `translateY(${activePosition}px)`,
        }}
      ></div>
    </div>
  );
}

export default MenuIcons;
