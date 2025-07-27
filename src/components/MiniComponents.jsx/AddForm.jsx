import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Modal, Input, Button, Upload, Checkbox, message, Form } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function AddForm({ handleUpdate, handleClose, darkMode }) {
	const [fileList, setFileList] = useState([])

	const formik = useFormik({
		initialValues: {
			images: [],
			name: "",
			description: "",
			isCompleted: false,
		},
		validationSchema: Yup.object({
			name: Yup.string().min(3, "Больше 3 символов").required("Name is required"),
			description: Yup.string().min(3, "Больше 3 символов").required("Description is required"),
			images: Yup.array().min(1, "Выберите хотя бы одно изображение").max(5, "Выберите не более 5 изображений").required("Images are required"),
		}),
		onSubmit: async (value) => {
			let formData = new FormData()
			formData.append("name", value.name)
			formData.append("description", value.description)
			formData.append("isCompleted", value.isCompleted)
			Array.from(value.images).forEach(el => formData.append("images", el))
			handleClose()
			try {
				await axios.post("https://to-dos-api.softclub.tj/api/to-dos", formData)
				formik.resetForm()
				handleUpdate()
				message.success("Задача добавлена")
			} catch (error) {
				console.log("Не удалось загрузить данные", error)
				message.error("Не удалось загрузить данные")
			}
		}
	})

	const handleUpload = ({ file, onSuccess }) => {
		const updatedFiles = [...fileList, file]
		setFileList(updatedFiles)
		formik.setFieldValue("images", updatedFiles)
		onSuccess("ok")
	}

	// Стили для темной и светлой темы
	const modalStyle = {
		backgroundColor: darkMode ? '#1f2937' : '#fff',
		color: darkMode ? '#d1d5db' : '#000',
		padding: darkMode ? '24px 32px' : undefined,
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
			title={<span style={{ color: modalStyle.color }}>Добавить задачу</span>}
			style={{ top: 30, backgroundColor: modalStyle.backgroundColor }}
			bodyStyle={{ backgroundColor: modalStyle.backgroundColor, color: modalStyle.color, padding: modalStyle.padding }}
			centered
		>
			<Form layout="vertical" onFinish={formik.handleSubmit} style={{ padding: darkMode ? '12px 0' : undefined }}>
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

				<Form.Item
					label={<span style={labelStyle}>Изображения</span>}
					validateStatus={formik.touched.images && formik.errors.images ? 'error' : ''}
					help={formik.touched.images && formik.errors.images}
				>
					<Upload
						customRequest={handleUpload}
						multiple
						showUploadList
						fileList={fileList.map((file, i) => ({
							uid: i.toString(),
							name: file.name,
							status: 'done',
						}))}
					>
						<Button icon={<UploadOutlined />} type={btnTypePrimary}>
							Выбрать изображения
						</Button>
					</Upload>
				</Form.Item>
				<Form.Item>
					<Button type={btnTypePrimary} htmlType="submit">
						Добавить
					</Button>
					<Button onClick={handleClose} style={{ marginLeft: 8 }} type={btnTypeDefault}>
						Отмена
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}
