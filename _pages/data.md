---
layout: page
permalink: /data/
title: data
description: Public datasets released alongside published research.
nav: true
nav_order: 3
---

## Profit-shifting estimates — Delis, Delis, Laeven & Ongena (*JAE*, 2025)

Country-year and industry-year aggregates of profit shifted by multinational enterprises, **2009–2020**, covering more than 100 countries. Built from firm-level Orbis panel data using nonparametric estimation. The interactive explorer is on the [Interactive tools](/projects/) page.

**Direct downloads:**

- [`country_data.csv`](https://fntel7.github.io/profit-shifting-explorer/country_data.csv) — country-year estimates by (GUO country × lowest-tax country × year).
- [`industry_data.csv`](https://fntel7.github.io/profit-shifting-explorer/industry_data.csv) — industry-year estimates by GUO industry (NACE Rev.2).

**Firm-year and MNE-year estimates** are available on request — please [email me](mailto:fotios.ntelis@ec.europa.eu) with a one-line description of the intended use.

**Citation:**

```
Delis, F., Delis, M.D., Laeven, L., and Ongena, S. (2025).
"Global Evidence on Profit Shifting Within Firms and Across Time."
Journal of Accounting and Economics, 79(2).
```

**Interpretation note.** The estimates are **group-level aggregates** over (GUO country × lowest-tax country × year) combinations — *not* bilateral flows. A value for `(United States, Cayman Islands, 2018)` means: total profit shifted by MNEs whose Global Ultimate Owner is in the United States *and* whose lowest-tax jurisdiction in the group is the Cayman Islands, in 2018. It does not mean "the US sent X to the Cayman Islands."

---

*Zenodo DOI: forthcoming. Replication materials: forthcoming.*
