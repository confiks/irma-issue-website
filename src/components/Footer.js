import { Component } from 'preact';

export default class Footer extends Component {
  render() {
    return (
      <footer class="nav-footer" id="footer">
        <section class="sitemap">
          <a href="" class="nav-home">
            <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/irmaLogoWhite.png" alt="IRMA Laden" />
          </a>
          <div class="footerSection">
            <a href="en/users">Over</a>
            <a href="en/users">Veelgestelde vragen</a>
          </div>
        </section>
      </footer>
    );
  }
}