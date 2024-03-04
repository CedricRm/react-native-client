import React, {FC, ReactNode} from 'react';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../utils/nativewind';

interface ModalProps {
  title: string;
  content: ReactNode;
  height?: string;
  handleCloseModal: () => void;
}

const Modal: FC<ModalProps> = ({title, content, height, handleCloseModal}) => {
  return (
    <StyledView
      className={`flex items-center absolute p-3.5 bg-[#eaeaea] w-full ${
        height ? `h-[${height}]` : 'h-[50%]'
      } -bottom-10 rounded-3xl`}>
      <StyledView className="flex items-center w-full">
        <StyledText className="text-red text-xl font-semibold">
          {title}
        </StyledText>
        <StyledTouchableOpacity
          onPress={handleCloseModal}
          className="absolute right-3.5">
          <StyledText className="text-black text-xl font-semibold">
            X
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView className="flex w-full mt-6">{content}</StyledView>
    </StyledView>
  );
};

export default Modal;
