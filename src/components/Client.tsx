import type { JSX } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TabClients from "./tab-clients";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
export default function Client(): JSX.Element {
  const [name, setName] = useState<string>("");

  const [idinc, setIdinc] = useState<string>("");

  const [address, setAddress] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeIdic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdinc(e.target.value);
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const navigate = useNavigate();

  const onReturn = () => {
    navigate("/");
  };

  const onAdd = () => {
    console.log(idinc, name, address);

    
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

      <TabClients />
      <Dialog>
        <DialogTrigger>Ajouter un nouveau client</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Processus d'ajout d'un nouveau client</DialogTitle>
            <DialogDescription>
              Veuillez entrez toutes les informations demandes
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Id INC</Label>
              <Input
                id="name-1"
                name="id"
                value={idinc}
                onChange={onChangeIdic}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-2">Name</Label>
              <Input
                id="name-2"
                name="name"
                value={name}
                onChange={onChangeName}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-3">Adress</Label>
              <Input
                id="username-3"
                name="adress"
                value={address}
                onChange={onChangeAddress}
              />
            </div>
            <div className="grid gap-3">
              <Button variant={"outline"} onClick={onAdd}>
                Add
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* <div className="flex flex-col justify-between h-50 ">
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
      </div> */}
    </>
  );
}
