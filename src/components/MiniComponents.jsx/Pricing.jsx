export const PricingCard = ({ title, price, features, isBest = false, onChoose }) => {
	return (
		<div
			className={`w-full max-w-[460px] rounded-md ${isBest ? "border-[#03CEA4] bg-[#1E212C]" : "bg-white border-[#7772F166]"
				} px-[102px] pt-[40px] pb-[32px] border-2 flex items-center flex-col gap-[32px] shadow-lg`}
		>
			<div className={`flex flex-col gap-[16px]`}>
				<h3 className={`text-[28px] leading-[42px] font-bold ${!isBest ? "text-[#1E212C]" : "text-white"} `}>{title}</h3>
				<div className={`${isBest ? "text-green-500" : "text-[#7772F1]"} flex`}>
					<h1 className={`text-[48px] leading-[48px] font-bold `}>${price}</h1>
					<p className='text-[18px]'>/mon</p>
				</div>
			</div>
			<hr className='h-[1px] bg-gray-500 w-full' />
			<ul className={`flex flex-col gap-[12px] w-full ${isBest ? "text-white" : "text-[#424551]"} text-[16px] leading-[24px]`}>
				{features.map((f, idx) => {
					if (f.status) {
						return (
						<li key={idx} className={`flex gap-[8px] items-center`}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								className={`shrink-0  ${isBest ? "text-green-400" : "text-[#7772F1]"}`}
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
							<p>{f.name}</p>
						</li>)
					}
				})}
				{features.map((f, idx) => {
					if (!f.status) {
						return (
						<li key={idx} className={`flex opacity-50 gap-[8px] items-center`}>
							<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							className={`shrink-0 opacity-50`}
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18 6L6 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6 6L18 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
							<p>{f.name}</p>
						</li>)
					}
				})}
			</ul>
			<button
				onClick={onChoose}
				className={`rounded-[4px] mt-auto px-[24px] py-[12px] font-semibold text-[16px] leading-[24px] ${isBest
					? "bg-[#7772F1] active:bg-[#504AED] text-white"
					: "border-[#7772F1] border-2 text-[#7772F1] active:text-white active:border-[#504AED] active:bg-[#504AED]"
					} transition duration-200`}
			>
				Choose plan
			</button>
		</div>
	)
}
