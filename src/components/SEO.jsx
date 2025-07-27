import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import ButtonBasic from './MiniComponents.jsx/ButtonBasic'
import CustomInput from './MiniComponents.jsx/Input'
import { Switcher } from './MiniComponents.jsx/Switcher'
import { PricingCard } from './MiniComponents.jsx/Pricing'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CaseCard } from './MiniComponents.jsx/CaseCard'
import { Navigation } from 'swiper/modules'
export default function SEO() {
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
			<section id='top' className='w-full flex-col flex items-center py-[120px] justify-center px-[10%]' style={{ backgroundImage: 'url("/images/SEO/background.png")', backgroundSize: "cover", backgroundPosition: "center" }}>
				<span className='text-white/40 flex items-center gap-[10px]'><Link className='hover:border-b-2 border-white' to="/"><img src="/images/Service/Home.png" alt="" /></Link>{" > "} <Link to={"/services"}><a href="" className='text-white hover:border-b-2 border-white'>Services</a></Link>{" > "} <Link to={"/services/search_engine_optimization"}><a href="" className='hover:text-white hover:border-b-2 border-white'>Search Engine Optimization</a></Link></span>
				<br />
				<h3 className='text-[72px] font-extrabold text-white'>Search Engine Optimization</h3>
				<br />
				<p className='text-center w-[670px] text-white/60'>Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non. </p>
				<br />
				<br />
				<br />
				<div className='flex items-end min-w-[600px]'>
					<CustomInput name="email" formik={formik} label="Your website URL" placeholder="Enter your email" mode='dark'></CustomInput>
					<button className='w-[300px] text-center text-white rounded-md h-[52px] bg-[#7772F1]'>Analyse your site</button>
				</div>
			</section>

			<div className='flex px-[10%] pb-[120px] pt-[120px] justify-between items-center py-[30px] w-full'>
				<img src="/images/Home/InDepth Consulting Logo - Untitled Page.png" alt="" />
				<img src="/images/Home/Higher Fit Logo - Untitled Page.png" alt="" />
				<img src="/images/Home/Sentinal Consulting Logo.png" alt="" />
				<img src="/images/Home/Happy Home Logo.png" alt="" />
				<img src="/images/Home/For Sale Logo.png" alt="" />
				<img src="/images/Home/Sunset Realty Logo.png" alt="" className='grayscale hover:grayscale-0 transition-all duration-500' />
			</div>

			<section className='px-[10%] flex gap-[135px]'>
				<img src="/images/SEO/image.png" alt="" className='w-[50%]' />
				<div className='w-[50%]'>
					<h1 className='text-[46px] font-bold'>We go above and beyond to ensure successful SEO</h1>
					<br />
					<p className='text-[#787A80]'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
				</div>
			</section>

			<section className='flex flex-col items-center pt-[180px] pb-[120px]'>
				<h1 className='text-[46px] font-bold'>SEO services include</h1>
				<br /><br /><br />
				<div className='grid grid-cols-3'>
					<div className='px-[94px] border-b border-r py-[40px]'>
						<img src="/images/SEO/ic-options.png" alt="" />
						<br />
						<h1 className='text-[20px] font-semibold'>SEO Strategy</h1>
						<br />
						<p className='text-[#787A80]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
					</div>
					<div className='px-[94px] border-b py-[40px]'>
						<img src="/images/SEO/ic-analytics.png" alt="" />
						<br />
						<h1 className='text-[20px] font-semibold'>Competitor Analysis</h1>
						<br />
						<p className='text-[#787A80]'>Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra duis ut porttitor.</p>
					</div>
					<div className='px-[94px] border-b border-l py-[40px]'>
						<img src="/images/SEO/ic-target.png" alt="" />
						<br />
						<h1 className='text-[20px] font-semibold'>Technical Audit</h1>
						<br />
						<p className='text-[#787A80]'>Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh vehicula.</p>
					</div>
					<div className='px-[94px] border-r py-[40px]'>
						<img src="/images/SEO/ic-chart.png" alt="" />
						<br />
						<h1 className='text-[20px] font-semibold'>Content Strategy</h1>
						<br />
						<p className='text-[#787A80]'>Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum in.</p>
					</div>
					<div className='px-[94px] py-[40px]'>
						<img src="/images/SEO/ic-speaker.png" alt="" />
						<br />
						<h1 className='text-[20px] font-semibold'>Media Promotion</h1>
						<br />
						<p className='text-[#787A80]'>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
					</div>
					<div className='px-[94px] border-l py-[40px]'>
						<img src="/images/SEO/ic-analysis.png" alt="" />
						<br />
						<h1 className='text-[20px] font-semibold'>SEO Reports</h1>
						<br />
						<p className='text-[#787A80]'>Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus. Mauris, mus tincidunt a, nisi.</p>
					</div>


				</div>
			</section>

			<selection className='px-[10%] flex items-center mb-[120px]'>
				<div className='bg-[#7772F1] w-full'>
					<div className='py-[48px] flex flex-col items-center w-full' style={{ backgroundImage: `url(/images/SEO/background-1.png)`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
						<h1 className='text-[32px] font-bold text-white'>Get a Free SEO Analysis!</h1>
						<form action="" className='text-white flex gap-[20px] items-start'>
							<div>
								<p className='mb-[8px]'>Name</p>
								<CustomInput formik={formik} name={"name"} placeholder={"Enter your name"}></CustomInput>
							</div>
							<div>
								<p className='mb-[8px]'>Email</p>
								<CustomInput formik={formik} name={"email"} placeholder={"Enter your email"}></CustomInput>
							</div>
							<div>
								<p className='mb-[8px]'>Your website URL</p>
								<CustomInput formik={formik} name={"yoursite"} placeholder={"http://yoursite.com"}></CustomInput>
							</div>
							<div className='mt-[30px]'>
								<ButtonBasic text="Analyse your site" size={1244} mode={"dark"}></ButtonBasic>
							</div>
						</form>
					</div>
				</div>
			</selection>

			<section className="bg-white py-[80px] px-[40px] text-[#424551]">
				<div className="max-w-[90%] mx-auto flex flex-col gap-[60px]">
					<div className="text-center">
						<h2 className="text-[46px] leading-[62px] font-bold text-[#1E212C] mb-[16px]">
							How SEO Works
						</h2>
						<p className="text-[18px] leading-[30px] text-[#787A80]">
							Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.
						</p>
					</div>

					<div className="flex w-[80%] mx-auto flex-col gap-[5px]">
						{[
							{
								title: "Off-Site SEO Analysis",
								description:
									"Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
							},
							{
								title: "Technical SEO Optimizations",
								description:
									"Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.",
							},
							{
								title: "Usability Check",
								description:
									"Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies.",
							},
							{
								title: "Content Marketing",
								description:
									"Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.",
							},
						].map((step, index) => (
							<div className={`${index % 2 == 0 ? "ml-auto justify-start" : "mr-auto justify-end"} flex gap-[54px] w-[50.4%]`} key={index}>
								{index % 2 == 0 && (<div className='flex flex-col gap-[5px] items-center'>
									<hr className='size-[10px] bg-[#7772F1] rounded-full' />
									<div className='w-[1px] h-[128px] bg-gray-600' />
								</div>)}
								<div className={index % 2 == 0 ? "text-left" : "text-right"}>
									<p className='text-gray-500 font-semibold'>STEP {index + 1}</p>
									<h1 className='text-[20px] font-bold'>{step.title}</h1>
									<p>{step.description}</p>
								</div>
								{index % 2 != 0 && (<div className='flex flex-col items-center gap-[5px] h-full'>
									<hr className='size-[10px] bg-[#7772F1] rounded-full' />
									<div className='w-[1px] h-[128px] bg-gray-600' />
								</div>)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='flex flex-col px-[5%] items-center mt-[180px]'>
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
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:2`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:3`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:1`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:2`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:3`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:1`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:2`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
							</div>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<div onClick={() => navigator(`case/:3`)}>
								<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
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

			<section className='w-full px-[10%] mb-[120px] mt-[180px] flex flex-col items-center'>
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
					<div style={{ backgroundImage: "url('/images/Home/bg-shape.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
						<img src="/images/Home/illustration-1.png" alt="" />
					</div>
				</div>

			</section>
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