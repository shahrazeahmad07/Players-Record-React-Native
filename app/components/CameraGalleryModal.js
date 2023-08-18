import React from 'react';
import {StyleSheet, View, Modal, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';

const CameraGalleryModal = ({
  style,
  modalVisible,
  openCamera,
  selectFromGallery,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.bottomSheet}>
                <Icon
                  style={styles.iconBackground}
                  name={'add-a-photo'}
                  size={30}
                  color={'black'}
                  onPress={openCamera}
                />
                <Icon
                  style={styles.iconBackground}
                  name={'add-photo-alternate'}
                  size={30}
                  color={'black'}
                  onPress={selectFromGallery}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  modalBackground: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#D3D3D399',
  },
  bottomSheet: {
    paddingVertical: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconBackground: {
    padding: 15,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
  },
});

export default CameraGalleryModal;
