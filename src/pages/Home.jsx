import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Languages List
const languages = [
  { name: "HTML", logo: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/909ca2ea-c4e9-43cb-fd21-55147cabf700/public" },
  { name: "CSS", logo: "https://www.bing.com/th/id/OIP.fBJ2R5Y0m_tQXUxdc0icPQHaKd" },
  { name: "JavaScript", logo: "https://www.bing.com/th/id/OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK" },
  { name: "Python", logo: "https://pluspng.com/img-png/python-logo-png-python-logo-png-img-640-480-free-transparent-python-png-900x480.jpg" },
  { name: "Java", logo: "https://www.bing.com/th/id/OIP.utDhNe56dbCfBZc30_8qpwHaHk" },
  { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
  { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg" },
  { name: "Go", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
  { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "Ruby", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
  { name: "Swift", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
  { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Dart", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" },
  { name: "Scala", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" },
  { name: "Perl", logo: "data:image/webp;base64,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" },
  { name: "R", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
  { name: "Shell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" },
  { name: "Lua", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" },
];

export default function Home({ searchQuery }) {

  // Filter search results
  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      
      <h1 className="home-title">Explore Programming Languages</h1>

      <div className="language-grid">

        {filteredLanguages.length === 0 ? (
          <p className="no-result">No Language Found!</p>
        ) : (
          filteredLanguages.map((lang, index) => (
            <Link 
              key={index} 
              to={`/language/${lang.name.toLowerCase()}`} 
              className="language-card"
            >
              <div className="lang-header">
                <img src={lang.logo} alt={lang.name} className="lang-logo" />
                <h3>{lang.name}</h3>
              </div>
            </Link>
          ))
        )}

      </div>

    </div>
  );
}
