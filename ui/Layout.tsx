import Footer from "@/ui/Footer"
import Nav from "@/ui/Navigation"
import Link from "next/link"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto antialiased">
    
        Source app!
      <Link href="/web1-test">Test redirect/rewrite!</Link>

      <Footer />
    </div>
  )
}

export default Layout
