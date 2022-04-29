import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const AddEvent = () => {
  const validate = Yup.object({
    title: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    location: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    participants: Yup.string()
        .min(2, 'Must be at least 2 charaters')
        .required('Required'),
    date: Yup.string()
      .required('required'),
    timeStart: Yup.string()
      .required('required'),     
    timeEnd: Yup.string()
      .required('required'),         
    note: Yup.string()
        .min(50, 'Must be 50 characters or more')
        .required('Required'),
  })
  return (
    <Formik>

      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Add Event</h1>
          <Form>
            <TextField label="Title" name="title" type="text" />
            <TextField label="Location" name="location" type="text" />
            <TextField label="Participants" name="name" type="text" />
            <TextField label="Date" name="date" type="date" />
            <TextField label="Start Time" name="timeStart" type="time" />
            <TextField label="End Time" name="timeEnd" type="time" />
            <TextField label="Note" name="note" type="text" />
            <button className="btn btn-success mt-3" type="submit">Submit</button>
          </Form>

        </div>
      )}
    </Formik>
  )
}