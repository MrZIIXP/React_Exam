import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import ButtonBasic from './MiniComponents.jsx/ButtonBasic'
import * as Yup from "yup"
import { CustomCheckbox } from './MiniComponents.jsx/Checkbox'
import CustomInput from './MiniComponents.jsx/Input'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CaseCard } from './MiniComponents.jsx/CaseCard'
import { Navigation } from 'swiper/modules'
import { BlogCard } from './MiniComponents.jsx/BlogCard'
export default function Service() {
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
		<header className='w-full px-[10%] fixed top-0 z-[100] text-white left-0 z-100 py-[20px] gap-[60px] flex items-center backdrop-blur-md'>
			<Link to="/"><img src="/images/Home/logo.png" alt="" /></Link>
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
			<section id='top' className='w-full flex-col flex items-center py-[120px] justify-center px-[10%]' style={{ backgroundImage: `url("/images/Service/background.png")`, backgroundSize: "cover", backgroundPosition: "center" }}>
				<span className='text-white/40 flex items-center gap-[10px]'><Link className=' brightness-100 hover:border-b-2 border-white' to="/"><img src="/images/Service/Home.png" alt="" /></Link>{" > "} <a href="" className='hover:text-white hover:border-b-2 border-white'>Services</a></span>
				<br />
				<h3 className='text-[72px] font-extrabold text-white'>Our services</h3>
				<br />
				<p className='text-center w-[670px] text-white/60'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
				<br />
				<br />
				<br />
				<div className='flex items-center gap-[40px]'>
					<Link to="/services/search_engine_optimization">
						<ButtonBasic text="Start now" size={12123} mode={"secondary"} outline={true}></ButtonBasic>
					</Link>
					<div className='flex items-center gap-2'>
						<img src="/images/Service/iPhone.png" alt="" className='' />
						<span className='text-white'><p className='opacity-60'>Call us</p><h1 className='text-[18px]'>(405) 555-0128</h1></span>
					</div>
				</div>
			</section>


			<section className='py-[100px] items-center px-[5%] grid grid-cols-2 gap-x-[80px] gap-y-[140px]'>
				<div className='flex flex-col'>
					<h1 className='text-[32px] font-bold'>Social Media Marketing</h1>
					<br />
					<p>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.</p>
					<br /><br /><br />
					<div className='flex gap-[23px]'>
						<ButtonBasic text="Learn more" size={580} mode={"light"} outline={true}></ButtonBasic>
						<ButtonBasic text="Try SEO toolkit" size={580} mode={"light"}></ButtonBasic>
					</div>
				</div>
				<div style={{ backgroundImage: `url("/images/Home/bg-shape.png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<img src="/images/Home/illustration-1.png" alt="" />
				</div>


				<div style={{ backgroundImage: `url("/images/Service/shape.png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<img src="/images/Service/illustration.png" alt="" />
				</div>
				<div className='flex flex-col'>
					<h1 className='text-[32px] font-bold'>Search Engine Optimization</h1>
					<br />
					<p>Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.</p>
					<br /><br /><br />
					<div className='flex gap-[23px]'>
						<ButtonBasic text="Learn more" size={580} mode={"light"} outline={true}></ButtonBasic>
						<ButtonBasic text="Try SEO toolkit" size={580} mode={"light"}></ButtonBasic>
					</div>
				</div>


				<div className='flex flex-col'>
					<h1 className='text-[32px] font-bold'>Research Service</h1>
					<br />
					<p>Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. </p>
					<br /><br /><br />
					<div className='flex gap-[23px]'>
						<ButtonBasic text="Learn more" size={580} mode={"light"} outline={true}></ButtonBasic>
						<ButtonBasic text="Try SEO toolkit" size={580} mode={"light"}></ButtonBasic>
					</div>
				</div>
				<div style={{ backgroundImage: `url("/images/Service/shape (1).png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<img src="/images/Service/illustration (1).png" alt="" />
				</div>


				<div style={{ backgroundImage: `url("/images/Service/shape (2).png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<img src="/images/Service/illustration (2).png" alt="" />
				</div>
				<div className='flex flex-col'>
					<h1 className='text-[32px] font-bold'>Content & PR Service</h1>
					<br />
					<p>Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.</p>
					<br /><br /><br />
					<div className='flex gap-[23px]'>
						<ButtonBasic text="Learn more" size={580} mode={"light"} outline={true}></ButtonBasic>
						<ButtonBasic text="Try SEO toolkit" size={580} mode={"light"}></ButtonBasic>
					</div>
				</div>


				<div className='flex flex-col'>
					<h1 className='text-[32px] font-bold'>Payed Traffic Management</h1>
					<br />
					<p>Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.</p>
					<br /><br /><br />
					<div className='flex gap-[23px]'>
						<ButtonBasic text="Learn more" size={580} mode={"light"} outline={true}></ButtonBasic>
						<ButtonBasic text="Try SEO toolkit" size={580} mode={"light"}></ButtonBasic>
					</div>
				</div>

				<div style={{ backgroundImage: `url("/images/Service/shape (3).png")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<img src="/images/Service/illustration (3).png" alt="" />
				</div>
			</section>

			<section className='bg-[#1E212C] flex px-[10%] mt-[83px] py-[80px] justify-between'>
				<img src="/images/Home/illustration (1).png" alt="" />
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

			<section className='pt-[180px] px-[5%] text-center flex flex-col items-center pb-[120px]'>
				<h1 className='text-[46px] font-bold'>Markets in which we operate</h1>
				<br /><br />
				<div className='flex items-center'>
					<div className='flex border-r border-gray-300 pr-[22px] flex-col items-center gap-[10px]'>
						<img src="/images/Service/ic-cart.png" alt="" />
						<h2 className='text-[20px] font-bold'>E-commerce Websites</h2>
						<p className='text-[#787A80]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
					</div>

					<div className='flex flex-col items-center gap-[10px] border-x border-gray-300 px-[22px]'>
						<img src="/images/Service/ic-website.png" alt="" />
						<h2 className='text-[20px] font-bold'>E-commerce Websites</h2>
						<p className='text-[#787A80]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>

					</div>

					<div className='flex flex-col items-center gap-[10px] border-x border-gray-300 px-[22px]'>
						<img src="/images/Service/ic-suitcase.png" alt="" />
						<h2 className='text-[20px] font-bold'>E-commerce Websites</h2>
						<p className='text-[#787A80]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
					</div>


					<div className='flex flex-col items-center gap-[10px] border-l border-gray-300 pl-[22px]'>
						<img src="/images/Service/ic-startup.png" alt="" />
						<h2 className='text-[20px] font-bold'>E-commerce Websites</h2>
						<p className='text-[#787A80]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
					</div>
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
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 90, value: "Engagement", color: "orange" }, { percent: 100, value: "Deliverability", color: "lightgreen" }]} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} title={"Charity organisation"} industry={(<><img src="/images/Home/image (3).png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 200, color: "blue", value: "Growth in sales" }, { percent: 1400, color: "transparent", value: "Target investors" }]} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} title={"Oil and natural resources"} industry={(<><img src="/images/Home/National Health Logo 1.png" alt="" className='invert-0 brightness-0 group-hover:invert transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
						<SwiperSlide className='p-5'>
							<CaseCard backgroundImage={"/images/Home/image.png"} data={[{ percent: 70, color: "red", value: "Open Rate" }, { percent: 200, color: "orange", value: "Growth in sales" }]} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} title={"Personal care"} industry={(<><img src="/images/Home/Sunset Realty Logo.png" alt="" className='group-hover:invert group-hover:brightness-0 transition-all duration-500' /></>)}></CaseCard>
						</SwiperSlide>
					</Swiper>
				</div>
				<br /><br />
				<div className='w-full items-center flex justify-center gap-[30px]'>
					<p className='text-[28px] font-bold'>Explore more case studies</p>
					<ButtonBasic size={1234} mode={"light"} text="View all case studies"></ButtonBasic>
				</div>
			</section>

			<div className='flex px-[10%] pb-[170px] pt-[120px] justify-between items-center py-[30px] w-full'>
				<img src="/images/Home/InDepth Consulting Logo - Untitled Page.png" alt="" />
				<img src="/images/Home/Higher Fit Logo - Untitled Page.png" alt="" />
				<img src="/images/Home/Sentinal Consulting Logo.png" alt="" />
				<img src="/images/Home/Happy Home Logo.png" alt="" />
				<img src="/images/Home/For Sale Logo.png" alt="" />
				<img src="/images/Home/Sunset Realty Logo.png" alt="" className='grayscale hover:grayscale-0 transition-all duration-500' />
			</div>

			<section className='flex gap-[30px] pb-[180px] px-[10%] items-start'>
				<div>
					<h1 className='text-[46px] font-bold'>Latest news</h1>
					<br />
					<p className='text-[#424551] max-w-[300px] text-[20px]'>Check more posts in our blog for featured news and advertising insights</p>
					<br /><br />
					<ButtonBasic text={"Go to blog"} mode={"light"} size={12121}></ButtonBasic>
				</div>

				<div className='ml-auto flex gap-[30px]'>
					<BlogCard title={"How to Maximize Your ROI Through Scientific SEM?"} category={"SEO"} date={"July 5, 2020"} author={"By Diane Mccoy"} excerpt={"Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio..."} img={"/images/Home/pic-1.png"}></BlogCard>
					<BlogCard title={"The Basics of Blogging Search Engine Optimization."} category={"Marketing"} date={"July 2, 2020"} author={"By Diane Mccoy"} excerpt={"Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."} img={"/images/Home/pic.png"}></BlogCard>
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