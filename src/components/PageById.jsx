import { useEffect, useState } from 'react'
import * as Yup from "yup"
import { Link, useParams } from 'react-router-dom'
import ButtonBasic from './MiniComponents.jsx/ButtonBasic'
import CustomInput from './MiniComponents.jsx/Input'
import { useFormik } from 'formik'

export default function PageById() {
	let { id } = useParams()
	let formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			yoursite: ""
		}
		,
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			name: Yup.string().required("Required"),
			yoursite: Yup.string().required("Required"),
		}),
		onSubmit: (value) => {
			console.log(value)
		}
	})
	let [data, setData] = useState({})
	useEffect(() => {
		setData(JSON.parse(localStorage.getItem("case")).find(el => {
			return el.id == id
		}))
		console.log(data)
	}, [])
	return (<>
		<header className='w-full px-[10%] fixed top-0 text-white left-0 z-[100] py-[20px] gap-[60px] flex items-center backdrop-blur-md'>
			<Link to="/"><img src="/images/Home/logo.png" alt="" /></Link>
			<Link to="/services">Services</Link>
			<Link to="/case" >Case Studies</Link>
			<Link to="/about" >About Us</Link>
			<Link to="/blog" >Blog</Link>
			<Link to="/contact" >Contact</Link>
			<div className='ml-auto'>
				<ButtonBasic text="Talk to a human" size={1244} mode={"light"}></ButtonBasic>
			</div>
		</header>

		<main>
			<img src={data.img} alt="" className='w-full h-[500px] object-cover' />
			<div className='p-[30px]'>
				<img src={data.company} alt="" />
				<h1 className='text-4xl mb-5'>{data.title}</h1>
				<p className='text-[23px] mb-5'>{data.desc}</p>
				<div className='flex gap-[30px]'>
					{data.data && data.data.map((el, ind) => {
						const size = 42
						const radius = size / 2 - 2
						const stroke = 4
						const normalizedRadius = radius
						const circumference = normalizedRadius * 2 * Math.PI
						const strokeDashoffset = circumference - (el.percent / 100) * circumference
						const progressColor = el.color || '#FF5A30'
						function toHexColor(color) {
							const ctx = document.createElement('canvas').getContext('2d')
							ctx.fillStyle = color
							return ctx.fillStyle
						}


						return (
							<div className='flex gap-[16px] items-center'>
								<div key={ind} className={`w-[${size}px] h-[${size}px]`}>
									<svg
										width={size}
										height={size}
										className="rounded-full rotate-[-90deg]"
									>
										<circle
											stroke={`${toHexColor(el.color)}80`}
											fill="transparent"
											strokeWidth={stroke}
											r={normalizedRadius}
											cx={size / 2}
											cy={size / 2}
										/>
										<circle
											stroke={progressColor}
											fill="transparent"
											strokeWidth={stroke}
											r={normalizedRadius}
											cx={size / 2}
											cy={size / 2}
											strokeDasharray={`${circumference} ${circumference}`}
											strokeDashoffset={strokeDashoffset}
											strokeLinecap="round"
										/>
									</svg>
								</div>
								<div className="flex flex-col text-[#1E212C] font-medium">
									<p className='text-[20px]'>{el.percent}%</p>
									<p>{el.value}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</main>


		<footer className="bg-[#1E212C] text-white/50 px-[40px] pt-[60px] pb-[32px] text-[14px] leading-[21px]">
			<div className="max-w-[1240px] mx-auto flex justify-between gap-[32px]">
				<div className=" flex flex-col gap-[24px] w-[281px]">
					<div className="flex items-center gap-[8px]">
						<img src="/images/Home/logo.png" alt="Createx" className="h-[32px]" />
					</div>
					<p className="text-[#787A80] text-[14px] leading-[21px]">
						Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
					</p>
					<div className="flex gap-[16px]">
						<img src="/images/Home/Facebook.png" />
						<img src="/images/Home/Linked-In.png" />
						<img src="/images/Home/Twitter.png" />
						<img src="/images/Home/Instagram.png" />
					</div>
				</div>

				<div className="flex flex-col gap-[16px]">
					<h4 className="font-bold text-white text-[16px] leading-[24px]">COMPANY</h4>
					<ul className="flex flex-col gap-[8px]">
						<li>About Us</li>
						<li>Case Studies</li>
						<li>Blog</li>
						<li>Careers</li>
						<li>Contacts</li>
					</ul>
				</div>
				<div className="flex flex-col gap-[16px]">
					<h4 className="font-bold text-white text-[16px] leading-[24px]">SERVICES</h4>
					<ul className="flex flex-col gap-[8px]">
						<li>Social Media</li>
						<li>SEO</li>
						<li>Research</li>
						<li>Content & PR</li>
						<li>Payed Traffic</li>
					</ul>
				</div>

				<div className="flex flex-col gap-[16px]">
					<h4 className="font-bold text-white text-[16px] leading-[24px]">CONTACT US</h4>
					<ul className="flex flex-col gap-[8px]">
						<li className='flex gap-2 items-center'><img src="/images/Home/iPhone.png" alt="" /> (405) 555-0128</li>
						<li className='flex gap-2 items-center'><img src="/images/Home/Union.png" alt="" />hello@createx.com</li>
					</ul>
				</div>
				<div className="flex flex-col max-w-[280px] gap-[16px]">
					<h4 className="font-bold text-white text-[16px] leading-[24px]">SIGN UP TO OUR NEWSLETTER</h4>
					<CustomInput name={"email"} formik={formik} mode="dark" placeholder={"Enter your email"}></CustomInput>
					<p className='text-[10px] text-white'>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto mt-[40px] flex justify-center items-center flex-wrap gap-[16px] border-t border-[#E5E8ED] pt-[24px]">
				<div className="flex gap-[24px] items-center">
					<img src="/images/Home/award.png" />
					<img src="/images/Home/award-1.png" />
					<img src="/images/Home/award-2.png" />
					<img src="/images/Home/award-3.png" />
				</div>
				<p className="text-white text-[14px] leading-[21px] ml-auto">GO TO TOP</p>
				<a href="#top">
					<button className="text-white text-[14px] bg-[#7772F1] w-[40px] h-[40px] rounded-md leading-[0]">△</button>
				</a>
			</div>
		</footer>
		<p className="text-[14px] px-[8%] bg-[#292c37] leading-[21px] w-full py-[20px] text-white">
			© All rights reserved. Made with 💜 by Createx Studio
		</p>
	</>)
}