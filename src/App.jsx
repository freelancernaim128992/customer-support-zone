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

  // TicketCard এ ক্লিক করলে
  const handleCardClick = (clickedTicket) => {
    // 1. TicketCard এর status আপডেট করি (Open → In Progress)
    const updatedTickets = tickets.map(ticket =>
      ticket.id === clickedTicket.id
        ? { ...ticket, status: 'in-progress' }
        : ticket
    )
    setTickets(updatedTickets)

    // 2. TaskStatus এ যোগ করি (কমপ্লিট বাটনের জন্য)
    // কিন্তু চেক করি যে আগে থেকে নেই কিনা
    const alreadyInTask = taskStatus.find(t => t.id === clickedTicket.id)
    if (!alreadyInTask) {
      setTaskStatus([...taskStatus, clickedTicket])
      setInProgressCount(inProgressCount + 1)
      toast.success(`✅ Ticket #${clickedTicket.id} added to Task Status`)
    } else {
      toast.info(`ℹ️ Ticket already in Task Status`)
    }
  }

  // Complete বাটন ক্লিক করলে
  const handleCompleteTask = (ticket) => {
    // 1. TaskStatus থেকে রিমুভ
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id))

    // 2. TicketCard থেকে পুরোপুরি রিমুভ
    setTickets(tickets.filter(t => t.id !== ticket.id))

    // 3. Resolved লিস্টে যোগ
    setResolvedTickets([...resolvedTickets, ticket])

    // 4. কাউন্ট আপডেট
    setInProgressCount(inProgressCount - 1)
    setResolvedCount(resolvedCount + 1)

    toast.success(`🎉 Ticket #${ticket.id} Resolved!`)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

        <main className="px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* বাম পাশে - Ticket Card (status আপডেট হবে, কিন্তু থাকবে) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map(ticket => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onCardClick={handleCardClick}
                  />
                ))}
              </div>
            </div>

            {/* ডান পাশে - Task Status (শুধু Complete বাটন) */}
            <div className="lg:col-span-1">
              <TaskStatus
                tasks={taskStatus}
                onComplete={handleCompleteTask}
                resolvedTickets={resolvedTickets}
              />
            </div>
          </div>
        </main>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
      <Footer />
    </div>
  )
}

export default App;