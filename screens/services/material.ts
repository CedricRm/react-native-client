import {REACT_NATIVE_MATERIAL_API} from '@env';
import {Material} from '../types';
import axiosInstance from '../utils/api';

/**
 * Get all materials
 * @returns {Promise<Materials[]>}
 */
export const getAllMaterials = async (): Promise<Material[]> => {
  const res = await axiosInstance(REACT_NATIVE_MATERIAL_API, 'get', 'material');
  return res;
};

/**
 * Get material by id
 * @param id id of the material
 * @returns {Promise<Material[]>}
 */
export const getMaterialById = async (id: number): Promise<Material[]> => {
  const res = await axiosInstance(
    REACT_NATIVE_MATERIAL_API,
    'get',
    `material/${id}`,
  );
  return res;
};

/**
 * Get count of all materials
 * @returns {Promise<number>}
 */
export const getTotalMaterials = async (): Promise<number> => {
  const res = await axiosInstance(
    REACT_NATIVE_MATERIAL_API,
    'get',
    'material/count/stats',
  );
  return res;
};

/**
 * Create a new material
 * @param materialDatas new material datas
 * @returns {Promise<Material>}>
 */
export const createMaterial = async (
  materialDatas: Material,
): Promise<Material> => {
  const post = await axiosInstance(
    REACT_NATIVE_MATERIAL_API,
    'post',
    'material',
    {
      'Content-Type': 'application/json',
    },
    materialDatas,
  );
  return post;
};

/**
 * Update a material
 * @param materialId id of the material
 * @param materialDatas new data for the material
 * @returns {Promise<voic>}
 */
export const updateMaterial = async (
  materialId: number,
  materialDatas: Material,
): Promise<void> => {
  const post = await axiosInstance(
    REACT_NATIVE_MATERIAL_API,
    'patch',
    `material/${materialId}`,
    {
      'Content-Type': 'application/json',
    },
    materialDatas,
  );
  return post;
};

/**
 * Remove a material
 * @param materialId id of the material
 * @returns {Promise<void>}
 */
export const deleteMaterial = async (materialId: number): Promise<void> => {
  const res = await axiosInstance(
    REACT_NATIVE_MATERIAL_API,
    'delete',
    `material/${materialId}`,
  );
  return res;
};
