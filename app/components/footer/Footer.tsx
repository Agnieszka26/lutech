import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto mb-4 text-center flex flex-col md:flex-row md:justify-between px-24 items-center gap-4">
        <div>LuTech</div>
        <div className='grid'>
          <Link href={"/about"}> O nas </Link>
          <Link href={"/#services"}> Usługi </Link>
          <Link href={"/#random"}>Realizacje</Link>
        </div>
                <div className='grid'>
          <Link href={"/about"}> Polityka prywatności </Link>
          <Link href={"/#services"}> Cookies </Link>
          
        </div>

        <div>ul. Chemiczna 1, <br /> 20-000 Lublin, <br /> Polska</div>
      </div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LuTech. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}

export default Footer