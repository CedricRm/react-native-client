import {Material} from '../types';
import axiosInstance from '../utils/api';

const REACT_NATIVE_MATERIAL_API = process.env.REACT_NATIVE_MATERIAL_API;

/**
 * Get all materials
 * @returns {Promise<Materials[]>}
 */
export const getAllMaterials = async (): Promise<Material[]> => {
  try {
    const res = await axiosInstance(
      String(REACT_NATIVE_MATERIAL_API),
      'get',
      '',
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get material by id
 * @param id id of the material
 * @returns {Promise<Materials>}
 */
export const getMaterialById = async (id: number): Promise<Material> => {
  try {
    const res = await axiosInstance(
      String(REACT_NATIVE_MATERIAL_API),
      'get',
      `/${id}`,
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get count of all materials
 * @returns {Promise<number>}
 */
export const getTotalMaterials = async (): Promise<number> => {
  try {
    const res = await axiosInstance(
      String(REACT_NATIVE_MATERIAL_API),
      'get',
      'count',
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Create a new material
 * @param materialDatas new material datas
 * @returns {Promise<Material>}>
 */
export const createMaterial = async (
  materialDatas: Material,
): Promise<Material> => {
  try {
    const post = await axiosInstance(
      String(REACT_NATIVE_MATERIAL_API),
      'post',
      '',
      {
        'Content-Type': 'application/json',
      },
      materialDatas,
    );
    return post;
  } catch (error) {
    console.error(error);
    throw error;
  }
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
  try {
    const post = await axiosInstance(
      String(REACT_NATIVE_MATERIAL_API),
      'patch',
      `${materialId}`,
      {
        'Content-Type': 'application/json',
      },
      materialDatas,
    );
    return post;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Remove a material
 * @param materialId id of the material
 * @returns {Promise<void>}
 */
export const deleteMaterial = async (materialId: number): Promise<void> => {
  try {
    const res = await axiosInstance(
      String(REACT_NATIVE_MATERIAL_API),
      'delete',
      `${materialId}`,
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
