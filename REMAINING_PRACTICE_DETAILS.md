# Remaining Practice Details

This file lists the decisions and confirmations still needed after applying the completed practice worksheet. Fill in the answers or mark items `Not applicable`. Keep the original [practice details worksheet](PRACTICE_DETAILS_WORKSHEET.md) as the record of the details already supplied.

**Never add API keys, passwords, Google app passwords, OAuth client secrets, medical records, or client information to this file.** Add credentials directly to the ignored `.env.local` file or the production secret manager when implementation is ready.

## 1. Google Calendar and appointment slots

- Preferred workflow: Google Calendar Appointment Schedule link or a custom Google Calendar API integration?
- Public HTTPS booking URL (not yet provided):
- Who owns and maintains the available time slots?
- Should visitors book a slot directly or request a time for Bhoomika to confirm by email?
- Confirm whether a Google account is required in the final Calendar configuration:
- Google Meet link creation and delivery process:
- Booking confirmation, reschedule, cancellation and reminder email workflow:
- What should visitors see when a slot has just been taken?
- Person who will test a real booking:

The current page offers a mailto request fallback. It does not read availability, reserve appointments, or connect to Google Calendar. Add Calendar credentials only through a secret manager after the integration type and permissions are approved.

## 2. Website email delivery

- Confirm delivery option: Gmail API/SMTP directly, or the existing Resend server integration delivering to the Gmail inbox?
- Approved sender address and display name:
- Confirmed recipient address:
- Who administers the chosen email account/provider?
- Verify that inquiry emails can be deleted after 90 days in the inbox and any sending provider:
- Is a separate confirmation email to the visitor required? If so, provide its approved content:
- Delivery-failure wording and who monitors failed delivery:

The website form currently works in local preview without sending or saving inquiries. The API still requires delivery configuration before production sends. The visible direct-email fallback opens the visitor's email app.

## 3. Rate-limit interpretation

The current implementation interprets `4 bookings/email/day` as up to four inquiry submissions per client IP in a rolling 24-hour window, held in single-process memory.

- Does that match the intended limit, or should four mean per visitor email address, per appointment recipient, or a total site-wide maximum?
- Confirm the production host's trusted client-IP header and behavior behind shared networks/mobile carriers:
- Production host has multiple instances or serverless functions (yes/no):
- Approved distributed rate-limit store/provider, if needed:

The current in-memory cap is not a durable or globally coordinated production limit.

## 4. Clinical intake and records

The general website inquiry form must not collect or email medical records. The submitted consent wording about using medical records for analysis is **not** used on this form because ordinary web-form/email handling has not been approved for clinical data.

- Secure clinical intake/practice-management system to use:
- Vendor privacy terms and approved processing/storage region:
- What health information may be requested, at what stage, and by whom:
- How the client gives informed consent through that system:
- Who can access records and the retention/deletion schedule:
- Can clients upload records securely before a consultation (yes/no):
- Privacy/security reviewer and approval date:

Until these answers and the vendor are approved, collect clinical information only through the practitioner's separately managed secure process, not this website or ordinary Gmail.

## 5. Practitioner credentials and service scope

- Public IDA RD verification page or other evidence of current registration/status:
- Confirm exact public qualification names, awarding institutions, and spelling:
- Confirm the approved public wording for current hospital practice and permission to mention it:
- Named medical nutrition specialties/conditions, if any, that are within the practitioner's documented scope:
- Confirm that personalized weight-loss plans are excluded from services:
- Confirm that the service may be offered to clients from age 8; parent/guardian consent and attendance process for clients under 18:
- Languages offered to clients:

Do not add an employer name, diagnosis/treatment claim, or specialty until verified and approved for publication in India.

## 6. Hours, cancellation and payments

- Time zone for the stated 9:00 am-9:00 pm hours (for example, India Standard Time):
- Days of week these hours apply:
- Confirm the four-hour response target applies only during those hours:
- Confirm refund boundaries: full refund at least 48 hours before; 50% from 24 to under 48 hours; no refund under 24 hours:
- Late arrival, no-show, rescheduling, and practitioner cancellation policy:
- How refunds are issued and expected processing time:
- Confirm whether UPI/card availability differs by client or payment provider:
- Payment provider/link and its privacy/consumer terms:

## 7. Privacy, legal, and safety review

- Legal/business identity and privacy contact to publish:
- Qualified reviewer for Indian privacy, consumer, healthcare-advertising and professional rules:
- Specific laws/rules and approved privacy notice wording:
- Hosting provider and processing region:
- Confirm all vendors/subprocessors and their privacy notices (Google Calendar, Gmail, email delivery, hosting):
- Inquiry-data deletion procedure and contact for privacy requests:
- Cookie/consent review (there are currently no analytics or advertising trackers):
- Final approved urgent-care wording for clients in India, including whether to say `visit the nearest hospital` and/or contact local emergency services:
- Effective date for privacy and terms pages:

The current policy and terms are working drafts, not legal advice or a completed jurisdictional review. Indian Dietetic Association membership alone does not confirm every privacy, consumer, advertising, or service-eligibility requirement.

## 8. Publication and operations

- Approved production domain and canonical URL:
- Is the current Unsplash homepage image approved for production use? Practitioner marked the preview image approved; confirm any license/attribution requirements:
- Approve the text `B` monogram as the temporary brand mark or provide an owned/licensed logo:
- Named qualified author/reviewer, source list, and current review date for each resource article:
- Practitioner approval date for the public copy and service/cancellation terms:
- Accessibility reviewer and accessibility contact to publish:
- Production hosting/deployment owner, monitoring owner, and rollback process:
- Final person approving search indexing and setting `NEXT_PUBLIC_SITE_APPROVED=true`:

Keep the site unindexed and clearly marked as a draft until the required credentials, vendor, policy, accessibility and content approvals are complete.
