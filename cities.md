---
title: Alle Städte
layout: page
---

{% assign cities = site.data.city-inhabitants | sort: 'inhabitants' | reverse %}
<ul>
{% for c in cities %}
<li><a href="/blumen-deko-{{ c.citySlug }}.html">{{ c.name }}</a></li>
{% endfor %}
</ul>