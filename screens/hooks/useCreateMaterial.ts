import {createMaterial as createMaterialService} from '../services/material';
import {Material} from '../types';

const useCreateMaterial = () => {
  const createMaterial = async (materialDatas: Material) => {
    await createMaterialService(materialDatas);
  };

  return {createMaterial};
};

export default useCreateMaterial;
