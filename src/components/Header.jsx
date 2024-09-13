const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <a href="/">
        <h1 className="font-medium">
          Free<span className="text-blue-400 bold">Scribe</span>
        </h1>
      </a>
      <a href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-blue-400 text-sm specialBtn">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </header>
  );
};

export default Header;
