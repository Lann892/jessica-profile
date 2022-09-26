import React from "react";

export const App = () => {
  const mystyle = {
    display: "flex",
    align: "center",
    gap: "10px",
  };

  return (
    <div className="profile-card">
      <figure className="profile-card_img">
        {
          <img
            src="https://pbs.twimg.com/profile_images/1228433314274369536/bW3Zk10p_400x400.jpg"
            alt="..."
          ></img>
        }
      </figure>

      <div className="profile-card_desc">
        <h1>Jessica Vega Ortega</h1>
        <div>Lic. Ciencias Políticas y Administración Pública</div>
        <div style={mystyle} className="map">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="11" r="3"></circle>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
          <span>Oaxaca, México</span>
        </div>
      </div>

      <div className="profile-card_info">
        <div>
          <div>581</div>
          <div>Followers</div>
        </div>
        <div>
          <div>50</div>
          <div>References</div>
        </div>
        <div>
          <div>105</div>
          <div>Works</div>
        </div>
      </div>

      <div className="profile-card_social">
        <a
          href="https://www.facebook.com/jessica.vega.10297"
          rel="noopener noreferrer"
          target={"_blank"}
          className="facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
          </svg>
        </a>
        <a
          href="https://twitter.com/kvegajessi?lang=es"
          target={"_blank"}
          rel="noopener noreferrer"
          className="twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-twitter"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/jessi.kvega/"
          rel="noopener noreferrer"
          target={"_blank"}
          className="instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="4" y="4" width="16" height="16" rx="4"></rect>
            <circle cx="12" cy="12" r="3"></circle>
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
          </svg>
        </a>
      </div>

      <div className="profile-card_actions">
        <button>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <a href="mailto:jesyian_87@hotmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <span>Message Me</span>
        </button>
      </div>
    </div>
  );
};
