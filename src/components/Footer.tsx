import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-navy-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-navy-300 sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="text-navy-100">Otiz Labs</span>
        </div>
        <div>© {new Date().getFullYear()} Otiz Labs. All rights reserved.</div>
      </div>
    </footer>
  );
}
