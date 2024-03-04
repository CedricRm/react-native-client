import {deleteMaterial as removeMaterialService} from '../services/material';

const useRemoveMaterial = () => {
  const removeMaterial = async (id: number) => {
    await removeMaterialService(id);
  };

  return {removeMaterial};
};

export default useRemoveMaterial;
