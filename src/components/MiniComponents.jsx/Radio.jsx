export const CustomRadio = ({ label, name, value, checked, onChange, disabled = false }) => {
	return (
		<label className={`flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
			<input
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className="accent-[#7772F1] w-4 h-4"
			/>
			<span className="text-sm text-[#424551]">{label}</span>
		</label>
	)
}
