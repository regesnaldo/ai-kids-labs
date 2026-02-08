"use client";

/**
 * 🧭 HEADER COMPONENT
 * 
 * Componente de navegação principal com botão de Login/Logout.
 * Client Component para usar NextAuth.
 */

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = !!session;

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "0.5px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          AI KIDS LABS
        </Link>

        {/* Navegacao */}
        <nav
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Link href="/kids" className="nav-link">Kids</Link>
          <Link href="/jovens" className="nav-link">Jovens</Link>
          <Link href="/adultos" className="nav-link">Adultos</Link>
        </nav>

        {/* Botão Entrar/Sair */}
        {isLoading ? (
          <div
            style={{
              padding: "10px 24px",
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "14px",
            }}
          >
            Carregando...
          </div>
        ) : isAuthenticated ? (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "14px",
                maxWidth: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {session.user?.name || session.user?.email}
            </span>
            <button
              onClick={handleLogout}
              className="btn-sair"
              style={{
                padding: "10px 24px",
                borderRadius: "8px",
                border: "1px solid rgba(239, 68, 68, 0.5)",
                background: "rgba(239, 68, 68, 0.1)",
                color: "#ef4444",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Sair
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn-entrar"
            style={{
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
