import { Link } from 'react-router-dom'
import ButtonBasic from './MiniComponents.jsx/ButtonBasic'
import CustomInput from './MiniComponents.jsx/Input'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { CustomCheckbox } from './MiniComponents.jsx/Checkbox'
import { AccordionItem } from './MiniComponents.jsx/AccordionItem'
import { CaseCard } from './MiniComponents.jsx/CaseCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Switcher } from './MiniComponents.jsx/Switcher'
import { BlogCard } from './MiniComponents.jsx/BlogCard'
import { PricingCard } from './MiniComponents.jsx/Pricing'
import { useEffect } from 'react'
export default function HomePage() {
	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			yoursite: ""
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			name: Yup.string().required("Required"),
			yoursite: Yup.string().required("Required"),
		}),
		onSubmit: (value) => {
			console.log(value)
		}
	})

	const data = [
		{
			id: 1,
			data: [
				{ percent: 90, value: "Engagement", color: "orange" },
				{ percent: 100, value: "Deliverability", color: "lightgreen" }
			],
			desc: "Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.",
			title: "Charity organisation",
			img: "/images/Home/image.png",
			company: "/images/Home/image (3).png"
		},
		{
			id: 2,
			data: [
				{ percent: 75, value: "CTR", color: "lightblue" },
				{ percent: 95, value: "Open rate", color: "lightgreen" }
			],
			desc: "Our strategy helped DigitalCorp boost email click-through rate by 75%.",
			title: "E-commerce platform",
			img: "/images/Home/image.png",
			company: "/images/Home/National Health Logo 1.png"
		},
		{
			id: 3,
			data: [
				{ percent: 80, value: "Sales Growth", color: "lightcoral" },
				{ percent: 85, value: "Conversion", color: "gold" }
			],
			desc: "We worked with ShopMaster to improve conversion and sales within 6 months.",
			title: "Online retail company",
			img: "/images/Home/image.png",
			company: "/images/Home/Sunset Realty Logo.png"
		}
	]

	useEffect(()=>{
		localStorage.setItem("case",JSON.stringify(data))
	},[])

	return (<>
		<header className='w-full px-[10%] fixed top-0 z-[100] text-white left-0 z-100 py-[20px] gap-[60px] flex items-center backdrop-blur-md'>
			<Link to="/"><img src="public/images/Home/logo.png" alt="" /></Link>
			<Link to="/services">Services</Link>
			<Link to="/case" disabled>Case Studies</Link>
			<Link to="/about" disabled>About Us</Link>
			<Link to="/blog" disabled>Blog</Link>
			<Link to="/contact" disabled>Contact</Link>
			<div className='ml-auto'>
				<ButtonBasic text="Talk to a human" size={1244} mode={"light"}></ButtonBasic>
			</div>
		</header>

		<main>
			<section id='top' className='w-full h-[1000px] flex-col flex items-center justify-center px-[10%]' style={{ backgroundImage: `url("public/images/Home/background-1.png")`, backgroundSize: "cover", backgroundPosition: "center" }}>
				<div className='flex items-start my-auto mt-[20%]'>
					<div>
						<h1 className='font-extrabold text-[52px] text-white'>Best <span className='text-[#7772F1]'>SEO & Marketing</span> <br /> Solutions for You</h1>
						<br /><br />
						<div className='flex items-center gap-[16px]'>
							<Link to="/services/search_engine_optimization">
								<ButtonBasic text="Get a free analysis" mode={"secondary"} size={1024} outline={true}></ButtonBasic>
							</Link>
							<div className='flex items-center'>
								<img src="public/images/Home/hover.png" alt="" className='hover:scale-[0.8] transition-all duration-300' />
								<p className='text-[16px] font-medium text-white'>Play video</p>
							</div>
						</div>
					</div>
					<img src="public/images/Home/illustration.png" alt="" />
				</div>
				<div className='flex text-white text-[20px] mt-auto text-bold justify-between items-center py-[90px] w-full'>
					<div className='flex gap-5 items-center'>
						<img src="public/images/Home/ic-chart.png" alt="" />
						<p>SEO Content Strategy</p>
					</div>
					<p className='text-gray-500 text-[30px]'>|</p>
					<div className='flex gap-5 items-center'>
						<img src="public/images/Home/ic-speaker.png" alt="" />
						<p>Content Marketing</p>
					</div>
					<p className='text-gray-500 text-[30px]'>|</p>
					<div className='flex gap-5 items-center'>
						<img src="public/images/Home/ic-computer.png" alt="" />
						<p>Website & Social Media Marketing</p>
					</div>
				</div>
			</section>

			<section className="w-full flex flex-col px-[10%] gap-[100px] items-center justify-between pt-[120px]">
				<div className='flex gap-[70px]'>
					<p className='text-[24px] font-bold max-w-[600px]'>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
					<div className='grid w-full max-w-[500px] grid-cols-2 gap-y-[32px] gap-x-[40px]'>
						<div className='flex items-center gap-[16px]'>
							<img src="public/images/Home/image-3.png" alt="" />
							<p className='text-[14px] text-[#424551]'>Top SEO Companies 2020 by Clutch</p>
						</div>

						<div className='flex items-center gap-[16px]'>
							<img src="public/images/Home/image-2.png" alt="" />
							<p className='text-[14px] text-[#424551]'>Top SEO Companies 2020 by Clutch</p>
						</div>

						<div className='flex items-center gap-[16px]'>
							<img src="public/images/Home/image-1.png" alt="" />
							<p className='text-[14px] text-[#424551]'>Top SEO Companies 2020 by Clutch</p>
						</div>

						<div className='flex items-center gap-[16px]'>
							<img src="public/images/Home/image-4.png" alt="" />
							<p className='text-[14px] text-[#424551]'>Top SEO Companies 2020 by Clutch</p>
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center py-[30px] w-full'>
					<img src="public/images/Home/InDepth Consulting Logo - Untitled Page.png" alt="" />
					<img src="public/images/Home/Higher Fit Logo - Untitled Page.png" alt="" />
					<img src="public/images/Home/Sentinal Consulting Logo.png" alt="" />
					<img src="public/images/Home/Happy Home Logo.png" alt="" />
					<img src="public/images/Home/For Sale Logo.png" alt="" />
					<img src="public/images/Home/Sunset Realty Logo.png" alt="" className='grayscale hover:grayscale-0 transition-all duration-500' />
				</div>
			</section>

			<section className='w-full'>
				<main className='w-full' style={{ backgroundImage: `url("public/images/Home/Background.png")`, backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<section className='py-[131px] px-[10%] w-full flex gap-[105px]'>
						<div className='w-[50%]'>
							<h1 className='text-[46px] font-bold '>Createx Agency </h1>
							<br /><br />
							<p className='text-[#787A80]'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
							<br /><br />
							<ButtonBasic text="More about us" size={530} mode="light"></ButtonBasic>
						</div>
						<img src="public/images/Home/image (1).png" alt="" className='w-[50%]' />

					</section>

					<div className='w-full flex justify-center pb-[160px]'><img src="public/images/Home/Figures.png" alt="" /></div>

					<section className='w-full px-[10%] flex flex-col items-center'>
						<h1 className='text-[46px] font-bold'>Our services</h1>
						<br /><br />
						<div className='flex justify-between w-full items-center'>
							<ButtonBasic text="Social Media" size={1024} outline={true} mode="light"></ButtonBasic>
							<p className='text-[#9A9CA5] font-bold cursor-pointer'>SEO</p>
							<p className='text-[#9A9CA5] font-bold cursor-pointer'>Research</p>
							<p className='text-[#9A9CA5] font-bold cursor-pointer'>Content & PR</p>
							<p className='text-[#9A9CA5] font-bold cursor-pointer'>Payed Traffic</p>

						</div>
						<br /><br /><br />
						<div className='flex justify-between w-full'>
							<div>
								<h1 className='text-[28px] font-bold'>Complete Worflow For Any <br /> SEO Professional</h1>
								<br />
								<ul className='flex flex-col gap-[12px]'>
									<li className='flex gap-[8px] items-center'>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className={`shrink-0 text-[#7772F1]`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p>Aenean enim tellus morbi nisl vulputate dictumst.</p>
									</li>

									<li className='flex gap-[8px] items-center'>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className={`shrink-0 text-[#7772F1]`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p>Nibh sapien volutpat lacus augue.</p>
									</li>

									<li className='flex gap-[8px] items-center'>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className={`shrink-0 text-[#7772F1]`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p>Vel in amet, placerat adipiscing est pharetra.</p>
									</li>

									<li className='flex gap-[8px] items-center'>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className={`shrink-0 text-[#7772F1]`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p>Gravida ornare sit in et ut sit sem id.</p>
									</li>
									<li className='flex gap-[8px] items-center'>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className={`shrink-0 text-[#7772F1]`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p>Ultrices pellentesque dictum enim egestas ac diam.</p>
									</li>
									<li className='flex gap-[8px] items-center'>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className={`shrink-0 text-[#7772F1]`}
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p>Sit semper enim senectus integer ut turpis et.</p>
									</li>

								</ul>
								<br /><br />
								<div className='flex gap-[23px]'>
									<ButtonBasic text="Learn more" size={1024} outline={true} mode={"light"}></ButtonBasic>
									<ButtonBasic text="Try SEO toolkit" size={1024} mode={"light"}></ButtonBasic>
								</div>
							</div>
							<div style={{ backgroundImage: "url('public/images/Home/bg-shape.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
								<img src="public/images/Home/illustration-1.png" alt="" />
							</div>
						</div>

					</section>

					<section className='bg-[#1E212C] flex px-[10%] mt-[83px] py-[80px] justify-between'>
						<img src="public/images/Home/illustration (1).png" alt="" />
						<div>
							<h1 className='text-[46px] font-extrabold text-white'>Get a Free SEO Analysis!</h1>
							<br /><br />
							<div>
								<div className='flex gap-[30px]'>
									<CustomInput name="name" formik={formik} mode="dark" placeholder="Enter your name"></CustomInput>
									<CustomInput name="email" formik={formik} mode="dark" placeholder="Enter your email"></CustomInput>
								</div>
								<br /><br />
								<CustomInput name="yoursite" formik={formik} mode="dark" placeholder="http://www.yoursite.com"></CustomInput>
								<br /><br />
								<div className='flex justify-between'>
									<CustomCheckbox label="I agree to receive communications from Createx SEO Agency" className={"text-white w-[250px]"}></CustomCheckbox>
									<ButtonBasic text="Get a free analysis" size={1024} mode={"light"}></ButtonBasic>
								</div>
							</div>

						</div>
					</section>

					<section className='pt-[180px] pb-[120px] items-start px-[10%] flex justify-between w-full'>
						<div>
							<h1 className='text-[40px] font-extrabold'>Freequently Ask Questions</h1>
							<br /><br />
							<AccordionItem title="Aliquet lectus urna viverra in odio?"><p>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p></AccordionItem>
							<AccordionItem title="Orci commodo, viverra orci mollis ut euismod?"><p>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p></AccordionItem>
							<AccordionItem title="Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?"><p>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p></AccordionItem>
							<AccordionItem title="In id dolor quis nunc, urna hendrerit pharetra?"><p>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p></AccordionItem>
							<br /><br />
							<ButtonBasic text="Discover more" arrow={true} size={1024} mode={"light"}></ButtonBasic>
						</div>
						<img src="public/images/Home/illustration (2).png" alt="" />
					</section>

					<section className='bg-[#E5E8ED] px-[5%] py-[80px]'>
						<div className='flex justify-between items-center'>
							<h1 className='text-[46px] font-bold'>Read our clients' case studies</h1>
							<div className='flex gap-[20px] items-center'>
								<button className='w-[40px] h-[40px] flex items-center button-prev_1 justify-center active:bg-[#7772F1] bg-white active:text-white rounded-full text-[20px] leading-[0px]'>{"←"}</button>
								<button className='w-[40px] h-[40px] flex items-center button-next_1 justify-center active:bg-[#7772F1] bg-white active:text-white rounded-full text-[20px] leading-[0px]'>{"→"}</button>
							</div>
						</div>
						<br /><br />
						<div className='w-full'>
							<Swiper modules={[Navigation]} slidesPerGroup={2} navigation={{ nextEl: ".button-next_1", prevEl: ".button-prev_1" }} slidesPerView={3} loop={true}>
								<SwiperSlide className='p-5'>
									<div onClick={() => navigator(`case/:1`)}>
										<CaseCard backgroundImage={"public/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="public/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
									</div>
								</SwiperSlide>
								<SwiperSlide className='p-5'>
									<div onClick={() => navigator(`case/:2`)}>
										<CaseCard backgroundImage={"public/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="public/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
									</div>
								</SwiperSlide>
								<SwiperSlide className='p-5'>
									<div onClick={() => navigator(`case/:3`)}>
										<CaseCard backgroundImage={"public/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="public/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<br /><br />
						<div className='w-full items-center flex justify-center gap-[30px]'>
							<p className='text-[28px] font-bold'>Explore more case studies</p>
							<ButtonBasic size={1234} mode={"light"} text="View all case studies"></ButtonBasic>
						</div>
					</section>

					<section className='flex flex-col px-[5%] py-[100px] items-center'>
						<h1 className='text-[46px] font-bold'>Our benefits</h1>
						<br /><br />
						<div className='flex gap-[40px] items-center justify-center'>
							<div className='flex flex-col gap-[24px]'>
								<card className="p-[40px] hover:shadow-lg transition-shadow duration-300 rounded text-center flex flex-col border bg-white items-center">
									<img src="public/images/Home/ic-speaker.png" alt="" />
									<h1 className='font-bold text-[20px] mt-[10px]'>Social Advertising Experts</h1>
									<p className='text-[16px] text-gray-400 mt-[10px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
								</card>

								<card className="p-[40px] hover:shadow-lg transition-shadow duration-300 rounded text-center flex flex-col border bg-white items-center">
									<img src="public/images/Home/ic-target.png" alt="" />
									<h1 className='font-bold text-[20px] mt-[10px]'>ROI Focused Campaigns</h1>
									<p className='text-[16px] text-gray-400 mt-[10px]'>Cursus sit eu viverra suspendisse eu quisque enim est tortor. Mauris ornare convallis nisi diam imperdiet. </p>
								</card>

								<card className="p-[40px] hover:shadow-lg transition-shadow duration-300 rounded text-center flex flex-col border bg-white items-center">
									<img src="public/images/Home/ic-checklist.png" alt="" />
									<h1 className='font-bold text-[20px] mt-[10px]'>Monthly Reporting</h1>
									<p className='text-[16px] text-gray-400 mt-[10px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis mauris. </p>
								</card>
							</div>
							<img src="public/images/Home/illustration (3).png" alt="" />
							<div className='flex flex-col gap-[24px]'>
								<card className="p-[40px] hover:shadow-lg transition-shadow duration-300 rounded text-center flex flex-col border bg-white items-center">
									<img src="public/images/Home/ic-chat.png" alt="" />
									<h1 className='font-bold text-[20px] mt-[10px]'>Quality Customer Service</h1>
									<p className='text-[16px] text-gray-400 mt-[10px]'>Sed nunc scelerisque ipsum accumsan, proin nunc euismod purus. Dictum tortor, pellentesque vel integer amet. </p>
								</card>

								<card className="p-[40px] hover:shadow-lg transition-shadow duration-300 rounded text-center flex flex-col border bg-white items-center">
									<img src="public/images/Home/ic-view.png" alt="" />
									<h1 className='font-bold text-[20px] mt-[10px]'>Complete SEO Transparency</h1>
									<p className='text-[16px] text-gray-400 mt-[10px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Ve niam velit nostrud aliquip sunt.</p>
								</card>

								<card className="p-[40px] hover:shadow-lg transition-shadow duration-300 rounded text-center flex flex-col border bg-white items-center">
									<img src="public/images/Home/ic-like.png" alt="" />
									<h1 className='font-bold text-[20px] mt-[10px]'>We're a True Partner</h1>
									<p className='text-[16px] text-gray-400 mt-[10px]'>Quis sed malesuada tincidunt amet, vitae mi justo elementum eu. Dui gravida id elementum dolor sed elementum, risus. </p>
								</card>
							</div>
						</div>
					</section>

					<section className='flex flex-col px-[5%] items-center'>
						<h1 className='text-[46px] font-bold '>Flexible pricing plans</h1>
						<br /><br />
						<Switcher left='Monthly' right='Yearly -12% Off'></Switcher>
						<br /><br />
						<div className='flex gap-[24px]'>
							<PricingCard title='Basic' price='24' features={[{ status: true, name: "Advanced Analytics" }, { status: true, name: "Change Management" }, { status: true, name: "Corporate Finance" }, { status: true, name: "One Way Link Building" }, { status: true, name: "Social Media Marketing" }, { status: false, name: "Strategy & Marketing" }, { status: false, name: "Information Technology" }]}></PricingCard>
							<PricingCard title="Optimal" price="64" features={[{ status: true, name: "Advanced Analytics" }, { status: true, name: "Change Management" }, { status: true, name: "Corporate Finance" }, { status: true, name: "One Way Link Building" }, { status: true, name: "Social Media Marketing" }, { status: true, name: "Strategy & Marketing" }, { status: false, name: "Information Technology" }]} isBest></PricingCard>
							<PricingCard title="Premium" price="98" features={[{ status: true, name: "Advanced Analytics" }, { status: true, name: "Change Management" }, { status: true, name: "Corporate Finance" }, { status: true, name: "One Way Link Building" }, { status: true, name: "Social Media Marketing" }, { status: true, name: "Strategy & Marketing" }, { status: true, name: "Information Technology" }]} ></PricingCard>

						</div>

					</section>

					<section className='flex flex-col px-[10%] pt-[180px] pb-[100px] items-center'>
						<h1 className='text-[46px] font-bold'>What our clients say</h1>
						<div style={{ backgroundImage: `url("public/images/Home/background (1).png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className='flex justify-center py-[80px] w-full items-center gap-[60px]'>
							<button className='prev font-bold text-[30px] w-[60px] h-[50px] leading-[0px] rounded-full active:bg-[#7772F1] active:text-white flex justify-center items-center'>{"←"}</button>
							<Swiper modules={[Navigation]} spaceBetween={50} loop={true} slidesPerView={1} className='w-full' navigation={{ nextEl: ".next", prevEl: ".prev" }}>
								{[
									{ name: "Courtney Alexander", position: "Position, Company name", img: "public/images/Home/image (2).png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in." },
									{
										name: "Mason Thompson",
										position: "Senior Developer, FlowTech",
										img: "https://randomuser.me/api/portraits/men/75.jpg",
										desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
									},
									{
										name: "Amelia Rivera",
										position: "Marketing Lead, NovaCorp",
										img: "https://randomuser.me/api/portraits/women/65.jpg",
										desc: "Nunc sed velit dignissim sodales ut eu sem integer vitae justo. Amet risus nullam eget felis eget nunc lobortis mattis."
									},
									{
										name: "Ethan Bennett",
										position: "UX Designer, PixelStorm",
										img: "https://randomuser.me/api/portraits/men/52.jpg",
										desc: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt."
									},
									{
										name: "Sophia Morales",
										position: "CEO, Visionary Lab",
										img: "https://randomuser.me/api/portraits/women/22.jpg",
										desc: "Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
									},
									{
										name: "Liam Carter",
										position: "Fullstack Engineer, CodeNode",
										img: "https://randomuser.me/api/portraits/men/32.jpg",
										desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh."
									},
									{
										name: "Olivia Martin",
										position: "HR Manager, PeopleFirst",
										img: "https://randomuser.me/api/portraits/women/40.jpg",
										desc: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada."
									},
									{
										name: "Noah Foster",
										position: "CTO, QuantumSoft",
										img: "https://randomuser.me/api/portraits/men/12.jpg",
										desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus."
									}
								].map(el => (
									<SwiperSlide className='p-2 h-full' key={el.name}>
										<div className="bg-white rounded-[8px] px-[105px] py-[64px] border shadow-md border-[#E5E8ED] w-full">
											<p className="text-[#9A9CA5] text-[18px] leading-[30px]">{el.desc}</p>
											<div className="flex items-center gap-[16px] mt-[32px]">
												<div className="w-[48px] h-[48px] rounded-full overflow-hidden">
													<img src={el.img} alt="" className='w-full h-full object-cover' />
												</div>
												<div>
													<p className="text-[#1E212C] text-[18px] font-semibold leading-[27px]">{el.name}</p>
													<p className="text-[#787A80] text-[16px] leading-[24px]">{el.position}</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<button className='next font-bold text-[30px] w-[60px] h-[50px] leading-[0px] rounded-full active:bg-[#7772F1] active:text-white flex justify-center items-center'>{"→"}</button>
						</div>
					</section>

					<section className='flex gap-[30px] pb-[180px] px-[10%] items-start'>
						<div>
							<h1 className='text-[46px] font-bold'>Latest news</h1>
							<br />
							<p className='text-[#424551] max-w-[300px] text-[20px]'>Check more posts in our blog for featured news and advertising insights</p>
							<br />
							<ButtonBasic text={"Go to blog"} mode={"light"} size={12121}></ButtonBasic>
						</div>

						<div className='ml-auto flex gap-[30px]'>
							<BlogCard title={"How to Maximize Your ROI Through Scientific SEM?"} category={"SEO"} date={"July 5, 2020"} author={"By Diane Mccoy"} excerpt={"Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio..."} img={"public/images/Home/pic-1.png"}></BlogCard>
							<BlogCard title={"The Basics of Blogging Search Engine Optimization."} category={"Marketing"} date={"July 2, 2020"} author={"By Diane Mccoy"} excerpt={"Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."} img={"public/images/Home/pic.png"}></BlogCard>
						</div>
					</section>
				</main>
			</section>
		</main>

		<footer className="bg-[#1E212C] text-white/50 px-[40px] pt-[60px] pb-[32px] text-[14px] leading-[21px]">
			<div className="max-w-[1240px] mx-auto flex justify-between gap-[32px]">
				<div className=" flex flex-col gap-[24px] w-[281px]">
					<div className="flex items-center gap-[8px]">
						<img src="public/images/Home/logo.png" alt="Createx" className="h-[32px]" />
					</div>
					<p className="text-[#787A80] text-[14px] leading-[21px]">
						Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
					</p>
					<div className="flex gap-[16px]">
						<img src="public/images/Home/Facebook.png" />
						<img src="public/images/Home/Linked-In.png" />
						<img src="public/images/Home/Twitter.png" />
						<img src="public/images/Home/Instagram.png" />
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
						<li className='flex gap-2 items-center'><img src="public/images/Home/iPhone.png" alt="" /> (405) 555-0128</li>
						<li className='flex gap-2 items-center'><img src="public/images/Home/Union.png" alt="" />hello@createx.com</li>
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
					<img src="public/images/Home/award.png" />
					<img src="public/images/Home/award-1.png" />
					<img src="public/images/Home/award-2.png" />
					<img src="public/images/Home/award-3.png" />
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