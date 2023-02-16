import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'

export default function Modal({ handleOpen, open }) {
  return (
    <div className="w-full">
      <Dialog open={open} className="w-full">
        <DialogHeader>
          Welcome <strong className="ml-3">Moware olusola Emmanuel</strong>
        </DialogHeader>
        <DialogBody>
          This software may contain certain limits and flaws, as it is only a
          prototype. We commonly know that a car has many parts on its body and
          even in the body itself. However, the system will only deal with
          problems that are commonly found in the engine part of the car as the
          system is just a prototype, which means the function will be expanded
          through time. The system will also deal with only cars produced from
          the year 2000 till date.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
