import {
  MdAssignmentTurnedIn,
  MdError,
  MdWarning,
  MdInfo,
} from "react-icons/md";

export default function ErrorHandler({
  show,
  themes,
  types,
  message = "We ran into some problem. Sorry for the inconvinience",
}) {
  const icons = {
    error: MdError,
    success: MdAssignmentTurnedIn,
    warning: MdWarning,
    info: MdInfo,
  };
  const Icon = icons[types];
  const display = <Icon size={25} className={`${types}1904`} />;
  return (
    <div
      className={`error_handler_1904 ${show && "show1904"} ${
        themes ? themes : ""
      }1904 ${types ? types : ""}1904border`}
    >
      <div className="error_img_1904">{display}</div>
      <div>{message && message}</div>
    </div>
  );
}
