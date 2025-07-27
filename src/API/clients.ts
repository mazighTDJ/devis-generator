//services client

import api from "../lib/axios";
import type { Client } from "../types";

export const getClients = async (): Promise<Client[]> => {
  const res = api.get("/api/clients");
  return (await res).data;
};

export const addClients = async (
  client: Client
): Promise<number | undefined> => {
  const res = api.post("/api/createClient");
  return (await res).data;
};
