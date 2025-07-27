import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { Modal, Input, Button, Upload, Checkbox, message, Form } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

export default function EditForm({ handleUpdate, handleClose, setForm, darkMode }) {
	const [fileList, setFileList] = useState([])

	const formik = useFormik({
		initialValues: {
			images: setForm.images || [],
			name: setForm.name,
			description: setForm.description,
			isCompleted: setForm.isCompleted || false,
			id: setForm.id,
		},
		validationSchema: Yup.object({
			name: Yup.string().min(3, 'Больше 3 символов').required('Name is required'),
			description: Yup.string().min(3, 'Больше 3 символов').required('Description is required'),
		}),
		onSubmit: async (values) => {
			handleClose()
			try {
				await axios.put('https://to-dos-api.softclub.tj/api/to-dos', values)
				formik.resetForm()
				handleUpdate()
				message.success('Успешно обновлено')
			} catch (error) {
				console.error('Ошибка:', error)
				message.error('Не удалось обновить данные')
			}
		}
	})

	const handleUpload = ({ file, onSuccess }) => {
		setFileList(prev => [...prev, file])
		formik.setFieldValue('images', [...fileList, file])
		onSuccess('ok')
	}

	const modalStyle = {
		backgroundColor: darkMode ? '#1f2937' : '#fff',
		color: darkMode ? '#d1d5db' : '#000',
	}

	const inputStyle = {
		backgroundColor: darkMode ? '#374151' : undefined,
		color: darkMode ? '#d1d5db' : undefined,
	}

	const labelStyle = {
		color: darkMode ? '#d1d5db' : undefined,
	}

	const checkboxStyle = {
		color: darkMode ? '#d1d5db' : undefined,
	}

	const btnTypePrimary = darkMode ? 'default' : 'primary'
	const btnTypeDefault = 'default'

	return (
		<Modal
			open={true}
			onCancel={handleClose}
			footer={null}
			title={<span style={{ color: modalStyle.color }}>Редактировать задачу</span>}
			style={{ top: 30, backgroundColor: modalStyle.backgroundColor }}
			bodyStyle={{
				backgroundColor: modalStyle.backgroundColor,
				color: modalStyle.color,
				padding: darkMode ? '24px 32px' : undefined, 
			}}
			centered
		>
			<Form
				layout="vertical"
				onFinish={formik.handleSubmit}
				style={{ padding: darkMode ? '12px 0' : undefined }}
			>
				<Form.Item
					label={<span style={labelStyle}>Имя</span>}
					validateStatus={formik.touched.name && formik.errors.name ? 'error' : ''}
					help={formik.touched.name && formik.errors.name}
				>
					<Input
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						style={inputStyle}
					/>
				</Form.Item>

				<Form.Item
					label={<span style={labelStyle}>Описание</span>}
					validateStatus={formik.touched.description && formik.errors.description ? 'error' : ''}
					help={formik.touched.description && formik.errors.description}
				>
					<Input
						name="description"
						value={formik.values.description}
						onChange={formik.handleChange}
						style={inputStyle}
					/>
				</Form.Item>

				<Form.Item>
					<Button type={btnTypePrimary} htmlType="submit">
						Сохранить
					</Button>
					<Button onClick={handleClose} style={{ marginLeft: 8 }} type={btnTypeDefault}>
						Отмена
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}
