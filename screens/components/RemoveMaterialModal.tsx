import React, {FC} from 'react';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../utils/nativewind';
import Modal from './Modal';

interface RemoveMaterialModalProps {
  handleRemoveModal: () => void;
  removeMaterial: (id: number) => Promise<void>;
  material: any;
}

const RemoveMaterialModal: FC<RemoveMaterialModalProps> = ({
  handleRemoveModal,
  removeMaterial,
  material,
}) => {
  return (
    <Modal
      title="Supprimer matériel"
      handleCloseModal={handleRemoveModal}
      content={
        <StyledView>
          <StyledText className="text-center text-md">
            Voulez-vous supprimer {material.design} ?
          </StyledText>
          <StyledTouchableOpacity
            className="flex items-center justify-center text-center bg-red mt-4 h-11 rounded-xl"
            onPress={async () => {
              await removeMaterial(parseInt(material.id, 10));
              handleRemoveModal();
            }}>
            <StyledText className="text-white text-lg">Supprimer</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            className="flex items-center justify-center text-center mt-2 h-11 rounded-xl border-[1px] border-red"
            onPress={handleRemoveModal}>
            <StyledText className="text-red text-lg">Annuler</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      }
    />
  );
};

export default RemoveMaterialModal;
