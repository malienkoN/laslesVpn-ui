import '../../src/styles/main.scss'
import Sprites from "./sprites.js";

document.querySelector('#app').innerHTML = `
${Sprites()} <!--Logos-->
<div>
    <header>
     <div class="container">
        <div class="header__inner">
                <a href="/">
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
                    <h1 class="intro__item-mainText">
                        Want anything to be easy with <b>LaslesVPN</b>
                    </h1>
                    <p class="intro__item-text">
                        Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.
                    </p>
                    <button class="intro__item-btn">
                        Get Started
                    </button>
                </div>  
                <div class="intro__inner-img">
                    <img src="../../public/img/Intro.svg" alt="intro picture" width="611" height="382">
                </div>
            </div>
        </div>
    </section>
    <section class="boxInfo">
        <div class="container">
            <div class="boxInfo__inner">
                <ul class="boxInfo__list">
                    <li class="boxInfo__list-item">
                        <div class="circle">
                            <img src="../../public/icons/userIcon.svg" alt="user icon" width="17" height="19">
                        </div>
                        <div class="info">
                            <b class="amount">90+</b>
                            <span class="amountText">Users</span>
                        </div>
                    </li>
                    <li class="boxInfo__list-item">
                        <div class="circle">
                            <img src="../../public/icons/pointIcon.svg" alt="point icon" width="14" height="21">
                        </div>
                        <div class="info">
                            <b class="amount">30+</b>
                            <span class="amountText">Locations</span>
                        </div>
                    </li>
                    <li class="boxInfo__list-item">
                        <div class="circle">
                            <img src="../../public/icons/serverIcon.svg" alt="server icon" width="21" height="19">
                        </div>
                        <div class="info">
                            <b class="amount">50+</b>
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
                <div class="about__info">
                    <h2 class="about__item-mainText">We Provide Many Features You Can Use</h2>
                    <p class="about__item-text">You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <div class="advantages">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
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

console.log("test")