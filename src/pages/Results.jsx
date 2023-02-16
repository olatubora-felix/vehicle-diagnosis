import { Button } from '@material-tailwind/react'
import React from 'react'

import Navbar from '../components/layouts/Navbar'
import { useNavigate } from 'react-router-dom'

const Results = () => {
  const get = localStorage.getItem('test')
  const list = JSON.parse(get)
  const navigate = useNavigate()

  const removeItems = () => {
    localStorage.removeItem('test')
    navigate('/dashboard')
  }

  return (
    <>
      <Navbar login={true} />
      <main className="mx-auto container py-20 px-4">
        <h2 className="font-bold text-2xl text-blue-500">
          Results of possible Solution to your car
        </h2>
        <ul className="">
          {list.question1 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question1}
            </li>
          )}
          {list.question3 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question3}
            </li>
          )}
          {list.question4 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question4}
            </li>
          )}
          {list.question5 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question5}
            </li>
          )}
          {list.question6 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question6}
            </li>
          )}
          {list.question7 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question7}
            </li>
          )}
          {list.question8 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question8}
            </li>
          )}
          {list.question9 && (
            <li className="my-3 list-decimal font-semibold">
              {list.question9}
            </li>
          )}
          {list.question10 && (
            <li className="my-3 list-decimal font-semibold">
              {' '}
              {list.question10}
            </li>
          )}
        </ul>

        <h1 className="font-bold text-2xl text-red-500">
          Kindly Visit the workshop for repair
        </h1>
        <Button type="submit" onClick={removeItems} className="my-6">
          Click here to run another diagnosis
        </Button>
      </main>
    </>
  )
}

export default Results
