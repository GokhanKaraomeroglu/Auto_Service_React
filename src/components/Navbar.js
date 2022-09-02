import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-danger" href="/">
          Önemli Oto Servisi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link active"
              aria-current="page"
              href="./index.html"
            >
              Ana Sayfa
            </a>
            <a className="nav-link" href="./registration.html">
              Kayıt
            </a>
            <a className="nav-link" href="./invoce.html">
              Fatura
            </a>
            <a className="nav-link" href="./customer.html">
              Müşteri Bilgileri
            </a>
            <a className="nav-link" href="./contact.html">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
