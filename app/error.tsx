'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, Home, RotateCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-accent/10 border border-accent/30 rounded-full p-6 w-20 h-20 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-accent" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Something went wrong
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-2">
            We encountered an unexpected error
          </p>
          {error.message && (
            <p className="text-sm text-muted-foreground/60 font-mono bg-muted/50 rounded-lg p-3 mt-4 border border-border/50 text-pretty">
              {error.message}
            </p>
          )}
        </div>

        {/* Error Details */}
        <div className="bg-muted/30 border border-border/50 rounded-lg p-6 mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">What can you do?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold min-w-4">•</span>
              <span>Try refreshing the page to see if the problem resolves</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold min-w-4">•</span>
              <span>Return to the homepage and start fresh</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold min-w-4">•</span>
              <span>Contact support if the problem persists</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Try again
          </button>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors duration-200 border border-border"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
        </div>

        {/* Footer Info */}
        {error.digest && (
          <p className="text-xs text-muted-foreground/50 text-center mt-8">
            Error ID: <code className="font-mono">{error.digest}</code>
          </p>
        )}
      </div>
    </div>
  )
}
