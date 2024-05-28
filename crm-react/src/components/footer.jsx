import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 mt-auto">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Customer Relationship Management (CRM). All rights reserved.
      </div>
    </footer>
  )
}
export default Footer;