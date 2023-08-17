import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../components/AppButton';
import CameraGalleryModal from '../components/CameraGalleryModal';

const TestScreen = ({style}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.container, style]}>
      <CameraGalleryModal modalVisible={modalVisible} />
      <AppButton text={'Open Modal'} onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TestScreen;
