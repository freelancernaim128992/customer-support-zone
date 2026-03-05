import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import TicketCard from './components/TicketCard/TicketCard'
import TaskStatus from './components/TaskStatus/TaskStatus'
import Footer from './components/Footer/Footer'
import ticketsData from './data/tickets.json'
import './App.css'

function App() {
  const [tickets, setTickets] = useState(ticketsData.tickets)
  const [taskStatus, setTaskStatus] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)

  const handleAddToTask = (ticket) => {
    if (!taskStatus.find(t => t.id === ticket.id)) {
      setTaskStatus([...taskStatus, ticket])
      setInProgressCount(inProgressCount + 1)
      toast.success(`✅ Ticket #${ticket.id} added to Task Status!`, {
        position: "top-right",
        autoClose: 2000,
      })
    } else {
      toast.info(`ℹ️ Ticket #${ticket.id} is already in Task Status`, {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }

  const handleCompleteTask = (ticket) => {
    // Remove from task status
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id))
    
    // Add to resolved tickets
    setResolvedTickets([...resolvedTickets, ticket])
    
    // Remove from main tickets list
    setTickets(tickets.filter(t => t.id !== ticket.id))
    
    // Update counts
    setInProgressCount(inProgressCount - 1)
    setResolvedCount(resolvedCount + 1)
    
    toast.success(`🎉 Ticket #${ticket.id} marked as Resolved!`, {
      position: "top-right",
      autoClose: 2000,
    })
  }

  return (
    <div className="w-11/12 mx-auto bg-base-200">
      <Navbar />
      
      <Banner 
        inProgressCount={inProgressCount} 
        resolvedCount={resolvedCount} 
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
                  onAddToTask={handleAddToTask}
                />
              ))}
            </div>
          </div>
          
          {/* Right Side - Task Status */}
          <div className="lg:col-span-1">
            <TaskStatus 
              tasks={taskStatus} 
              onComplete={handleCompleteTask}
              resolvedTickets={resolvedTickets}
            />
          </div>
        </div>
      </main>
      
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App;