'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarMobileProps {
  links: { href: string; label: string }[];
  langSwitcher: { href: string; label: string; flag: string }[];
}

export default function NavbarMobile({ links, langSwitcher }: NavbarMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full start-0 end-0 bg-white shadow-lg border-t border-[var(--color-border)] z-50">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[var(--color-text)] hover:bg-[var(--color-off-white)] hover:text-[var(--color-primary)] rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-[var(--color-border)]">
              {langSwitcher.map((lang) => (
                <Link
                  key={lang.href}
                  href={lang.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-off-white)] transition-colors"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
