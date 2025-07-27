import React, { useState } from "react"
export const Switcher = ({ left = "left", right = "right" }) => {
	const [switching, setSwitch] = useState(false)

	return (
		<div className="w-fit border border-[#7772F1] rounded-full flex gap-[4px]">
			<button
				onClick={() => setSwitch(true)}
				className={`text-[14px] leading-[21px] font-medium px-[16px] py-[8px] rounded-full transition-all duration-200 ${switching
					? "bg-[#7772F1] text-white"
					: "bg-white text-[#7772F1]"
					}`}
			>
				{left}
			</button>
			<button
				onClick={() => setSwitch(false)}
				className={`text-[14px] leading-[21px] font-medium px-[16px] py-[8px] rounded-full transition-all duration-200 ${!switching
					? "bg-[#7772F1] text-white"
					: "bg-white text-[#7772F1]"
					}`}
			>
				{right}
			</button>
		</div >
	)
}
