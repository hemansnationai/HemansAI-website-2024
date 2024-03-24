import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Talk To an Expert</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Talk To an Expert</DialogTitle>
          <DialogDescription>
            We will reach out to you within 24 Hours.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
