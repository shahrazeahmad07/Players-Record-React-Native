import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import FormField from '../components/FormField';
import Dropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import CircularImage from '../components/CircularImage';
import AppSwitch from '../components/AppSwitch';
import ErrorComponent from '../components/ErrorComponent';

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
});

const FormScreen = ({navigation}) => {
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
            isWorking: 'Working',
          }}
          onSubmit={(values, {resetForm}) => {
            navigation.navigate('Show Members', {
              values: values,
            });
            resetForm();
          }}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            handleReset,
            values,
            errors,
          }) => (
            <>
              <CircularImage style={styles.image} />

              <FormField
                heading="Name"
                placeholder="Enter Name"
                style={styles.field}
                onChangeText={handleChange('name')}
                value={values.name}
              />
              {errors.name && <ErrorComponent errorText={errors.name} />}
              <FormField
                heading="Email"
                placeholder="Enter Email"
                style={styles.field}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {errors.email && <ErrorComponent errorText={errors.email} />}
              <Dropdown
                title="Role"
                style={styles.dropdown}
                data={rolesList}
                labelField="label"
                valueField={'value'}
                onChange={item => setFieldValue('role', item['label'])}
                value={values.role}
              />
              {errors.role && <ErrorComponent errorText={errors.role} />}
              <Dropdown
                title="Gender"
                style={styles.dropdown}
                data={genderList}
                labelField="label"
                valueField={'value'}
                onChange={item => setFieldValue('gender', item['label'])}
                value={values.gender}
              />
              {errors.gender && <ErrorComponent errorText={errors.gender} />}
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
