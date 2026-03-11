import Link from 'next/link'
import { AlertTriangle, Home } from 'lucide-react'

export default function InternalServerError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-destructive/10 border border-destructive/30 rounded-full p-6 w-20 h-20 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-destructive" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2">500</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-destructive to-destructive/50 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Internal Server Error
          </h2>
          <p className="text-base text-muted-foreground">
            Something went wrong on our end. Please try again later.
          </p>
        </div>

        {/* Error Details */}
        <div className="bg-muted/30 border border-border/50 rounded-lg p-6 mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">What happened?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our team has been notified of this issue. We're working to fix it as soon as possible.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <span className="w-2 h-2 bg-destructive/50 rounded-full"></span>
              <span>Server Error</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <span className="w-2 h-2 bg-yellow-500/50 rounded-full"></span>
              <span>Try refreshing the page</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Return to homepage
          </Link>
          <a
            href="mailto:support@example.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors duration-200 border border-border"
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  )
}
