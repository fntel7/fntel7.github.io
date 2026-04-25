---
layout: page
title: Profit Shifting Explorer
description: Interactive country-year and industry-year estimates of profit shifted by MNEs, 2009–2020.
img: assets/img/12.jpg
importance: 1
category: research
related_publications: true
---

Companion explorer to **Delis, Delis, Laeven & Ongena (*JAE*, 2025)**. Three tabs: a world map of lowest-tax jurisdictions for the top-20 GUO countries, a time-series of the top-20 (GUO × lowest-tax) pairs, and a top-10 industry ranking. Defaults to **2020**; year sliders cover 2009–2020.

<iframe src="https://fntel7.github.io/profit-shifting-explorer/"
        width="100%" height="1000"
        style="border: 1px solid #d7dde5; border-radius: 6px;"
        loading="lazy"
        title="Profit Shifting Explorer"></iframe>

<div style="margin-top: 12px; font-size: 0.9em; color: #5a6b80;">
  Direct link: <a href="https://fntel7.github.io/profit-shifting-explorer/" target="_blank" rel="noopener">https://fntel7.github.io/profit-shifting-explorer/</a>
  &middot; CSVs:
  <a href="https://fntel7.github.io/profit-shifting-explorer/country_data.csv">country</a>,
  <a href="https://fntel7.github.io/profit-shifting-explorer/industry_data.csv">industry</a>.
</div>

### Interpretation

The estimates are **group-level aggregates** over (GUO country × lowest-tax country × year) combinations — *not* bilateral flows. A value for `(United States, Cayman Islands, 2018)` means: total profit shifted by MNEs whose Global Ultimate Owner is in the United States *and* whose lowest-tax jurisdiction in the group is the Cayman Islands, in 2018.

### Citation

```
Delis, F., Delis, M.D., Laeven, L., and Ongena, S. (2025).
"Global Evidence on Profit Shifting Within Firms and Across Time."
Journal of Accounting and Economics, 79(2).
```
