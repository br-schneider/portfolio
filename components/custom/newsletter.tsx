'use client'

import { useForm } from '@formspree/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LoaderCircle } from 'lucide-react'
import { Button } from '../tailwind/button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, handleSubmit] = useForm('moqbjylz')
  const router = useRouter()

  useEffect(() => {
    if (state.succeeded) {
      router.push('/thank-you')
    }
  }, [state.succeeded, router])

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <p className="text-sm text-muted-foreground">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <div className="flex gap-3">
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          disabled={state.submitting}
          className="min-w-0 flex-auto appearance-none rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-hidden focus:ring-1 focus:ring-foreground disabled:opacity-60"
        />

        <Button
          type="submit"
          disabled={state.submitting}
          className="flex-none"
        >
          {state.submitting ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            'Join'
          )}
        </Button>
      </div>
    </form>
  )
}
