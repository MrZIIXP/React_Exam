// components/CustomSwitch.jsx
export const CustomSwitch = ({ checked, onChange, disabled = false }) => {
	return (
		<label className="relative inline-block w-[40px] h-[20px]">
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className="sr-only peer"
			/>
			<div className={`w-full h-full rounded-full transition-all
				${disabled ? 'bg-gray-300' : checked ? 'bg-[#7772F1]' : 'bg-[#B3B7BC]'}`}></div>
			<div className={`absolute left-[2px] top-[2px] w-[16px] h-[16px] rounded-full bg-white transition-all
				${checked ? 'translate-x-[20px]' : 'translate-x-0'}
				peer-disabled:opacity-50`}></div>
		</label>
	)
}
