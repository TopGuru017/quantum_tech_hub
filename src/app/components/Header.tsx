import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { SITE_LOGO } from "../assets/images";

// ── Types ──────────────────────────────────────────────────────────────────────
type SubItem = { label: string; to: string };
type PanelSection = { heading: string; items: SubItem[] };
type NavItem = {
  label: string;
  to: string;
  panel?: PanelSection[];
};

// ── Nav config ─────────────────────────────────────────────────────────────────
const navItems: NavItem[] = [
  {
    label: "What we do",
    to: "/what-we-do",
    panel: [
      {
        heading: "Our Company",
        items: [{ label: "Leadership", to: "/about/leadership" }],
      },
    ],
  },
  {
    label: "Who we are",
    to: "/about",
    panel: [
      {
        heading: "Our offices",
        items: [
          { label: "USA", to: "/about/usa" },
          { label: "Germany", to: "/about/germany" },
          { label: "Finland", to: "/about/finland" },
          { label: "Saudi Arabia", to: "/about/saudi-arabia" },
          { label: "Australia", to: "/about/australia" },
          { label: "India", to: "/about/india" },
        ],
      },
    ],
  },
  {
    label: "Industry Authority",
    to: "/industry",
    panel: [
      {
        heading: "Expertise Areas",
        items: [
          { label: "Telecommunication & Media", to: "/industry/telecom" },
          { label: "Energy & Utilities", to: "/industry/energy" },
          { label: "Software & Technology", to: "/industry/software" },
          { label: "Smart Manufacturing", to: "/industry/manufacturing" },
          { label: "Healthcare", to: "/industry/healthcare" },
        ],
      },
    ],
  },
  {
    label: "Phygital Convergence",
    to: "/digital-fusion",
    panel: [
      {
        heading: "Service Lines",
        items: [
          { label: "Artificial Intelligence", to: "/digital-fusion/ai" },
          { label: "Cyber Security", to: "/digital-fusion/cyber-security" },
          { label: "Cloud Transformation", to: "/digital-fusion/transformation-consulting" },
          { label: "Data Integrity", to: "/digital-fusion/cloud-strategy" },

        ],
      },
    ],
  },
  {
    label: "Value Stream",
    to: "/global-value-engine",
    panel: [
      {
        heading: "Value Stream",
        items: [
          { label: "Global Value Engine", to: "/global-value-engine" },
          { label: "Transformation Capital", to: "/transformation-capital" },
        ],
      },
    ],
  },
];

// ── Mega-drop Panel ────────────────────────────────────────────────────────────
// Renders below the header, slides in from the right.
function DropPanel({
  activeItem,
  headerHeight,
  onPanelEnter,
  onPanelLeave,
  onClose,
}: {
  activeItem: NavItem | null;
  headerHeight: number;
  onPanelEnter: () => void;
  onPanelLeave: () => void;
  onClose: () => void;
}) {
  const open = activeItem !== null && !!activeItem.panel;

  return (
    <>
      {/* Backdrop — sits below the header */}
      <div
        className="fixed left-0 right-0 bottom-0 z-30 transition-opacity duration-400"
        style={{
          top: headerHeight,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          background: "rgba(0,0,0,0.12)",
        }}
        onClick={onClose}
      />

      {/* Panel — left edge at screen center (50%), slides in from right, starts below header */}
      <div
        className="fixed left-1/2 bottom-0 z-40 w-full md:w-1/2 bg-white overflow-hidden"
        style={{
          top: headerHeight,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.42s cubic-bezier(0.77,0,0.175,1)",
          boxShadow: open ? "-4px 0 48px rgba(0,0,0,0.13)" : "none",
        }}
        onMouseEnter={onPanelEnter}
        onMouseLeave={onPanelLeave}
      >
        <div className="overflow-y-auto h-full px-10 py-10">
          {activeItem?.panel?.map((section, si) => (
            <div key={si} className={si > 0 ? "mt-10 pt-10 border-t border-gray-100" : ""}>
              <p className="text-gray-400 text-[10px] tracking-[0.28em] uppercase mb-6">
                {section.heading}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                {section.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className="group flex items-center justify-between py-3.5 border-b border-gray-100 hover:border-teal-300 text-left transition-colors duration-200"
                  >
                    <span className="text-gray-700 group-hover:text-teal-700 text-sm transition-colors duration-200">
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState<NavItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(96);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Measure actual header height whenever it might change
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [scrolled, mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close panel on route change
  useEffect(() => {
    setActivePanel(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // ── Hover logic with debounce to prevent flickering ──
  const clearCloseTimer = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };
  const scheduleClose = (delay = 120) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActivePanel(null), delay);
  };

  const handleNavEnter = (item: NavItem) => {
    clearCloseTimer();
    if (item.panel) setActivePanel(item);
  };

  const handleNavLeave = () => scheduleClose(130);
  const handlePanelEnter = () => clearCloseTimer();
  const handlePanelLeave = () => scheduleClose(80);

  const closePanel = () => {
    clearCloseTimer();
    setActivePanel(null);
  };

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");
  // Transparent header on every page: subtle dark gradient, light text/logo
  const headerBg = "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 70%, transparent 100%)";
  const lightStyle = true; // always light text on transparent header

  return (
    <>
      {/* Header — z-50, transparent on all pages */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: headerBg,
          backdropFilter: "none",
          borderBottom: "none",
          boxShadow: "none",
        }}
      >
        <div className="flex items-center justify-between px-8 md:px-14 py-3.5">
          {/* Logo — light for transparent dark header */}
          <Link to="/" onClick={closePanel} className="shrink-0 z-10 cursor-pointer">
            <img
              src={SITE_LOGO}
              alt="Quantum Tech Hub"
              className="h-14 w-auto"
              style={lightStyle ? { filter: "brightness(0) invert(1)" } : {}}
            />
          </Link>

          {/* Desktop nav — hover-triggered */}
          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => {
              const active =
                isActive(item.to) ||
                (item.panel?.some((s) => s.items.some((sub) => isActive(sub.to))) ?? false);
              const isPanelOpen = activePanel?.label === item.label;

              const baseColor = isPanelOpen || active ? "#5eead4" : "#ffffff";
              const underlineColor = "#5eead4";

              if (item.panel) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closePanel}
                    onMouseEnter={() => handleNavEnter(item)}
                    onMouseLeave={handleNavLeave}
                    className="relative text-sm font-normal tracking-wide transition-colors duration-200 cursor-pointer"
                    style={{ color: baseColor }}
                  >
                    {item.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        width: isPanelOpen || active ? "100%" : "0%",
                        background: underlineColor,
                      }}
                    />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closePanel}
                  className="relative group text-sm font-normal tracking-wide transition-colors duration-200 cursor-pointer"
                  style={{ color: baseColor }}
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{
                      width: active ? "100%" : "0%",
                      background: underlineColor,
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 z-10 transition-colors duration-300"
            style={{ color: lightStyle ? "#ffffff" : "#374151" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  background: lightStyle ? "#ffffff" : "#374151",
                  transform: mobileOpen ? "rotate(45deg) translate(4px,4px)" : "none",
                }}
              />
              <span
                className="block h-px w-4 transition-all duration-300"
                style={{
                  background: lightStyle ? "#ffffff" : "#374151",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  background: lightStyle ? "#ffffff" : "#374151",
                  transform: mobileOpen ? "rotate(-45deg) translate(4px,-4px)" : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile accordion menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: mobileOpen ? "100vh" : "0",
            background: "rgba(255,255,255,0.99)",
            borderTop: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div className="px-6 pb-6 pt-2 space-y-1">
            {navItems.map((item) =>
              item.panel ? (
                <div key={item.to}>
                  <Link
                    to={item.to}
                    className="block py-3 text-gray-700 text-sm border-b border-gray-100 cursor-pointer hover:text-teal-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4 pb-1">
                    {item.panel.flatMap((s) => s.items).map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="block py-2 text-gray-500 text-xs border-b border-gray-50 cursor-pointer hover:text-teal-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block py-3 text-gray-700 text-sm border-b border-gray-100 cursor-pointer hover:text-teal-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </header>

      {/* Mega drop panel — rendered below header */}
      <DropPanel
        activeItem={activePanel}
        headerHeight={headerHeight}
        onPanelEnter={handlePanelEnter}
        onPanelLeave={handlePanelLeave}
        onClose={closePanel}
      />
    </>
  );
}