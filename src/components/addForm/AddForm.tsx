import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import MovieService from '../../services/MovieService';
import './addForm.scss';

interface AddFormProps {
  movieId: string;
  onCommentPosted?: () => void;
}

interface CommentFormValues {
  username: string;
  comment: string;
}

const AddForm = ({ movieId, onCommentPosted }: AddFormProps) => {
  const { postComment } = MovieService();

  const initialValues: CommentFormValues = {
    username: '',
    comment: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('This field is required'),
    comment: Yup.string()
      .required('This field is required')
      .min(10, 'At least 10 characters'),
  });

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async ({ username, comment }, actions) => {
          try {
            await postComment(movieId, username, comment);
            actions.resetForm();
            onCommentPosted?.();
          } catch (error) {
            console.error('Failed to post comment', error);
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="char__search-wrapper">
              <Field
                id="username"
                type="text"
                placeholder="Enter username"
                className="form__username"
                name="username"
              />
              <ErrorMessage className="error" name="username" component="div" />
              <Field
                className="form__comment"
                id="comment"
                name="comment"
                placeholder="Comment..."
                as="textarea"
              />
              <ErrorMessage className="error" name="comment" component="div" />
              <button type="submit" className="form__btn" disabled={isSubmitting}>
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
