import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="tablet:col-span-2">
      <button
        onClick={() => navigate(-1)}
        className=" cursor-pointer tablet:text-xl opacity-50"
      >
        Go Back
      </button>
    </div>
  );
}
