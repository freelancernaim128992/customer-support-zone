const TaskStatus = ({ tasks, onComplete, resolvedTickets }) => {
  return (
    <div className="bg-base-100 rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Task Status</h2>
      
      {/* Current Tasks */}
      <div className="space-y-4 mb-8">
        <h3 className="font-semibold text-lg border-b pb-2">In Progress ({tasks.length})</h3>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            Select a ticket to add to Task Status
          </p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="bg-base-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{task.title}</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">#{task.id}</span>
                <button 
                  onClick={() => onComplete(task)}
                  className="btn btn-success btn-xs"
                >
                  ✓ Complete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Resolved Tasks */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg border-b pb-2">Resolved ({resolvedTickets.length})</h3>
        {resolvedTickets.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No resolved tasks yet.
          </p>
        ) : (
          resolvedTickets.map(ticket => (
            <div key={ticket.id} className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold mb-1">{ticket.title}</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">#{ticket.id}</span>
                <span className="badge badge-success badge-sm">Resolved</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskStatus;