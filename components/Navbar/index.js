import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images.jpeg'

const Index = () => {
  return (
    <div className='navbar'> 
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link href='/'>
            <Image
              src={logo}
              width={50}
              height={50}
              alt='logo portfolio'
            />
          </Link>
          <span>Huseyin</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Index