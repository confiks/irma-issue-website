import { Component } from 'preact';

export default class Navbar extends Component {

  componentDidMount() {
    // const languagesMenuItem = document.getElementById("languages-menu");
    // const languagesDropDown = document.getElementById("languages-dropdown");
    // languagesMenuItem.addEventListener("click", function(event) {
    //   event.preventDefault();

    //   if (languagesDropDown.className == "hide") {
    //     languagesDropDown.className = "visible";
    //   } else {
    //     languagesDropDown.className = "hide";
    //   }
    // });
  }

  render() {
    return (
      <div class="fixedHeaderContainer">
        <div class="headerWrapper wrapper">
          <header>
            <a href="https://services-test.nijmegen.nl/irma/gemeente/start">
              <img class="logo" src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/irmaLogoWhite.png" alt="IRMA Laden" />
              <h2 class="headerTitleWithLogo">IRMA Laden</h2>
            </a>
            <div class="navigationWrapper navigationSlider">
              <nav class="slidingNav">
                <ul class="nav-site nav-site-internal">
                  <li class="">
                    <a href="over">Over</a>
                  </li>
                  <li class="" style="border-right: 1px solid white;">
                    <a href="faq">Veelgestelde vragen</a>
                  </li>
                  <span>
                    <li>
                      <a id="languages-menu" href="#">
                        <img class="languages-icon" src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/language.svg" alt="Languages icon"/>
                        Nederlands
                      </a>
                      <div id="languages-dropdown" class="hide">
                        <ul id="languages-dropdown-items">
                          <li><a href="en">English</a></li>
                        </ul>
                      </div>
                    </li>
                  </span>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
