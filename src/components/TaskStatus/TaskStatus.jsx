const TaskStatus = ({ tasks, onComplete, resolvedTickets }) => {
  return (
    <div className="bg-base-100 rounded-xl shadow-xl p-6 sticky top-20">
      <h2 className="text-2xl font-bold mb-6">Task Status</h2>

      {/* In Progress Tasks - শুধু টাইটেল + Complete বাটন */}
      <div className="space-y-4 mb-8">
        <h3 className="font-semibold text-lg border-b pb-2">
          In Progress ({tasks.length})
        </h3>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            Click on any ticket to add here
          </p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="bg-base-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{task.title}</h4>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onComplete(task)
                  }}
                  className="btn btn-success btn-xs"
                >
                  ✓ Complete
                </button>
              </div>
              <span className="text-sm text-gray-600">#{task.id}</span>
            </div>
          ))
        )}
      </div>

      {/* Resolved Tasks - শুধু টাইটেল */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg border-b pb-2">
          Resolved ({resolvedTickets.length})
        </h3>
        {resolvedTickets.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No resolved tasks yet
          </p>
        ) : (
          resolvedTickets.map(ticket => (
            <div key={ticket.id} className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold">{ticket.title}</h4>
              <span className="text-sm text-gray-600">#{ticket.id}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskStatus;