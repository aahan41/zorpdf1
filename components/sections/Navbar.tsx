'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  Grid2X2,
  Mail,
  Moon,
  Search,
  Shield,
  Star,
  Sun,
  Wrench,
  Zap,
  Home as HomeIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';

const navLinks = [
  { label: 'Home', href: '/#top', icon: HomeIcon },
  { label: 'Tools', href: '/#tools', icon: Grid2X2 },
  { label: 'Features', href: '/#features', icon: Star },
  { label: 'Zor Remover', href: '/zor-remover', icon: Wrench, badge: 'FREE' },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { user, profile, loading, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', outside);

    return () => {
      document.removeEventListener('mousedown', outside);
    };
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);

    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        router.push(href);
        return;
      }

      const el = document.getElementById(href.slice(2));

      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const name =
    profile?.full_name?.trim() ||
    profile?.mobile ||
    'Public';

  const initial = name.charAt(0).toUpperCase();

  return (
    <header
      className={`site-header ${
        scrolled ? 'site-header-scrolled' : ''
      }`}
    >
      <div className="header-inner">

        {/* Logo */}
        <Link
          href="/"
          className="brand"
          aria-label="ZorPDF Home"
        >
          <span className="brand-mark">
            <Zap size={21} fill="white" />
          </span>

          <span className="brand-copy">
            <strong>
              Zor<span>PDF</span>
            </strong>

            <small>
              All PDF Tools in One Place
            </small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isAnchor = link.href.startsWith('/#');

            return isAnchor ? (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${
                  link.label === 'Home' ? 'active' : ''
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={2}
                />

                <span>{link.label}</span>

                {link.badge && (
                  <em>{link.badge}</em>
                )}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                <Icon
                  size={16}
                  strokeWidth={2}
                />

                <span>{link.label}</span>

                {link.badge && (
                  <em>{link.badge}</em>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div
          className="header-actions"
          ref={menuRef}
        >

          {/* Search */}
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() =>
              document
                .getElementById('tool-search')
                ?.focus()
            }
          >
            <Search size={20} />
          </button>

          {/* Dark Mode */}
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
          >
            {dark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Logged In User */}
          {!loading && user ? (
            <div className="account-wrap">

              <button
                className="account-btn"
                onClick={() =>
                  setMenuOpen((v) => !v)
                }
                aria-expanded={menuOpen}
              >
                <span className="account-avatar">
                  {initial}
                </span>

                <span className="account-name">
                  {profile?.is_admin
                    ? 'SUPER ADMIN'
                    : name}
                </span>

                <ChevronDown size={15} />
              </button>

              {menuOpen && (
                <div className="account-menu">

                  <div className="account-menu-head">
                    <span className="account-avatar small">
                      {initial}
                    </span>

                    <div>
                      <strong>{name}</strong>

                      <small>
                        {profile?.is_admin
                          ? 'Super Admin'
                          : 'Public account'}
                      </small>
                    </div>
                  </div>

                  {profile?.is_admin && (
                    <Link
                      href="/super-admin"
                      onClick={() =>
                        setMenuOpen(false)
                      }
                    >
                      <Shield size={15} />
                      Super Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      void signOut();
                    }}
                  >
                    <span>↪</span>
                    Sign out
                  </button>

                </div>
              )}

            </div>
          ) : (

            /* =========================
               NEW LOGIN / SIGN UP
               ========================= */
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >

              <Link
                href="/login"
                style={{
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Login
              </Link>

              <Link
                href="/signup"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '34px',
                  padding: '0 18px',
                  background: '#2563eb',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Sign up
              </Link>

            </div>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() =>
            setMenuOpen((v) => !v)
          }
          aria-label="Open menu"
        >
          <Grid2X2 size={20} />
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {link.label}

              {link.badge && (
                <em>{link.badge}</em>
              )}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Login
          </Link>

          <Link
            href="/signup"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Sign up
          </Link>

        </div>
      )}

    </header>
  );
}
