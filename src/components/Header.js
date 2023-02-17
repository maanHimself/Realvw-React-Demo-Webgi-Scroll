export default function Header() {
  return (
    <section className="header">
      <nav className="navbar-nav">
        <h1 className="header-brand">
          <a href="https://realvwr.com">
            <img src="/images/realvwr.webp" alt="realvwr logo" />
            <br />
            www.realvwr.com
          </a>
        </h1>
        <ul className="header-menu"></ul>
      </nav>
    </section>
  );
}
