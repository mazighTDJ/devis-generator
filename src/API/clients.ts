//services client

import api from "../lib/axios";
import type { Client } from "../types";

//recupere tous les clients
export const getClients = async (): Promise<Client[]> => {
  const res = api.get("/api/clients");
  return (await res).data;
};


//ajout d'un nouveau client
export const addClients = async (
  client: Client
): Promise<number | undefined> => {
  const res = api.post("/api/createClient", client);
  return (await res).data;
};
