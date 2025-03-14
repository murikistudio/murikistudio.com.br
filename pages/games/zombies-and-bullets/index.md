---
layout: default
title: Zombies & Bullets
permalink: games/zombies-and-bullets
swiper: true
logo_share: zombies-and-bullets/logo.webp
screenshots:
    - screenshot-0.webp
    - screenshot-1.webp
    - screenshot-2.webp
    - screenshot-3.webp
    - screenshot-4.webp
    - screenshot-5.webp
    - screenshot-6.webp
    - screenshot-7.webp
    - screenshot-8.webp
links:
    - name: "Steam"
      image: "steam-wishlist.webp"
      url: "https://store.steampowered.com/app/2802870/Zombies__Bullets/"
---

# {{ page.title }}

<div class="swiper my-5" style="max-width: 960px;">
    <div class="swiper-wrapper">
        {% for screenshot in page.screenshots %}
        <div class="swiper-slide">
            <div class="card rounded-5 text-decoration-none d-flex flex-column overflow-hidden">
                <img loading="lazy" src="/assets/img/zombies-and-bullets/{{ screenshot }}" alt="{{ screenshot }}">
            </div>
        </div>
        {% endfor %}
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>

**Zombies & Bullets** is a 3D top-down action shooter game where you must help
the soldier Jacob face armies of zombies in diverse and challenging environments.
Prove your skills and reflexes and become the warrior of the zombie apocalypse!

<div class="w-100 my-5 d-flex justify-content-center row-or-column align-items-center">
    {% for link in page.links %}
        <a class="m-2 hover" target="_blank" href="{{ link.url }}">
            <img src="/assets/img/get-{{ link.image }}" alt="Get it on {{ link.name }}" style="max-width: 250px">
        </a>
    {% endfor %}
</div>

#### Explore a Variety of Themed Environments
The game features a range of environments such as the woods, an abandoned mine, a forest, ancient ruins, and more. Each environment is divided into multiple stages with unique paths and challenges.

<div class="my-4 text-center">
    <img src="/assets/img/zombies-and-bullets/screenshot-6.webp" alt="" class="rounded-5" style="max-width: 400px">
</div>

#### Defeat Massive Waves of Enemies
As you progress through the stages, you’ll come face to face with relentless waves of enemies that will corner you, forcing you to defeat them all to advance. Use your arsenal, movement, and strategy to overcome your foes and keep moving forward!

<div class="my-4 text-center">
    <img src="/assets/img/zombies-and-bullets/screenshot-1.webp" alt="" class="rounded-5" style="max-width: 400px">
</div>

#### Collect Devastating Weapons to Aid in the Carnage
The game offers a variety of weapons to assist in your zombie massacre, including a shotgun, submachine gun, grenade launcher, flamethrower, electric cannon, proximity mines, and more. Each weapon has its own strengths and weaknesses for different situations, so explore all possibilities!

<div class="my-4 text-center">
    <img src="/assets/img/zombies-and-bullets/screenshot-4.webp" alt="" class="rounded-5" style="max-width: 400px">
</div>

#### Purchase Upgrades for Yourself and Your Weapons
Defeating enemies and breaking crates throughout the levels will grant you orbs, which can be used to purchase upgrades for Jacob and his weapons in the pause menu. Max health, reload speed, damage, and ammo capacity are some of the upgrades you can buy.

<div class="my-4 text-center">
    <img src="/assets/img/zombies-and-bullets/screenshot-5.webp" alt="" class="rounded-5" style="max-width: 400px">
</div>

#### Test Your Skills Against Epic Bosses
At the end of each environment, after completing all stages, you will face a boss. Boss fights will put your skills and reflexes to the test, so don’t let your guard down when battling them!

<div class="my-4 text-center">
    <img src="/assets/img/zombies-and-bullets/screenshot-7.webp" alt="" class="rounded-5" style="max-width: 400px">
</div>

{% include swiper.html %}

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
