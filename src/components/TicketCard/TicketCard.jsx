const TicketCard = ({ ticket, onAddToTask }) => {
  const priorityColors = {
    HIGH: 'badge-error',
    MEDIUM: 'badge-warning',
    LOW: 'badge-info'
  }

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <h3 className="card-title text-lg">{ticket.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {ticket.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="badge badge-ghost">#{ticket.id}</span>
          <span className={`badge ${priorityColors[ticket.priority]}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="text-sm font-semibold">{ticket.customer}</div>
            <div className="text-xs text-gray-500">{ticket.createdAt}</div>
          </div>
          <button 
            onClick={() => onAddToTask(ticket)}
            className="btn btn-primary btn-sm"
          >
            Add to Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default TicketCard;