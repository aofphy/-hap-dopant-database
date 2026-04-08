export interface Dopant {
  rank: number;
  element: string;
  group: string;
  K: number;
  deltaK: number;
  ionicRadius: number;
  charge: number;
  toxicity: string;
  atomicNumber: number;
}

export const PURE_HAP_K = 102.918;

export const dopants: Dopant[] = [
  { rank: 1, element: "Lu", group: "Lanthanide", K: 107.213, deltaK: 4.17, ionicRadius: 0.86, charge: 3, toxicity: "Low", atomicNumber: 71 },
  { rank: 2, element: "Ti", group: "3d TM", K: 106.880, deltaK: 3.85, ionicRadius: 0.61, charge: 4, toxicity: "Low", atomicNumber: 22 },
  { rank: 3, element: "Zr", group: "4d TM", K: 106.585, deltaK: 3.56, ionicRadius: 0.72, charge: 4, toxicity: "Low", atomicNumber: 40 },
  { rank: 4, element: "Cr", group: "3d TM", K: 106.221, deltaK: 3.21, ionicRadius: 0.62, charge: 3, toxicity: "Moderate", atomicNumber: 24 },
  { rank: 5, element: "Y", group: "4d TM", K: 106.022, deltaK: 3.01, ionicRadius: 0.90, charge: 3, toxicity: "Low", atomicNumber: 39 },
  { rank: 6, element: "Hf", group: "5d TM", K: 105.813, deltaK: 2.81, ionicRadius: 0.71, charge: 4, toxicity: "Low", atomicNumber: 72 },
  { rank: 7, element: "Pt", group: "5d TM", K: 105.802, deltaK: 2.80, ionicRadius: 0.80, charge: 2, toxicity: "Low", atomicNumber: 78 },
  { rank: 8, element: "Ru", group: "4d TM", K: 105.707, deltaK: 2.71, ionicRadius: 0.68, charge: 3, toxicity: "Moderate", atomicNumber: 44 },
  { rank: 9, element: "V", group: "3d TM", K: 105.436, deltaK: 2.44, ionicRadius: 0.64, charge: 3, toxicity: "Moderate", atomicNumber: 23 },
  { rank: 10, element: "Pr", group: "Lanthanide", K: 105.225, deltaK: 2.24, ionicRadius: 0.99, charge: 3, toxicity: "Low", atomicNumber: 59 },
  { rank: 11, element: "Sc", group: "3d TM", K: 104.743, deltaK: 1.77, ionicRadius: 0.75, charge: 3, toxicity: "Low", atomicNumber: 21 },
  { rank: 12, element: "Rh", group: "4d TM", K: 104.623, deltaK: 1.65, ionicRadius: 0.67, charge: 3, toxicity: "Low", atomicNumber: 45 },
  { rank: 13, element: "Tm", group: "Lanthanide", K: 104.387, deltaK: 1.42, ionicRadius: 0.88, charge: 3, toxicity: "Low", atomicNumber: 69 },
  { rank: 14, element: "Ce", group: "Lanthanide", K: 104.096, deltaK: 1.14, ionicRadius: 1.01, charge: 3, toxicity: "Low", atomicNumber: 58 },
  { rank: 15, element: "Sr", group: "Alkaline Earth", K: 104.095, deltaK: 1.14, ionicRadius: 1.18, charge: 2, toxicity: "Low", atomicNumber: 38 },
  { rank: 16, element: "Pd", group: "4d TM", K: 103.876, deltaK: 0.93, ionicRadius: 0.86, charge: 2, toxicity: "Low", atomicNumber: 46 },
  { rank: 17, element: "Nb", group: "4d TM", K: 103.846, deltaK: 0.90, ionicRadius: 0.64, charge: 5, toxicity: "Low", atomicNumber: 41 },
  { rank: 18, element: "Mo", group: "4d TM", K: 103.846, deltaK: 0.90, ionicRadius: 0.59, charge: 6, toxicity: "Moderate", atomicNumber: 42 },
  { rank: 19, element: "W", group: "5d TM", K: 103.815, deltaK: 0.87, ionicRadius: 0.60, charge: 6, toxicity: "Low", atomicNumber: 74 },
  { rank: 20, element: "Re", group: "5d TM", K: 103.754, deltaK: 0.81, ionicRadius: 0.63, charge: 4, toxicity: "Low", atomicNumber: 75 },
  { rank: 21, element: "La", group: "Lanthanide", K: 103.609, deltaK: 0.67, ionicRadius: 1.03, charge: 3, toxicity: "Low", atomicNumber: 57 },
  { rank: 22, element: "Ir", group: "5d TM", K: 103.529, deltaK: 0.59, ionicRadius: 0.63, charge: 4, toxicity: "Low", atomicNumber: 77 },
  { rank: 23, element: "Os", group: "5d TM", K: 103.481, deltaK: 0.54, ionicRadius: 0.63, charge: 4, toxicity: "Moderate", atomicNumber: 76 },
  { rank: 24, element: "Gd", group: "Lanthanide", K: 103.133, deltaK: 0.21, ionicRadius: 0.94, charge: 3, toxicity: "Low", atomicNumber: 64 },
  { rank: 25, element: "Fe", group: "3d TM", K: 103.085, deltaK: 0.16, ionicRadius: 0.78, charge: 2, toxicity: "Low", atomicNumber: 26 },
  { rank: 26, element: "Er", group: "Lanthanide", K: 103.024, deltaK: 0.10, ionicRadius: 0.89, charge: 3, toxicity: "Low", atomicNumber: 68 },
  { rank: 27, element: "Ca", group: "Alkaline Earth", K: 102.918, deltaK: 0.0, ionicRadius: 1.00, charge: 2, toxicity: "Low", atomicNumber: 20 },
  { rank: 28, element: "Mg", group: "Alkaline Earth", K: 102.786, deltaK: -0.13, ionicRadius: 0.72, charge: 2, toxicity: "Low", atomicNumber: 12 },
  { rank: 29, element: "Sm", group: "Lanthanide", K: 102.670, deltaK: -0.24, ionicRadius: 0.96, charge: 3, toxicity: "Low", atomicNumber: 62 },
  { rank: 30, element: "Nd", group: "Lanthanide", K: 102.670, deltaK: -0.24, ionicRadius: 0.98, charge: 3, toxicity: "Low", atomicNumber: 60 },
  { rank: 31, element: "Yb", group: "Lanthanide", K: 102.642, deltaK: -0.27, ionicRadius: 1.02, charge: 2, toxicity: "Low", atomicNumber: 70 },
  { rank: 32, element: "Al", group: "Post-TM", K: 102.572, deltaK: -0.34, ionicRadius: 0.54, charge: 3, toxicity: "Low", atomicNumber: 13 },
  { rank: 33, element: "Ho", group: "Lanthanide", K: 102.530, deltaK: -0.38, ionicRadius: 0.90, charge: 3, toxicity: "Low", atomicNumber: 67 },
  { rank: 34, element: "Co", group: "3d TM", K: 102.432, deltaK: -0.47, ionicRadius: 0.75, charge: 2, toxicity: "Low", atomicNumber: 27 },
  { rank: 35, element: "Ga", group: "Post-TM", K: 101.998, deltaK: -0.90, ionicRadius: 0.62, charge: 3, toxicity: "Low", atomicNumber: 31 },
  { rank: 36, element: "In", group: "Post-TM", K: 101.757, deltaK: -1.13, ionicRadius: 0.80, charge: 3, toxicity: "Low", atomicNumber: 49 },
  { rank: 37, element: "Tl", group: "Post-TM", K: 101.757, deltaK: -1.13, ionicRadius: 1.50, charge: 1, toxicity: "High", atomicNumber: 81 },
  { rank: 38, element: "Tb", group: "Lanthanide", K: 101.634, deltaK: -1.25, ionicRadius: 0.92, charge: 3, toxicity: "Low", atomicNumber: 65 },
  { rank: 39, element: "Ta", group: "5d TM", K: 101.620, deltaK: -1.26, ionicRadius: 0.64, charge: 5, toxicity: "Low", atomicNumber: 73 },
  { rank: 40, element: "Ba", group: "Alkaline Earth", K: 101.414, deltaK: -1.46, ionicRadius: 1.35, charge: 2, toxicity: "Low", atomicNumber: 56 },
  { rank: 41, element: "Ni", group: "3d TM", K: 101.364, deltaK: -1.51, ionicRadius: 0.69, charge: 2, toxicity: "Moderate", atomicNumber: 28 },
  { rank: 42, element: "Zn", group: "3d TM", K: 101.309, deltaK: -1.57, ionicRadius: 0.74, charge: 2, toxicity: "Low", atomicNumber: 30 },
  { rank: 43, element: "Dy", group: "Lanthanide", K: 101.296, deltaK: -1.58, ionicRadius: 0.91, charge: 3, toxicity: "Low", atomicNumber: 66 },
  { rank: 44, element: "Cd", group: "4d TM", K: 101.067, deltaK: -1.80, ionicRadius: 0.95, charge: 2, toxicity: "High", atomicNumber: 48 },
  { rank: 45, element: "Ag", group: "4d TM", K: 101.067, deltaK: -1.80, ionicRadius: 1.15, charge: 1, toxicity: "Low", atomicNumber: 47 },
  { rank: 46, element: "Hg", group: "5d TM", K: 101.067, deltaK: -1.80, ionicRadius: 1.02, charge: 2, toxicity: "High", atomicNumber: 80 },
  { rank: 47, element: "Eu", group: "Lanthanide", K: 100.890, deltaK: -1.97, ionicRadius: 1.17, charge: 2, toxicity: "Low", atomicNumber: 63 },
  { rank: 48, element: "Pb", group: "Post-TM", K: 100.302, deltaK: -2.54, ionicRadius: 1.19, charge: 2, toxicity: "High", atomicNumber: 82 },
  { rank: 49, element: "Sn", group: "Post-TM", K: 100.302, deltaK: -2.54, ionicRadius: 0.93, charge: 2, toxicity: "Low", atomicNumber: 50 },
  { rank: 50, element: "Be", group: "Alkaline Earth", K: 100.185, deltaK: -2.66, ionicRadius: 0.45, charge: 2, toxicity: "High", atomicNumber: 4 },
  { rank: 51, element: "Au", group: "5d TM", K: 100.128, deltaK: -2.71, ionicRadius: 1.37, charge: 1, toxicity: "Low", atomicNumber: 79 },
  { rank: 52, element: "Bi", group: "Post-TM", K: 99.613, deltaK: -3.21, ionicRadius: 1.03, charge: 3, toxicity: "Moderate", atomicNumber: 83 },
  { rank: 53, element: "Mn", group: "3d TM", K: 99.047, deltaK: -3.76, ionicRadius: 0.83, charge: 2, toxicity: "Low", atomicNumber: 25 },
  { rank: 54, element: "Cu", group: "3d TM", K: 98.154, deltaK: -4.63, ionicRadius: 0.73, charge: 2, toxicity: "Low", atomicNumber: 29 },
  { rank: 55, element: "Rb", group: "Alkali", K: 97.163, deltaK: -5.59, ionicRadius: 1.52, charge: 1, toxicity: "Low", atomicNumber: 37 },
  { rank: 56, element: "Cs", group: "Alkali", K: 96.805, deltaK: -5.94, ionicRadius: 1.67, charge: 1, toxicity: "Low", atomicNumber: 55 },
  { rank: 57, element: "K", group: "Alkali", K: 96.085, deltaK: -6.64, ionicRadius: 1.38, charge: 1, toxicity: "Low", atomicNumber: 19 },
  { rank: 58, element: "Na", group: "Alkali", K: 94.939, deltaK: -7.75, ionicRadius: 1.02, charge: 1, toxicity: "Low", atomicNumber: 11 },
  { rank: 59, element: "Li", group: "Alkali", K: 94.939, deltaK: -7.75, ionicRadius: 0.76, charge: 1, toxicity: "Low", atomicNumber: 3 },
];

// BFoM top 15 from manuscript Table VI
export interface BFoMEntry {
  rank: number;
  element: string;
  K: number;
  EsEst: number;
  Eg: number;
  Tf: number;
  BFoM: number;
}

export const bfomRanking: BFoMEntry[] = [
  { rank: 1, element: "Sr", K: 104.09, EsEst: 0.23, Eg: 3.12, Tf: 1.0, BFoM: 0.887 },
  { rank: 2, element: "Y", K: 106.02, EsEst: 0.88, Eg: 2.95, Tf: 1.0, BFoM: 0.642 },
  { rank: 3, element: "Sc", K: 104.74, EsEst: 0.80, Eg: 3.05, Tf: 1.0, BFoM: 0.638 },
  { rank: 4, element: "Mg", K: 102.79, EsEst: 0.30, Eg: 3.18, Tf: 1.0, BFoM: 0.832 },
  { rank: 5, element: "La", K: 103.61, EsEst: 0.80, Eg: 2.91, Tf: 1.0, BFoM: 0.618 },
  { rank: 6, element: "Ce", K: 104.10, EsEst: 0.80, Eg: 2.88, Tf: 1.0, BFoM: 0.615 },
  { rank: 7, element: "Nd", K: 102.67, EsEst: 0.80, Eg: 2.94, Tf: 1.0, BFoM: 0.602 },
  { rank: 8, element: "Pr", K: 105.23, EsEst: 0.80, Eg: 2.86, Tf: 1.0, BFoM: 0.598 },
  { rank: 9, element: "Eu", K: 100.89, EsEst: 0.23, Eg: 3.21, Tf: 1.0, BFoM: 0.865 },
  { rank: 10, element: "Yb", K: 102.64, EsEst: 0.20, Eg: 3.15, Tf: 1.0, BFoM: 0.871 },
  { rank: 11, element: "Zn", K: 101.31, EsEst: 0.27, Eg: 3.08, Tf: 1.0, BFoM: 0.836 },
  { rank: 12, element: "Mn", K: 99.05, EsEst: 0.23, Eg: 3.02, Tf: 1.0, BFoM: 0.815 },
  { rank: 13, element: "Fe", K: 103.08, EsEst: 0.25, Eg: 2.95, Tf: 1.0, BFoM: 0.812 },
  { rank: 14, element: "Ti", K: 106.88, EsEst: 1.02, Eg: 2.78, Tf: 1.0, BFoM: 0.564 },
  { rank: 15, element: "Zr", K: 106.58, EsEst: 0.85, Eg: 2.82, Tf: 1.0, BFoM: 0.592 },
];

// Co-doping combinations from manuscript Table VII
export interface CoDopingEntry {
  system: string;
  K: number;
  EsEst: number;
  BFoM: number;
  role: string;
}

export const coDopingData: CoDopingEntry[] = [
  { system: "Sr-Mg", K: 103.44, EsEst: 0.27, BFoM: 0.813, role: "Stability + strength" },
  { system: "Sr-Zn", K: 102.70, EsEst: 0.25, BFoM: 0.824, role: "Stability + antibacterial" },
  { system: "Sr-Y", K: 105.06, EsEst: 0.56, BFoM: 0.676, role: "Stability + luminescence" },
  { system: "Mg-Zn", K: 102.05, EsEst: 0.29, BFoM: 0.798, role: "Strength + antibacterial" },
  { system: "Sr-Fe", K: 103.59, EsEst: 0.24, BFoM: 0.831, role: "Stability + magnetic" },
];

// Map element symbol to dopant data for quick lookup
export const dopantMap = new Map(dopants.map(d => [d.element, d]));

// Group statistics from manuscript Table IV
export const groupStats = [
  { group: "5d TM", meanK: 103.7, stdK: 2.1, minK: 100.1, maxK: 105.8, n: 10 },
  { group: "4d TM", meanK: 103.6, stdK: 2.0, minK: 101.1, maxK: 106.6, n: 10 },
  { group: "3d TM", meanK: 103.4, stdK: 2.7, minK: 98.2, maxK: 106.9, n: 10 },
  { group: "Lanthanide", meanK: 103.0, stdK: 1.5, minK: 100.9, maxK: 107.2, n: 14 },
  { group: "Alkaline Earth", meanK: 102.3, stdK: 1.6, minK: 100.2, maxK: 104.1, n: 5 },
  { group: "Post-TM", meanK: 101.1, stdK: 1.0, minK: 99.6, maxK: 102.6, n: 7 },
  { group: "Alkali", meanK: 95.8, stdK: 1.0, minK: 94.9, maxK: 97.2, n: 5 },
];
