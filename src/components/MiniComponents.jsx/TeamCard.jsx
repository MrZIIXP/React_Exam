export const TeamCard = ({
	name = "Jane Cooper",
	position = "Digital Marketing Manager",
	avatar = "",
	socials = [],
}) => {
	return (
		<div className="w-[260px] h-[416px] relative overflow-hidden group rounded-[4px] bg-white">
			<div className='w-full rounded-md relative'>
				<img
					src={avatar}
					alt={name}
					className="w-full object-cover h-[340px] rounded-md rounded-t-[4px]"
				/>
				<div className='w-full h-full hidden group-hover:flex bg-gradient-to-t p-[10px] gap-[5px] from-black rounded-md absolute top-0 left-0 items-end justify-end'>
					{socials.map((social, idx) => (
						<a href={social.link} key={idx}>
							<img src={social.img} alt="" className='w-[32px]'/>
						</a>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center justify-center h-[70px] px-[16px] text-center bg-white">
				<h4 className="text-[16px] leading-[24px] font-bold text-[#1E212C]">
					{name}
				</h4>
				<p className="text-[14px] leading-[21px] text-[#787A80]">{position}</p>
			</div>
		</div>
	)
}
