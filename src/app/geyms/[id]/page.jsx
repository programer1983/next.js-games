"use client";

import { useParams } from "next/navigation";
import { geymData } from "../../../../data";
import "./../../../../components/Geym/Geym.scss";
import { useTheme } from "../../../../components/Context/ThemeProvider";

export default function Page() {
  const params = useParams();
  const { id } = params;
  const { isDarkMode, toggleTheme } = useTheme();

  const geym = geymData[0]?.results?.find((g) => String(g.slug) === String(id));

  return (
    <section className={`geym ${isDarkMode ? "dark-bg" : ""}`}>
      <div className="container">
        <div className="geym_header-buttons">
          <div
            className={`theme-switcher ${isDarkMode ? "dark" : "light"}`}
            onClick={toggleTheme}
            style={{
              marginRight: "70px",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: `translateX(${isDarkMode ? "0" : "50px"})`,
            }}
          >
            {isDarkMode ? "🌞" : "🌙"}
          </div>
        </div>

        <a href="/" className="geym__button">
          Back To Home
        </a>
        <div className="geym__inner">
          <div className="geym__images">
            <img src={geym.background_image} alt={geym.name} />
          </div>
          <div className="geym__info">
            <h2>{geym.name}</h2>
            <h3>
              Genre: <span>{geym.genres[0]?.name}</span>
            </h3>
            <p>
              Ratings: <span>{geym.ratings_count}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
