import bannerBg from '../../assets/vector1.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="pt-20 pb-5">
            <div className="">
                {/* Banner Content */}
                <div className="flex items-center gap-6 md:flex-row flex-col">

                    {/* Left Card - In Progress (Purple Gradient) */}
                    <div style={{
                        backgroundImage: `linear-gradient(45deg, #2500ff, #6e00ffa8), url(${bannerBg})`,
                        backgroundBlendMode: "overlay"
                    }}
                        className=" text-white rounded-2xl shadow-xl p-8 w-64 text-center transform hover:scale-105 transition-transform flex-2/4">
                        <h2 className="text-2xl font-bold mb-2">In Progress</h2>
                        <div className="text-6xl font-bold">{inProgressCount}</div>
                    </div>

                    {/* Right Card - Resolved (Green Gradient) */}
                    <div style={{
                        background: `url(${bannerBg}), linear-gradient(45deg, #00ff40a3, #12b37c)`,
                        backgroundBlendMode: "overlay"
                    }}
                    className="text-white rounded-2xl shadow-xl p-8 w-64 text-center transform hover:scale-105 transition-transform flex-2/4">
                        <h2 className="text-2xl font-bold mb-2">Resolved</h2>
                        <div className="text-6xl font-bold">{resolvedCount}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;