<template>
        <!-- preloader area start -->
        <div class="preloader" id="preloader">
        <div class="preloader-inner">
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    </div>
    <!-- preloader area end -->

    <!-- search popup start-->
    <div class="body-overlay" id="body-overlay"></div>
    <div class="td-search-popup" id="td-search-popup">
        <form action="/home" class="search-form">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search.....">
            </div>
            <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <!-- search popup end-->

    <!-- navbar start -->
    <header class="navbar-area">
        <div class="navbar-top">
            <div class="logo d-none d-lg-block">
                <a class="main-logo" href="/home"><img src="/assets/img/ott (1).png" alt="img"></a>
            </div>
            <div class="nav-phone-wrap">
                <i class="fas fa-phone-alt"></i>
                +02129466112
            </div>
            <div class="container p-lg-0">
                <div class="row">
                    <div class="col-lg-10 col-md-9 text-md-start text-center">
                        <ul class="topbar-left">
                            <li><svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0C7.0625 0 8.0625 0.28125 9 0.8125C9.90625 1.375 10.625 2.09375 11.1875 3C11.7188 3.9375 12 4.9375 12 6C12 6.625 11.9062 7.15625 11.7812 7.625C11.625 8.125 11.3438 8.71875 10.9375 9.4375C10.625 9.9375 10.0312 10.9375 9.125 12.375L7.28125 15.2812C7.09375 15.5938 6.8125 15.8125 6.5 15.9375C6.15625 16.0625 5.8125 16.0625 5.5 15.9375C5.15625 15.8125 4.90625 15.5938 4.71875 15.2812L2.875 12.375C1.9375 10.9375 1.34375 9.96875 1.0625 9.46875C0.625 8.71875 0.34375 8.125 0.21875 7.625C0.0625 7.15625 0 6.625 0 6C0 4.9375 0.25 3.9375 0.8125 3C1.34375 2.09375 2.0625 1.375 3 0.8125C3.90625 0.28125 4.90625 0 6 0ZM6 14.5L7.96875 11.375C8.78125 10.0625 9.34375 9.15625 9.625 8.71875C9.96875 8.09375 10.1875 7.625 10.3125 7.25C10.4375 6.90625 10.5 6.5 10.5 6C10.5 5.1875 10.2812 4.4375 9.875 3.75C9.46875 3.0625 8.9375 2.53125 8.25 2.125C7.5625 1.71875 6.8125 1.5 6 1.5C5.1875 1.5 4.4375 1.71875 3.75 2.125C3.0625 2.53125 2.5 3.0625 2.09375 3.75C1.6875 4.4375 1.5 5.1875 1.5 6C1.5 6.5 1.53125 6.90625 1.65625 7.28125C1.78125 7.65625 2.03125 8.125 2.40625 8.75C2.65625 9.1875 3.1875 10.0938 4.03125 11.4062C4.8125 12.6562 5.46875 13.6875 6 14.5ZM3.5 6C3.5 6.6875 3.71875 7.28125 4.21875 7.78125C4.71875 8.28125 5.3125 8.5 6 8.5C6.6875 8.5 7.25 8.28125 7.75 7.78125C8.25 7.28125 8.5 6.6875 8.5 6C8.5 5.3125 8.25 4.75 7.75 4.25C7.25 3.75 6.6875 3.5 6 3.5C5.3125 3.5 4.71875 3.75 4.21875 4.25C3.71875 4.75 3.5 5.3125 3.5 6Z" fill="#FA4318"/>
                                </svg>
                                Kec Tarumajaya, Kab Bekasi 17211</li>
                            <li><i class="far fa-clock"></i>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <ul class="topbar-right social-area text-md-end text-center">
                            <li>
                                <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-area-1 navbar-area navbar-expand-lg">
            <div class="container nav-container">
                <div class="responsive-mobile-menu">
                    <button class="menu toggle-btn d-block d-lg-none" data-target="#transpro_main_menu" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-left"></span>
                        <span class="icon-right"></span>
                    </button>
                </div>
                <div class="logo">
                    <a href="/home"><img src="/assets/img/ott-header.png" alt="img"></a>
                </div>
                <div class="nav-left-part">
                      
                </div>
                <div class="nav-right-part nav-right-part-mobile">
                    <a class="search-bar-btn" href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z" fill="#080C24"/>
                        </svg>                            
                    </a>
                    <a class="btn btn-base" href="/contact"><span>
                      </span> Get A Quote
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="transpro_main_menu">
                    <ul class="navbar-nav menu-open">
                        <li><a href="/home">Home</a></li>

                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">services</a></li>

                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="nav-right-part nav-right-part-desktop">
                    <a class="search-bar-btn" href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z" fill="#080C24"/>
                        </svg>                            
                    </a>
                    <a class="btn btn-base" href="/contact"><span>
                      </span> Get A Quote
                    </a>
                </div>
            </div>
        </nav>
    </header>
    <!-- navbar end -->
    
    <!-- breadcrumb start -->
    <div class="breadcrumb-area bg-overlay-2" style="background-image:url('/assets/img/banner/breadcrumb1.png')">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-inner">
                        <div class="section-title mb-0">
                            <h2 class="page-title">CONTACT US</h2>
                            <ul class="page-list">
                                <li><a href="/home">Home</a></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb end -->  

    <!-- contact area start -->
    <div class="container">
        <div class="contact-area mg-top-120 mb-120">
            <div class="row g-0 justify-content-center">
                <div class="col-lg-7">
                    <form class="contact-form text-center">
                        <h3>GET A QUOTE</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-input-inner">
                                    <label><i class="fa fa-user"></i></label>
                                    <input type="text" placeholder="Your name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input-inner">
                                    <label><i class="fa fa-envelope"></i></label>
                                    <input type="text" placeholder="Your email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input-inner">
                                    <label><i class="fas fa-calculator"></i></label>
                                    <input type="text" placeholder=" Phone number">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-select-inner">
                                    <label><i class="far fa-file-alt"></i></label>
                                    <select class="single-select">
                                        <option>Subject</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="single-input-inner">
                                    <label><i class="fas fa-pencil-alt"></i></label>
                                    <textarea placeholder="Write massage"></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <a class="btn btn-base" href="#"> SEND MESSAGE
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-5">
                    <div class="contact-information-wrap">
                        <h3>CONTACT INFORMATION</h3>
                        <div class="single-contact-info-wrap">
                            <h6>Contact Number:</h6>
                            <div class="media">
                                <div class="icon">
                                    <i class="fa fa-phone-alt"></i>
                                </div>
                                <div class="media-body">
                                    <p>+021-29466112</p>
                                    <p>+021-29466112</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-contact-info-wrap">
                            <h6>Mail Address:</h6>
                            <div class="media">
                                <div class="icon" style="background: #080C24;">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <div class="media-body">
                                    <p>admin_ottid@ottlogistics.com</p>
                                    <p>admin_ottid@ottlogistics.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-contact-info-wrap mb-0">
                            <h6>Office Location:</h6>
                            <div class="media">
                                <div class="icon" style="background: #565969;">
                                    <i class="fa fa-map-marker-alt"></i>
                                </div>
                                <div class="media-body">
                                    <p>Kawasan Industri & Pergabungan Marunda Center,
                                    Blok Q2 No.3A,5,6 Kel Segaramakmur, Kec Tarumajaya, Kab Bekasi 17211</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area end -->

    <div class="contact-g-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd"></iframe>
    </div>

    <!-- footer area start -->
    <footer class="footer-area">
        <div class="footer-top" style="background-image: url(/assets/img/footer/bg.png);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-top">
                            <div class="icon">
                                <img src="/assets/img/icon/map-marker.png" alt="img">
                            </div>
                            <div class="details">
                                <h6>OFFICE ADDRESS:</h6>
                                <p>Kawasan Industri & Pergabungan Marunda Center,
                                Blok Q2 No.3A,5,6 Kel Segaramakmur, Kec Tarumajaya, Kab Bekasi 17211</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-top">
                            <div class="icon">
                                <img src="/assets/img/icon/phone.png" alt="img">
                            </div>
                            <div class="details">
                                <h6>CONTACT US:</h6>
                                <p>admin_ottid@ottlogistics.com</p>
                                <p>+021-29466112</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-top after-none">
                            <div class="icon">
                                <img src="/assets/img/icon/clock.png" alt="img">
                            </div>
                            <div class="details">
                                <h6>WORKING HOURS:</h6>
                                <p>Weekdays - Mon-Fri:  8am-21pm</p>
                                <p>Weekend - Sta & Sun:  Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-md-6">
                    <div class="widget widget_about">
                        <div class="thumb">
                            <img src="/assets/img/ott 3.png" alt="img">
                        </div>
                        <div class="details">
                            <p>Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare. Objectively repurpose stand-alone synergy via user-centric architectures.</p>
                            <ul class="social-media style-border">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6">
                    <div class="widget widget_nav_menu">
                        <h4 class="widget-title">USEFULL LINKS</h4>
                        <ul>
                            <li><a href="/home"><i class="fa fa-arrow-right"></i>Home</a></li>
                            <li><a href="/about"><i class="fa fa-arrow-right"></i> About Us</a></li>
                            <li><a href="/services"><i class="fa fa-arrow-right"></i> Services</a></li>
                            <li><a href="/contact"><i class="fa fa-arrow-right"></i> Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6">
                    <div class="widget widget_nav_menu">
                        <h4 class="widget-title">OUR SERVICES</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-arrow-right"></i> Air Freight</a></li>
                            <li><a href="#"><i class="fa fa-arrow-right"></i> Ocean Freight</a></li>
                            <li><a href="#"><i class="fa fa-arrow-right"></i> Railway Freight</a></li>
                            <li><a href="#"><i class="fa fa-arrow-right"></i> Warehousing</a></li>
                            <li><a href="#"><i class="fa fa-arrow-right"></i> Distribution</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="widget widget_subscribe">
                        <h4 class="widget-title">SUBSCRIBE NOW</h4>
                        <p>Continually evolve worldwide vortals rather than process centric human capital. Subscribe for our latest news & articles.
                            and send message.</p>
                        <div class="single-subscribe-inner">
                            <input type="text" placeholder="Email Address">
                            <a class="btn btn-base" href="#"><i class="fa fa-paper-plane"></i></a>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    </footer>
    <!-- footer area end -->

    <!-- footer-bottom area start -->
    <div class="footer-bottom-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-lg-start text-center">
                    <div class="copyright-area">
                        <p>© Copyright 2025  By <a href="#">TransPro</a>, All right reserved.</p>
                    </div>
                </div>
                <div class="col-lg-6 text-lg-end text-center">
                    <ul>
                        <li>
                            <a href="#">Terms & Condition</a>
                        </li>
                        <li><a href="#">Privacy & Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- footer-bottom area end -->
</template>