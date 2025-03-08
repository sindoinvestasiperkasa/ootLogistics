<template>
  <div class="support-bar">
    <div class="container">
      <div class="row reorder-xs clearfix">
        <div class="col-lg-6 align-self-center">
          <div class="support-left">
            <!-- support left start -->
            <ul>
              <li>
                <a href="mailTo:example@example.com"
                  ><i class="flaticon-at"></i>example@example.com</a
                >
              </li>
              <li>
                <a href="tel:+8801-728-123-456">
                  <i class="flaticon-call-answer"></i>+8801-728-123-456</a
                >
              </li>
            </ul>
          </div>
          <!-- support left end -->
        </div>
        <div class="col-lg-6">
          <div class="support-right">
            <!-- support right start -->
            <ul>
              <li class="fare-rate-responsive">
                <a href=""
                  ><i class="flaticon-calculator"></i>Get a Fare Rate</a
                >
              </li>
              <li>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank" class="facebook">
                      <i class="fa fa-facebook-f" aria-hidden="true"></i
                    ></a>
                  </li>

                  <li>
                    <a href="#" target="_blank" class="twitter"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCz1tS-oRzKeElBOd6pIjgLQ"
                      target="_blank"
                      class="youtube"
                      ><i class="fa fa-youtube-play" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank" class="instagram"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- support right end -->
        </div>
      </div>
    </div>
  </div>

  <div class="home-area home-v1">
    <!-- navbar area start  -->
    <nav class="navbar navbar-area navbar-expand-lg style-01 nav-absolute">
      <div class="container nav-container">
        <div class="responsive-mobile-menu">
          <div class="logo-wrapper">
            <a href="index.html" class="logo">
              <img
                src="/assets/version-2/img/logo-white.png"
                class="img-fluid"
                alt="logo"
              />
            </a>
          </div>
          <button
            class="navbar-toggler collapsed navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#transport_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="cross-menu">
              <span class="bar1"></span>
              <span class="bar2"></span>
              <span class="bar3"></span>
            </span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse right-nav"
          id="transport_main_menu"
        >
          <ul class="navbar-nav">
            <li class="menu-item-has-children current-menu-item">
              <a href="/">Home</a>
            </li>
            <li class="menu-item-has-children">
              <a href="/about">About</a>
            </li>
            <li class="menu-item-has-children">
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
