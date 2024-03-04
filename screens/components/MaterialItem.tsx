import React, {FC} from 'react';
import {Material} from '../types';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../utils/nativewind';

type MaterialItemProps = {
  id?: number;
  design?: string;
  quantity?: number;
  state?: string;
  handleProcessUpdate: (material: Material) => void;
  handleProcessRemove: (material: Material) => void;
};

const MaterialItem: FC<MaterialItemProps> = ({
  id,
  design,
  quantity,
  state,
  handleProcessUpdate,
  handleProcessRemove,
}) => {
  const renderItemStateBackground = (itemState: string) => {
    switch (itemState) {
      case 'Bon':
        return 'bg-green';

      case 'Mauvais':
        return 'bg-red';

      case 'Abimé':
        return 'bg-orange';
    }
  };

  return (
    <StyledView className="flex flex-row justify-center gap-4 w-full border-b-[1px] border-black py-2">
      {state && (
        <StyledView className={`${renderItemStateBackground(state)} w-2`} />
      )}
      <StyledText className="w-[30%]">{design}</StyledText>
      <StyledText className="w-[10%]">{quantity}</StyledText>
      <StyledText className="w-[20%]">{state}</StyledText>
      <StyledView className="flex flex-row gap-2 w-[10%]">
        <StyledTouchableOpacity
          className="flex items-center justify-center bg-blue px-1.5 py-0.5 w-5 h-5 rounded-full"
          onPress={() => handleProcessUpdate({id, design, quantity, state})}>
          <StyledText className="text-white text-[10px] text-center">
            +
          </StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          className="flex items-center justify-center bg-red px-1.5 w-5 h-5 rounded-full"
          onPress={() => handleProcessRemove({id, design, quantity, state})}>
          <StyledText className="text-white text-[10px] text-center">
            X
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default MaterialItem;
