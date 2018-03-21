---
title: Alle Städte
layout: page
---

{% assign cities = site.data.city-inhabitants | sort: 'inhabitants' | reverse %}
<ul class="menu">
{% for c in cities %}
<li><a href="/brautkleid-{{ c.citySlug }}.html">{{ c.name }}</a></li>
{% endfor %}
</ul>
{% comment %}
https://app.weddian.de/api/analyticsReport/searchStatsByLocation?longitude=' + location.lng + '&latitude=' + location.lat
{% endcomment %}