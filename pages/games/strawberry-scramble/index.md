---
layout: default
title: Strawberry Scramble
permalink: games/strawberry-scramble
logo_share: strawberry-scramble/logo.png
screenshots:
    - screenshot-1.jpg
---

# {{ page.title }}

<div class="swiper my-5" style="max-width: 960px;">
    <div class="swiper-wrapper">
        {% for screenshot in page.screenshots %}
        <div class="swiper-slide">
            <div class="card rounded-5 text-decoration-none d-flex flex-column overflow-hidden">
                <img src="/assets/img/strawberry-scramble/{{ screenshot }}" alt="{{ screenshot }}">
            </div>
        </div>
        {% endfor %}
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>

**{{ page.title }}** is a fun and colorful platformer!
Get the old man's strawberries for your mother to make delicious recipes!

- Collect strawberries
- Avoid enemies and obstacles
- Beat the level time goals
- Reach the diamond ranks

## Under development...
