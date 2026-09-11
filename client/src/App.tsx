import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Suspect = {
  id: string;
  name: string;
  role: string;
  description: string;
  statement: string;
  alibi: string;
};

type Evidence = {
  id: string;
  title: string;
  type: string;
  description: string;
  discoveredAt: string;
};

type Investigation = {
  caseId: string;
  title: string;
  subtitle: string;
  briefing: string;
  victim: string;
  suspects: Suspect[];
  evidence: Evidence[];
  timeline: {
    time: string;
    event: string;
  }[];
};

type Verdict = {
  solved: boolean;
  score: number;
  total: number;
  message?: string;
  solution?: {
    explanation: string;
    necklaceLocation: string;
  };
};

export default function App() {
  const [caseFile, setCaseFile] = useState<Investigation>();
  const [error, setError] = useState("");

  const [tab, setTab] = useState<
    "evidence" | "suspects" | "timeline"
  >("evidence");

  const [selectedEvidence, setSelectedEvidence] =
    useState<Evidence>();

  const [culpritId, setCulpritId] = useState("");
  const [attackSuspectId, setAttackSuspectId] = useState("");
  const [necklaceLocation, setNecklaceLocation] = useState("");
  const [verdict, setVerdict] = useState<Verdict>();

  useEffect(() => {
    fetch("/api/cases/case-001")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(
            "The case file is not loaded yet. Seed the database first."
          );
        }

        return response.json();
      })
      .then(({ case: loadedCase }) => {
        setCaseFile(loadedCase);
      })
      .catch((reason: Error) => {
        setError(reason.message);
      });
  }, []);

  const accuse = async (event: FormEvent) => {
    event.preventDefault();
    setVerdict(undefined);

    const response = await fetch(
      "/api/cases/case-001/accusation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          culpritId,
          attackSuspectId,
          necklaceLocation,
        }),
      }
    );

    setVerdict(await response.json());
  };

  const changeTab = (
    nextTab: "evidence" | "suspects" | "timeline"
  ) => {
    setTab(nextTab);
    setSelectedEvidence(undefined);
  };

  if (error) {
    return (
      <main className="state">
        <h1>Digital Detective</h1>
        <p>{error}</p>
      </main>
    );
  }

  if (!caseFile) {
    return (
      <main className="state">
        <p>Opening case file…</p>
      </main>
    );
  }

  return (
    <main>
      <header>
        <p className="eyebrow">
          CASE 001 · OPEN INVESTIGATION
        </p>

        <h1>{caseFile.title}</h1>

        <p className="subtitle">{caseFile.subtitle}</p>

        <p className="briefing">{caseFile.briefing}</p>
      </header>

      <section
        className="tabs"
        aria-label="Investigation materials"
      >
        <button
          className={tab === "evidence" ? "active" : ""}
          onClick={() => changeTab("evidence")}
        >
          Evidence ({caseFile.evidence.length})
        </button>

        <button
          className={tab === "suspects" ? "active" : ""}
          onClick={() => changeTab("suspects")}
        >
          Interviews ({caseFile.suspects.length})
        </button>

        <button
          className={tab === "timeline" ? "active" : ""}
          onClick={() => changeTab("timeline")}
        >
          Timeline
        </button>
      </section>

      <section className="caseboard">
        <div className="materials">

          {/* SELECTED EVIDENCE */}
          {tab === "evidence" && selectedEvidence && (
            <article className="card evidence-detail">
              <span>
                {selectedEvidence.type} ·{" "}
                {selectedEvidence.discoveredAt}
              </span>

              <h2>{selectedEvidence.title}</h2>

              <p>{selectedEvidence.description}</p>

              <button
                type="button"
                onClick={() => setSelectedEvidence(undefined)}
              >
                Close evidence
              </button>
            </article>
          )}

          {/* EVIDENCE */}
          {tab === "evidence" && (
            <div className="grid">
              {caseFile.evidence.map((item) => (
                <article
                  className="card"
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedEvidence(item)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      setSelectedEvidence(item);
                    }
                  }}
                >
                  <span>
                    {item.type} · {item.discoveredAt}
                  </span>

                  <h2>{item.title}</h2>

                  <p>
                    Inspect this piece of evidence →
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* SUSPECTS */}
          {tab === "suspects" && (
            <div className="grid">
              {caseFile.suspects.map((person) => (
                <article
                  className="card suspect"
                  key={person.id}
                >
                  <span>{person.role}</span>

                  <h2>{person.name}</h2>

                  <p>{person.description}</p>

                  <blockquote>
                    “{person.statement}”
                  </blockquote>

                  <p className="alibi">
                    <b>Alibi:</b> {person.alibi}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* TIMELINE */}
          {tab === "timeline" && (
            <ol className="timeline">
              {caseFile.timeline.map((entry) => (
                <li key={entry.time}>
                  <time>{entry.time}</time>

                  <p>{entry.event}</p>
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* ACCUSATION PANEL */}
        <aside>
          <p className="eyebrow">
            MAKE YOUR DEDUCTION
          </p>

          <h2>Close the case</h2>

          <form onSubmit={accuse}>
            <label>
              Culprit

              <select
                required
                value={culpritId}
                onChange={(e) =>
                  setCulpritId(e.target.value)
                }
              >
                <option value="">
                  Select a suspect
                </option>

                {caseFile.suspects.map((person) => (
                  <option
                    value={person.id}
                    key={person.id}
                  >
                    {person.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Who attacked Arjun?

              <select
                required
                value={attackSuspectId}
                onChange={(e) =>
                  setAttackSuspectId(e.target.value)
                }
              >
                <option value="">
                  Select a suspect
                </option>

                {caseFile.suspects.map((person) => (
                  <option
                    value={person.id}
                    key={person.id}
                  >
                    {person.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Where is the necklace?

              <input
                required
                placeholder="Be precise"
                value={necklaceLocation}
                onChange={(e) =>
                  setNecklaceLocation(e.target.value)
                }
              />
            </label>

            <button
              className="submit"
              type="submit"
            >
              Submit accusation
            </button>
          </form>

          {verdict && (
            <div
              className={
                verdict.solved
                  ? "verdict solved"
                  : "verdict"
              }
            >
              <b>
                {verdict.solved
                  ? "Case solved."
                  : `${verdict.score}/${verdict.total} deductions correct.`}
              </b>

              <p>
                {verdict.solution?.explanation ||
                  verdict.message}
              </p>

              {verdict.solution && (
                <p>
                  <b>Necklace:</b>{" "}
                  {verdict.solution.necklaceLocation}
                </p>
              )}
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}