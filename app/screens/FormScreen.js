import React, {useState, useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import FormField from '../components/FormField';
import Dropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import CircularImage from '../components/CircularImage';
import AppSwitch from '../components/AppSwitch';
import ErrorComponent from '../components/ErrorComponent';
import CameraGalleryModal from '../components/CameraGalleryModal';

const rolesList = [
  {label: 'Player', value: 'Player'},
  {label: 'Manager', value: 'Manager'},
  {label: 'Coach', value: 'Coach'},
];

const genderList = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Prefer not Say', value: 'Prefer not Say'},
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  role: Yup.string().required().label('Role'),
  gender: Yup.string().required().label('Gender'),
  image: Yup.object().required().label('Image'),
});

const FormScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const emailRef = useRef();
  // const roleRef = useRef();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add Member</Text>
      <View style={styles.fieldsContainer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            role: '',
            gender: '',
            switchValue: false,
            isWorking: 'Retired',
            image: undefined,
          }}
          onSubmit={(values, {resetForm}) => {
            navigation.navigate('Show Members', {
              values: values,
            });
            resetForm();
          }}
          validationSchema={validationSchema}>
          {({
            handleSubmit,
            setFieldValue,
            handleReset,
            values,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <CircularImage style={styles.image} source={values.image} />
              </TouchableOpacity>
              {touched.image && <ErrorComponent errorText={errors.image} />}
              <CameraGalleryModal
                modalVisible={modalVisible}
                openCamera={() => {
                  let options = {
                    mediaType: 'photo',
                    quality: 1,
                    saveToPhotos: true,
                  };
                  launchCamera(options, response => {
                    if (response.didCancel) {
                      alert('Canceled');
                      4;
                      return;
                    } else if (response.errorCode == 'camera_unavailable') {
                      alert('Camera is not available');
                      return;
                    } else if (response.errorCode == 'others') {
                      alert(response.errorMessage);
                      return;
                    }
                    setFieldTouched('image');
                    setFieldValue('image', response);
                    setModalVisible(false);
                  });
                }}
                selectFromGallery={() => {
                  let options = {
                    mediaType: 'photo',
                    quality: 1,
                  };
                  launchImageLibrary(options, response => {
                    if (response.didCancel) {
                      alert('Canceled');
                      return;
                    } else if (response.errorCode == 'permission') {
                      alert('Permission not satisfied');
                      return;
                    } else if (response.errorCode == 'others') {
                      alert(response.errorMessage);
                      return;
                    }
                    setFieldTouched('image');
                    setFieldValue('image', response);
                    setModalVisible(false);
                  });
                }}
              />
              <FormField
                heading="Name"
                placeholder="Enter Name"
                style={styles.field}
                onChangeText={name => {
                  setFieldValue('name', name);
                  setFieldTouched('name');
                }}
                value={values.name}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  emailRef.current.focus();
                }}
              />
              {errors.name && touched.name && (
                <ErrorComponent errorText={errors.name} />
              )}
              <FormField
                heading="Email"
                placeholder="Enter Email"
                style={styles.field}
                onChangeText={email => {
                  setFieldValue('email', email);
                  setFieldTouched('email');
                }}
                value={values.email}
                textContentType="emailAddress"
                keyboardType="email-address"
                innerRef={emailRef}
              />
              {errors.email && touched.email && (
                <ErrorComponent errorText={errors.email} />
              )}
              <Dropdown
                title="Role"
                style={styles.dropdown}
                data={rolesList}
                labelField="label"
                valueField={'value'}
                onChange={item => {
                  setFieldValue('role', item['label']);
                }}
                value={values.role}
              />
              {errors.role && touched.role && (
                <ErrorComponent errorText={errors.role} />
              )}
              <Dropdown
                title="Gender"
                style={styles.dropdown}
                data={genderList}
                labelField="label"
                valueField={'value'}
                onChange={item => {
                  setFieldValue('gender', item['label']);
                }}
                value={values.gender}
              />
              {errors.gender && touched.gender && (
                <ErrorComponent errorText={errors.gender} />
              )}
              <AppSwitch
                title={'Working'}
                value={values.switchValue}
                style={styles.appSwitch}
                onValueChange={item => {
                  if (item) {
                    setFieldValue('isWorking', 'Working');
                    setFieldValue('switchValue', true);
                  } else {
                    setFieldValue('isWorking', 'Retired');
                    setFieldValue('switchValue', false);
                  }
                }}
              />
              <AppButton
                style={styles.submitButton}
                text={'Submit'}
                textColor={'white'}
                onPress={handleSubmit}
              />
              <AppButton
                style={styles.cancelButton}
                text={'Cancel'}
                textColor="black"
                onPress={handleReset}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    marginTop: 15,
  },
  image: {
    marginTop: 15,
  },
  fieldsContainer: {
    paddingHorizontal: 10,
  },
  field: {
    marginTop: 15,
  },
  dropdown: {
    marginTop: 15,
  },
  appSwitch: {
    marginTop: 10,
  },
  submitButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  cancelButton: {
    marginTop: 20,
    borderColor: colors.secondary,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 90,
  },
});

export default FormScreen;
