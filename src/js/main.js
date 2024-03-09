import '../../src/styles/main.scss'
import Sprites from "./sprites.js";
document.querySelector('#app').innerHTML = ` 
${Sprites()}<!--Logos-->

<div>
	<header>
		<div class="container">
			<div class="header__inner"> 
			    <a href="/" class="header__logo">
                    <svg class="logo" width="149" height="37" viewBox="0 0 149 37">
                        <use xlink:href="#LaslesVPN"></use>
                    </svg>
                </a> 
                <button class="menu__btn">
                    <span class="bar1"></span>
                    <span class="bar2"></span>
                    <span class="bar3"></span>
                </button>
				<nav class="menu">
					<ul class="menu__list">
						<li> 
						    <svg class="mobile__logo" width="35" height="37" viewBox="0 0 35 37">
                                <use xlink:href="#shortLogo"></use>
                            </svg> 
                        </li>
						<li class="menu__list-item"> <a href="#">About</a> </li>
						<li class="menu__list-item"> <a href="#">Features</a> </li>
						<li class="menu__list-item"> <a href="#">Pricing</a> </li>
						<li class="menu__list-item"> <a href="#">Testimonials</a> </li>
						<li class="menu__list-item"> <a href="#">Help</a> </li>
					</ul>
					<div class="user__actions"> 
					    <button class="user__action--btn-signIn">
                           Sign In
                        </button> 
                        <button class="user__action--btn-signUp">
                          Sign Up
                        </button> 
                    </div>
				</nav>
			</div>
		</div>
	</header>
	<section class="intro">
		<div class="container">
			<div class="intro__inner">
				<div class="intro__info">
					<h1 class="intro__item-title"> Want anything to be easy with <b>LaslesVPN</b> </h1>
					<p class="intro__item-text"> Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us. </p> 
					<div class="centeredBtn">
                        <button class="intro__item-btn">
                            Get Started
                        </button> 
                    </div>
                </div>
				<div class="intro__inner-img"> 
				    <img src="/img/Intro.svg" alt="intro picture" width="611" height="382"> 
				</div>
			</div>
		</div>
	</section>
	<section class="boxInfo">
		<div class="container">
			<div class="boxInfo__inner">
				<ul class="boxInfo__list">
					<li class="boxInfo__list-item">
						<div class="circle"> <img src="/img/icons/userIcon.svg" alt="user icon" width="17" height="19"> </div>
						<div class="info"> <b class="amount">90+</b> <span class="amountText">Users</span> </div>
					</li>
					<li class="boxInfo__list-item">
						<div class="circle"> <img src="/img/icons/pointIcon.svg" alt="point icon" width="14" height="21"> </div>
						<div class="info"> <b class="amount">30+</b> <span class="amountText">Locations</span> </div>
					</li>
					<li class="boxInfo__list-item">
						<div class="circle"> <img src="/img/icons/serverIcon.svg" alt="server icon" width="21" height="19"> </div>
						<div class="info"> <b class="amount">50+</b> <span class="amountText">Servers</span> </div>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="aboutUs">
		<div class="container">
			<div class="about__inner"> 
			<img src="/img/aboutUs.svg" alt="">
				<div class="about__info">
					<h2 class="about__item-title">We Provide Many Features You Can Use</h2>
					<p class="about__item-text">You can explore the features that we provide with fun and have their own functions each feature.</p>
					<div class="advantages">
						<ul class="advantages__list">
							<li class="advantages__list-item"> <svg class="tickIcon" width="20" height="20" viewBox="0 0 20 20">
                                    <use xlink:href="#tickIcon"></use>
                                </svg>
								<p>Powerfull online protection.</p>
							</li>
							<li class="advantages__list-item"> 
							    <svg class="tickIcon" width="20" height="20" viewBox="0 0 20 20">
                                    <use xlink:href="#tickIcon"></use>
                                </svg>
								<p>Internet without borders.</p>
							</li>
							<li class="advantages__list-item"> 
							    <svg class="tickIcon" width="20" height="20" viewBox="0 0 20 20">
                                    <use xlink:href="#tickIcon"></use>
                                </svg>
								<p>Supercharged VPN</p>
							</li>
							<li class="advantages__list-item"> 
							    <svg class="tickIcon" width="20" height="20" viewBox="0 0 20 20">
                                    <use xlink:href="#tickIcon"></use>
                                </svg>
								<p>No specific time limits.</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="gradient">
        <section class="plan">
            <div class="container">
                <div class="plan__info">
                    <h2 class="plan__inner-title">Choose Your Plan</h2>
                    <p class="plan__inner-text">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
                <div class="swiper swiperPlan">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="plan__choose-item"> <img src="img/FreePlan.svg" alt="">
                                <h3>Free Plan</h3>
                                <ul class="capabilities__list">
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Unlimited Bandwitch</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Encrypted Connection</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>No Traffic Logs</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Works on All Devices</p>
                                    </li>
                                </ul>
                                <div class="plan__info"> 
                                    <span class="price">Free</span> 
                                    <button class="plan__info-btn">Select</button> 
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="plan__choose-item"> <img src="img/StandardPlan.svg" alt="">
                                <h3>Standard Plan</h3>
                                <ul class="capabilities__list">
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Unlimited Bandwitch</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Encrypted Connection</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>No Traffic Logs</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Works on All Devices</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Connect Anyware</p>
                                    </li>
                                </ul>
                                <div class="plan__info"> 
                                <span class="price">$9 <span>/ mo</span></span> 
                                <button class="plan__info-btn">Select</button> </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="plan__choose-item"> <img src="img/PremiumPlan.svg" alt="">
                                <h3>Premium Plan</h3>
                                <ul class="capabilities__list">
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Unlimited Bandwitch</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Encrypted Connection</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>No Traffic Logs</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Works on All Devices</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Connect Anyware</p>
                                    </li>
                                    <li class="capabilities__list-item"> 
                                        <svg class="jamCheck" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#jamCheck"></use>
                                        </svg>
                                        <p>Get New Features</p>
                                    </li>
                                </ul>
                                <div class="plan__info"> 
                                <span class="price">$12 <span>/ mo</span></span>
                                <button class="plan__info-btn">Select</button> </div>
                            </div>
                        </div><!--swiper-slide-->
                    </div><!--swiper-wrapper-->
                    <div class="swiper-pagination"></div>
                    <button class="swiper-button-prev"></button>
                    <button class="swiper-button-next"></button>
                </div><!--swiper-->
            </div><!--container-->
        </section>
        <section class="globalNetwork">
            <div class="container">
                <div class="globalNetwork__inner">
                    <div class="network__info">
                        <h2 class="network__item-title">Huge Global Network of Fast VPN</h2>
                        <p class="network__item-text">See <b style="font-weight: 500">LaslesVPN</b> everywhere to make it easier for you when you move locations.</p>
                    </div>
                    <div class="map__container">
                        <img class="map__network" src="/img/HugeGlobal.svg" alt="" width="1060" height="537">
                    </div>
                    <ul class="sponsored__list">
                        <li class="sponsored__list-item"><img src="/img/sponsored-netflix.png" alt="" width="175" height="65"></li>
                        <li class="sponsored__list-item"><img src="/img/sponsored-reddit.svg" alt="" width="175" height="65"></li>
                        <li class="sponsored__list-item"><img src="/img/sponsored-amazon.png" alt="" width="175" height="65"></li>
                        <li class="sponsored__list-item"><img src="/img/sponsored-discord.svg" alt="" width="175" height="65"></li>
                        <li class="sponsored__list-item"><img src="/img/sponsored-spotify.svg" alt="" width="175" height="65"></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="reviews">
            <div class="container">
                <div class="reviews__info">
                    <h2 class="reviews__info-title">Trusted by Thousands of Happy Customer</h2>
                    <p class="reviews__info-text">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                </div>
                <div class="swiper swiperReviews">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="review__item">
                                <div class="customer__info">
                                    <img src="/img/avatar1.png" alt="" class="avatar" width="50" height="51">
                                        <div class="avatar__info">
                                            <span class="nickname">Viezh Robert</span>
                                            <span class="country">Warsaw, Poland</span>
                                        </div>
                                    <span class="grade">
                                        4.5
                                    </span>
                                </div>
                                <span class="customer__comment">
                                    “Wow... I am very happy to use this VPN, it turned out to be more than
                                     my expectations and so far there have been no problems. LaslesVPN 
                                     always the best”.
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="review__item">
                                <div class="customer__info">
                                    <img src="/img/avatar2.png" alt="" class="avatar" width="50" height="51">
                                        <div class="avatar__info">
                                            <span class="nickname">Yessica Christy</span>
                                            <span class="country">Shanxi, China</span>
                                        </div>
                                    <span class="grade">
                                        4.5
                                    </span>
                                </div>
                                <span class="customer__comment">
                                    “I like it because I like to travel far and still can connect with high speed.”.
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="review__item">
                                <div class="customer__info">
                                    <img src="/img/avatar3.png" alt="" class="avatar" width="50" height="51">
                                        <div class="avatar__info">
                                            <span class="nickname">Kim Young Jou</span>
                                            <span class="country">Seoul, South Korea</span>
                                        </div>
                                    <span class="grade">
                                        4.5
                                    </span>
                                </div>
                                <span class="customer__comment">
                                    “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="review__item">
                                <div class="customer__info">
                                    <img src="/img/avatar1.png" alt="" class="avatar" width="50" height="51">
                                        <div class="avatar__info">
                                            <span class="nickname">Hetalo Valentin</span>
                                            <span class="country">Ukraine, Dnipro</span>
                                        </div>
                                    <span class="grade">
                                        3.6
                                    </span>
                                </div>
                                <span class="customer__comment">
                                    “I dont know, VPN is normal”.
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="review__item">
                                <div class="customer__info">
                                    <img src="/img/avatar1.png" alt="" class="avatar" width="50" height="51">
                                        <div class="avatar__info">
                                            <span class="nickname">Malienko Nikita</span>
                                            <span class="country">Ukraine, Dnipro</span>
                                        </div>
                                    <span class="grade">
                                        5
                                    </span>
                                </div>
                                <span class="customer__comment">
                                    “That's so good stuff, I choose a premium plan and feel this freedom)”.
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                           <div class="review__item">
                                <div class="customer__info">
                                    <img src="/img/avatar1.png" alt="" class="avatar" width="50" height="51">
                                        <div class="avatar__info">
                                            <span class="nickname">Viezh Robert</span>
                                            <span class="country">Warsaw, Poland</span>
                                        </div>
                                    <span class="grade">
                                        4.5
                                    </span>
                                </div>
                                <span class="customer__comment">
                                    “Wow... I am very happy to use this VPN, it turned out to be more than
                                     my expectations and so far there have been no problems. LaslesVPN 
                                     always the best”.
                                </span>
                            </div> 
                        </div>
                    </div>
                    <div class="control">
                        <div class="swiper-pagination-reviews"></div>
                        <button class="swiper-btn-prev-reviews">
                            <svg class="arrowLeft" width="30" height="30" viewBox="0 0 30 30">
                                <use xlink:href="#arrowLeft"></use>
                            </svg>
                        </button>
                        <button class="swiper-btn-next-reviews">
                            <svg class="arrowRight" width="30" height="30" viewBox="0 0 30 30">
                                <use xlink:href="#arrowRight"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="subscribe__block">
            <div class="subscribe__info">
                <h2 class="subscribe__info-title">Subscribe Now for Get Special Features!</h2>
                <p class="subscribe__info-text">Let's subscribe with us and find the fun.</p>
            </div>
            <button class="subscribe__btn">
                Subcribe Now
            </button>
        </div>
    </div>        
    <footer>
        <div class="container">
            <div class="footer__inner">
                <div class="footer__aboutUs">
                    <a href="/" class="footer__logo">
                        <svg class="logo" width="149" height="37" viewBox="0 0 149 37">
                            <use xlink:href="#LaslesVPN"></use>
                        </svg>
                    </a> 
                    <p class="aboutUs">
                        <b>LaslesVPN</b> is a private virtual network that has unique features
                         and has high security.
                    </p>
                    <div class="socials">
                        <img src="/img/icons/socialInstagram.png" alt="" width="33" height="33">
                        <img src="/img/icons/socialFacebook.png" alt="" width="33" height="33">
                        <img src="/img/icons/socialTwitter.png" alt="" width="33" height="33">
                    </div>
                    <span class="copyright">&copy;2020Lasles<b>VPN</b></span>
                </div>
                <div class="footer__list">
                    <ul class="footer__list-product">
                        <li class="list__title">Product</li>
                        <li class="list__item"><a href="#">Download</a></li>
                        <li class="list__item"><a href="#">Pricing</a></li>
                        <li class="list__item"><a href="#">Locations</a></li>
                        <li class="list__item"><a href="#">Server</a></li>
                        <li class="list__item"><a href="#">Contries</a></li>
                        <li class="list__item"><a href="#">Blog</a></li>
                    </ul>
                    <ul class="footer__list-engage">
                        <li class="list__title">Engage</li>
                        <li class="list__item"><a href="#">LaslesVPN ?</a></li>
                        <li class="list__item"><a href="#">FAQ</a></li>
                        <li class="list__item"><a href="#">Tutorials</a></li>
                        <li class="list__item"><a href="#">About Us</a></li>
                        <li class="list__item"><a href="#">Privacy Policy</a></li>
                        <li class="list__item"><a href="#">Terms of Service</a></li>
                    </ul>
                    <ul class="footer__list-earnMoney">
                        <li class="list__title">Earn Money</li>
                        <li class="list__item"><a href="#">Affiliate</a></li>
                        <li class="list__item"><a href="#">Become Partner</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</div> 
`
const menuList = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');
const mobileLogoOpen = document.querySelector('.mobile__logo');
const userAction = document.querySelector('.user__actions');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list-open');
    menuBtn.classList.toggle('change');
    mobileLogoOpen.classList.toggle('mobile__logo-open');
    userAction.classList.toggle('user__action-open');
    document.body.classList.toggle('no-scroll');
});
