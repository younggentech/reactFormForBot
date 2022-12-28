import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {Button, Heading, Input} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import * as yup from "yup";


export const MyForm = () => {
    const formik = useFormik({
        initialValues: {firstName: "", lastName: ""},
        onSubmit: (values) => {formik.resetForm()},
        validationSchema: yup.object(
            {firstName: yup.string().required(), lastName: yup.string().required()
        }),
    })
    return(
        <div>
            <Heading textAlign={"center"}>First Form</Heading>
            <form onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
            }}>
                <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel>First name</FormLabel>
                    <Input id={"firstName"}
                           name={"firstName"}
                           value={formik.values.firstName}
                           onChange={(e) =>{
                               formik.setFieldValue('firstName', e.target.value)
                           }}
                           onBlur={(e) => {
                               formik.setTouched({...formik.touched, firstName: true})
                           }}
                           placeholder='First name' />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        id={"lastName"}
                        name={"lastName"}
                        value={formik.values.lastName}
                        onChange={(e) =>{
                            formik.setFieldValue('lastName', e.target.value)
                        }}
                        onBlur={(e) => {
                            formik.setTouched({...formik.touched, lastName: true})
                        }}

                        placeholder='Last name' />
                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
                <Button
                    colorScheme='teal'
                    type='submit'
                    width={"full"}
                >
                    Submit
                </Button>
            </form>
        </div>
    )}