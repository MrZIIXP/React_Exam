export const BlogCard = ({
	title,
	category,
	author,
	date,
	excerpt,
	variant = "small",
	onReadMore,
	img,
}) => {
	const isLarge = variant == "large"

	return (
		<div
			className={`w-full ${isLarge
				? "max-w-[600px]"
				: "max-w-[390px]"
				} bg-[#FFFFFF] rounded-[4px] flex flex-col gap-[10px]`}
		>
			<div className={`flex relative items-center ${isLarge ? "gap-[8px]" : ""}`}>
				<img src={img} alt="Нет фото" className={`w-full object-cover rounded-md bg-gray-500 ${isLarge ? "h-[360px]" : "h-[300px]"}`}/>
				{isLarge && (
					<span className="text-[12px] absolute top-[5px] right-[5px] leading-[18px] font-bold bg-green-500 text-white px-[10px] py-[6px] rounded-[2px]">
						Latest post
					</span>
				)}
			</div>

			<div className="text-[14px] flex gap-[10px] items-center leading-[21px] text-[#787A80]">
				{category} <p>|</p> <svg
					width="15"
					height="15"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="shrink-0 text-current"
				>
					<path
						d="M12 6v6l4 2"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
				{date} <p>|</p>
				<svg
					width="15"
					height="15"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="shrink-0 text-current"
				>
					<path
						d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle
						cx="12"
						cy="7"
						r="4"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
				by {author}
			</div>

			<h3
				className={`font-bold text-[#1E212C] ${isLarge ? "text-[24px] leading-[36px]" : "text-[20px] leading-[30px]"
					}`}
			>
				{title}
			</h3>
			<p className="text-[16px] leading-[24px] text-[#424551]">{excerpt}</p>
			<button
				onClick={onReadMore}
				className="text-[#7772F1] hover:underline text-[16px] leading-[24px] font-medium self-start"
			>
				Read more
			</button>
		</div>
	)
}
