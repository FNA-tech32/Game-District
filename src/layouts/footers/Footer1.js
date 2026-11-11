import Link from "next/link";

const Footer1 = ({ className }) => {
  return (
    <footer
      className={`${
        className ? className : "footer-area footer-default black-bg footer-map"
      }`}
    >
      <div className="container">
        <div className="footer-widget pt-100 pb-35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="logo mb-35">
                  <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif' }}>
                      Game <span style={{ color: '#fd4a18' }}>District</span>
                    </span>
                  </Link>
                </div>
                <div className="about-content">
                  <ul>
                    <li className="mb-10">
                      <i className="far fa-envelope" />
                      <span>
                        <a href="mailto:info@gamedistrict.com">info@gamedistrict.com</a>
                      </span>
                    </li>
                    <li className="mb-10">
                      <i className="far fa-headset" />
                      <span>
                        <a href="mailto:support@gamedistrict.com">support@gamedistrict.com</a> <small style={{ color: '#999' }}>(Alt/Support)</small>
                      </span>
                    </li>
                    <li className="mb-10">
                      <i className="far fa-phone" />
                      <span>
                        <a href="tel:+18005554263">+1 (800) 555-4263</a> <small style={{ color: '#999' }}>(Toll-Free)</small>
                      </span>
                    </li>
                    <li className="mb-10">
                      <i className="fab fa-whatsapp" />
                      <span>
                        <a href="https://wa.me/447863050300" target="_blank" rel="noopener noreferrer">+44 7863 050300</a> <small style={{ color: '#999' }}>(Direct/Alt)</small>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      <span style={{ color: '#aaa', fontSize: '14px' }}>
                        San Francisco, CA &amp; London, UK
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title text-underline">Core Services</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <Link href="/service">AI Automation Solutions</Link>
                  </li>
                  <li>
                    <Link href="/service">AI Healthcare Solutions</Link>
                  </li>
                  <li>
                    <Link href="/service">Custom AI Platforms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title text-underline">Additional Services</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <Link href="/service">ServiceNow Implementation</Link>
                  </li>
                  <li>
                    <Link href="/service">Cloud Infrastructure</Link>
                  </li>
                  <li>
                    <Link href="/service">CMS Development</Link>
                  </li>
                  <li>
                    <Link href="/service">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/service">IT Consulting</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title text-underline">Quick Links</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Link href="/learning-hub">Learning Hub</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-8">
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} Game District. All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="social-link float-md-right float-sm-none">
                <li>
                  <a href="https://www.linkedin.com/company/gamedistrict/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
