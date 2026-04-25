---
layout: page
permalink: /research/
title: Research
description:
nav: true
nav_order: 2
---

<div class="publications">

<h2 class="year">Publications</h2>
{% bibliography --group_by none --query @*[kind=publication]* %}

<h2 class="year">Working papers</h2>
{% bibliography --group_by none --query @*[kind=working]* %}

<h2 class="year">Work in progress</h2>
{% bibliography --group_by none --query @*[kind=wip]* %}

</div>
