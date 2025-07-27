//services client

import api from "../lib/axios";
import type { Client } from "../types";

export const getClients = async (): Promise<Client[]> => {
  const res = api.get("/api/clients");
  return (await res).data;
};
