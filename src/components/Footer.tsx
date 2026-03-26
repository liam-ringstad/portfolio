import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-24 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="font-semibold text-2xl tracking-tight text-foreground">
            Liam Ringstad
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Open to engineering conversations at companies building the future of data platforms and autonomous systems.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-6">
          <div className="flex gap-4">
            <Link
              href="https://github.com/liam-ringstad"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <FaGithub className="size-5" />
            </Link>
            <Link
              href="https://twitter.com/tropix_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <FaXTwitter className="size-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/liam-ringstad"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <FaLinkedin className="size-5" />
            </Link>
            <Link
              href="mailto:liam@tropix.ai"
              className="size-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Mail className="size-5" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Liam Ringstad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
