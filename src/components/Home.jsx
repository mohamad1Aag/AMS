// src/components/Home.jsx
import './Home.css';

function Home() {
  return (
    <div className="main">
      <header className="header">
        <div className="logo"></div>
        <nav className="nav">
          <a href="#">logo</a>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">AboutUs</a>
          <a href="#">Contact</a>
          <a href="#">Our Business</a>
        </nav>
      </header>

      <div className="content">
        <h3>اهلا بكم في موقع AMS.WEB لتطوير وبرمجة مواقع الويب</h3>
        <div className="main-box">AMS.WEB</div>
        <button className="btn">الذهاب الي صفحة الخدمات</button>
      </div>
    </div>
  );
}

export default Home;
