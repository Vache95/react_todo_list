import React from 'react';
import { validationSchema } from 'components/AddTask/validationScema';
import { DatePicker, Modal, TextInput } from 'components/ui';
import { ModalButtonProps } from 'components/ui/Modal';
import { useAppDispatch } from 'hooks';
import { checkOverdueTasks, editTask } from 'store/slices/tasks/tasksSlice';
import { formatDateTo } from 'utils/dateUtils';
import { TaskModel } from 'types/types';
import './styles.css';

import dayjs from 'dayjs';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';

interface EditModalProps {
	task: TaskModel;
	isModalOpen: boolean;
	onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ task, isModalOpen, onClose }) => {
	const dispatch = useAppDispatch();

	const initialValues = {
		title: task?.title || '',
		description: task?.description || '',
		deadline: task?.deadline ? dayjs(task.deadline) : undefined,
	};

	const handleSubmit = (values: typeof initialValues) => {
		const taskData = {
			...values,
			deadline: values.deadline ? formatDateTo(values.deadline.toISOString()) : undefined,
		};

		dispatch(editTask({ ...task, ...taskData }));
		dispatch(checkOverdueTasks());
		onClose();
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			{({ setFieldValue, isValid, dirty }) => {
				const buttons: ModalButtonProps[] = [
					{ text: 'Cancel', onClick: onClose },
					{ text: 'Edit', type: 'submit', form: 'editTaskForm', variant: 'primary', disabled: !(isValid && dirty) },
				];

				return (
					<Modal
						isModalOpen={isModalOpen}
						title='Edit Task'
						className='edit-modal'
						onCancel={onClose}
						buttons={buttons}
					>
						<Form id='editTaskForm' className='form-modal'>
							<div className='edit__title'>
								<Field name='title'>
									{({ field }: FieldProps) => <TextInput {...field} placeholder='Title' maxLength={15} />}
								</Field>
								<ErrorMessage className='edit_error' name='title' component='div' />
							</div>
							<div className='edit_description'>
								<Field name='description'>
									{({ field }: FieldProps) => <TextInput {...field} placeholder='Description' maxLength={50} />}
								</Field>
							</div>
							<div className='edit__datepicker'>
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
						</Form>
					</Modal>
				);
			}}
		</Formik>
	);
};

export default EditModal;
