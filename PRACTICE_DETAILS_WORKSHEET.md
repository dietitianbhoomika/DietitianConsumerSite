# Practice Details Worksheet

Use this worksheet to collect the verified facts and operational decisions needed to replace the website's draft content and connect its booking/contact workflows. Write `Not applicable` when a section does not apply. The website must remain in draft until the approvals in Section 11 are complete.

**Do not put passwords, API keys, private client information, health information, or other secrets in this document.** Configure secrets directly in a local ignored `.env.local` file or the production host's secret manager.

## 1. Owners and approval

- Practice owner / decision-maker: Bhoomika G A
- Person responsible for public content approval: Bhoomika G A
- Person responsible for privacy/security review: Bhoomika G A
- Person responsible for launch and ongoing website maintenance: Bhoomika G A
- Best contact for questions while implementing: Bhoomika G A
- Target launch date, if known: NA

## 2. Practice identity and public brand

- Public practice name, exact spelling: Bhoomika G A
- Practitioner public name: Bhoomika G A
- Approved professional title(s) to use: Clinical Nutritionist and Dietician 
- One-sentence description of the practice, approved verbatim: BSC, MSC in Clinical Nutrition and Dietics
- Preferred tone, wording, or terms to use: Soft tone, Dietician, Nutritionist, Specialized Diet Plans for various medical cases 
- Words, claims, or imagery to avoid: Cures Diseases, Medical treatment 
- Public email address, if approved: dietitianbhoomika@gmail.com
- Public address, if clients may visit: Only online consultation
- Public opening hours and time zone: 9Am to 9PM 
- Domain and canonical website URL: TBD
- Social profile URLs, if approved: NA
- Logo/brand files and usage rights: Pick trendy logo which is free to use
- Brand colors or existing design guidance: existing theme looks good maitain that
- Photo/image files, owner or license, required attribution, and permission scope: NA
- Is the current Unsplash preview image approved for launch? If not, provide its replacement and rights: Preview image is approved

## 3. Credentials, scope, and audience

For each credential or registration intended for public display:

- Exact title/credential: RD
- Awarding or registering organization:  Indian Dietetic Association (IDA)
- Jurisdiction and public verification link: NA
- Current status and expiry/renewal date, if relevant: NA
- Is the credential/title permitted in every intended service jurisdiction? Yes Who confirmed: IDA

Additional practice facts:

- Approved short biography (facts only): Qualified MSC in clinical nutrition and dietics and current practinioner at a reputed multi-speciality hospital in banglore with a experience in providing specialized dite plans for various medical conditions
- Approved specialties and supporting qualifications: Clinical nutritionist and Dietician with MSC in clinical nutrition and dietics
- Services or claims explicitly outside the practitioner's scope: Personalized diet plans for weight loss
- Intended clients and minimum/maximum age: min-8 no limit for max
- Eligibility requirements or referral requirements: skip
- People the practice cannot serve, and safe referral wording: skip
- Languages offered and proficiency level: skip
- Countries/regions where clients may be located: India
- In-person, online, or both; exact service locations: online , google meet
- Is the practitioner licensed/registered to serve clients in every listed location? Verification owner: Yes
- Approved description of the approach to care: A systematic and logical approach to ensure effective and successful nutrition intervention.

## 4. Services, fees, and policies

Complete one block for each service that should appear on the Services page.

### Service: [Diet Plan]

- Who the service is for;Clients requireing personalized diet plans eligibility: min age 8
- What is included and excluded: Included:- Online consultaion, Diet chart Excluded:- Insurance, Lab tests, Food charges
- Initial or follow-up appointment: Both 
- Duration: 30-60mins
- Format and service location(s): Google meet 
- Fee and currency, or exact wording for how a quote is obtained: starts from Rs. 999/-
- Taxes, payment methods, deposits, or insurance statements that have been verified: Only UPI and Card payment all taxes included on the quoted price
- Cancellation, rescheduling, late arrival, refund, and no-show policy: Cancellation 48hrs before and full refund , 24hrs Cancellation 50% refund no refund further
- Availability or waitlist wording: based on the slots available[We need to add available slots filled by owner on the booking form]
- What happens before, during, and after the appointment: Before :- study of clients medical history, possible diet chart, during:- more detailed interaction to understand clients preferrences and modification to diet chart, After Diet chart to follow for prescribed period
- Whether follow-up is offered and its terms: follow-up will be on client's interest
- Approved booking CTA wording: Approved Booking confirmed over client email 
- Content approver and approval date: SKip

Copy this block for every additional service.

## 5. Booking workflow

- Scheduling provider and account owner: Google Calendar API , dietitianbhoomika@gmail.com
- Approved booking URL (HTTPS):TBD
- Direct link or embedded calendar; preference and reason: TBD
- Is the provider approved for the practice's health/privacy obligations in all relevant jurisdictions? Yes
- Provider privacy notice URL and required disclosure wording:  https://policies.google.com/privacy
- Information the scheduler will collect; confirm clinical intake stays in an appropriate practice system: Google
- Can someone complete booking without creating an account? He should have a google account 
- What should the visitor see if the scheduler is unavailable? Send a email on dietitianbhoomika@gmail.com
- Approved fallback contact method: dietitianbhoomika@gmail.com
- Booking confirmation, cancellation, and reminder workflow: Email
- Person responsible for testing the live booking flow: Bhoomika G A

## 6. Contact and inquiry workflow

The current form collects name, email, preferred reply method, a broad topic, and consent. It has no free-text field and rejects unexpected fields.

- Which inquiry topics should be offered? Diet Plans, Fees
- Should a short non-clinical message field be added? If yes, provide its exact prompt and length limit: yes Feel free to add more details on service required , 300characters limit
- Explicit information the form must never request: SKIP
- Expected response time and business days/time zone: 4hrs
- Approved public email fallback: dietitianbhoomika@gmail.com
- Email delivery provider and account owner: Gmail , Bhoomika G A
- Verified sender address/domain: @gmail.com
- Authorized recipient mailbox: Gmail
- Who is allowed to access inquiries: Person having valid gmail address 
- Is email a suitable channel for this information under the practice's policies? yes
- How long are inquiry emails retained, and who deletes them? 90 day post which cleaned up by owner
- What does the visitor consent to? Provide approved wording: Consent to use their medical records for analysis to provide better diet plans
- Spam controls and rate limits required by the host/provider: 4bookings/email/day
- What should the visitor see when delivery fails? Please email dietitianbhoomika@gmail.com.

When ready, configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` directly in `.env.local` or the production secret manager. Never put their values here or commit them.

## 7. Jurisdiction, privacy, and safety review

- Practice's legal/business jurisdiction(s): India
- Client jurisdiction(s) the website will accept: india
- Applicable privacy, health-data, professional, advertising, and consumer rules identified by counsel/regulator: IDA
- Legal business/controller name and privacy contact: NA
- Hosting provider, processing region, and privacy terms URL: TBD
- Booking provider, processing region, and privacy terms URL: TBD
- Email provider, processing region, and privacy terms URL: Google India 
- Analytics, cookies, embeds, or other third parties planned (write `None` if none): Google Forms consultation request embed; no analytics or advertising trackers
- Consent/cookie controls required and who approved them: Get approval from Client
- Inquiry access, retention, deletion, and data-request procedure: SKIP
- Required privacy notice wording and reviewer: use standard basic words used in the industry
- Required terms/cancellation wording and reviewer: build as per above info
- Required emergency/urgent-care boundary wording: Visit nearest hospital 
- Incident or vendor failure contact: SKIP

Do not assume that one jurisdiction's rules apply everywhere. Keep clinical histories and records out of the marketing website, its analytics, and general inquiry email.

## 8. Resources and public content

For each resource/article to publish:

- Proposed title and URL slug:
- Intended audience and question it answers:
- Final approved copy or source file:
- Named author and public credentials:
- Qualified reviewer and public credentials:
- Review date and next review date:
- Reliable sources with direct URLs and publication dates:
- Claims requiring substantiation or local compliance review:
- Required educational-not-medical-advice note:
- Image/illustration source, rights, and alt text:
- Content approver and approval date:

Publishing owner and workflow:

- Who writes, reviews, publishes, dates, updates, and retires articles?
- Review schedule and out-of-date article process:
- Markdown files maintained by a developer or a CMS maintained by staff?
- If a CMS is needed, who will administer it and what access/security controls are required?

Current resource pages are unapproved drafts. Do not enable publication until each named reviewer has verified the copy and sources.

## 9. Testimonials, structured facts, and search

- Publish testimonials at launch? `No` is the default:
- If yes, exact unedited approved quote and source:
- Written permission, where/how it may be displayed, expiry/withdrawal process:
- Any incentive/relationship to disclose:
- Professional advertising rules reviewed by whom:
- Business hours or location appropriate for structured data:
- Public address and verification source, if structured data is eligible:
- Confirmed service area and accurate service/category information for search:
- Approved title/description for the home page:
- Approved share-card/social image and rights:
- Search Console or other webmaster account owner:
- Sitemap/indexing approval owner:

Do not add structured data, locations, testimonials, outcomes, or specialties until they are verified and permitted.

## 10. Hosting, monitoring, and measurement

- Production host and account owner:
- Production domain/DNS owner:
- HTTPS and renewal owner:
- Deployment branch/workflow and rollback owner:
- Node runtime version:
- Environment variable/secret manager owner:
- Error monitoring provider and confirmation that personal data is excluded:
- Uptime monitoring owner:
- Analytics plan and privacy review (or `None`):
- Success measures, such as booking completion or response time:
- Who reviews these measures and how often?
- Production rate-limit strategy (the current limit is in-memory and single-process only):

## 11. Launch approvals

Mark each complete only after the named person has reviewed it.

- [ ] Practitioner approved name, bio, credentials, titles, scope, audience, and claims.
- [ ] Practitioner approved service details, fees, availability, cancellation policy, and booking CTA.
- [ ] Booking provider and its privacy/clinical-intake workflow were tested.
- [ ] Contact delivery, access, consent, failure handling, and deletion process were tested.
- [ ] Privacy, professional advertising, and legal terms were reviewed for all relevant jurisdictions.
- [ ] Every published health resource has a named qualified reviewer, verified sources, and current review date.
- [ ] Every public image/logo/testimonial has documented usage permission and attribution where required.
- [ ] Accessibility checks include keyboard, focus, contrast, zoom/reflow, mobile, and assistive-technology review.
- [ ] Security review covers secrets, HTTPS, vendor terms, logging, abuse controls, and data minimization.
- [ ] Metadata, canonical URL, sitemap, robots, redirects, and not-found state were checked on production.
- [ ] Production booking/contact flows and unavailable-provider fallbacks were tested.
- [ ] Monitoring and operational ownership are in place.

Final approval:

- Practitioner approver and date:
- Privacy/legal approver and date:
- Accessibility approver and date:
- Production launch owner and date:
- Approved production URL:

After all required approvals, configure the real non-secret values in `.env.local`/the hosting environment, set `NEXT_PUBLIC_SITE_APPROVED=true`, deploy over HTTPS, and verify the production flows. Keep secret values in a secret manager, not in this worksheet.
