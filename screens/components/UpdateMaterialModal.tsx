import React, {FC, useState} from 'react';
import {
  StyledInput,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../utils/nativewind';
import Modal from './Modal';

interface Material {
  id: number;
  design: string;
  state: string;
  quantity: number;
}

interface UpdateMaterialModalProps {
  handleUpdateModal: () => void;
  updateMaterial: (materialDatas: Material) => Promise<void>;
  material: any;
}
const UpdateMaterialModal: FC<UpdateMaterialModalProps> = ({
  handleUpdateModal,
  updateMaterial,
  material,
}) => {
  const [formData, setFormData] = useState({
    id: material.id,
    design: material.design,
    state: material.state,
    quantity: material.quantity,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdateMaterial = async () => {
    await updateMaterial({
      id: formData.id,
      design: formData.design,
      state: formData.state,
      quantity: formData.quantity,
    });
    handleUpdateModal();
  };

  return (
    <Modal
      title="Modifier matériel"
      handleCloseModal={handleUpdateModal}
      content={
        <StyledView>
          <StyledInput
            className="rounded-xl border-[1px] border-grey border-opacity-50 w-full h-11 px-2.5 text-black"
            keyboardType="default"
            placeholder="Design"
            placeholderTextColor="#aaaaaa"
            value={formData.design}
            onChangeText={text => handleInputChange('design', text)}
          />
          <StyledInput
            className="rounded-xl border-[1px] border-grey border-opacity-50 w-full h-11 mt-4 px-2.5 text-black"
            keyboardType="default"
            placeholder="Etat"
            placeholderTextColor="#aaaaaa"
            value={formData.state}
            onChangeText={text => handleInputChange('state', text)}
          />
          <StyledInput
            className="rounded-xl border-[1px] border-grey border-opacity-50 w-full h-11 mt-4 px-2.5 text-black"
            keyboardType="numeric"
            placeholder="Quantité"
            placeholderTextColor="#aaaaaa"
            value={formData.quantity.toString()}
            onChangeText={text => handleInputChange('quantity', text)}
          />
          <StyledTouchableOpacity
            className="flex items-center justify-center text-center bg-red mt-4 h-11 rounded-xl"
            onPress={handleUpdateMaterial}>
            <StyledText className="text-white text-lg">Modifier</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      }
    />
  );
};

export default UpdateMaterialModal;
