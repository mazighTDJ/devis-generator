import { useState, type JSX } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

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

export default function Devis(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [numDevis, setNumDevis] = useState<number>(0);
  const [quantite, setQuantite] = useState<number>(0);
  const [prixUnitaire, setPrixUnitaire] = useState<number>(0);
  const [totale, setTotale] = useState<number>(0);

  const navigate = useNavigate();

  const onReturn = () => {
    navigate("/");
  };
  return (
    <>
      <Button
        variant="link"
        size="icon"
        className="size-8  absolute top-20 left-10"
        onClick={onReturn}
      >
        <ChevronLeftIcon />
      </Button>

      <div className="">
        <Dialog>
          <DialogTrigger type="button" className="absolute top-40  right-20">
            Ajouter
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Processus d'ajout d'un nouveau client</DialogTitle>
              <DialogDescription>
                Veuillez entrez toutes les informations demandes
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Nom du client</Label>
                <Input id="name-1" name="nom" value={name} />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="name-2">Numero du devis</Label>
                <Input id="name-2" name="numero du devis" value={numDevis} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-3">Quantiter</Label>
                <Input id="username-3" name="Quantite" value={quantite} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-3">Prix unitaire</Label>
                <Input id="username-3" name="prix" value={prixUnitaire} />
              </div>
              <div className="grid gap-3">
                <Button variant={"outline"}>Add</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
