import { toast } from 'react-toastify'

const Navbar = () => {
  const handleNewTicket = () => {
    toast.info("New Ticket feature coming soon!")
  }

  return (
    <nav className="bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            CS — Ticket System
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">FAQ</a>
            <a href="#" className="hover:text-primary">Changelog</a>
            <a href="#" className="hover:text-primary">Blog</a>
            <a href="#" className="hover:text-primary">Download</a>
            <a href="#" className="hover:text-primary">Contact</a>
            <button onClick={handleNewTicket} className="btn btn-primary btn-sm">
              + New Ticket
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar