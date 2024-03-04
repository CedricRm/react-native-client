import React, {FC, useEffect} from 'react';
import useFetchMaterialsCounts from '../hooks/useFetchMaterialsCount';
import {Material} from '../types';
import {StyledText, StyledView} from '../utils/nativewind';

const MaterialCount: FC<{materials: Material[]}> = ({materials}) => {
  const {fetchMaterialsCounts, counts} = useFetchMaterialsCounts();

  useEffect(() => {
    fetchMaterialsCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materials]);

  return (
    counts && (
      <StyledView>
        <StyledView className="flex flex-row gap-2">
          <StyledText className="text-lg font-semibold">Total:</StyledText>
          <StyledText className="text-lg">{counts.total}</StyledText>
        </StyledView>
        <StyledView className="flex flex-row gap-4">
          <StyledView className="bg-green h-6 w-6" />
          <StyledText>{counts.good} bons matériels </StyledText>
        </StyledView>
        <StyledView className="flex flex-row gap-4">
          <StyledView className="bg-orange h-6 w-6" />
          <StyledText>{counts.damaging} matériels âbimés</StyledText>
        </StyledView>
        <StyledView className="flex flex-row gap-4">
          <StyledView className="bg-red h-6 w-6" />
          <StyledText>{counts.bad} mauvais matériels</StyledText>
        </StyledView>
      </StyledView>
    )
  );
};

export default MaterialCount;
