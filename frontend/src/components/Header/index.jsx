import arrowDown from "../../assets/arrow-down.svg";
import mixer from "../../assets/mixer.svg"

export default function Header(props) {
  return (
    <header className="flex items-center justify-between ">
        <button type="button">
          <img className="w-6 h-6" src={arrowDown} alt="Arrow down icon" />
        </button>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <button type="button">
          <img className="w-6 h-6" src={mixer} alt="Mixer icon" />
        </button>
      </header>
  )
}