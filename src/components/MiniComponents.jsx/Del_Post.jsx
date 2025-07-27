import { useState } from 'react'
import axios from 'axios'
import { Modal, Button, Upload, message, Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Del_Post({ handleUpdate, handleClose, postId, darkMode }) {
  const [images, setImages] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://to-dos-api.softclub.tj/api/to-dos/images/${id}`)
      message.success("Изображение удалено")
      handleUpdate()
      handleClose()
    } catch (error) {
      console.error("Ошибка при удалении:", error)
      message.error("Не удалось удалить изображение")
    }
  }

  const handleAdd = async () => {
    if (images.length === 0) return

    try {
      const formData = new FormData()
      images.forEach(file => formData.append("images", file))
      await axios.post(`https://to-dos-api.softclub.tj/api/to-dos/${postId.id}/images`, formData)
      message.success("Изображения добавлены")
      handleUpdate()
      handleClose()
    } catch (error) {
      console.error("Ошибка при добавлении:", error)
      message.error("Не удалось добавить изображение")
    }
  }

  const customUpload = ({ file, onSuccess }) => {
    setImages(prev => [...prev, file])
    setTimeout(() => onSuccess("ok"), 0)
  }

  const bgColor = darkMode ? '#1f2937' : '#fff'
  const slideBgColor = darkMode ? '#374151' : '#f0f0f0'
  const textColor = darkMode ? '#d1d5db' : '#000'
  const btnType = darkMode ? 'default' : 'primary'

  return (
    <Modal
      open={true}
      onCancel={handleClose}
      footer={null}
      width="80%"
      style={{ top: 30, backgroundColor: bgColor }}
      bodyStyle={{ maxHeight: '80vh', overflowY: 'auto', backgroundColor: bgColor, color: textColor, paddingBottom: 80 }}
      centered
    >
      <h2 style={{ textAlign: 'center', color: textColor }}>Просмотр и управление изображениями</h2>

      {postId.images?.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          style={{ marginTop: 20, maxWidth: '100%', maxHeight: 400, borderRadius: 8 }}
          className="del-post-swiper"
        >
          {postId.images.map((image, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                backgroundColor: slideBgColor,
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                userSelect: 'none',
              }}
            >
              <Image
                src={`https://to-dos-api.softclub.tj/images/${image.imageName}`}
                alt={`Изображение ${idx + 1}`}
                style={{ maxHeight: 300, maxWidth: '100%', objectFit: 'contain', borderRadius: 8 }}
                preview={false}
              />
              <Button
                danger
                size="small"
                style={{ marginTop: 12, width: 'fit-content' }}
                onClick={() => handleDelete(image.id)}
              >
                Удалить изображение
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p style={{ textAlign: 'center', marginTop: 20, color: textColor }}>Нет изображений</p>
      )}

      <div style={{ marginTop: 30 }}>
        <Upload
          customRequest={customUpload}
          multiple
          showUploadList={false}
          accept="image/*"
          maxCount={10}
        >
          <Button icon={<UploadOutlined />} type={btnType}>
            Выбрать изображения
          </Button>
        </Upload>

        {images.length > 0 && (
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {images.map((file, idx) => (
              <Image
                key={idx}
                src={URL.createObjectURL(file)}
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: 8 }}
                preview={false}
                alt={`Новый файл ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          width: "94%",
			 bottom: 20,
          backgroundColor: bgColor,
          padding: '12px 0',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 24,
          borderTop: darkMode ? '1px solid #4b5563' : '1px solid #e8e8e8',
          zIndex: 10,
        }}
      >
        <Button onClick={handleClose} type="default">
          Отмена
        </Button>

        <Button type="primary" onClick={handleAdd} disabled={images.length === 0}>
          Добавить изображения
        </Button>
      </div>
    </Modal>
  )
}
