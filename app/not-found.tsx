import Link from 'next/link'
import { Search, Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-muted-foreground/20 rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-muted/40 border border-border/50 rounded-full p-6 w-20 h-20 flex items-center justify-center">
              <Search className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2">404</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-muted-foreground/40 to-muted-foreground/20 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Page not found
          </h2>
          <p className="text-base text-muted-foreground">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    </div>
  )
}
