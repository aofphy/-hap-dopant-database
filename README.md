# HAp Dopant Database

Interactive web application for the periodic-table screening of cationic dopants in
hydroxyapatite (HAp, Ca10(PO4)6(OH)2). Live site: https://aofphy.github.io/-hap-dopant-database/

The data are those of the published article:

> Fongkaew, I. et al. Machine-learning screening of cationic dopants in hydroxyapatite:
> Cross-domain predictions from large-scale databases validated by density functional theory.
> *Materials Today Communications* (2026) 116613. https://doi.org/10.1016/j.mtcomm.2026.116613

## What the site shows

- ML (Random Forest, AFLOW/MatBench) bulk modulus, band gap and formation energy for 58 non-radioactive
  dopants at the Ca site of Ca9M(PO4)6(OH)2 (10 mol%), with undoped HAp as the reference composition.
- Biomedical figure of merit (paper Eq. 5) computed from the ML properties, toxicity class and the host values.
- DFT (VASP, PBE) check: 58 relaxed 44-atom cells (29 dopants at both Ca sites) and elastic tensors for ten
  doped cells. None of the ten dopants tested stiffens HAp; the ML model overpredicts by 26.9 +/- 3.1 GPa and
  does not reproduce the DFT ordering. Mg and Sr are confirmed to leave the host stiffness intact.

Trained models, DFT structures and analysis code: https://github.com/aofphy/modulus_project

## Data file

`src/data/dopants.ts` is generated from the manuscript data files
(`periodic_table_screening_results.csv` and `bfom_table_recomputed.csv`); do not edit it by hand.

## Development

```bash
npm ci
npm run dev      # local preview
npm run build    # tsc + vite build -> dist/
```

Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`.

A Thai user manual with screenshots is in `docs/`.
