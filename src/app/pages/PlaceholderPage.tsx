interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

export function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="text-center max-w-lg">
        {/* Hex decoration */}
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 40 40" className="w-16 h-16 opacity-40">
              <polygon
                points="20,2 37,11 37,29 20,38 3,29 3,11"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Coming Soon
        </p>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-base leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-10 w-16 h-0.5 bg-teal-500 mx-auto" />
      </div>
    </div>
  );
}
