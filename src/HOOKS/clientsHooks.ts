import { useMutation, useQuery } from "@tanstack/react-query";
import { addClients, getClients } from "../API/clients";

export const useClients = () => {
  return useQuery({ queryKey: ["clients"], queryFn: getClients });
};

export const useAddClient=()=>{
  return useMutation({
    mutationFn:addClients
  })
}

