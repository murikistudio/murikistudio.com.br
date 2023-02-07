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

<div class="swiper my-5" style="max-width: 960px;">
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
- Whack the sheep to get extra points!
- Avoid the nasty rats!
- Don't let your energy bar go down to zero!
- Run for the best score in the world leaderboard!

Planned features for the future updates:

- Get coins from the sheep
- In-game store to buy new hammers and power ups


## Legal Information

- [Terms & Conditions]({{ site.url }}/{{ page.permalink }}/terms-and-conditions)
- [Privacy Policy]({{ site.url }}/{{ page.permalink }}/privacy-policy)

{% include swiper.html %}
