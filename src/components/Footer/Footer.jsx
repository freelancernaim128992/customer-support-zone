const Footer = () => {
  return (
    <footer className="bg-black text-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">CS — Ticket System</h3>
            <p className="text-sm dark:text-gray-300">
             Empowering businesses to deliver exceptional customer support through smart ticketing solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">Our Mission</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">Contact Saled</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition">Products & Services</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">Customer Stories</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">Join Us</a></li>
            </ul>
          </div>
              {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition">@CS — Ticket System</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">@CS — Ticket System</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">@CS — Ticket System</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition">support@cst.com</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          © 2026 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer