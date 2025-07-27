import React, { useEffect, useState } from "react"

export default function ButtonBasic({ onClick, outline, size, mode, text, disabled, arrow = false, type = "button" }) {
	const [style, setStyle] = useState("")

	useEffect(() => {
		if (disabled) {
			setStyle("bg-[#7772F1] text-white leading-[36px] px-[24px] opacity-50 cursor-not-allowed")
			return
		}

		let newStyle = ""

		if (mode == "light") {
			if (size >= 1024) {
				newStyle = outline
					? "border-2 border-[#7772F1] flex items-center gap-[10px] text-[#7772F1] leading-[52px] rounded-lg px-[40px] active:text-white active:bg-[#504AED]"
					: "rounded-lg bg-[#7772F1] border-2 flex items-center gap-[10px] border-[#7772F1] active:border-[#504AED] text-white leading-[52px] px-[40px] active:bg-[#504AED]"
			} else if (size > 510 && size < 1024) {
				newStyle = outline
					? "border-2 border-[#7772F1] flex items-center gap-[10px] text-[#7772F1] rounded-lg px-[32px] leading-[44px] active:text-white active:bg-[#504AED]"
					: "rounded-lg bg-[#7772F1] border-2 flex items-center gap-[10px] border-[#7772F1] active:border-[#504AED] text-white leading-[44px] px-[32px] active:bg-[#504AED]"
			} else {
				newStyle = outline
					? "border-2 border-[#7772F1] flex items-center gap-[10px] text-[#7772F1] rounded-lg leading-[36px] px-[24px] active:text-white active:bg-[#504AED]"
					: "rounded-lg bg-[#7772F1] border-2 flex items-center gap-[10px] border-[#7772F1] active:border-[#504AED] text-white leading-[36px] px-[24px] active:bg-[#504AED]"
			}
		}

		if (mode == "dark") {
			if (size >= 1024) {
				newStyle = outline
					? "border-2 border-[#424551] text-[#424551] leading-[52px] rounded-lg px-[40px] active:text-white active:bg-[#1E212C]"
					: "rounded-lg bg-[#424551] text-white leading-[52px] px-[40px] active:bg-[#1E212C]"
			} else if (size > 510 && size < 1024) {
				newStyle = outline
					? "border-2 border-[#1E212C] text-[#424551] rounded-lg px-[32px] leading-[44px] active:text-white active:bg-[#1E212C]"
					: "rounded-lg bg-[#424551] text-white leading-[44px] px-[32px] active:bg-[#1E212C]"
			} else {
				newStyle = outline
					? "border-2 border-[#1E212C] text-[#424551] rounded-lg leading-[36px] px-[24px] active:text-white active:bg-[#1E212C]"
					: "rounded-lg bg-[#424551] text-white leading-[36px] px-[24px] active:bg-[#1E212C]"
			}
		}

		if (mode == "secondary") {
			if (size >= 1024) {
				newStyle = outline
					? "border-2 border-[#E5E8ED] rounded-lg text-white px-[40px] leading-[52px] active:text-[#424551] active:bg-[#D7DADD]"
					: "rounded-lg bg-[#E5E8ED] text-[#424551] px-[40px] leading-[52px] active:bg-[#D7DADD]"
			} else if (size > 510 && size < 1024) {
				newStyle = outline
					? "border-2 border-[#E5E8ED] rounded-lg text-white px-[32px] leading-[44px] active:text-[#424551] active:bg-[#D7DADD]"
					: "rounded-lg bg-[#E5E8ED] text-[#424551] px-[32px] leading-[44px] active:bg-[#D7DADD]"
			} else {
				newStyle = outline
					? "border-2 border-[#E5E8ED] rounded-lg text-white px-[24px] leading-[36px] active:text-[#424551] active:bg-[#D7DADD]"
					: "rounded-lg bg-[#E5E8ED] text-[#424551] px-[24px] leading-[36px] active:bg-[#D7DADD]"
			}
		}


		setStyle(newStyle)
	}, [size, mode, outline, disabled, arrow])

	return <button className={style} type={type} onClick={onClick}>{text} {arrow && (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={18} className='cursor-pointer' fill="none"><path d="M4 12h16M14 6l6 6-6 6" stroke={"white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}</button>
}
