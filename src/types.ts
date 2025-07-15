export type metadata = {
  name: string;
  date: string;
  ndevis: number;
};

export type ligneDevis = {
  description: string;
  quantite: number;
  prixUnitaire: number;
};

export type Devis = {
  metadata: metadata;
  lignes: Array<ligneDevis>;
  total: number;
};

export type Client = {
  id: string;
  name: string;
  id_inc: string;
  adress: string;
};
