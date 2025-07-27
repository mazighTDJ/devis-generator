import { useQuery } from "@tanstack/react-query";
import { getClients } from "../API/clients";

export const useClients = () => {
  return useQuery({ queryKey: ["clients"], queryFn: getClients });
};
