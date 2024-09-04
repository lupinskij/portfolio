import { Link } from 'gatsby'
import React from 'react'

function refreshTime() {
  const timeDisplay = document.getElementById('time')
  const dateString = new Date().toLocaleString('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: 'numeric',
  })
  const formattedString = dateString.replace(', ', ' - ')
  timeDisplay.textContent = formattedString
}
setInterval(refreshTime, 1000)

const Header = props => (
  <header className="pr-header absolute top-0 left-0 right-0 pt4 ph4 ph5-l flex justify-between items-center monospace f7 lh-header ttu tracked">
    <Link to="/" className="black">
      Jeff Lupinski
    </Link>
    <div className="dn db-ns">
      Selected work <span className="o-50">[2016—2021]</span>
    </div>
    <ul className="dn db-ns flex">
      <li className="inline-flex relative items-center">
        <a
          href="mailto:hello@jefflupinski.com"
          className="dib relative black trans-link"
        >
          Mail
        </a>
        <i className="inline-flex relative i-arrow o-50">
          <svg viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
              fill="#2c2c2c"
            ></path>
          </svg>
        </i>
      </li>
      <li className="inline-flex relative items-center">
        <a
          href="https://www.linkedin.com/in/jefflupinski"
          className="black trans-link ml3"
          target="_blank"
          rel="noopener noreferrer"
        >
          LI
        </a>
        <i className="inline-flex relative i-arrow o-50">
          <svg viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
              fill="#2c2c2c"
            ></path>
          </svg>
        </i>
      </li>
      <li className="inline-flex relative items-center">
        <a
          href="https://dribbble.com/jefflupinski"
          className="black trans-link ml3"
          target="_blank"
          rel="noopener noreferrer"
        >
          DR
        </a>
        <i className="inline-flex relative i-arrow o-50">
          <svg viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
              fill="#2c2c2c"
            ></path>
          </svg>
        </i>
      </li>
      <li className="inline-flex relative items-center">
        <a
          href="https://github.com/lupinskij"
          className="black trans-link ml3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GH
        </a>
        <i className="inline-flex relative i-arrow o-50">
          <svg viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
              fill="#2c2c2c"
            ></path>
          </svg>
        </i>
      </li>
    </ul>
    <div className="dn db-ns">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className="globe o-50"
        fill="none"
      >
        <path
          fill="#2c2c2c"
          fill-rule="evenodd"
          d="M1.14 11.5c1.04 2.495 4.613 4.333 8.86 4.333 4.248 0 7.82-1.838 8.86-4.333q.201-.475.27-.98a3.8 3.8 0 0 0 0-1.04 4 4 0 0 0-.27-.98C17.82 6.005 14.249 4.167 10 4.167S2.18 6.005 1.14 8.5a4 4 0 0 0-.27.98 3.8 3.8 0 0 0 0 1.04q.069.504.27.98m4.287 2.592a5.8 5.8 0 0 1-1.484-2.159 36 36 0 0 1-1.668-.225c.38.6.962 1.167 1.743 1.665.422.268.895.51 1.409.719m-.788-2.99c.836.081 1.734.145 2.679.186a12.3 12.3 0 0 1 0-2.576c-.945.041-1.842.105-2.679.186a4.4 4.4 0 0 0 0 2.204m.353.934c.777.068 1.6.12 2.458.157.196 1.016.522 1.891.934 2.528-1.527-.42-2.75-1.417-3.392-2.684m3.896 1.713c.466.99.925 1.187 1.112 1.187s.646-.198 1.113-1.187c.222-.488.388-1 .495-1.526a63 63 0 0 1-3.216 0 7 7 0 0 0 .496 1.526M4.992 7.963c.641-1.267 1.865-2.265 3.392-2.684-.412.637-.738 1.511-.933 2.529q-1.23.049-2.46.155m3.896-1.711c-.223.488-.39 1-.496 1.525a63 63 0 0 1 3.216 0 7 7 0 0 0-.495-1.525c-.467-.99-.926-1.188-1.113-1.188s-.646.198-1.112 1.188M8.167 10q0-.692.076-1.322a63 63 0 0 1 3.514 0q.075.63.076 1.322 0 .692-.076 1.322-1.757.05-3.514 0-.076-.66-.076-1.322m4.583 0q0-.666-.067-1.288c.944.041 1.842.105 2.678.186a4.4 4.4 0 0 1 0 2.204c-.836.081-1.734.145-2.679.186q.068-.622.068-1.288m2.258 2.037q-1.227.105-2.458.155c-.196 1.017-.522 1.892-.934 2.529 1.527-.42 2.75-1.417 3.392-2.684m-3.392-6.759c.412.638.738 1.512.933 2.53.859.035 1.682.088 2.46.155-.642-1.267-1.866-2.265-3.393-2.685m4.44 6.655a5.8 5.8 0 0 1-1.484 2.16q.776-.314 1.41-.72c.781-.496 1.364-1.064 1.743-1.664a36 36 0 0 1-1.67.225m.268-.935a31 31 0 0 0 1.835-.275 2.9 2.9 0 0 0 0-1.446 31 31 0 0 0-1.835-.275c.126.66.126 1.337 0 1.997m-.266-2.93q.89.099 1.669.224c-.38-.6-.962-1.166-1.743-1.664a9 9 0 0 0-1.409-.72 5.8 5.8 0 0 1 1.483 2.16M5.427 5.908a9 9 0 0 0-1.409.72c-.782.497-1.365 1.064-1.743 1.664q.78-.126 1.67-.225a5.8 5.8 0 0 1 1.483-2.159m-1.75 3.095c-.663.08-1.278.173-1.835.275a2.9 2.9 0 0 0 0 1.446c.557.102 1.172.194 1.835.275a5.3 5.3 0 0 1 0-1.996"
          clip-rule="evenodd"
        />
      </svg>
      <span>
        Denver_CO <span id="time"></span>
      </span>
    </div>
  </header>
)

export default Header
