import React, {FC} from 'react';
import {StyledText, StyledTouchableOpacity} from '../utils/nativewind';

interface AddButtonProps {
  handleCreateModal: () => void;
}

const AddButton: FC<AddButtonProps> = ({handleCreateModal}) => {
  return (
    <StyledTouchableOpacity
      className="absolute flex items-center justify-center text-center rounded-full w-12 h-12 bg-red bottom-3.5 right-3.5"
      onPress={handleCreateModal}>
      <StyledText className="text-white text-xl">+</StyledText>
    </StyledTouchableOpacity>
  );
};

export default AddButton;
