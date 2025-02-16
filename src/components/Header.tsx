const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-3">
      <nav className="flex items-center justify-center">
        <a href="/" className="flex items-center gap-2">
          <div className="w-[40px] h-[40px]">
            <img className="w-full h-full" src="/on-hand-dice.png" alt="on-hand-dice" />
          </div>
          <span className="block font-bold text-lg">tenzies.</span>
        </a>
      </nav>
    </header>
  )
}

export default Header