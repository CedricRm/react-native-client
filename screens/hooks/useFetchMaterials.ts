import {useState} from 'react';
import {getAllMaterials, getMaterialById} from '../services/material';
import {Material} from '../types';

const useFetchMaterials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  const fetchAllMaterials = async () => {
    try {
      const res = await getAllMaterials();
      setMaterials(res);
    } catch (error) {
      console.error('Error fetching materials:', error);
      // Handle the error, e.g., show a message to the user
    }
  };

  const fetchMaterialById = async (id: number) => {
    try {
      const res = await getMaterialById(id);
      setMaterials(res);
    } catch (error) {
      console.error('Error fetching material by id:', error);
      // Handle the error, e.g., show a message to the user
    }
  };

  return {fetchAllMaterials, fetchMaterialById, materials};
};

export default useFetchMaterials;
