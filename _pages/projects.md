---
layout: page
title: interactive tools
permalink: /projects/
description: Interactive explorers built around the public datasets.
nav: true
nav_order: 4
horizontal: false
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="row row-cols-1 row-cols-md-2">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
</div>
