import { useState } from 'react'

export default function CustomInput({
	name,
	formik,
	label,
	placeholder = "",
	width = "full",
	iconTrue = (<><svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		className={`shrink-0 text-green-400`}
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
	</svg></>),
	iconFalse = (<><svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		className={`shrink-0 opacity-50`}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M18 6L6 18"
			stroke="red"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6 6L18 18"
			stroke="red"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg></>),
	mode = "light",
	size = 1024,
	type = "text",
	disabled = false,
	readOnly = false,
}) {
	let [value, setValue] = useState(formik?.values?.[name] || "")
	const error = formik?.errors?.[name]
	const touched = formik?.touched?.[name]
	const isError = touched && error

	const height = size >= 1024 ? "h-[52px]" : size > 510 ? "h-[44px]" : "h-[36px]"

	const plasholderColor = mode == "dark" ? "placeholder:text-gray-500" : "placeholder:text-[#7772F1~]"
	const borderColor = !touched
		? mode == "dark" ? "border-gray-500" : "border-[#7772F1]"
		: isError
			? "border-[#FF4242]"
			: "border-[#03CEA4]"

	const bgColor =
		disabled || readOnly
			? "bg-[#F4F5F6] cursor-not-allowed opacity-70"
			: mode == "dark"
				? "bg-gray-500/30"
				: "bg-white"

	const inputColor = isError ? "text-red-500" : "text-green-500"
	const textColor = mode == "dark" ? "text-white" : "text-[#424551]"
	const labelColor = touched ? isError ? "text-[#FF4242]" : "text-[#424551]" : mode == "dark" ? "text-white" : "text-[#424551]"

	const finalClass = `
    rounded px-[16px] w-${width} ${height} ${touched ? inputColor : textColor} ${bgColor}
    border-2 border-solid ${borderColor} ${plasholderColor}
    focus:outline-none focus:border-[#7772F1] focus:shadow-md focus:shadow-[#7772F1] transition-all
    ${(iconTrue || iconFalse) ? 'pr-[40px]' : ''}
  `

	return (
		<div className="flex flex-col gap-[8px] w-full">
			{label && (
				<label htmlFor={name} className={`text-sm font-medium ${labelColor}`}>
					{label}
				</label>
			)}
			<div className="relative">
				<input
					id={name}
					name={name}
					type={type}
					value={value}
					onChange={(e)=>{formik?.handleChange(e), setValue(e.target.value)}}
					onBlur={formik?.handleBlur}
					placeholder={placeholder}
					disabled={disabled}
					readOnly={readOnly}
					className={finalClass}
				/>
				{(iconTrue || iconFalse) && (
					<div onClick={()=>{isError ? setValue("") : null}} className="absolute right-[12px] top-1/2 -translate-y-1/2">
						{touched ? (isError ? iconFalse : iconTrue) : null}
					</div>
				)}
			</div>
			{touched && error && (
				<p className="text-xs text-[#FF4242] mt-[4px]">{error}</p>
			)}
			{touched && !error && (
				<p className="text-xs text-[#03CEA4] mt-[4px]">Looks good!</p>
			)}
		</div>
	)
}
