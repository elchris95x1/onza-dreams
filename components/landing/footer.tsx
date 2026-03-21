import Link from 'next/link';
import { Target } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="flex bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">Onza Dreams</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The smartest AI short video generator and scheduler for modern creators.
            </p>
          </div>
          
          {/* Product links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-purple-500 transition-colors">AI Video Generator</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Auto Scheduler</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          {/* Resources links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">API Docs</Link></li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Onza Dreams. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-foreground transition-colors">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
