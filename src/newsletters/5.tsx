import { Container, Typography } from "@mui/material";

export default function Newsletter5() {
  const data = {
    title:
      "“Soon Before Her Death” in Dowry Death Cases: Proximity, Proof, and the Scope of the Statutory Presumption",
    intro: [
      'Few phrases in criminal law have caused as much sustained judicial scrutiny in dowry death cases as the expression "soon before her death". The phrase appears simple, but its legal role is exacting. It is the point at which allegation, evidentiary burden, and statutory presumption converge. In many prosecutions, the success or failure of the case turns on whether the evidence establishes this requirement with the degree of proximity and credibility the law demands.',
      "That is why the phrase continues to occupy a central place in dowry death jurisprudence. It is not merely descriptive language in the statute. It performs a precise evidentiary function.",
    ],
    sections: [
      {
        header: "The Statutory Framework",
        data: [
          "Dowry death cases were earlier governed by Section 304B of the Indian Penal Code read with Section 113B of the Indian Evidence Act. Under the present criminal law framework, the corresponding provisions are found in Section 80 of the Bharatiya Nyaya Sanhita and Section 118 of the Bharatiya Sakshya Adhiniyam. The statutory design remains materially similar. Where the death of a married woman occurs within the prescribed period and the evidence shows that she was subjected to cruelty or harassment in connection with dowry demands soon before her death, the presumption against the accused may arise.",
          "The phrase therefore performs a critical legal function. It is the evidentiary bridge between proof of dowry linked cruelty and the operation of the statutory presumption. Unless that bridge is established, the prosecution cannot rely upon the presumption merely because the death occurred within the statutory period.",
        ],
      },
      {
        header: "The Proximity Requirement",
        data: [
          'Courts have consistently refused to reduce "soon before her death" to a rigid formula of days or months. The expression does not mean immediately before death, nor does it lend itself to a mechanical timeline. The judicial approach has instead been to apply the proximity test. The inquiry is whether there existed a live and proximate link between the dowry related cruelty and the death in question.',
          "This approach is both principled and realistic. Dowry related abuse rarely takes the form of a single isolated incident. It may involve repeated demands, emotional pressure, intimidation, or humiliation over a period of time. A strict numerical test would fail to capture that pattern. What the law seeks is not chronological neatness, but evidentiary proximity grounded in continuity and causal connection.",
        ],
      },
      {
        header: "Why Evidence Matters So Much",
        data: [
          "At the same time, the law does not permit the statutory presumption to be triggered by broad suspicion or general assertions of matrimonial discord. The prosecution must establish that the cruelty or harassment was linked to dowry demands and that it bore a sufficiently close nexus to the death. This is often the most difficult part of the case.",
          "The relevant conduct usually occurs within the privacy of the matrimonial home, away from independent witnesses. As a result, courts frequently have to evaluate statements of parents, siblings, and other close relatives, along with documentary and digital material where available. Messages, call records, and electronic communications may sometimes help establish continuity of harassment. Yet vague allegations, material improvements during trial, or evidence disconnected from dowry demand itself are ordinarily insufficient.",
        ],
      },
      {
        header: "The Recent Judicial Approach",
        data: [
          "Recent decisions continue to show that courts are not willing to invoke the presumption casually. Where the prosecution evidence fails to establish a credible and proximate link between the alleged dowry demands and the death, courts have declined to sustain conviction on the strength of the presumption alone. Conversely, where the record discloses continuing dowry related harassment sufficiently close to the death, the requirement has been held satisfied.",
          "The point emerging from these decisions is one of evidentiary discipline. The law remains protective in purpose, but that protection is mediated through proof. The presumption is powerful, and the courts have therefore insisted that its foundation must be established with clarity.",
        ],
      },
      {
        header: "Why the Phrase Remains Contested",
        data: [
          'The continuing contest around "soon before her death" reflects the balance the law seeks to maintain. On one side lies the need to respond meaningfully to dowry linked violence against women. On the other lies the equally important need to preserve fairness in criminal adjudication by ensuring that penal consequences are not imposed without a proximate evidentiary basis.',
          "That tension explains why the phrase continues to shape outcomes so decisively. It is the point at which courts assess continuity, causation, credibility, and legal sufficiency all at once.",
        ],
      },
      {
        header: "Conclusion",
        data: [
          'In dowry death jurisprudence, "soon before her death" is not a matter of drafting nuance. It is a substantive evidentiary threshold. Its application requires a careful judicial assessment of whether the record reveals a live, proximate, and credible connection between dowry related cruelty and the death. As courts continue to interpret the present criminal law framework, the quality of evidence, its consistency, and its proximity to the death will remain decisive.',
        ],
      },
    ],
  };

  return (
    <Container
      maxWidth={false}
      sx={{ px: { xs: 8, md: 10 }, my: { xs: 6, md: 8 } }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 700,
          mb: 1,
          color: "primary.main",
        }}
      >
        {data.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 1,
          fontSize: "1.1rem",
          lineHeight: 1.8,
          textAlign: "justify",
        }}
      >
        {data.intro.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
        {data.sections.map((section, idx) => (
          <span key={idx}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "primary.main",
              }}
            >
              {section.header}
            </Typography>
            {section.data.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </span>
        ))}
        <i>
          <b>Note: </b> This newsletter is for general informational purposes
          only and does not constitute legal advice, a legal opinion, or an
          advisory. It provides a broad overview and does not address specific
          facts or circumstances. Readers should seek specific legal advice
          before acting on any matter discussed herein.
        </i>
      </Typography>
    </Container>
  );
}
