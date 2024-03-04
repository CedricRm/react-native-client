import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
// import AddButton from './screens/components/AddButton';
import AddButton from './screens/components/AddButton';
import AddMaterialModal from './screens/components/AddMaterialModal';
import MaterialCount from './screens/components/MaterialCount';
import MaterialItem from './screens/components/MaterialItem';
import RemoveMaterialModal from './screens/components/RemoveMaterialModal';
import UpdateMaterialModal from './screens/components/UpdateMaterialModal';
import useCreateMaterial from './screens/hooks/useCreateMaterial';
import useFetchMaterials from './screens/hooks/useFetchMaterials';
import useRemoveMaterial from './screens/hooks/useRemoveMaterial';
import useUpdateMaterial from './screens/hooks/useUpdateMaterial';
import {Material} from './screens/types';
import {StyledText, StyledView} from './screens/utils/nativewind';

function App(): React.JSX.Element {
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);
  const [isUpdateModalActive, setIsUpdateModalActive] = useState(false);
  const [isRemoveModalActive, setIsRemoveModalActive] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState<Material>();
  const {fetchAllMaterials, materials} = useFetchMaterials();
  const {createMaterial} = useCreateMaterial();
  const {updateMaterial} = useUpdateMaterial();
  const {removeMaterial} = useRemoveMaterial();

  const handleCreateModal = () => {
    setIsCreateModalActive(!isCreateModalActive);
  };

  const handleUpdateModal = () => {
    setIsUpdateModalActive(!isUpdateModalActive);
  };

  const handleProcessUpdate = (material: Material) => {
    setActiveMaterial(material);
    handleUpdateModal();
  };

  const handleRemoveModal = () => {
    setIsRemoveModalActive(!isRemoveModalActive);
  };

  const handleProcessRemove = (material: Material) => {
    setActiveMaterial(material);
    handleRemoveModal();
  };

  useEffect(() => {
    fetchAllMaterials();
  }, [fetchAllMaterials]);

  const handleCreateMaterial = async (material: Material) => {
    await createMaterial(material);
    fetchAllMaterials();
  };

  const handleUpdateMaterial = async (material: any) => {
    await updateMaterial(material.id, material);
    fetchAllMaterials();
  };

  const handleRemoveMaterial = async (id: number) => {
    await removeMaterial(id);
    fetchAllMaterials();
  };

  return (
    <SafeAreaView>
      <StyledView className="relative h-[100%] w-[100%]">
        <StyledView className="p-3.5">
          <StyledView className="flex">
            <StyledText className="font-xl text-white bg-red p-2">
              Liste des matériels
            </StyledText>
          </StyledView>
          <StyledView className="w-full bg-grey-50">
            {materials.length > 0 && (
              <FlatList
                data={materials}
                renderItem={({item}) => (
                  <MaterialItem
                    id={item.id}
                    design={item.design}
                    quantity={item.quantity}
                    state={item.state}
                    handleProcessUpdate={handleProcessUpdate}
                    handleProcessRemove={handleProcessRemove}
                  />
                )}
                keyExtractor={item => item.id?.toString() || ''}
              />
            )}
          </StyledView>
          <StyledView className="mt-8">
            <MaterialCount materials={materials} />
          </StyledView>
        </StyledView>
        {/* Button to create material */}
        {!isCreateModalActive && (
          <AddButton handleCreateModal={handleCreateModal} />
        )}
        {/* Modal to create material */}
        {isCreateModalActive && (
          <AddMaterialModal
            handleCreateModal={handleCreateModal}
            createMaterial={handleCreateMaterial}
          />
        )}
        {/* Modal to modify material */}
        {isUpdateModalActive && (
          <UpdateMaterialModal
            handleUpdateModal={handleUpdateModal}
            updateMaterial={handleUpdateMaterial}
            material={activeMaterial}
          />
        )}
        {/* Modal to remove material */}
        {isRemoveModalActive && (
          <RemoveMaterialModal
            handleRemoveModal={handleRemoveModal}
            removeMaterial={handleRemoveMaterial}
            material={activeMaterial}
          />
        )}
      </StyledView>
    </SafeAreaView>
  );
}

export default App;
