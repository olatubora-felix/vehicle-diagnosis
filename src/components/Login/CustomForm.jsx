import { useFormik } from 'formik'
import React, { useContext } from 'react'
import AuthContext from '../../context/authContext'
import CustomInput from '../customInput/CustomInput'
import { useNavigate } from 'react-router-dom'
import { validate } from '../../helper/validate'

const CustomForm = () => {
  const { loginDetails } = useContext(AuthContext)
  const Navigate = useNavigate()

  const handleSubmit = (values) => {
    if (
      values.email === loginDetails.email &&
      values.password === loginDetails.password
    ) {
      return Navigate('/dashboard')
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: handleSubmit,
  })
  return (
    <form
      className="mt-8 grid grid-cols-6 gap-6"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <CustomInput
        label="Email"
        id="email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched}
        onBlur={formik.handleBlur}
      />
      <CustomInput
        label="Password"
        id="password"
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        touched={formik.touched}
        onBlur={formik.handleBlur}
      />

      <div className="col-span-6">
        <button
          type="submit"
          className=" w-full block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Login
        </button>
      </div>
    </form>
  )
}

export default CustomForm
