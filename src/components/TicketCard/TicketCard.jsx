const TicketCard = ({ ticket, onAddToTask }) => {
  const priorityColors = {
    HIGH: 'badge-error',
    MEDIUM: 'badge-warning',
    LOW: 'badge-info'
  }
  const statusColors = {
    open: 'badge-primary',
    'in-progress': 'badge-warning',
    resolved: 'badge-success'
  }

  return (
    <div 
      onClick={() => onAddToTask(ticket)}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="card-body">
        <div className="flex justify-between items-start gap-2">
          <h3 className="card-title text-lg flex-1">{ticket.title}</h3>
          <span className={`badge ${statusColors[ticket.status]} badge-sm`}>
            {ticket.status === 'open' ? 'Open' : 
             ticket.status === 'in-progress' ? 'In Progress' : 'Resolved'}
          </span>
        </div>
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
        </div>
      </div>
    </div>
  )
}

export default TicketCard;