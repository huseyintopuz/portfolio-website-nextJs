import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images.jpeg';
import { navList } from "../../data/navList";

const Index = () => {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container ">
          <div className="d-flex align-items-center">
            <Link href='/' >
              <a>
                <Image
                  src={logo}
                  width={50}
                  height={50}
                  alt='logo portfolio'
                />
              </a>
            </Link>
            <span className="logo-name text-white">Huseyin</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {
                navList.length && navList.map(item => (
                  <li key={item.id} className="nav-item mx-2 ">
                    <Link href={item.href}>
                      <a className="nav-link active text-white fw-bold" aria-current="page">{item.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Index