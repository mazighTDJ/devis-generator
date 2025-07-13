import type { JSX } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

export default function Devis(): JSX.Element {
  return (
    <>
      <Button
        variant="link"
        size="icon"
        className="size-8 absolute top-20 left-10"
      >
        <Link to="/">
          <ChevronLeftIcon />
        </Link>
      </Button>
    </>
  );
}
