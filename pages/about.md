---
layout: default
title: About
permalink: about
---

# {{ page.title }}

Muriki Game Studio is an indie-game development team formed in 2022.
The current development team is composed by:

- Diego Almeida (2D and 3D artist)
- Erik Silva Ferreira (game designer)
- Joel Gomes da Silva (developer, sound designer)
- Luciano Abreu (3D artist)

## Contact

If you wish to contact us, send a message on:

{% for contact in site.data.contact -%}
- [{{ contact.name }}]({{ contact.url }})
{% endfor %}
