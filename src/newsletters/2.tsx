import { Container, List, ListItem, Typography } from "@mui/material";

export default function Newsletter2() {
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
        India's Four Labour Codes: What Employers Need to Know
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
        <p>
          For many years, labour compliance in India meant navigating a maze.
          Twenty-nine central labour laws operated independently. Definitions
          differed across statutes. Registers overlapped. Multiple authorities
          required filings on different timelines. Even disciplined and
          well-intentioned employers could find themselves liable for
          noncompliance.
        </p>
        <p>
          The Four Labour Codes represent the most significant structural reform
          of Indian labour law in decades. Twenty-nine laws are now consolidated
          into four Codes. Over 1,200 sections have been streamlined into
          approximately 480. Multiple returns have been replaced with a unified
          electronic system. Registers and forms have been rationalised. The
          introduction of compounding provisions and improvement notices
          reflects a shift from a purely punitive regime to structured
          compliance.
        </p>
        <p>
          The objective is simplification. The responsibility, however, remains
          with the employer.
        </p>
        <p>
          What has changed is not merely procedure. The Codes standardise
          definitions, expand certain protections, and introduce thresholds that
          directly affect workforce planning, wage structuring, and exits.
          Employers must therefore move beyond viewing this reform as
          administrative simplification and instead understand the substantive
          obligations embedded within each Code.
        </p>
        <List>
          <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "primary.main",
              }}
            >
              1. The Code on Wages, 2019
            </Typography>
            <p>
              The Code on Wages consolidates the Payment of Wages Act, Minimum
              Wages Act, Payment of Bonus Act, and Equal Remuneration Act into a
              single statute.
            </p>
            <p>
              Under Section 5, employers are required to pay at least the
              minimum wage notified by the appropriate government. Section 3
              prohibits discrimination in wages and recruitment on the ground of
              gender and mandates equal remuneration for the same or similar
              work. Timelines for payment of wages are clearly prescribed under
              Section 6. Daily wages must be paid at the end of the working day.
              Weekly wages must be paid on the last working day of the week.
              Fortnightly wages must be paid within two days of the end of the
              fortnight. Monthly wages must be paid before the seventh day of
              the succeeding month. Upon termination or resignation, Section 17
              requires that all dues be settled within two working days.
            </p>
            <p>
              The definition of wages under Section 2 clause y is particularly
              significant. Wages include basic pay, dearness allowance, and
              retaining allowance. Components such as house rent allowance,
              overtime, bonus, commission, and gratuity are excluded. However,
              if excluded components exceed 50% of total remuneration, the
              excess amount is deemed to be wages. This 50% threshold prevents
              artificial restructuring of salary to reduce statutory
              liabilities.
            </p>
            <p>
              Section 14 mandates overtime payment at twice the normal rate. The
              Section 26 provides for statutory bonus ranging from 8.33 percent
              to 20 percent of wages for eligible employees who have worked at
              least thirty days in the accounting year.
            </p>
            <p>
              Sections 19, 21, and 50 require employers to issue wage slips,
              maintain prescribed registers, and display statutory notices
              relating to wage rates and working hours. Registers must be
              preserved for five years and may be maintained electronically.
            </p>
          </ListItem>
          <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "primary.main",
              }}
            >
              2. The Industrial Relations Code, 2020
            </Typography>
            <p>
              The Industrial Relations Code consolidates the Trade Unions Act,
              Industrial Employment Standing Orders Act, and Industrial Disputes
              Act.
            </p>
            <p>
              Section 4 mandates that establishments employing 20 or more
              workers constitute a Grievance Redressal Committee with equal
              representation of employer and workers. Grievances must be
              resolved within 30 days.
            </p>
            <p>
              Recognition of trade unions is governed by Sections 14 and 15.
              Where a single union exists and satisfies statutory conditions, it
              may be recognised as the negotiating union. Where multiple unions
              exist, the union with 51% support is recognised. If no union meets
              that threshold, a Negotiating Council is formed.
            </p>
            <p>
              Standing Orders are required for establishments employing 300 or
              more workers under Section 28. Employers may adopt the Model
              Standing Orders or frame their own, subject to certification. If
              the Certifying Officer does not respond within 60 days, the draft
              is deemed certified.
            </p>
            <p>
              Section 40 requires 21 days prior notice before changing service
              conditions relating to matters listed in the Third Schedule,
              including wages and working hours. Provisions relating to layoff
              and retrenchment are contained in Chapter IX. Establishments
              employing 50 to 299 workers must notify the appropriate
              government. Establishments employing 300 or more workers must
              obtain prior permission before layoff, retrenchment, or closure.
            </p>
            <p>
              Section 70 provides for retrenchment compensation at 15 days
              average pay for every completed year of service. Employers are
              also required to contribute to the Workers’ Re Skilling Fund under
              Section 83. Notice periods vary depending on establishment size.
              The closure provisions require 60 or 90-days advance notice
              depending on workforce strength.
            </p>
          </ListItem>
          <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "primary.main",
              }}
            >
              3. The Occupational Safety, Health and Working Conditions Code,
              2020
            </Typography>
            <p>
              The Occupational Safety, Health and Working Conditions Code, 2020
              consolidates 13 labour laws, including the Factories Act and the
              Mines Act, into a single framework governing workplace safety,
              health, and welfare standards.
            </p>
            <p>
              Section 3 requires every establishment employing 10 or more
              workers to obtain registration within 60 days of commencement.
              Registration is electronic and is intended to create a uniform
              compliance platform across sectors.
            </p>
            <p>
              Section 6 mandates that every employee be issued a formal
              appointment letter. This brings statutory recognition to what was
              previously treated in many industries as a contractual formality.
            </p>
            <p>
              Sections 6 and 7 impose clear duties upon employers to maintain
              workplaces that are safe and free from hazards. Employers are
              required to ensure proper ventilation, adequate lighting, clean
              drinking water, and separate sanitation facilities for male,
              female, and transgender employees. The obligation is proactive. It
              is not limited to reacting after an incident occurs.
            </p>
            <p>
              Section 16 requires establishments employing 100 or more workers
              to provide canteen facilities. Section 67 mandates crèche
              facilities where 50 or more workers are employed. These welfare
              measures are statutory obligations and must be factored into
              workforce planning and infrastructure costs.
            </p>
            <p>
              Under Sections 10 and 11, employers are required to report deaths,
              serious bodily injuries, dangerous occurrences, and occupational
              diseases listed in the Third Schedule to the prescribed
              authorities. Failure to report can attract statutory liability
              independent of any civil claim.
            </p>
            <p>
              Contract labour is regulated under Chapter XI. Where 50 or more
              contract workers are engaged, contractors must obtain licences.
              Importantly, if a contractor fails to pay wages or provide
              statutory welfare benefits, the principal employer may become
              liable. Businesses engaging contract labour must therefore
              implement active oversight mechanisms to mitigate indirect
              exposure.
            </p>
          </ListItem>
          <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "primary.main",
              }}
            >
              4. The Code on Social Security, 2020
            </Typography>
            <p>
              The Code on Social Security, 2020 consolidates 9 central labour
              enactments, including the Employees Provident Fund Act, Employees
              State Insurance Act, Payment of Gratuity Act, Maternity Benefit
              Act, and Employees Compensation Act, into a unified social
              security framework.
            </p>
            <p>
              Employees Provident Fund coverage applies to establishments
              employing 20 or more persons under Section 16. Both employer and
              employee are required to contribute 10% of wages or such higher
              percentage as may be notified. Even if an employee voluntarily
              contributes more, the employer’s statutory liability remains
              capped at its prescribed contribution.
            </p>
            <p>
              Employees State Insurance applies to establishments employing 10
              or more employees and to certain hazardous establishments
              irrespective of workforce size under Section 28. The employer is
              responsible for depositing both employer and employee
              contributions within prescribed timelines.
            </p>
            <p>
              Gratuity becomes payable under Section 53 upon completion of 5
              years of continuous service. The amount is calculated at 15 days
              wages for every completed year of service and must be paid within
              30 days of becoming due. Fixed term employees become eligible
              after 1 year of service, which is a significant shift for
              employers relying on contractual workforce models.
            </p>
            <p>
              Under Chapter VI, eligible women employees who have worked for at
              least 80 days in the preceding 12 months are entitled to 26 weeks
              of paid maternity leave. They are also entitled to a prescribed
              medical bonus, nursing breaks until the child attains 15 months of
              age, and statutory protection against dismissal during maternity.
              In cases of miscarriage or medical termination, 6 weeks of leave
              is available. In the case of tubectomy, 2 weeks of leave is
              provided.
            </p>
            <p>
              In the construction sector, employers are required to pay a cess
              ranging from 1% to 2% of the total project cost within 60 days of
              project completion. Construction workers must also be registered
              with the Welfare Board to access benefits.
            </p>
            <p>
              The Code also extends social security coverage to gig and platform
              workers. Aggregators engaging such workers are required to
              contribute between 1% and 2% of annual turnover, subject to a
              statutory cap linked to the amounts payable to such workers. This
              reflects a clear expansion of social security obligations beyond
              traditional employment relationships.
            </p>
          </ListItem>
        </List>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 700,
            mb: 1,
            color: "primary.main",
          }}
        >
          The Bottom Line
        </Typography>
        <p>
          The Four Labour Codes are not merely a consolidation exercise. They
          represent a structural reset of India’s labour compliance framework.
          Definitions are now uniform. Statutory thresholds are clearer. Digital
          registration and record keeping enhance transparency. Enforcement
          mechanisms are more structured and increasingly data driven.
        </p>
        <p>
          For employers, simplification of procedure does not equate to dilution
          of responsibility. While administrative duplication has reduced,
          accountability has increased. Workforce size directly affects
          retrenchment and closure obligations. Salary structuring is regulated
          through the 50% wage threshold. Social security coverage has expanded
          to include fixed term, gig, and platform workers. Principal employers
          face potential exposure for contractor defaults.
        </p>
        <p>
          Compliance under the Codes is no longer a peripheral administrative
          function. It intersects with compensation design, expansion planning,
          restructuring decisions, contractor management, and enterprise risk
          governance.
        </p>
        <p>
          Organisations should undertake a structured compliance audit covering
          wage structuring, statutory registrations, workforce thresholds,
          social security enrolment, workplace safety systems, and contractor
          oversight. Event driven obligations such as appointment letters,
          accident reporting, maternity benefits, retrenchment compensation, and
          closure approvals require advance planning and documentary discipline.
        </p>
        <p>
          The framework is clearer. Regulatory visibility is higher.
          Implementation must therefore be deliberate, documented, and
          periodically reviewed.
        </p>
        <i>
          <b>Note: </b> This newsletter is for general informational purposes
          only and does not constitute legal advice, a legal opinion, or an
          advisory. It provides a broad overview of the Labour Codes and does
          not address specific facts or circumstances. Implementation of the
          Codes is subject to notifications and rules issued by the government
          from time to time. Readers should seek specific legal advice before
          acting on any matter discussed herein.
        </i>
      </Typography>
    </Container>
  );
}
