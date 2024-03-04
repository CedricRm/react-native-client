import React, {FC, useState} from 'react';
import {Material} from '../types';
import {
  StyledInput,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../utils/nativewind';
import Modal from './Modal';

interface AddButtonProps {
  handleCreateModal: () => void;
  createMaterial: (materialDatas: Material) => Promise<void>;
}

const AddMaterialModal: FC<AddButtonProps> = ({
  handleCreateModal,
  createMaterial,
}) => {
  const [formData, setFormData] = useState({
    design: '',
    state: '',
    quantity: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateMaterial = async () => {
    await createMaterial({
      design: formData.design,
      state: formData.state,
      quantity: parseInt(formData.quantity, 10),
    });
    handleCreateModal();
  };

  return (
    <Modal
      title="Ajouter matériel"
      handleCloseModal={handleCreateModal}
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
            value={formData.quantity}
            onChangeText={text => handleInputChange('quantity', text)}
          />
          <StyledTouchableOpacity
            className="flex items-center justify-center text-center bg-red mt-4 h-11 rounded-xl"
            onPress={handleCreateMaterial}>
            <StyledText className="text-white text-lg">Ajouter</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      }
    />
  );
};

export default AddMaterialModal;
