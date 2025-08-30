import type { JSX } from "react";
import type { Devis } from "../types";
import { Button } from "./ui/button";

export default function DevisCard(props: Devis): JSX.Element {
  return (
    <div>
      <h5>{props.metadata.name}</h5>
      <span>{props.total}</span>

      <Button type="reset">Modifier</Button>
    </div>
  );
}
