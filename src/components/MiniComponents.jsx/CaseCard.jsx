import { Link } from 'react-router-dom'

export const CaseCard = ({
	title,
	description,
	backgroundImage,
	linkText,
	variant = "basic",
	industry,
	data = [],
}) => {
	const isLarge = variant == "large"

	return (
		<div
			className={`group shadow-md w-full h-[350px] ${isLarge ? "max-w-[600px] bg-white" : "max-w-[390px] p-[24px] bg-white hover:bg-transparent"
				} border border-[#E5E8ED] rounded-[4px] relative overflow-hidden transition-all duration-300 `}
			style={
				!isLarge && backgroundImage
					? {
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundBlendMode: "overlay",
					}
					: {}
			}
		>
			{!isLarge && (
				<div className="absolute inset-0 bg-white/80 pointer-events-none transition-all duration-500 group-hover:bg-black/50 z-0" />
			)}

			{isLarge && (
				<div className='w-full h-[200px]' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
					<div className='w-full h-full p-[32px] bg-black/50'>
						{industry}
						<br />
						<div className={`text-[12px] leading-[18px] font-semibold text-white uppercase`}>{title}</div>
					</div>
				</div>
			)}

			<div className={`relative z-10 flex flex-col gap-[16px] ${!isLarge ? "group-hover:text-white transition-all duration-300" : "px-[48px] py-[32px]"} `}>
				{industry && !isLarge && (<div>{industry}</div>)}

				{title && !isLarge && (
					<div className={`text-[12px] leading-[18px] font-semibold text-[#787A80] ${!isLarge ? "group-hover:text-white transition-all duration-300" : ""} uppercase`}>{title}</div>
				)}

				{isLarge && (
					<div className='flex gap-[10px]'>
						{data.length > 0 && data.map((el, ind) => {
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
				)}

				<hr className='bg-gray-300 border-none h-[1px]' />
				<p className={`text-[#1E212C] ${isLarge ? "text-[20px] leading-[30px]" : "text-[16px] group-hover:text-white transition-all duration-300 leading-[24px]"} font-bold`}>
					{description}
				</p>

				{!isLarge && (
					<div className='flex gap-[10px] '>
						{data.length > 0 && data.map((el, ind) => {
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
									<div className="flex flex-col text-[#1E212C] group-hover:text-white transition-all duration-300 font-medium">
										<p className='text-[20px]'>{el.percent}%</p>
										<p>{el.value}</p>
									</div>
								</div>
							)
						})}
					</div>
				)}

				{isLarge && linkText && (
					<div className='flex gap-[10px] items-center'>
						<a 
							href={linkText} 
							className=" text-[16px] leading-[24px] cursor-pointer font-medium w-fit"
						>
							View case
						</a>

						<svg xmlns="http://www.w3.org/2000/svg" width={24} height={18} className='cursor-pointer' fill="none">
							<path
								d="M4 12h16M14 6l6 6-6 6"
								stroke={"#7772F1"}
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				)}
			</div>
		</div>
	)
}
