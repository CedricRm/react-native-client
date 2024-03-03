import {useState} from 'react';
import {getAllMaterials, getMaterialById} from '../services/material';
import {Material} from '../types';

const useFetchMaterials = () => {
  const [materials, setMaterials] = useState<Material[] | Material>();

  const fetchAllMaterials = async () => {
    const res = await getAllMaterials();
    setMaterials(res);
  };

  const fetchMaterialById = async (id: number) => {
    const res = await getMaterialById(id);
    setMaterials(res);
  };

  return {fetchAllMaterials, fetchMaterialById, materials};
};

export default useFetchMaterials;
