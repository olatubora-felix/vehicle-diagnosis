import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { Button, Switch } from '@material-tailwind/react'
import { lists } from '../data/db'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layouts/Navbar'

const Dashboard = () => {
  const Navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [test, setTest] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
  })

  const handleChange = (e) => {
    return setTest((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOpen = () => setOpen(!open)
  useEffect(() => {
    setOpen(true)
  }, [])
  const handleClick = () => {
    if (
      test.question1 !== '' ||
      test.question2 !== '' ||
      test.question3 !== '' ||
      test.question4 !== '' ||
      test.question5 !== '' ||
      test.question6 !== '' ||
      test.question7 !== '' ||
      test.question8 !== '' ||
      test.question9 !== '' ||
      test.question10 !== ''
    ) {
      localStorage.setItem('test', JSON.stringify(test))
      Navigate('/result')
    }
  }
  return (
    <>
      <Navbar login={true} />
      <main className="lg:py-20 py-6">
        <div className="container mx-auto py-6 px-4">
          <h1 className="font-bold lg:text-2xl text-base">
            Development of Vehicle Diagnosis System
          </h1>
          <p></p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {lists.map((list) => (
              <div className="flex items-center" key={list.name}>
                <div className="mr-4">
                  <p className="font-bold my-4">{list.title}</p>
                  <span className="">{list.content}</span>
                </div>
                <Switch
                  value={list.value}
                  onChange={handleChange}
                  name={list.name}
                  id={list.name}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center my-6">
            <Button type="submit" onClick={handleClick}>
              Submit
            </Button>
          </div>
        </div>
        <Modal open={open} handleOpen={handleOpen} />
      </main>
    </>
  )
}

export default Dashboard
