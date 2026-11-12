// Generated from the final published data (Materials Today Communications 2026, doi:10.1016/j.mtcomm.2026.116613).
// ML predictions (Random Forest, AFLOW/MatBench) for Ca9M(PO4)6(OH)2 at 10 mol%%; Ca = undoped host (reference).
// Do not edit by hand: regenerate with gen_dopants.py from periodic_table_screening_results.csv + bfom_table_recomputed.csv.

export interface Dopant {
  rank: number;          // position in the 59-composition ML bulk-modulus ordering (host included)
  element: string;
  group: string;
  K: number;             // ML bulk modulus (GPa)
  deltaK: number;        // (K - K0)/K0 in %
  ionicRadius: number;   // Shannon radius (Angstrom)
  charge: number;
  toxicity: string;      // Low | Moderate | High
  atomicNumber: number;
  eForm: number;         // ML formation energy (eV/atom)
  dEForm: number;        // |E_form - E_form(host)| (eV/atom)
  eGap: number;          // ML band gap (eV)
  bfom: number;          // biomedical figure of merit, Eq. (5) of the paper
  bfomRank: number | null; // rank among the 58 dopants (null = host)
}

/** Pure-HAp (undoped host) ML reference values used in the BFoM. */
export const PURE_HAP_K = 102.918;
export const PURE_HAP_EFORM = -2.882;
export const PURE_HAP_EG = 4.60;
export const E_NORM = 1.0; // eV/atom, normalisation energy of the thermodynamic term

export const TOXICITY_FACTOR: Record<string, number> = { Low: 1.0, Moderate: 0.5, High: 0.1 };

/** BFoM = (K/K0) / (1 + |dE_form|/E_norm) * max(0, 1 - |E_g - E_g0| / (2 E_g0)) * T_f  (paper Eq. 5). */
export function computeBFoM(K: number, dEForm: number, eGap: number, toxicity: string): number {
  const mech = K / PURE_HAP_K
  const stab = 1 / (1 + dEForm / E_NORM)
  const elec = Math.max(0, 1 - Math.abs(eGap - PURE_HAP_EG) / (2 * PURE_HAP_EG))
  return mech * stab * elec * (TOXICITY_FACTOR[toxicity] ?? 1.0)
}

export const dopants: Dopant[] = [
  { rank: 1, element: "Lu", group: "Lanthanide", K: 107.213, deltaK: 4.17, ionicRadius: 0.86, charge: 3, toxicity: "Low", atomicNumber: 71, eForm: -2.990, dEForm: 0.109, eGap: 2.01, bfom: 0.675, bfomRank: 35 },
  { rank: 2, element: "Ti", group: "3d TM", K: 106.880, deltaK: 3.85, ionicRadius: 0.61, charge: 4, toxicity: "Low", atomicNumber: 22, eForm: -2.985, dEForm: 0.103, eGap: 3.09, bfom: 0.787, bfomRank: 22 },
  { rank: 3, element: "Zr", group: "4d TM", K: 106.585, deltaK: 3.56, ionicRadius: 0.72, charge: 4, toxicity: "Low", atomicNumber: 40, eForm: -2.958, dEForm: 0.077, eGap: 3.69, bfom: 0.867, bfomRank: 17 },
  { rank: 4, element: "Cr", group: "3d TM", K: 106.221, deltaK: 3.21, ionicRadius: 0.62, charge: 3, toxicity: "Moderate", atomicNumber: 24, eForm: -2.670, dEForm: 0.212, eGap: 2.54, bfom: 0.330, bfomRank: 51 },
  { rank: 5, element: "Y", group: "4d TM", K: 106.022, deltaK: 3.02, ionicRadius: 0.90, charge: 3, toxicity: "Low", atomicNumber: 39, eForm: -2.974, dEForm: 0.093, eGap: 4.48, bfom: 0.931, bfomRank: 5 },
  { rank: 6, element: "Hf", group: "5d TM", K: 105.813, deltaK: 2.81, ionicRadius: 0.71, charge: 4, toxicity: "Low", atomicNumber: 72, eForm: -2.966, dEForm: 0.084, eGap: 3.14, bfom: 0.798, bfomRank: 21 },
  { rank: 7, element: "Pt", group: "5d TM", K: 105.802, deltaK: 2.80, ionicRadius: 0.80, charge: 2, toxicity: "Low", atomicNumber: 78, eForm: -2.563, dEForm: 0.319, eGap: 2.71, bfom: 0.620, bfomRank: 37 },
  { rank: 8, element: "Ru", group: "4d TM", K: 105.707, deltaK: 2.71, ionicRadius: 0.68, charge: 3, toxicity: "Moderate", atomicNumber: 44, eForm: -2.581, dEForm: 0.301, eGap: 2.40, bfom: 0.301, bfomRank: 53 },
  { rank: 9, element: "V", group: "3d TM", K: 105.436, deltaK: 2.45, ionicRadius: 0.64, charge: 3, toxicity: "Moderate", atomicNumber: 23, eForm: -2.933, dEForm: 0.051, eGap: 2.57, bfom: 0.380, bfomRank: 46 },
  { rank: 10, element: "Pr", group: "Lanthanide", K: 105.225, deltaK: 2.24, ionicRadius: 0.99, charge: 3, toxicity: "Low", atomicNumber: 59, eForm: -2.994, dEForm: 0.113, eGap: 4.27, bfom: 0.886, bfomRank: 11 },
  { rank: 11, element: "Sc", group: "3d TM", K: 104.743, deltaK: 1.77, ionicRadius: 0.75, charge: 3, toxicity: "Low", atomicNumber: 21, eForm: -2.974, dEForm: 0.093, eGap: 4.44, bfom: 0.916, bfomRank: 7 },
  { rank: 12, element: "Rh", group: "4d TM", K: 104.623, deltaK: 1.66, ionicRadius: 0.67, charge: 3, toxicity: "Low", atomicNumber: 45, eForm: -2.572, dEForm: 0.310, eGap: 2.52, bfom: 0.601, bfomRank: 39 },
  { rank: 13, element: "Tm", group: "Lanthanide", K: 104.387, deltaK: 1.43, ionicRadius: 0.88, charge: 3, toxicity: "Low", atomicNumber: 69, eForm: -2.892, dEForm: 0.010, eGap: 3.46, bfom: 0.880, bfomRank: 13 },
  { rank: 14, element: "Ce", group: "Lanthanide", K: 104.096, deltaK: 1.15, ionicRadius: 1.01, charge: 3, toxicity: "Low", atomicNumber: 58, eForm: -3.020, dEForm: 0.139, eGap: 1.15, bfom: 0.555, bfomRank: 40 },
  { rank: 15, element: "Sr", group: "Alkaline Earth", K: 104.095, deltaK: 1.14, ionicRadius: 1.18, charge: 2, toxicity: "Low", atomicNumber: 38, eForm: -2.882, dEForm: 0.000, eGap: 4.59, bfom: 1.011, bfomRank: 1 },
  { rank: 16, element: "Pd", group: "4d TM", K: 103.876, deltaK: 0.93, ionicRadius: 0.86, charge: 2, toxicity: "Low", atomicNumber: 46, eForm: -2.693, dEForm: 0.189, eGap: 2.55, bfom: 0.660, bfomRank: 36 },
  { rank: 17, element: "Nb", group: "4d TM", K: 103.846, deltaK: 0.90, ionicRadius: 0.64, charge: 5, toxicity: "Low", atomicNumber: 41, eForm: -2.742, dEForm: 0.140, eGap: 2.76, bfom: 0.708, bfomRank: 34 },
  { rank: 18, element: "Mo", group: "4d TM", K: 103.846, deltaK: 0.90, ionicRadius: 0.59, charge: 6, toxicity: "Moderate", atomicNumber: 42, eForm: -2.644, dEForm: 0.238, eGap: 2.68, bfom: 0.323, bfomRank: 52 },
  { rank: 19, element: "W", group: "5d TM", K: 103.815, deltaK: 0.87, ionicRadius: 0.60, charge: 6, toxicity: "Moderate", atomicNumber: 74, eForm: -2.886, dEForm: 0.004, eGap: 2.74, bfom: 0.401, bfomRank: 44 },
  { rank: 20, element: "Re", group: "5d TM", K: 103.754, deltaK: 0.81, ionicRadius: 0.63, charge: 4, toxicity: "Moderate", atomicNumber: 75, eForm: -2.881, dEForm: 0.001, eGap: 2.57, bfom: 0.393, bfomRank: 45 },
  { rank: 21, element: "La", group: "Lanthanide", K: 103.609, deltaK: 0.67, ionicRadius: 1.03, charge: 3, toxicity: "Low", atomicNumber: 57, eForm: -2.984, dEForm: 0.102, eGap: 4.42, bfom: 0.896, bfomRank: 10 },
  { rank: 22, element: "Ir", group: "5d TM", K: 103.529, deltaK: 0.59, ionicRadius: 0.63, charge: 4, toxicity: "Low", atomicNumber: 77, eForm: -2.787, dEForm: 0.095, eGap: 2.62, bfom: 0.721, bfomRank: 33 },
  { rank: 23, element: "Os", group: "5d TM", K: 103.481, deltaK: 0.55, ionicRadius: 0.63, charge: 4, toxicity: "High", atomicNumber: 76, eForm: -2.868, dEForm: 0.014, eGap: 2.52, bfom: 0.077, bfomRank: 58 },
  { rank: 24, element: "Gd", group: "Lanthanide", K: 103.133, deltaK: 0.21, ionicRadius: 0.94, charge: 3, toxicity: "Low", atomicNumber: 64, eForm: -3.026, dEForm: 0.145, eGap: 3.51, bfom: 0.772, bfomRank: 24 },
  { rank: 25, element: "Fe", group: "3d TM", K: 103.085, deltaK: 0.16, ionicRadius: 0.78, charge: 2, toxicity: "Low", atomicNumber: 26, eForm: -2.868, dEForm: 0.014, eGap: 2.31, bfom: 0.742, bfomRank: 31 },
  { rank: 26, element: "Er", group: "Lanthanide", K: 103.024, deltaK: 0.10, ionicRadius: 0.89, charge: 3, toxicity: "Low", atomicNumber: 68, eForm: -2.887, dEForm: 0.005, eGap: 3.47, bfom: 0.874, bfomRank: 15 },
  { rank: 27, element: "Ca", group: "Alkaline Earth", K: 102.918, deltaK: 0.00, ionicRadius: 1.00, charge: 2, toxicity: "Low", atomicNumber: 20, eForm: -2.882, dEForm: 0.000, eGap: 4.60, bfom: 1.000, bfomRank: null },
  { rank: 28, element: "Mg", group: "Alkaline Earth", K: 102.786, deltaK: -0.13, ionicRadius: 0.72, charge: 2, toxicity: "Low", atomicNumber: 12, eForm: -2.875, dEForm: 0.006, eGap: 4.62, bfom: 0.990, bfomRank: 3 },
  { rank: 29, element: "Sm", group: "Lanthanide", K: 102.670, deltaK: -0.24, ionicRadius: 0.96, charge: 3, toxicity: "Low", atomicNumber: 62, eForm: -3.000, dEForm: 0.119, eGap: 4.35, bfom: 0.868, bfomRank: 16 },
  { rank: 30, element: "Nd", group: "Lanthanide", K: 102.670, deltaK: -0.24, ionicRadius: 0.98, charge: 3, toxicity: "Low", atomicNumber: 60, eForm: -2.997, dEForm: 0.116, eGap: 4.46, bfom: 0.881, bfomRank: 12 },
  { rank: 31, element: "Yb", group: "Lanthanide", K: 102.642, deltaK: -0.27, ionicRadius: 1.02, charge: 2, toxicity: "Low", atomicNumber: 70, eForm: -2.891, dEForm: 0.010, eGap: 1.01, bfom: 0.602, bfomRank: 38 },
  { rank: 32, element: "Al", group: "Post-TM", K: 102.572, deltaK: -0.34, ionicRadius: 0.54, charge: 3, toxicity: "Low", atomicNumber: 13, eForm: -2.965, dEForm: 0.083, eGap: 4.67, bfom: 0.913, bfomRank: 8 },
  { rank: 33, element: "Ho", group: "Lanthanide", K: 102.530, deltaK: -0.38, ionicRadius: 0.90, charge: 3, toxicity: "Low", atomicNumber: 67, eForm: -2.888, dEForm: 0.007, eGap: 3.56, bfom: 0.878, bfomRank: 14 },
  { rank: 34, element: "Co", group: "3d TM", K: 102.432, deltaK: -0.47, ionicRadius: 0.75, charge: 2, toxicity: "Moderate", atomicNumber: 27, eForm: -2.772, dEForm: 0.110, eGap: 2.20, bfom: 0.331, bfomRank: 50 },
  { rank: 35, element: "Ga", group: "Post-TM", K: 101.998, deltaK: -0.89, ionicRadius: 0.62, charge: 3, toxicity: "Low", atomicNumber: 31, eForm: -2.846, dEForm: 0.035, eGap: 3.40, bfom: 0.833, bfomRank: 18 },
  { rank: 36, element: "In", group: "Post-TM", K: 101.757, deltaK: -1.13, ionicRadius: 0.80, charge: 3, toxicity: "Low", atomicNumber: 49, eForm: -2.847, dEForm: 0.035, eGap: 3.37, bfom: 0.828, bfomRank: 19 },
  { rank: 37, element: "Tl", group: "Post-TM", K: 101.757, deltaK: -1.13, ionicRadius: 1.50, charge: 1, toxicity: "High", atomicNumber: 81, eForm: -2.885, dEForm: 0.003, eGap: 3.12, bfom: 0.083, bfomRank: 55 },
  { rank: 38, element: "Tb", group: "Lanthanide", K: 101.634, deltaK: -1.25, ionicRadius: 0.92, charge: 3, toxicity: "Low", atomicNumber: 65, eForm: -2.946, dEForm: 0.064, eGap: 4.35, bfom: 0.904, bfomRank: 9 },
  { rank: 39, element: "Ta", group: "5d TM", K: 101.620, deltaK: -1.26, ionicRadius: 0.64, charge: 5, toxicity: "Low", atomicNumber: 73, eForm: -2.897, dEForm: 0.015, eGap: 2.74, bfom: 0.776, bfomRank: 23 },
  { rank: 40, element: "Ba", group: "Alkaline Earth", K: 101.414, deltaK: -1.46, ionicRadius: 1.35, charge: 2, toxicity: "Low", atomicNumber: 56, eForm: -2.896, dEForm: 0.015, eGap: 4.57, bfom: 0.968, bfomRank: 4 },
  { rank: 41, element: "Ni", group: "3d TM", K: 101.364, deltaK: -1.51, ionicRadius: 0.69, charge: 2, toxicity: "Moderate", atomicNumber: 28, eForm: -2.784, dEForm: 0.098, eGap: 2.54, bfom: 0.348, bfomRank: 48 },
  { rank: 42, element: "Zn", group: "3d TM", K: 101.309, deltaK: -1.56, ionicRadius: 0.74, charge: 2, toxicity: "Low", atomicNumber: 30, eForm: -2.777, dEForm: 0.105, eGap: 3.31, bfom: 0.767, bfomRank: 26 },
  { rank: 43, element: "Dy", group: "Lanthanide", K: 101.296, deltaK: -1.58, ionicRadius: 0.91, charge: 3, toxicity: "Low", atomicNumber: 66, eForm: -2.930, dEForm: 0.048, eGap: 4.43, bfom: 0.922, bfomRank: 6 },
  { rank: 44, element: "Ag", group: "4d TM", K: 101.067, deltaK: -1.80, ionicRadius: 1.15, charge: 1, toxicity: "Low", atomicNumber: 47, eForm: -2.578, dEForm: 0.304, eGap: 2.15, bfom: 0.553, bfomRank: 41 },
  { rank: 45, element: "Hg", group: "5d TM", K: 101.067, deltaK: -1.80, ionicRadius: 1.02, charge: 2, toxicity: "High", atomicNumber: 80, eForm: -2.797, dEForm: 0.084, eGap: 2.98, bfom: 0.075, bfomRank: 59 },
  { rank: 46, element: "Cd", group: "4d TM", K: 101.067, deltaK: -1.80, ionicRadius: 0.95, charge: 2, toxicity: "High", atomicNumber: 48, eForm: -2.787, dEForm: 0.095, eGap: 3.31, bfom: 0.077, bfomRank: 57 },
  { rank: 47, element: "Eu", group: "Lanthanide", K: 100.890, deltaK: -1.97, ionicRadius: 1.17, charge: 2, toxicity: "Low", atomicNumber: 63, eForm: -2.945, dEForm: 0.063, eGap: 3.63, bfom: 0.824, bfomRank: 20 },
  { rank: 48, element: "Pb", group: "Post-TM", K: 100.302, deltaK: -2.54, ionicRadius: 1.19, charge: 2, toxicity: "High", atomicNumber: 82, eForm: -2.848, dEForm: 0.034, eGap: 3.06, bfom: 0.078, bfomRank: 56 },
  { rank: 49, element: "Sn", group: "Post-TM", K: 100.302, deltaK: -2.54, ionicRadius: 0.93, charge: 2, toxicity: "Low", atomicNumber: 50, eForm: -2.815, dEForm: 0.067, eGap: 3.13, bfom: 0.768, bfomRank: 25 },
  { rank: 50, element: "Be", group: "Alkaline Earth", K: 100.185, deltaK: -2.66, ionicRadius: 0.45, charge: 2, toxicity: "High", atomicNumber: 4, eForm: -2.877, dEForm: 0.005, eGap: 4.64, bfom: 0.096, bfomRank: 54 },
  { rank: 51, element: "Au", group: "5d TM", K: 100.128, deltaK: -2.71, ionicRadius: 1.37, charge: 1, toxicity: "Low", atomicNumber: 79, eForm: -2.579, dEForm: 0.303, eGap: 2.12, bfom: 0.546, bfomRank: 42 },
  { rank: 52, element: "Bi", group: "Post-TM", K: 99.613, deltaK: -3.21, ionicRadius: 1.03, charge: 3, toxicity: "Moderate", atomicNumber: 83, eForm: -2.814, dEForm: 0.068, eGap: 3.08, bfom: 0.378, bfomRank: 47 },
  { rank: 53, element: "Mn", group: "3d TM", K: 99.047, deltaK: -3.76, ionicRadius: 0.83, charge: 2, toxicity: "Moderate", atomicNumber: 25, eForm: -2.919, dEForm: 0.038, eGap: 2.27, bfom: 0.346, bfomRank: 49 },
  { rank: 54, element: "Cu", group: "3d TM", K: 98.154, deltaK: -4.63, ionicRadius: 0.73, charge: 2, toxicity: "Low", atomicNumber: 29, eForm: -2.577, dEForm: 0.305, eGap: 1.51, bfom: 0.486, bfomRank: 43 },
  { rank: 55, element: "Rb", group: "Alkali", K: 97.163, deltaK: -5.59, ionicRadius: 1.52, charge: 1, toxicity: "Low", atomicNumber: 37, eForm: -2.632, dEForm: 0.249, eGap: 4.65, bfom: 0.751, bfomRank: 28 },
  { rank: 56, element: "Cs", group: "Alkali", K: 96.805, deltaK: -5.94, ionicRadius: 1.67, charge: 1, toxicity: "Low", atomicNumber: 55, eForm: -2.611, dEForm: 0.270, eGap: 4.64, bfom: 0.737, bfomRank: 32 },
  { rank: 57, element: "K", group: "Alkali", K: 96.085, deltaK: -6.64, ionicRadius: 1.38, charge: 1, toxicity: "Low", atomicNumber: 19, eForm: -2.633, dEForm: 0.249, eGap: 4.65, bfom: 0.744, bfomRank: 30 },
  { rank: 58, element: "Na", group: "Alkali", K: 94.939, deltaK: -7.75, ionicRadius: 1.02, charge: 1, toxicity: "Low", atomicNumber: 11, eForm: -2.652, dEForm: 0.230, eGap: 4.64, bfom: 0.746, bfomRank: 29 },
  { rank: 59, element: "Li", group: "Alkali", K: 94.939, deltaK: -7.75, ionicRadius: 0.76, charge: 1, toxicity: "Low", atomicNumber: 3, eForm: -2.658, dEForm: 0.224, eGap: 4.60, bfom: 0.753, bfomRank: 27 }
];

/** Top 15 dopants by BFoM (paper Table 7); the host (BFoM = 1.000 by construction) is the reference, not a candidate. */
export const bfomRanking: Dopant[] = dopants
  .filter(d => d.bfomRank !== null)
  .sort((a, b) => (a.bfomRank as number) - (b.bfomRank as number))
  .slice(0, 15);

// Exploratory co-doping predictions from linear property mixing (paper Table 8). Non-interacting dopants assumed.
export interface CoDopingEntry {
  system: string;
  K: number;
  dEForm: number;
  BFoM: number;
  role: string;
}

export const coDopingData: CoDopingEntry[] = [
  { system: "Sr-Mg", K: 103.44, dEForm: 0.00, BFoM: 1.001, role: "Stability + strength" },
  { system: "Sr-Zn", K: 102.70, dEForm: 0.05, BFoM: 0.882, role: "Stability + antibacterial" },
  { system: "Sr-Y", K: 105.06, dEForm: 0.05, BFoM: 0.969, role: "Stability + luminescence" },
  { system: "Mg-Zn", K: 102.05, dEForm: 0.06, BFoM: 0.875, role: "Strength + antibacterial" },
  { system: "Sr-Fe", K: 103.59, dEForm: 0.01, BFoM: 0.875, role: "Stability + magnetic" },
];

// DFT (VASP, PBE) Voigt-Reuss-Hill bulk moduli at 10 mol%%, 44-atom cell, preferred site, lowest-energy spin state
// (paper Table 6). dK = K_DFT - K_ML. None of the ten dopants stiffens HAp; ML overpredicts by 26.9 +/- 3.1 GPa.
export interface DftElasticEntry {
  element: string;
  site: string;
  moment: number;
  K_ML: number;
  K_DFT: number;
}

export const PURE_HAP_K_DFT = 80.0;

export const dftElastic: DftElasticEntry[] = [
  { element: "Zr", site: "Ca2", moment: 2, K_ML: 106.6, K_DFT: 80.1 },
  { element: "Mg", site: "Ca1", moment: 0, K_ML: 102.8, K_DFT: 80.0 },
  { element: "Sr", site: "Ca1", moment: 0, K_ML: 104.1, K_DFT: 79.7 },
  { element: "Sc", site: "Ca2", moment: 0.98, K_ML: 104.7, K_DFT: 79.6 },
  { element: "La", site: "Ca2", moment: 1, K_ML: 103.6, K_DFT: 77.3 },
  { element: "Cr", site: "Ca2", moment: 4, K_ML: 106.2, K_DFT: 77.1 },
  { element: "Ti", site: "Ca2", moment: 2, K_ML: 106.9, K_DFT: 75.5 },
  { element: "Fe", site: "Ca2", moment: 4, K_ML: 103.1, K_DFT: 75.0 },
  { element: "Zn", site: "Ca2", moment: 0, K_ML: 101.3, K_DFT: 74.0 },
  { element: "Al", site: "Ca2", moment: 1, K_ML: 102.6, K_DFT: 70.6 },
];

export const dftElasticMap = new Map(dftElastic.map(d => [d.element, d]));

// Map element symbol to dopant data for quick lookup
export const dopantMap = new Map(dopants.map(d => [d.element, d]));

// ML bulk-modulus statistics of the 58 dopants by group (paper Table 4); the host is excluded.
export const groupStats = [
  { group: "4d TM", meanK: 104.1, stdK: 2.0, minK: 101.1, maxK: 106.6, n: 9 },
  { group: "5d TM", meanK: 103.2, stdK: 2.0, minK: 100.1, maxK: 105.8, n: 9 },
  { group: "Lanthanide", meanK: 103.2, stdK: 1.6, minK: 100.9, maxK: 107.2, n: 14 },
  { group: "3d TM", meanK: 102.9, stdK: 3.0, minK: 98.2, maxK: 106.9, n: 10 },
  { group: "Alkaline Earth", meanK: 102.1, stdK: 1.7, minK: 100.2, maxK: 104.1, n: 4 },
  { group: "Post-TM", meanK: 101.2, stdK: 1.1, minK: 99.6, maxK: 102.6, n: 7 },
  { group: "Alkali", meanK: 96.0, stdK: 1.0, minK: 94.9, maxK: 97.2, n: 5 },
];
