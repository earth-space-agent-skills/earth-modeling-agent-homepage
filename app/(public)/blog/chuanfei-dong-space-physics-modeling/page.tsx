import type { Metadata } from "next";
import { ORG_NAME } from "@/lib/skills";

const articlePath = "/blog/chuanfei-dong-space-physics-modeling";

const focusCards = [
  {
    title: "AI-plasma fluid modeling",
    body:
      "A Fourier Neural Operator approach that brings kinetic-physics behavior into a fluid plasma model, reported in PNAS with collaborators Ziyu Huang (lead) and Liang Wang.",
  },
  {
    title: "Mauve stellar UV survey",
    body:
      "Principal investigator on Mauve, a satellite the size of a microwave oven carrying a UV telescope, launched November 28, 2025 from Vandenberg Space Force Base on a SpaceX vehicle for a three-year survey.",
  },
  {
    title: "Cross-domain plasma applications",
    body:
      "The same modeling approach is aimed at space weather forecasting, fusion reactor plasmas, and astrophysical environments around black holes and neutron stars.",
  },
  {
    title: "Stellar activity and habitability",
    body:
      "Mauve studies stellar magnetic activity, flares, and high-energy radiation across the Milky Way in ultraviolet light, including coronal mass ejection detection through spectral lines and post-flare dimming.",
  },
];

const sources = [
  {
    label:
      "AI-powered breakthrough in plasma science (BU Hariri Institute, 2025)",
    href: "https://www.bu.edu/hic/2025/03/20/ai-powered-breakthrough-in-plasma-science-delivers-new-computational-efficiencies-unlocks-potential-for-space-and-fusion-research/",
  },
  {
    label:
      "Is there life in space? Astronomer leads new mission (BU Today, 2025)",
    href: "https://www.bu.edu/articles/2025/is-there-life-in-space-astronomer-leads-new-mission/",
  },
  {
    label: "Chuanfei Dong, Department of Astronomy, Boston University",
    href: "https://www.bu.edu/astronomy/profile/chuanfei-dong/",
  },
];

export const metadata: Metadata = {
  title: `Chuanfei Dong, AI and physics for space and stars · ${ORG_NAME}`,
  description:
    "A featured AI blog profile of Chuanfei Dong (Boston University), covering Fourier Neural Operator plasma modeling published in PNAS and the Mauve stellar UV mission.",
  alternates: {
    canonical: articlePath,
  },
};

export default function ChuanfeiDongFeaturedAiBlogPage() {
  return (
    <>
      <header className="page-hero full-hero standard-hero ai-blog-hero">
        <div className="page-hero-inner">
          <div>
            <div className="crumbs reveal">
              <a href="/">{ORG_NAME}</a>
              <span className="sep">/</span>
              <span className="here">Featured AI Blog</span>
            </div>
            <span className="page-idx reveal">§ Featured AI Blog</span>
            <h1 className="page-title reveal">
              Chuanfei Dong, AI and physics for space and stars.
            </h1>
            <p className="page-thesis reveal">
              Chuanfei Dong works on two connected threads: a Fourier Neural
              Operator approach to plasma modeling, and the Mauve satellite
              mission that surveys stellar activity to help judge which
              exoplanets could support life.
            </p>
          </div>

          <aside className="ai-profile-panel reveal" aria-label="Article details">
            <div className="ai-profile-photo">
              <img src="/people/chuanfei-dong.jpg" alt="Chuanfei Dong" />
            </div>
            <div className="ai-profile-copy">
              <span className="card-eyebrow">Subject</span>
              <h2>Chuanfei Dong</h2>
              <p>
                Assistant Professor of Astronomy and Electrical and Computer
                Engineering at Boston University, and a Hariri Institute Faculty
                Affiliate.
              </p>
              <div className="ai-profile-meta">
                <span>
                  Responding editor
                  <b>Koutian Wu</b>
                </span>
                <span>
                  Published
                  <b>May 27, 2026</b>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section className="sec ai-article-section">
        <div className="ai-article-layout">
          <article className="article-prose reveal">
            <p className="article-lede">
              Chuanfei Dong&apos;s recent work moves along two tracks that meet
              in the same question: when can we trust a model of a plasma we
              cannot fully simulate, and what does that mean for stars and the
              planets around them. One track puts machine learning inside a
              fluid plasma model. The other puts a small ultraviolet telescope
              in orbit to watch active stars.
            </p>

            <p>
              The first track is an AI-plasma study led from Boston University.
              Working with Ziyu Huang (lead) and Liang Wang, Dong&apos;s group
              integrates machine learning with kinetic physics inside a fluid
              plasma model, using the Fourier Neural Operator (FNO). The
              motivation is that fully kinetic simulations are expensive, and
              many problems of interest sit beyond what direct simulation can
              cover at scale. The BU Hariri Institute reports that the
              FNO-based approach can replicate the results of fully kinetic
              simulations at a fraction of the cost. The work was published in
              the Proceedings of the National Academy of Sciences, with support
              from NASA grant 80NSSC23K0908 and an Alfred P. Sloan Research
              Fellowship.
            </p>

            <p>
              In Dong&apos;s own words, the target problem is the hard part of
              plasma physics. &quot;This research focuses on nonlinear plasma
              phenomena, where plasma waves and charged particles interact in
              highly intricate ways. These processes have traditionally been
              difficult to model without expensive kinetic simulations.&quot;
              The framing he gives the result is equally direct. &quot;By
              combining artificial intelligence with fundamental physics, this
              study marks a major step forward in computational plasma science,
              offering a powerful new tool for researchers across multiple
              disciplines.&quot;
            </p>

            <p>
              The application surface is broad on purpose. The same class of
              model is aimed at space weather forecasting, which matters for
              satellite operations and power grid protection, at fusion energy
              research and reactor plasma behavior, and at astrophysical
              environments such as the magnetized plasmas around black holes
              and neutron stars. The common thread is that each setting needs
              kinetic-level behavior in regimes where a purely fluid model is
              not enough and a fully kinetic one is too costly.
            </p>

            <p>
              The second track is Mauve, where Dong is a principal
              investigator. Mauve is a satellite smaller than a microwave oven,
              equipped with a UV telescope. It launched on November 28, 2025
              from Vandenberg Space Force Base on a SpaceX vehicle, and the
              mission runs for three years. Mauve surveys stellar magnetic
              activity, flares, and high-energy radiation across the Milky Way
              galaxy in ultraviolet light, and it detects coronal mass
              ejections through spectral line analysis and through the dimming
              of stellar light after flares. The mission is funded by the
              European Union&apos;s Horizon Europe research program and by UK
              Research and Innovation&apos;s Horizon Europe guarantee scheme,
              and its survey program is open to scientists worldwide, including
              PhD students and early-career researchers.
            </p>

            <p>
              The connection to habitability is explicit. As Dong puts it,
              &quot;By understanding active stars and their impacts, Mauve
              directly advances our ability to assess which exoplanets could
              support life.&quot; UV characterization of a host star is part of
              the input any serious habitability assessment needs, because
              flares and high-energy radiation shape what a planetary
              atmosphere can hold onto over time.
            </p>

            <p>
              The two threads share a stance that fits {ORG_NAME}: be careful
              about where physics, statistics, and AI can each be trusted, and
              build the evaluations that let that judgement be made. The
              plasma-modeling work asks where a learned operator can stand in
              for kinetic simulation. The Mauve mission asks what we can
              actually measure about a star before we claim its planets are
              habitable. Both leave their answers open to the wider community.
            </p>
          </article>

          <aside className="article-aside reveal">
            <div className="article-aside-block">
              <span className="card-eyebrow">Focus Areas</span>
              <div className="focus-list">
                {focusCards.map((card) => (
                  <div className="focus-item" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="article-aside-block">
              <span className="card-eyebrow">Related Links</span>
              <ul className="source-list">
                {sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noopener">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
