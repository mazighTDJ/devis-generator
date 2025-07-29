import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addClients, getClients } from "../API/clients";
import type { Client } from "../types";

export const useClients = () => {
  return useQuery({ queryKey: ["clients"], queryFn: getClients });
};

//hooks qui permet d'inserer un nouveau client
export const useAddClient = () => {
  const queryClient = useQueryClient();
  //syntaxe d'utilisation du hooks useMutation
  return useMutation({
    mutationFn: (data: Client) => addClients(data),
    onSuccess: () => {
      // refrichir automatique la liste des clients en invalidant la requete . Ce qui permet de refresher le cash des donnees
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });
};
