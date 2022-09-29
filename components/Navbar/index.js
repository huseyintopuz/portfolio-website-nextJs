import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images.jpeg';
import { navList } from "../../data/navList";

const Index = () => {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container ">
          <div className="d-flex align-items-center">
            <Link href='/' >
              <a className='logo'>
                <Image
                  src={logo}
                  width={50}
                  height={50}
                  alt='logo portfolio'
                />
              </a>
            </Link>
            <span className="logo-name">Huseyin</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {
                navList.length && navList.map(item => (
                  <li key={item.id} className="nav-item mx-4">
                    <Link href={item.href}>
                      <a className="nav-link active" aria-current="page">{item.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
            <button type="button" className="btn btn-default">+90 5056652776
              <span>
                <i className="bi bi-telephone-fill"></i>
              </span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg> */}
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Index