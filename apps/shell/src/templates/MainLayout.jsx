function MainLayout({ header, sidebar, children }) {
  return (
    <div className="relative min-h-screen bg-[#f7f5f1] text-[#111827]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f4e7da,#f7f5f1_70%,#f7f5f1_100%)] opacity-80" />
      </div>
      {header}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-340 flex-col gap-6 px-6 pb-6 pt-28">
        <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="sticky top-28 self-start max-h-[calc(100vh-9rem)] overflow-auto">
            {sidebar}
          </aside>
          {children}
        </section>
      </div>
    </div>
  );
}

export default MainLayout;
