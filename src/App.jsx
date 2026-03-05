import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import TicketCard from './components/TicketCard/TicketCard'
import TaskStatus from './components/TaskStatus/TaskStatus'
import ticketsData from './data/tickets.json'
import './App.css'

function App() {
  const [tickets, setTickets] = useState(ticketsData.tickets)
  const [inProgressCount, setInProgressCount] = useState(0)


  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      
      <Banner 
        inProgressCount={inProgressCount}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map(ticket => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket}
                />
              ))}
            </div>
          </div>
          
          {/* Right Side - Task Status */}
          <div className="lg:col-span-1">
            <TaskStatus
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App