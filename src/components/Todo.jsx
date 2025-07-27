import { useEffect, useState } from 'react'
import AddForm from './MiniComponents.jsx/AddForm'
import EditForm from './MiniComponents.jsx/EditForm'
import Del_Post from './MiniComponents.jsx/Del_Post'
import axios from 'axios'
import { Button, Card, Tag, Typography } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper/modules'

export default function Todo() {
	const [data, setData] = useState([])
	const [openAdd, setOpenAdd] = useState(false)
	const [edit, setEdit] = useState({})
	const [editOpen, setEditOpen] = useState(false)
	const [postId, setPostId] = useState(null)
	const [addImage, setAddImage] = useState(false)

	// Новый state для темной темы
	const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") == "true" || false)

	async function Get() {
		try {
			let { data } = await axios.get("https://to-dos-api.softclub.tj/api/to-dos")
			setData(data.data)
		} catch (error) {
			console.log("Ошибка при получении запроса", error)
		}
	}

	async function Complete(id, status) {
		try {
			await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`, {
				...status,
				isCompleted: !status.isCompleted
			})
			Get()
		} catch (error) {
			console.log("Ошибка при отправке запроса", error)
		}
	}

	async function Delete(id) {
		try {
			await axios.delete(`https://to-dos-api.softclub.tj/api/to-dos?id=${id}`)
			Get()
		} catch (error) {
			console.log("Ошибка при удалении", error)
		}
	}

	useEffect(() => {
		Get()
	}, [])

	useEffect(() => {
		localStorage.setItem("darkMode", darkMode)
	}, [darkMode])
	const pagination = {
		clickable: true,
		renderBullet: (index, className) =>
			`<span class="${className}" style="background-color:white;width:20px;height:20px;font-weight:bold;">${index + 1}</span>`
	}

	return (
		<div className={darkMode ? 'bg-gray-900 text-gray-100 min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
			<div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
				<Button type={darkMode ? "default" : "primary"} onClick={() => setOpenAdd(true)}>
					Добавить задачу
				</Button>

				<Button onClick={() => setDarkMode(!darkMode)}>
					{darkMode ? 'Светлая тема' : 'Тёмная тема'}
				</Button>
			</div>

			{openAdd && (<AddForm handleClose={() => setOpenAdd(false)} handleUpdate={Get} darkMode={darkMode} />)}
			{editOpen && (<EditForm handleClose={() => setEditOpen(false)} handleUpdate={Get} darkMode={darkMode} setForm={edit} />)}
			{addImage && (<Del_Post handleClose={() => setAddImage(false)} darkMode={darkMode} handleUpdate={Get} postId={postId} />)}

			<div className="flex flex-col gap-4 items-center max-w-6xl mx-auto px-4 pb-10">
				{data.map((Elem) => (
					<Card
						key={Elem.id}
						className={`w-full shadow-md ${darkMode ? 'bg-gray-800 border-gray-700' : ''}`}
					>
						<div className="flex gap-4 items-start">
							<Typography.Text strong className={darkMode ? "text-gray-100" : "text-gray-900"}>
								ID:
							</Typography.Text>
							<Typography.Text className={darkMode ? "text-gray-100" : "text-gray-900"}>
								{Elem.id}
							</Typography.Text>
						</div>

						<div className="my-3">
							{Elem.images.length > 0 ? (
								<div className="relative w-[200px] h-[200px] overflow-hidden rounded-md">
									<Swiper
										modules={[Pagination, Navigation]}
										pagination={pagination}
										navigation={true}
										spaceBetween={10}
										slidesPerView={1}
										loop
										className="w-full h-full"
									>
										{Elem.images.map((img, i) => (
											<SwiperSlide key={i} onClick={() => {
												setAddImage(true)
												setPostId(Elem)
											}}>
												<img
													src={`https://to-dos-api.softclub.tj/images/${img.imageName}`}
													alt=""
													className="w-full h-full object-cover rounded-md"
												/>
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							) : (
								<Button
									onClick={() => { setAddImage(true); setPostId(Elem) }}
									type={darkMode ? "default" : "dashed"}
								>
									Нет фото
								</Button>
							)}
						</div>

						<div className="my-2">
							<Typography.Text strong className={darkMode ? "text-gray-100" : "text-gray-900"}>
								Имя:
							</Typography.Text>
							<div className={darkMode ? "text-gray-100" : "text-gray-900"}>
								{Elem.name}
							</div>
						</div>

						<div className="my-2">
							<Typography.Text strong className={darkMode ? "text-gray-100" : "text-gray-900"}>
								Описание:
							</Typography.Text>
							<div className={darkMode ? "text-gray-100" : "text-gray-900"}>
								{Elem.description}
							</div>
						</div>

						<div className="flex flex-wrap gap-2 mt-4">
							<Tag
								color={Elem.isCompleted ? "green" : "red"}
								onClick={() => Complete(Elem.id, Elem)}
								style={{ cursor: 'pointer' }}
							>
								{Elem.isCompleted ? "Завершено" : "Не завершено"}
							</Tag>

							<Button
								type="default"
								onClick={() => {
									setEditOpen(true)
									setEdit(Elem)
								}}
							>
								Редактировать
							</Button>

							<Button danger onClick={() => Delete(Elem.id)}>
								Удалить
							</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}
