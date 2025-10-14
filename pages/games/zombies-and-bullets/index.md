---
layout: default
title: Zombies & Bullets
permalink: games/zombies-and-bullets
swiper: true
logo_share: zombies-and-bullets/logo.webp
screenshots:
    - 0.webp
    - 1.webp
    - 2.webp
    - 3.webp
    - 4.webp
    - 5.webp
    - 6.webp
    - 7.webp
    - 8.webp
    - 9.webp
    - 10.webp
links:
    - name: "Steam"
      image: "steam-wishlist.webp"
      url: "https://store.steampowered.com/app/3523830/Zombies__Bullets_Demo/"
featured_links:
    - name: "Games Ardor"
      title: "Top Steam Games to Look Out for in April 2025"
      date: "2025/04/07"
      url: "https://gamesardor.net/top-steam-games-to-look-out-for-in-april-2025/#zombies-amp-bullets-demo"
useful_links:
    - name: "Press Kit"
      url: "https://drive.google.com/drive/folders/1ru7HnxeUsPPMNkLv3Skg93F-9ztDbEnc?usp=drive_link"
---

# {{ page.title }}

<div class="swiper my-5" style="max-width: 960px;">
    <div class="swiper-wrapper">
        {% for screenshot in page.screenshots %}
        <div class="swiper-slide">
            <div class="rounded-5 text-decoration-none d-flex flex-column overflow-hidden">
                <img loading="lazy" src="/assets/img/zombies-and-bullets/{{ screenshot }}" alt="{{ screenshot }}">
            </div>
        </div>
        {% endfor %}
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>

**Zombies & Bullets** is a **3D top-down action shooter** game where you must
help the soldier **Jacob** face armies of **zombies** in varied scenarios
full of **challenges**. Prove your **skills** and **reflexes** and become
the warrior of the zombie apocalypse!

<div class="w-100 mb-5 d-flex justify-content-center row-or-column align-items-center">
    {% for link in page.links %}
        <a class="m-2 hover" target="_blank" href="{{ link.url }}">
            <img src="/assets/img/get-{{ link.image }}" alt="Play Now On {{ link.name }}" style="max-width: 250px">
        </a>
    {% endfor %}
</div>

{% if page.featured_links %}
<h3 class="text-center">Featured On</h3>

<ul class="mb-5">
    {% for link in page.featured_links %}
    <li class="text-center" style="list-style: none">
        <a class="" target="_blank" href="{{ link.url }}">
            - {{ link.title }} ({{ link.date }})
        </a>
    </li>
    {% endfor %}
</ul>
{% endif %}

#### Skills
You can improve your **skills** in **camps** as you gain **experience levels**.
You can also collect **backpacks** that grant **unique abilities** while equipped. Adapt Jacob to your **play style**!

<div class="my-4 text-center">
    <video class="rounded-5 w-100" autoplay muted loop playsinline>
        <source src="/assets/img/zombies-and-bullets/gif_skills.webm">
    </video>
</div>

#### Weapons
The game features a variety of **weapons** like a shotgun, submachine gun, grenade launcher, flamethrower, electric cannon, grenades, etc.
Explore the **possibilities** for every situation!

<div class="my-4 text-center">
    <video class="rounded-5 w-100" autoplay muted loop playsinline>
        <source src="/assets/img/zombies-and-bullets/gif_weapons.webm">
    </video>
</div>

#### Enemies
You will come face-to-face with **hordes of enemies** that will corner you, forcing you to **defeat them all** to keep advancing.
Use different **strategies** for different **enemies**!

<div class="my-4 text-center">
    <video class="rounded-5 w-100" autoplay muted loop playsinline>
        <source src="/assets/img/zombies-and-bullets/gif_enemies.webm">
    </video>
</div>

#### Scenarios and Levels
**Explore scenarios** like the grove, abandoned mine, forest, ancient ruins, etc.
Each scenario is **divided** into several **levels** with diverse **challenges**.

<div class="my-4 text-center">
    <video class="rounded-5 w-100" autoplay muted loop playsinline>
        <source src="/assets/img/zombies-and-bullets/gif_levels.webm">
    </video>
</div>

#### Bosses
The **bosses** will make you prove your **skills** and **reflexes**,
forcing you to use your entire arsenal of **weapons** and **movements**.

<div class="my-4 text-center">
    <video class="rounded-5 w-100" autoplay muted loop playsinline>
        <source src="/assets/img/zombies-and-bullets/gif_bosses.webm">
    </video>
</div>

## Useful Links

<ul>
    {% for link in page.useful_links %}
        <li>
            <a target="_blank" href="{{ link.url }}">{{ link.name }}</a>
        </li>
    {% endfor %}
</ul>

{% include swiper.html autoplay=true %}

<style>
.row-or-column {
    flex-direction: row;
}

@media only screen and (max-width: 860px) {
    .row-or-column {
        flex-direction: column;
    }
}
</style>
