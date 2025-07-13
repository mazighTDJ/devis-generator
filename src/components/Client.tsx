import type { JSX } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Client(): JSX.Element {
  const [name, setName] = useState<string>("");

  const [date, setDate] = useState<string>("");

  const [ndevis, setNdevis] = useState<number>(0);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onChangeNdevis = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNdevis(Number.parseInt(e.target.value));
  };

  const onClickButton = () => {
    console.log(name, date, ndevis);
  };

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

      <div className="flex flex-col justify-between h-50 ">
        <input
          placeholder="Nom du client"
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <input
          placeholder="Date"
          type="date"
          value={date}
          onChange={onChangeDate}
        />
        <input
          placeholder="Numero du devis"
          type="number"
          value={ndevis}
          onChange={onChangeNdevis}
        />

        <button onClick={onClickButton}>Ajouter</button>
      </div>
    </>
  );
}
