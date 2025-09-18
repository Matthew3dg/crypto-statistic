export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/20 bg-white/20 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-semibold text-zinc-900">CryptoHub</div>
        <div className="text-zinc-700">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}
