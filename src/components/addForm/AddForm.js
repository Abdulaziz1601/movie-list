import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './addForm.scss';

const AddForm = ({movieId}) => {
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
                    username: '',
                    comment: ''
                }}
                validationSchema={Yup.object({
                    username: Yup.string().required('This field is required'),
                    comment: Yup.string().required('This field is required').min(10, 'At least 10 characters'),
                })}
                onSubmit={({ username, comment }, actions) => {
                    updateComment(username, comment);
                    axios.post(`https://624b0e2171e21eebbcec0e9d.mockapi.io/movies/${movieId}/comments`, {
                        username,
                        comment_msg: comment
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });        
                    actions.resetForm();
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
                        <ErrorMessage className="error" name="username" component="div"/>     
                        <Field 
                            className="form__comment"
                            id="comment"
                            name="comment"
                            placeholder="Comment..."
                            as="textarea"
                            />
                        <ErrorMessage className="error" name="comment" component="div"/>     
                        <button 
                            type='submit' 
                            className="form__btn"
                            // disabled={loading}
                            >
                                Post
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
};

export default AddForm;