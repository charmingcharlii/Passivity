const Footer = () => {
  return (
    <footer>
      <div class="container container-footer">
        <img
          class="footer-logo"
          src="images/logo.svg"
          alt="The logo of Huddle with a small speech bubble on its left"
        />

        <div class="contact-details">
          <img
            class="icon-location contact-icon"
            src="images/icon-location.svg"
            alt="drop point icon"
          />
          <p class="contact-location">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <img
            class="icon-phone contact-icon"
            src="images/icon-phone.svg"
            alt="phone icon"
          />
          <p class="contact-number">+1-543-123-4567</p>
          <img
            class="icon-email contact-icon"
            src="images/icon-email.svg"
            alt="email icon"
          />
          <p class="contact-email">example@huddle.com</p>
        </div>

        <ul class="footer-list footer-list-1">
          <li><a class="footer-link" href="#">About Us</a></li>
          <li><a class="footer-link" href="#">What We Do</a></li>
          <li><a class="footer-link" href="#">FAQ</a></li>
        </ul>
        <ul class="footer-list footer-list-2">
          <li><a class="footer-link" href="#">Career</a></li>
          <li><a class="footer-link" href="#">Blog</a></li>
          <li><a class="footer-link" href="#">Contact Us</a></li>
        </ul>

        <div class="social-media-icons">
          <img
            class="icon-facebook"
            src="images/icon-facebook.svg"
            alt="facebook icon"
          />
          <img
            class="icon-twitter"
            src="images/icon-twitter.svg"
            alt="twitter icon"
          />
          <img
            class="icon-instagram"
            src="images/icon-instagram.svg"
            alt="instagram icon"
          />
        </div>

        <p class="copyright">
          © Copyright 2018 Huddle. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


