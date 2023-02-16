import { Input } from '@material-tailwind/react'
import React from 'react'

const CustomInput = ({
  type,
  id,
  label,
  name,
  onChange,
  value,
  error,
  onBlur,
  touched,
}) => {
  return (
    <div className="col-span-6">
      <Input
        type={type}
        id={id}
        name={name}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoComplete="off"
        autoCorrect="off"
        label={label}
      />
      {touched && error && (
        <span className="text-red-500 py-5 my-12">{error}</span>
      )}
    </div>
  )
}

export default CustomInput
