import React from "react";
import './HolyGrailLayout.css';

const HolyGrailLayout = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h2>Header</h2>
        <p>Header text</p>
      </header>

      <div className="container">
        <aside className="left-side">
          <h2>Left side Text</h2>
          <p>Left side text paragraph</p>
        </aside>

        <main className="main-content">
          <h2>Main Content</h2>
          <p>Main Content text paragraph</p>
        </main>

        <aside className="right-side">
          <h2>Right side Text</h2>
          <p>Right side text paragraph</p>
        </aside>
      </div>

      <footer className="footer">
        <h2>Footer</h2>
        <p>Footer text</p>
      </footer>
    </div>
  );
};

export default HolyGrailLayout;
