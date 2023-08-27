const Header = () => {
  return (
    <div className="Header flex justify-between text-text px-2 py-2">
      <img
        className="h-12 w-12"
        src="/images/Andy_Luu_Logo_192x192.png"
        alt="Andy Luu Logo"
      />
      <a
        className="Header-ResumeButton flex text-lightText bg-primary px-8 py-3 rounded-full"
        href="https://drive.google.com/file/d/14jQkMz4zJ9IJBpXst4hy9C43MgZiOn7r/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
