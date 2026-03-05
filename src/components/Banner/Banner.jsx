const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="pt-20 pb-5">
      <div className="">
        {/* Banner Content */}
        <div className="flex items-center gap-6">
          
          {/* Left Card - In Progress (Purple Gradient) */}
          <div className=" text-white rounded-2xl shadow-xl p-8 w-64 text-center transform hover:scale-105 transition-transform flex-2/4 bg-card-image-left">
            <h2 className="text-2xl font-bold mb-2">In Progress</h2>
            <div className="text-6xl font-bold">{inProgressCount}</div>
          </div>

          {/* Right Card - Resolved (Green Gradient) */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl shadow-xl p-8 w-64 text-center transform hover:scale-105 transition-transform flex-2/4 bg-card-image-right">
            <h2 className="text-2xl font-bold mb-2">Resolved</h2>
            <div className="text-6xl font-bold">{resolvedCount}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner;