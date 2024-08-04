import { FC } from 'react';
import { Button, DatePicker, TextInput } from 'components/ui';
import { useAppDispatch } from 'hooks';
import { addTask, checkOverdueTasks } from 'store/slices/tasks/tasksSlice';
import { formatDateTo } from 'utils/dateUtils';
import { TaskModel } from 'types/types';
import './style.css';

import { validationSchema } from './validationScema';
import { ErrorMessage, Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';

export interface Values extends Omit<TaskModel, 'id' | 'status'> {}

const AddForm: FC = () => {
	const dispatch = useAppDispatch();

	const initialValues: Values = {
		title: '',
		description: '',
		deadline: undefined,
	};

	const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
		const taskData: TaskModel = {
			...values,
			id: Date.now().toString(),
			deadline: values.deadline ? formatDateTo(values.deadline) : undefined,
			status: 'Pending',
		};

		dispatch(addTask(taskData));
		dispatch(checkOverdueTasks());
		resetForm();
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} resetForm>
			{({ setFieldValue, isValid, dirty }) => (
				<Form className='form'>
					<div className='addform__title'>
						<Field name='title'>
							{({ field }: FieldProps) => (
								<TextInput {...field} placeholder='Title' maxLength={15}>
									<ErrorMessage className='addform__error' name='title' component='div' />
								</TextInput>
							)}
						</Field>
					</div>
					<div className='addform__description'>
						<Field name='description'>
							{({ field }: FieldProps) => <TextInput {...field} placeholder='Description' maxLength={50} />}
						</Field>
					</div>
					<div className='addtask__datepicker'>
						<Field name='deadline'>
							{({ field }: FieldProps) => (
								<DatePicker
									{...field}
									placeholder='Deadline'
									value={field.value}
									onChange={date => setFieldValue(field.name, date)}
								/>
							)}
						</Field>
					</div>
					<div className='addForm__button'>
						<Button variant='primary' type='submit' disabled={!isValid || !dirty}>
							Add Task
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AddForm;
