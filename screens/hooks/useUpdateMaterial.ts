import {updateMaterial as updateMaterialService} from '../services/material';
import {Material} from '../types';

const useUpdateMaterial = () => {
  const updateMaterial = async (id: number, materialDatas: Material) => {
    await updateMaterialService(id, materialDatas);
  };

  return {updateMaterial};
};

export default useUpdateMaterial;
