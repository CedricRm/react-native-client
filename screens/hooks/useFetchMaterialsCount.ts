import {useState} from 'react';
import {getTotalMaterials} from '../services/material';

const useFetchMaterialsCounts = () => {
  const [counts, setCounts] = useState<any>();

  const fetchMaterialsCounts = async () => {
    const res = await getTotalMaterials();
    setCounts(res);
  };

  return {fetchMaterialsCounts, counts};
};

export default useFetchMaterialsCounts;
