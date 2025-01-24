import React from 'react'
import "../style/Footer.css"

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="links">
              <a href="www.google.com" className="link">Github</a>
              <a href="http://" className="link">LinkedIn</a>
              <a href="http://" className="link">Instagram</a>
              <a href="http://" className="link">Twitter</a>
            </div>
            <br /><br />
            <div className="details">
              2005.santhoshsivakumar@gmail.com&nbsp; |&nbsp; +91 80721 13041
            </div>
        </div>
    </>
  )
}

export default Footer
