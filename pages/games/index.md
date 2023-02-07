---
layout: default
title: Games
permalink: games
---

# Games

<div class="swiper" style="max-width: 300px;">
    <div class="swiper-wrapper">
        {% for game in site.data.games %}
        <div class="swiper-slide">
            <a class="card rounded-5 text-decoration-none d-flex flex-column overflow-hidden" href="{{ site.url }}/{{ game.url }}">
                <h3 class="text-center text-dark pt-2">{{ game.title }}</h3>
                <img src="/assets/img/{{ game.icon }}" alt="{{ game.title }}">
            </a>
        </div>
        {% endfor %}
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>

{% include swiper.html %}
