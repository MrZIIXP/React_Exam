export const CustomCheckbox = ({ label, checked, onChange,className, disabled = false }) => {
	return (
		<label className={`flex gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className="accent-[#7772F1] w-4 h-4"
			/>
			<span className={className}>{label}</span>
		</label>
	)
}
