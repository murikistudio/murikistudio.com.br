---
layout: default
title: Mole Maniacs
permalink: games/mole-maniacs
screenshots:
    - screenshot-8.jpg
    - screenshot-1.jpg
    - screenshot-2.jpg
    - screenshot-3.jpg
    - screenshot-4.jpg
    - screenshot-5.jpg
    - screenshot-6.jpg
    - screenshot-7.jpg
---

# {{ page.title }}

<div class="swiper my-4" style="max-width: 960px;">
    <div class="swiper-wrapper">
        {% for screenshot in page.screenshots %}
        <div class="swiper-slide">
            <div class="card rounded-5 text-decoration-none d-flex flex-column overflow-hidden">
                <img src="/assets/img/mole-maniacs/{{ screenshot }}" alt="{{ screenshot }}">
            </div>
        </div>
        {% endfor %}
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>

Mole Maniacs is a Whack-A-Mole style game: a game that's not just a hit, but lots of them!

- Whack the moles!
- Whack the rats to get extra points!
- Don't hit the sheep to get coins!
- Collect coins to buy new hammers!
- Don't let your energy bar go down to zero!

<div class="w-100 my-5 d-flex justify-content-center align-items-center">
    <a href="https://play.google.com/store/apps/details?id=com.muriki.molemaniacs">
        <img src="/assets/img/get-google-play.png" alt="Get it on Google Play" style="max-width: 300px">
    </a>
</div>

## Legal Information

- [Terms & Conditions]({{ site.url }}/{{ page.permalink }}/terms-and-conditions)
- [Privacy Policy]({{ site.url }}/{{ page.permalink }}/privacy-policy)

{% include swiper.html %}
