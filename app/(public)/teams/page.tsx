import type { Metadata } from "next";
import { people, ROLE_SECTIONS, ORG_NAME, type Person, type PersonRole } from "@/lib/skills";

export const metadata: Metadata = {
  title: `Teams · ${ORG_NAME}`,
  description:
    "People maintaining Earth-Space-Modeling-skills: professors, postdocs, and collaborators.",
};

function autoInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function PersonCard({ p }: { p: Person }) {
  const initials = p.initials ?? autoInitials(p.name);
  const portraitStyle: React.CSSProperties = {
    background:
      p.gradient ??
      "linear-gradient(135deg, #eaf0f7 0%, #b8cbe0 45%, #2f3c52 110%)",
    color: "var(--paper)",
  };

  const inner = (
    <>
      <div className="portrait" style={portraitStyle}>
        <span>{initials}</span>
      </div>
      <div className="person-body">
        <h4 className="nm">
          {p.name}
          {p.note ? <span className="person-note"> {p.note}</span> : null}
        </h4>
        {p.affiliation ? <div className="ttl">{p.affiliation}</div> : null}
      </div>
    </>
  );

  if (p.link) {
    return (
      <a
        className="person-card reveal"
        href={p.link}
        target="_blank"
        rel="noopener"
      >
        {inner}
      </a>
    );
  }
  return <div className="person-card reveal">{inner}</div>;
}

export default function TeamsPage() {
  const byRole = new Map<PersonRole, Person[]>();
  for (const s of ROLE_SECTIONS) byRole.set(s.role, []);
  for (const p of people) byRole.get(p.role)?.push(p);

  return (
    <section className="stakes" id="teams">
      <div className="stakes-inner">
        <div className="stakes-main">
          <span className="mono reveal">— Teams</span>
          <h2 className="stakes-title reveal">
            People behind {ORG_NAME}.
          </h2>
          <div className="stakes-body directions-body reveal">
            <p>
              Maintainers, contributors, and collaborators across institutions.
              Organized by role.
            </p>

            {ROLE_SECTIONS.map((section) => {
              const group = byRole.get(section.role) ?? [];
              if (group.length === 0) return null;
              return (
                <div key={section.role} className="skill-group">
                  <h3 className="skill-group-title">{section.label}</h3>
                  <div className="teams-grid">
                    {group.map((p) => (
                      <PersonCard key={p.name} p={p} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ul className="tenets stakes-tenets reveal">
          {ROLE_SECTIONS.map((section) => {
            const count = byRole.get(section.role)?.length ?? 0;
            if (count === 0) return null;
            return (
              <li key={section.role}>
                <span className="k">— {section.idx}</span>
                <span className="v">
                  <b>{section.label}</b>
                  {count} {count === 1 ? "person" : "people"}.
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
