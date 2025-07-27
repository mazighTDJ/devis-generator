import type { JSX } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import { useClients } from "../HOOKS/clientsHooks";
import type { Client } from "../types";

export default function TabClients(): JSX.Element {
  const { data, isLoading, isError } = useClients();

  if (isLoading) return <p>Chargement ...</p>;
  if (isError || typeof data == "undefined")
    return <p>Erreur lors du chargement</p>;

  return (
    <>
      <Table>
        <TableCaption>La liste des clients</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Id INC</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Adress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((client: Client, index) => {
            return (
              <TableRow className="font-thin" key={index}>
                <TableCell>{client.idInc}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.adress}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
