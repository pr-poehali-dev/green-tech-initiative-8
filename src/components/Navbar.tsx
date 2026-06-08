import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Code2" className="w-5 h-5 text-violet-400" />
            <span className="text-white font-semibold">WebKwork</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Портфолио
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Тарифы
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Отзывы
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Контакты
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Портфолио
            </a>
            <a
              href="#"
              className="text-sm text-white bg-violet-600 hover:bg-violet-500 px-3.5 py-1.5 rounded-md border border-violet-500 transition-colors"
            >
              Заказать сайт
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}