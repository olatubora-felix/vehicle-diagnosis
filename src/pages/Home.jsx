import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layouts/Navbar'

const Home = () => {
  return (
    <>
      <Navbar login={false} />
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Development of Vechecle
              <span className="sm:block"> Diagnosis System </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              This Web App motivated by the need to guide car owners and
              learners of motor mechanics in the maintenance and troubleshooting
              of automobile problems without having to resort for presumptions
              and conjectures.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={'/login'}
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              >
                Get Started
              </Link>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
