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
import { clients } from "../data";

export default function TabClients(): JSX.Element {
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
          {clients.map((client, index) => {
            return (
              <TableRow className="font-thin" key={index}>
                <TableCell>{client.id_inc}</TableCell>
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
