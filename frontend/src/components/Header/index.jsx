import arrowDown from "../../assets/arrow-down.svg";
import mixer from "../../assets/mixer.svg"
// Properties
export default function Header(props) {
  return (
    <header>
        <button type="button">
          <img src={arrowDown} alt="Arrow down icon" />
        </button>
        <span>{props.title}</span>
        <button type="button">
          <img src={mixer} alt="Mixer icon" />
        </button>
      </header>
  )
}