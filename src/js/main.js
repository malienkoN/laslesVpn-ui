import '../../src/styles/main.scss'
import Sprites from "./sprites.js";

document.querySelector('#app').innerHTML = `
${Sprites()} <!--Logos-->
<div>
    <header>
     <div class="container">
        <div class="header__inner">
                <svg class="logo" width="149" height="37" viewBox="0 0 149 37">
                    <use xlink:href="#LaslesVPN"></use>
                </svg>
                <nav class="menu">
                    <button class="menu__btn">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                    <ul class="menu__list">
                        <li>
                            <svg class="mobile__logo" width="35" height="37" viewBox="0 0 35 37">
                                <use xlink:href="#shortLogo"></use>
                            </svg>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">About</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Features</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Pricing</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Testimonials</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Help</a>
                        </li>
                        <li class="mobile-nav">
                            <ul class="mobile__action-user">
                                <li class="mobile__action--item-signIn">
                                    <button>
                                        <a href="#" class="user__action-link">Sign In</a>
                                    </button>
                                </li>
                                <li class="mobile__action--item-signUp">
                                    <button>
                                        <a href="#" class="user__action-link">Sign Up</a>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="user__actions">
                        <li class="user__action--item-signIn">
                            <button>
                                <a href="#" class="user__action-link">Sign In</a>
                            </button>
                        </li>
                        <li class="user__action--item-signUp">
                            <button>
                                <a href="#" class="user__action-link">Sign Up</a>
                            </button>
                        </li>
                    </ul> 
                </nav>
            </div>
        </div>
    </header>
    <section class="intro">
        <div class="container">
            <div class="intro__inner">
                <ul class="intro__info">
                    <li class="intro__item-mainText">
                        <h1>Want anything to be easy with <span>LaslesVPN</span></h1>
                    </li>
                    <li class="intro__item-text">
                        <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                    </li>
                    <li class="intro__item-btn">
                        <button>
                            <a href="">Get Started</a>
                        </button>
                    </li>
                </ul>
                <!--<svg class="introPicture" width="610" height="450" viewBox="0 0 615 450">
                    <use xlink:href="#Intro"></use>
                </svg>-->
                <img src="../../public/img/Intro.svg" alt="">
            </div>
        </div>
    </section>
    <section class="boxInfo">
        <div class="container">
            <div class="boxInfo__inner">
                <ul class="boxInfo__list">
                    <li class="boxInfo__list-item">
                        <div class="circle">
                            <img src="../../public/icons/userIcon.svg" alt="">
                        </div>
                        <div class="info">
                            <span class="amount">90+</span>
                            <span class="amountText">Users</span>
                        </div>
                    </li>
                    <span class="splitter"></span>
                    <li class="boxInfo__list-item">
                        <div class="circle">
                            <img src="../../public/icons/pointIcon.svg" alt="">
                        </div>
                        <div class="info">
                            <span class="amount">30+</span>
                            <span class="amountText">Locations</span>
                        </div>
                    </li>
                    <span class="splitter"></span>
                    <li class="boxInfo__list-item">
                        <div class="circle">
                            <img src="../../public/icons/serverIcon.svg" alt="">
                        </div>
                        <div class="info">
                            <span class="amount">50+</span>
                            <span class="amountText">Servers</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="aboutUs">
        <div class="container">
            <div class="about__inner">
                <img src="../../public/img/aboutUs.svg" alt="">
                <ul class="about__info">
                   <li class="about__item-mainText">
                        <h2>We Provide Many Features You Can Use</h2>
                    </li>
                    <li class="about__item-text">
                        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    </li>
                    <li class="advantages">
                        <ul class="advantages__list">
                            <li class="advantages__list-item">
                                <svg class="tickIcon" width="20" height="20" viewBox="0 0 20 20">
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
                    </li>
                </ul>
            </div>
        </div>
    </section>
</div>
`

const menuList = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__btn');
const mobileLogoOpen = document.querySelector('.mobile__logo')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuBtn.classList.toggle('change');
    mobileLogoOpen.classList.toggle('mobile__logo-open');
    document.body.classList.toggle('no-scroll')
});
