import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export function Contact() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or want to discuss my skills further? Fill
            out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2">
            <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
            <Input
              type="email"
              placeholder="Email"
              className="max-w-lg flex-1"
            />
            <Textarea
              placeholder="Message"
              name="message"
              id="message"
              rows={3}
              className="max-w-lg resize-none p-4 border border-neutral-400 shadow-sm"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
