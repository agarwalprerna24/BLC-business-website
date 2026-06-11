import { Container, Typography } from "@mui/material";

export default function Newsletter6() {
  const data = {
    title:
      "The IBC (Amendment) Act, 2026 and IBBI Reforms: Reshaping Insolvency Strategy and Process",
    intro: [
      "The insolvency framework has entered another important phase of reform. With most provisions of the Insolvency and Bankruptcy Code (Amendment) Act, 2026 brought into force with effect from 26 May 2026, and with the Insolvency and Bankruptcy Board of India introducing valuation related amendments on 20 May 2026, the legal architecture now reflects a more commercially responsive approach to distress resolution, liquidation, and value preservation.",
      "The significance of these changes lies not merely in procedural adjustment. They alter how creditors, insolvency professionals, resolution applicants, and stressed businesses are likely to approach the insolvency process itself. The introduction of the Creditor Initiated Insolvency Resolution Process, the possibility of revival from liquidation, the separation of the roles of Resolution Professional and Liquidator, strengthened avoidance mechanisms, and a more calibrated valuation regime together mark a clear shift toward flexibility without abandoning discipline.",
    ],
    sections: [
      {
        header: "Creditor Initiated Insolvency Resolution Process",
        data: [
          "The introduction of the Creditor Initiated Insolvency Resolution Process, or CIIRP, is one of the most consequential features of the amendment. It appears designed to create a structured middle path between consensual restructuring and the conventional CIRP model. In appropriate cases, eligible financial creditors may initiate a formal resolution process while allowing the existing management to continue, subject to supervision by the Resolution Professional and the safeguards built into the statutory framework.",
          "From a commercial standpoint, the rationale is sound. A distressed enterprise does not in every case require immediate displacement of management to preserve value. Where the underlying business remains capable of recovery, a supervised but less disruptive framework may protect operational continuity and improve the prospects of meaningful resolution. In that sense, CIIRP may become a particularly important tool for cases in which timing, business continuity, and stakeholder confidence are all critical.",
        ],
      },
      {
        header: "Revival of CIRP from Liquidation",
        data: [
          "The amendment also introduces an important second chance mechanism by permitting revival of CIRP even after liquidation has commenced. This is a practical and value sensitive reform. In many insolvency matters, liquidation begins at a stage when asset visibility is still evolving, market conditions are weak, or no viable applicant has emerged. Those conditions are not always static.",
          "By enabling the Committee of Creditors to seek revival where circumstances materially improve, the framework recognises that liquidation should not inevitably operate as the point of no return. A later emergence of investor interest, better valuation conditions, or a more realistic restructuring proposal may justify reopening the resolution path. The ability to do so could materially affect recoveries and reduce the risk of value destruction through premature asset realisation.",
        ],
      },
      {
        header:
          "Separation of the Roles of Resolution Professional and Liquidator",
        data: [
          "Another structural change of importance is the separation of the roles of Resolution Professional and Liquidator. The earlier model had administrative convenience, since the professional already handling the CIRP would ordinarily continue in liquidation if the process failed. Yet convenience did not fully answer the concern of neutrality. A professional involved in a failed resolution process may not always be best placed to conduct an independent liquidation that inspires confidence across stakeholders.",
          "The amended framework seeks to address that concern by requiring a different insolvency professional to step in as liquidator. This is likely to strengthen the perception and the reality of procedural independence, particularly in relation to valuation, sale strategy, and asset realisation. In a regime where confidence in process integrity is central, that separation is more than formal. It is institutionally significant.",
        ],
      },
      {
        header: "Avoidance Transactions and Creditor Protection",
        data: [
          "The widened treatment of undervalued, preferential, and fraudulent transactions is equally significant. The amendment broadens the relevant look back framework and allows proceedings concerning fraudulent and voidable transactions to continue independently even after completion of the main insolvency process. This strengthens the ability of creditors and insolvency professionals to pursue value that may have been diverted or eroded in the period preceding insolvency.",
          "The reform is important because questionable transactions often come to light only after detailed review of records and conduct. A framework that allows those claims to survive beyond the main process improves recovery prospects and acts as a more credible deterrent against pre insolvency misconduct. The protection extended to dissident financial creditors also adds to the commercial balance of the amended scheme, while the extinguishment of prior claims after implementation of an approved plan supports finality and transactional certainty for successful resolution applicants.",
        ],
      },
      {
        header: "Valuation Reform and MSME Relief",
        data: [
          "The recent IBBI amendments relating to valuation deserve equal attention. Timelines for appointment of valuers have been tightened, and a more proportionate approach has been introduced for MSMEs. This is a welcome development. Valuation disputes and delays have long affected the pace and efficiency of insolvency proceedings, often at considerable cost.",
          "A calibrated framework that preserves valuation discipline while allowing practical relaxation for smaller enterprises reflects sound regulatory judgment. MSMEs cannot always sustain the same level of compliance cost as large corporates. A regime that maintains credibility while acknowledging that reality is likely to improve both participation and process efficiency.",
        ],
      },
      {
        header: "Conclusion",
        data: [
          "The IBC (Amendment) Act, 2026 and the related IBBI reforms represent a substantial recalibration of India's insolvency framework. They do not dilute the seriousness of the process. Instead, they seek to make it more adaptive, commercially realistic, and value conscious. For lenders, insolvency professionals, distressed businesses, and investors, these developments are likely to influence insolvency strategy in a material way over the coming months.",
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
