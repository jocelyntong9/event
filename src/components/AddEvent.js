import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { TextArea } from './TextArea';
import * as Yup from 'yup';
import data from "./data.json";

export const AddEvent = () => {
  const[events, setEvents] = useState(data);
  const[addFormData, setAddFormData] = useState({
    title: '',
    location:'',
    participants: '',
    date: '',
    timeStart:'',
    timeEnd:'',
    note:''
  })
  
  const handleAddFormChange =(event) =>{
    event.preventDefault();
    const fieldName = event.target.getAttribute('title');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newEvent ={
      id: nanoid(),
      title: addFormData.title,
      location:addFormData.location,
      participants: addFormData.participants,
      date: addFormData.date,
      timeStart:addFormData.timeStart,
      timeEnd:addFormData.timeEnd,
      note:addFormData.note
    };

    const newEvents =[...events, newEvent];
    setEvents(newEvents);
  }

  const validate = Yup.object({
    title: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    location: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    participants: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Required'),
    date: Yup.string()
      .required('Required'),
    timeStart: Yup.string()
      .required('Required'),     
    timeEnd: Yup.string()
      .required('Required'),         
    note: Yup.string()
        .min(50, 'Must be 50 characters or more')
        .required('Required'),
  })

  return (
    <Formik
      initialValues={{
        title: '',
        location:'',
        participants: '',
        date: '',
        timeStart:'',
        timeEnd:'',
        note:''
      }}
      validationSchema={validate}

      onSubmit={values=> console.log(values)}
      >

      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Add Event</h1>
          <Form>
            <TextField label="Title" name="title" type="text"  />
            <TextField label="Location" name="location" type="text" />
            <TextField label="Participants" name="participants" type="text" />
            <TextField label="Date" name="date" type="date" />
            <TextField label="Start Time" name="timeStart" type="time" />
            <TextField label="End Time" name="timeEnd" type="time" />
            <TextArea label="Note" name="note" type="text" />
            <button className="btn btn-success mt-3" type="submit" >Submit</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}