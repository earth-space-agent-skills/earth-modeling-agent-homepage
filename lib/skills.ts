export type SkillStatus = "complete" | "scaffold";

export type Skill = {
  name: string;
  href: string;
  long: string;
  status: SkillStatus;
};

export type SkillGroup = {
  slug: string;
  idx: string;
  nm: string;
  short: string;
  dsc: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    slug: "earth-system",
    idx: "01",
    nm: "Earth-system / coupled",
    short: "Earth-system",
    dsc: "Coupled Earth and climate system models.",
    skills: [
      { name: "cam-skill", href: "https://github.com/earth-space-agent-skills/cam-skill", long: "Community Atmosphere Model (CAM)", status: "complete" },
      { name: "cesm-skill", href: "https://github.com/earth-space-agent-skills/cesm-skill", long: "Community Earth System Model (CESM) superproject", status: "scaffold" },
      { name: "e3sm-skill", href: "https://github.com/earth-space-agent-skills/e3sm-skill", long: "Energy Exascale Earth System Model (E3SM)", status: "complete" },
      { name: "noresm-skill", href: "https://github.com/earth-space-agent-skills/noresm-skill", long: "Norwegian Earth System Model (NorESM)", status: "scaffold" },
      { name: "fms-skill", href: "https://github.com/earth-space-agent-skills/fms-skill", long: "GFDL Flexible Modeling System (FMS) framework", status: "scaffold" },
      { name: "ESFlow preprint", href: "https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2237/", long: "module-grounded agentic AI framework for complex Earth system model analysis (Tian Zhou et al., 2026)", status: "complete" },
      { name: "ESFlow Zenodo record", href: "https://zenodo.org/records/19350842", long: "source code, sample data, and benchmark outputs for ESFlow", status: "complete" },
    ],
  },
  {
    slug: "atmosphere",
    idx: "02",
    nm: "Atmosphere",
    short: "Atmosphere",
    dsc: "Atmospheric circulation, weather, and chemistry models.",
    skills: [
      { name: "wrf-skill", href: "https://github.com/earth-space-agent-skills/wrf-skill", long: "Weather Research and Forecasting (WRF)", status: "complete" },
      { name: "waccm-skill", href: "https://github.com/earth-space-agent-skills/waccm-skill", long: "Whole Atmosphere Community Climate Model (WACCM)", status: "scaffold" },
      { name: "waccmx-skill", href: "https://github.com/earth-space-agent-skills/waccmx-skill", long: "Extended WACCM (ionosphere/thermosphere)", status: "scaffold" },
      { name: "gfdl-fv3-skill", href: "https://github.com/earth-space-agent-skills/gfdl-fv3-skill", long: "GFDL FV3 cubed-sphere dynamical core", status: "scaffold" },
      { name: "openifs-skill", href: "https://github.com/earth-space-agent-skills/openifs-skill", long: "ECMWF OpenIFS (research/education)", status: "scaffold" },
      { name: "regcm-skill", href: "https://github.com/earth-space-agent-skills/regcm-skill", long: "ICTP Regional Climate Model", status: "scaffold" },
      { name: "geos-chem-skill", href: "https://github.com/earth-space-agent-skills/geos-chem-skill", long: "GEOS-Chem atmospheric chemistry", status: "scaffold" },
    ],
  },
  {
    slug: "land-hydrology",
    idx: "03",
    nm: "Land surface and hydrology",
    short: "Land / hydrology",
    dsc: "Land surface models and watershed hydrology.",
    skills: [
      { name: "noahmp-skill", href: "https://github.com/earth-space-agent-skills/noahmp-skill", long: "Noah-MP land surface model and HRLDAS", status: "complete" },
      { name: "ctsm-skill", href: "https://github.com/earth-space-agent-skills/ctsm-skill", long: "Community Terrestrial Systems Model (CTSM/CLM)", status: "complete" },
      { name: "jules-skill", href: "https://github.com/earth-space-agent-skills/jules-skill", long: "Joint UK Land Environment Simulator (JULES)", status: "complete" },
      { name: "summa-skill", href: "https://github.com/earth-space-agent-skills/summa-skill", long: "Structure for Unifying Multiple Modeling Alternatives (SUMMA)", status: "complete" },
      { name: "vic-skill", href: "https://github.com/earth-space-agent-skills/vic-skill", long: "Variable Infiltration Capacity (VIC) macroscale hydrologic model", status: "complete" },
      { name: "parflow-skill", href: "https://github.com/earth-space-agent-skills/parflow-skill", long: "ParFlow parallel watershed flow model", status: "complete" },
    ],
  },
  {
    slug: "ocean",
    idx: "04",
    nm: "Ocean",
    short: "Ocean",
    dsc: "Global and regional ocean circulation models.",
    skills: [
      { name: "mom6-skill", href: "https://github.com/earth-space-agent-skills/mom6-skill", long: "Modular Ocean Model 6 (MOM6)", status: "complete" },
      { name: "mitgcm-skill", href: "https://github.com/earth-space-agent-skills/mitgcm-skill", long: "MIT General Circulation Model (MITgcm)", status: "scaffold" },
      { name: "fesom2-skill", href: "https://github.com/earth-space-agent-skills/fesom2-skill", long: "FESOM2 unstructured-mesh ocean", status: "scaffold" },
      { name: "roms-skill", href: "https://github.com/earth-space-agent-skills/roms-skill", long: "Regional Ocean Modeling System (ROMS)", status: "scaffold" },
    ],
  },
  {
    slug: "sea-ice",
    idx: "05",
    nm: "Sea ice",
    short: "Sea ice",
    dsc: "Sea-ice dynamics and thermodynamics.",
    skills: [
      { name: "cice-skill", href: "https://github.com/earth-space-agent-skills/cice-skill", long: "CICE Consortium sea-ice model", status: "scaffold" },
    ],
  },
  {
    slug: "solid-earth",
    idx: "06",
    nm: "Solid Earth / finite fault",
    short: "Solid Earth",
    dsc: "Earthquake source and finite-fault modeling skill packages.",
    skills: [
      { name: "wasp-finitefault-skill", href: "https://github.com/liuwei1997/wasp-finitefault-skill", long: "WASP finite-fault source inversion skill package", status: "complete" },
    ],
  },
  {
    slug: "heliophysics-models",
    idx: "07",
    nm: "Heliophysics / space physics models",
    short: "Heliophysics models",
    dsc: "Space-plasma and solar-wind models maintained alongside the core org.",
    skills: [
      { name: "laps-skill",            href: "https://github.com/huangzesen/laps-skill",            long: "LAPS, the UCLA-Pseudo-Spectral 3D Hall-MHD Fortran code (LingTai skill)", status: "complete" },
      { name: "LAPS",                  href: "https://github.com/chenshihelio/LAPS",                long: "UCLA-Pseudo-Spectral 3D Hall-MHD Fortran code upstream repository",       status: "complete" },
      { name: "lingtai-batsrus-skill", href: "https://github.com/huangzesen/lingtai-batsrus-skill", long: "BATS-R-US, the Block-Adaptive Tree Solar-wind Roe-type Upwind Scheme MHD solver at the core of SWMF", status: "complete" },
    ],
  },
  {
    slug: "heliophysics-data",
    idx: "08",
    nm: "Heliophysics observation / data access",
    short: "Heliophysics data",
    dsc: "MCP servers and Python libraries for heliophysics data archives.",
    skills: [
      { name: "xhelio-cdaweb", href: "https://github.com/huangzesen/xhelio-cdaweb", long: "NASA CDAWeb data access for heliophysics: MCP server + Python library", status: "complete" },
      { name: "xhelio-spice",  href: "https://github.com/huangzesen/xhelio-spice",  long: "SPICE toolkit access for heliophysics",                                    status: "complete" },
      { name: "xhelio-pds",    href: "https://github.com/huangzesen/xhelio-pds",    long: "NASA PDS (Planetary Data System) access for heliophysics",                 status: "complete" },
    ],
  },
];

// Partner skill repos are folded into skillGroups above as additional domain groups.
// /#partners is now a People grid.

export type Person = {
  name: string;
  affiliation: string;
  author?: boolean;
  note?: string;
  github?: string;
};

export const people: Person[] = [
  { name: "Koutian Wu",      affiliation: "PhD Student, UT Austin", author: true,  github: "ktwu01" },
  { name: "Zesen Huang",     affiliation: "Postdoc, UCLA",          author: true,  note: "corresponding", github: "huangzesen" },
  { name: "Weihao Liu",      affiliation: "PhD Candidate, UMich",   author: true },
  { name: "Liuwei Xu",       affiliation: "UCLA", github: "liuwei1997" },
  { name: "Chuanfei Dong",   affiliation: "Professor, Boston University" },
  { name: "Marco Velli",     affiliation: "Professor, UCLA" },
  { name: "Tamas I. Gombosi",affiliation: "Professor, UMich" },
  { name: "Jiachen Liu",     affiliation: "Meta" },
  { name: "Zigong Xu",       affiliation: "" },
  { name: "Yuhan Wang",      affiliation: "ETH Zürich" },
  { name: "Liting Mai",      affiliation: "UIUC" },
  { name: "Tian Zhou",       affiliation: "PNNL" },
];

export const ORG_HANDLE = "earth-space-agent-skills";
export const ORG_URL = "https://github.com/earth-space-agent-skills";
export const ORG_NAME = "Earth-Space-Modeling-skills";
