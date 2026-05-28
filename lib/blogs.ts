export type BlogStatus = "published" | "coming-soon";

export type BlogPost = {
  slug: string;            // URL segment under /blog/
  title: string;           // headline shown in list + on the article
  subjectName: string;     // person the article profiles
  subjectAffiliation: string;
  subjectPhoto: string;    // /people/*.png|.jpg|.JPG
  editorName: string;
  publishedISO: string;    // YYYY-MM-DD; empty string for unpublished
  status: BlogStatus;
  excerpt: string;         // 1-2 sentence summary for the index page
};

export const blogPosts: BlogPost[] = [
  {
    slug: "koutian-wu-ai-for-earth-space-modeling",
    title: "Koutian Wu, AI for Earth and Space Models.",
    subjectName: "Koutian Wu",
    subjectAffiliation: "PhD Student · UT Austin",
    subjectPhoto: "/people/KW-SF.png",
    editorName: "Zesen Huang",
    publishedISO: "2026-05-25",
    status: "published",
    excerpt:
      "A profile of benchmark design, physics-aware code assistance, scientific skill extraction, and daily AI-assisted research workflows.",
  },
  {
    slug: "zesen-huang-heliophysics-ai-skills",
    title: "Zesen Huang, AI agents for heliophysics modeling.",
    subjectName: "Zesen Huang",
    subjectAffiliation: "Postdoc · UCLA",
    subjectPhoto: "/people/zesen.JPG",
    editorName: "Koutian Wu",
    publishedISO: "2026-05-27",
    status: "coming-soon",
    excerpt: "Featured blog coming soon. Edited by Koutian Wu.",
  },
  {
    slug: "chuanfei-dong-space-physics-modeling",
    title: "Chuanfei Dong, space physics modeling with AI.",
    subjectName: "Chuanfei Dong",
    subjectAffiliation: "Professor · Boston University",
    subjectPhoto: "/people/chuanfei-dong.jpg",
    editorName: "Koutian Wu",
    publishedISO: "2026-05-27",
    status: "published",
    excerpt:
      "Two threads from Boston University: a Fourier Neural Operator approach to plasma modeling published in PNAS, and the Mauve satellite mission surveying stellar UV activity to inform exoplanet habitability, extending a 2018 TRAPPIST-1 atmosphere prediction later verified by JWST.",
  },
];

// Auto-sort newest-first by publishedISO so the /blog index always shows
// the latest post first. Posts without a publishedISO (e.g. older
// coming-soon entries) sort to the end. Mutating the exported array in
// place keeps the existing `import { blogPosts }` consumers working with
// zero changes.
blogPosts.sort((a, b) => {
  if (a.publishedISO && b.publishedISO) {
    return b.publishedISO.localeCompare(a.publishedISO);
  }
  if (a.publishedISO) return -1;
  if (b.publishedISO) return 1;
  return 0;
});

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatPublished(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
