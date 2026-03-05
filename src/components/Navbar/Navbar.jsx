import { useState } from 'react'
import { toast } from 'react-toastify'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNewTicket = () => {
    toast.info("📝 New Ticket feature coming soon!", {
      position: "top-right",
      autoClose: 2000,
    })
  }

  return (
    <nav className="bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CS — Ticket System
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
            <a href="#changelog" className="hover:text-primary transition">Changelog</a>
            <a href="#blog" className="hover:text-primary transition">Blog</a>
            <a href="#download" className="hover:text-primary transition">Download</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
            <button 
              onClick={handleNewTicket}
              className="btn btn-primary btn-sm"
            >
              + New Ticket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden btn btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#home" className="block py-2 hover:text-primary transition">Home</a>
            <a href="#faq" className="block py-2 hover:text-primary transition">FAQ</a>
            <a href="#changelog" className="block py-2 hover:text-primary transition">Changelog</a>
            <a href="#blog" className="block py-2 hover:text-primary transition">Blog</a>
            <a href="#download" className="block py-2 hover:text-primary transition">Download</a>
            <a href="#contact" className="block py-2 hover:text-primary transition">Contact</a>
            <button 
              onClick={handleNewTicket}
              className="btn btn-primary btn-sm w-full"
            >
              + New Ticket
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;