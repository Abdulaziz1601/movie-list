import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

import './addForm.scss';

const AddForm = () => {
    const [name, setName] = useState(null);
    const [comment, setComment] = useState(null);
    const updateComment = (name, comment) => { 
        setName(name);
        setComment(comment);
        console.log(name, comment)
    }

    return (
        <div className="form">
            <Formik
                initialValues={{
                    name: '',
                    comment: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required'),
                    comment: Yup.string().required('This field is required').min(10, 'At least 10 characters'),
                })}
                onSubmit={({ name, comment }) => {
                    updateComment(name, comment);
                }}
            >
                <Form>
                    <div className="char__search-wrapper">
                        <Field
                            id="username"
                            type="text"
                            placeholder='Enter username'
                            className='form__username'
                            name="username"/>
                        <Field 
                            className="form__comment"
                            id="comment"
                            name="comment"
                            placeholder="Comment..."
                            as="textarea"
                            />
                        <button 
                            type='submit' 
                            className="form__btn"
                            // disabled={loading}
                            >
                                Post
                        </button>
                    </div>
                    {/* <FormikErrorMessage component="div" className='char__search-error' name="charName" /> */}
                </Form>
            </Formik>
        </div>
    )
};

export default AddForm;