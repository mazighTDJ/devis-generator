import type { JSX } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

export default function Devis(): JSX.Element {
  const navigate = useNavigate();

  const onReturn = () => {
    navigate("/");
  };
  return (
    <>
      <Button
        variant="link"
        size="icon"
        className="size-8 absolute top-20 left-10"
        onClick={onReturn}
      >
        <ChevronLeftIcon />
      </Button>
    </>
  );
}
