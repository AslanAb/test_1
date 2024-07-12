import { ThreeCircles } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="mt-[100px] mx-auto">
      <ThreeCircles visible={true} height="80" width="80" color="#6EB63C" ariaLabel="three-circles-loading" />
    </div>
  );
}
