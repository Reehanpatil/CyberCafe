// Centralized demo data for job listings, results, admit cards, and answer keys.
// In production, replace this with an API call (fetch from your backend).

export const CATEGORIES = [
  { id: "live", label: "Live Updates" },
  { id: "central", label: "Central Jobs" },
  { id: "state", label: "State Jobs" },
  { id: "result", label: "Results" },
  { id: "admit", label: "Admit Card" },
  { id: "answerkey", label: "Answer Key" },
  { id: "defence", label: "Defence Jobs" },
];

export const LISTINGS = [
  {
    id: "ssc-cgl-2026",
    category: "central",
    type: "Job",
    title: "SSC CGL 2026 Recruitment",
    org: "Staff Selection Commission",
    location: "All India",
    date: "Last Date: 30 Jul 2026",
    badge: "New",
    postName: "Combined Graduate Level (Various Posts)",
    totalPosts: "17,727",
    qualification:
      "Bachelor’s Degree in any discipline from a recognized university",
    ageLimit:
      "18 - 32 years (as per post). Age relaxation applicable for reserved categories.",
    fees: "General/OBC: ₹100 | SC/ST/PwD/Women/Ex-Servicemen: Exempted",
    importantDates: [
      { label: "Notification Released", value: "12 Jun 2026" },
      { label: "Application Start Date", value: "15 Jun 2026" },
      { label: "Last Date to Apply", value: "30 Jul 2026" },
      { label: "Tier 1 Exam Date", value: "10 Sep 2026 (Tentative)" },
    ],
    howToApply:
      "Eligible candidates can apply online through the official SSC website. Upload scanned photograph, signature, and required documents before final submission.",
    applyLink: "https://ssc.nic.in",
    officialLink: "https://ssc.nic.in",
  },
  {
    id: "ktk-police-constable",
    category: "state",
    type: "Job",
    title: "Karnataka Police Constable Bharti",
    org: "Karnataka State Police",
    location: "Karnataka",
    date: "Last Date: 15 Jul 2026",
    badge: "Hot",
    postName: "Civil Police Constable (CPC)",
    totalPosts: "4,000",
    qualification: "10th / SSLC Pass from a recognized board",
    ageLimit:
      "18 - 25 years. Relaxation as per Karnataka Govt rules for reserved categories.",
    fees: "General: ₹500 | SC/ST/Cat-1: ₹250",
    importantDates: [
      { label: "Notification Released", value: "01 Jun 2026" },
      { label: "Application Start Date", value: "05 Jun 2026" },
      { label: "Last Date to Apply", value: "15 Jul 2026" },
      { label: "Physical Test (PET)", value: "Aug 2026 (Tentative)" },
    ],
    howToApply:
      "Apply online via the Karnataka State Police Recruitment portal. Candidates must meet height, chest, and physical fitness criteria as specified.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "rrb-ntpc-result",
    category: "result",
    type: "Result",
    title: "RRB NTPC CBT 2 Result Declared",
    org: "Railway Recruitment Board",
    location: "All India",
    date: "Declared: 18 Jun 2026",
    badge: "New",
    postName: "Non-Technical Popular Categories (NTPC)",
    totalPosts: "11,558",
    qualification: "12th Pass / Graduate (as per post applied)",
    ageLimit: "18 - 33 years (as per post)",
    fees: "Result declared — no fee applicable at this stage",
    importantDates: [
      { label: "CBT 2 Exam Held", value: "20 May 2026" },
      { label: "Result Declared", value: "18 Jun 2026" },
      { label: "Document Verification", value: "Jul 2026 (Tentative)" },
    ],
    howToApply:
      "Candidates can check their result by logging into the RRB regional website using registration number and date of birth.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "upsc-prelims-admit",
    category: "admit",
    type: "Admit Card",
    title: "UPSC Civil Services Prelims Admit Card",
    org: "Union Public Service Commission",
    location: "All India",
    date: "Exam: 05 Jul 2026",
    badge: "Hot",
    postName: "Civil Services Examination (Prelims)",
    totalPosts: "1,056",
    qualification: "Bachelor’s Degree from a recognized university",
    ageLimit: "21 - 32 years (relaxation applicable as per category)",
    fees: "Admit card download — no fee applicable",
    importantDates: [
      { label: "Admit Card Released", value: "12 Jun 2026" },
      { label: "Prelims Exam Date", value: "05 Jul 2026" },
      { label: "Result Expected", value: "Aug 2026 (Tentative)" },
    ],
    howToApply:
      "Download the admit card from the official UPSC website using your registration ID and password. Carry a printed copy along with valid photo ID to the exam center.",
    applyLink: "#",
    officialLink: "https://upsc.gov.in",
  },
  {
    id: "indian-railways-group-d",
    category: "central",
    type: "Job",
    title: "Indian Railways Group D Recruitment",
    org: "Ministry of Railways",
    location: "All India",
    date: "Last Date: 22 Jul 2026",
    postName: "Track Maintainer, Helper, Pointsman & Others",
    totalPosts: "32,438",
    qualification: "10th Pass with ITI / equivalent from recognized board",
    ageLimit: "18 - 33 years (as per post)",
    fees: "General/OBC: ₹500 (₹400 refundable on appearing exam) | SC/ST/Women: ₹250",
    importantDates: [
      { label: "Notification Released", value: "02 Jun 2026" },
      { label: "Last Date to Apply", value: "22 Jul 2026" },
      { label: "CBT Exam Date", value: "Sep 2026 (Tentative)" },
    ],
    howToApply:
      "Apply online through the RRB official website of your respective zone. Ensure all documents are scanned as per specified size before submission.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "gram-panchayat-secretary",
    category: "state",
    type: "Job",
    title: "Karnataka Gram Panchayat Secretary",
    org: "Karnataka Panchayat Raj Dept",
    location: "Karnataka",
    date: "Last Date: 10 Aug 2026",
    postName: "Panchayat Development Officer (PDO) / Secretary",
    totalPosts: "950",
    qualification: "Diploma / Bachelor’s Degree in any discipline",
    ageLimit: "18 - 35 years (relaxation as per Karnataka Govt norms)",
    fees: "General: ₹600 | SC/ST/Cat-1: ₹300",
    importantDates: [
      { label: "Notification Released", value: "20 Jun 2026" },
      { label: "Last Date to Apply", value: "10 Aug 2026" },
      { label: "Written Exam Date", value: "Sep 2026 (Tentative)" },
    ],
    howToApply:
      "Apply through the Karnataka Panchayat Raj official recruitment portal. Self-attested copies of certificates must be uploaded.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "kset-result-2026",
    category: "result",
    type: "Result",
    title: "KSET 2026 Result Out",
    org: "University of Mysore",
    location: "Karnataka",
    date: "Declared: 12 Jun 2026",
    postName: "Karnataka State Eligibility Test (Assistant Professor)",
    totalPosts: "N/A",
    qualification: "Post Graduate Degree (55% / 50% for reserved category)",
    ageLimit: "No upper age limit",
    fees: "Result declared — no fee applicable at this stage",
    importantDates: [
      { label: "Exam Held", value: "25 May 2026" },
      { label: "Result Declared", value: "12 Jun 2026" },
      { label: "Certificate Distribution", value: "Jul 2026 (Tentative)" },
    ],
    howToApply:
      "Check your result on the official University of Mysore KSET portal using your application number and date of birth.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "kpsc-gazetted-admit",
    category: "admit",
    type: "Admit Card",
    title: "KPSC Gazetted Probationers Hall Ticket",
    org: "Karnataka Public Service Commission",
    location: "Karnataka",
    date: "Exam: 28 Jun 2026",
    postName: "Gazetted Probationers (KAS & Allied Services)",
    totalPosts: "384",
    qualification: "Bachelor’s Degree from a recognized university",
    ageLimit: "21 - 35 years (relaxation as per category)",
    fees: "Hall ticket download — no fee applicable",
    importantDates: [
      { label: "Hall Ticket Released", value: "15 Jun 2026" },
      { label: "Exam Date", value: "28 Jun 2026" },
      { label: "Result Expected", value: "Aug 2026 (Tentative)" },
    ],
    howToApply:
      "Download the hall ticket from the official KPSC website using your registration number and date of birth.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "ssc-cgl-answer-key",
    category: "answerkey",
    type: "Answer Key",
    title: "SSC CGL Tier 1 Answer Key 2026",
    org: "Staff Selection Commission",
    location: "All India",
    date: "Released: 16 Jun 2026",
    badge: "New",
    postName: "Combined Graduate Level - Tier 1",
    totalPosts: "N/A",
    qualification: "N/A",
    ageLimit: "N/A",
    fees: "Objection Fee: ₹100 per question (if challenged)",
    importantDates: [
      { label: "Exam Held", value: "01 Jun 2026" },
      { label: "Answer Key Released", value: "16 Jun 2026" },
      { label: "Objection Window Closes", value: "23 Jun 2026" },
    ],
    howToApply:
      "Download the provisional answer key from the official SSC website. Candidates can raise objections within the specified window by paying the objection fee.",
    applyLink: "#",
    officialLink: "https://ssc.nic.in",
  },
  {
    id: "indian-army-agniveer",
    category: "defence",
    type: "Job",
    title: "Indian Army Agniveer Recruitment",
    org: "Indian Army",
    location: "All India",
    date: "Last Date: 25 Jul 2026",
    badge: "Hot",
    postName: "Agniveer (General Duty, Technical, Clerk)",
    totalPosts: "25,000",
    qualification: "10th / 12th Pass (as per post) from recognized board",
    ageLimit: "17.5 - 21 years",
    fees: "Examination Fee: ₹250 (all categories)",
    importantDates: [
      { label: "Notification Released", value: "10 Jun 2026" },
      { label: "Last Date to Apply", value: "25 Jul 2026" },
      { label: "Common Entrance Exam", value: "Sep 2026 (Tentative)" },
    ],
    howToApply:
      "Register on the official Agnipath recruitment portal, fill in personal and educational details, and upload required documents before the deadline.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "indian-navy-sailor",
    category: "defence",
    type: "Job",
    title: "Indian Navy Sailor (SSR/AA) Recruitment",
    org: "Indian Navy",
    location: "All India",
    date: "Last Date: 05 Aug 2026",
    postName:
      "Sailor for Senior Secondary Recruits (SSR) & Artificer Apprentice (AA)",
    totalPosts: "1,200",
    qualification: "12th Pass with Physics, Chemistry & Maths",
    ageLimit: "17 - 20 years",
    fees: "Examination Fee: ₹215 (all categories)",
    importantDates: [
      { label: "Notification Released", value: "15 Jun 2026" },
      { label: "Last Date to Apply", value: "05 Aug 2026" },
      { label: "Written Exam Date", value: "Oct 2026 (Tentative)" },
    ],
    howToApply:
      "Apply online through the Indian Navy official recruitment website. Ensure all educational and identity documents are ready before applying.",
    applyLink: "#",
    officialLink: "#",
  },
  {
    id: "central-bank-po",
    category: "central",
    type: "Job",
    title: "Central Bank PO Recruitment 2026",
    org: "Institute of Banking Personnel Selection (IBPS)",
    location: "All India",
    date: "Last Date: 18 Jul 2026",
    postName: "Probationary Officer (PO)",
    totalPosts: "3,500",
    qualification:
      "Bachelor’s Degree in any discipline from a recognized university",
    ageLimit: "20 - 30 years (relaxation as per category)",
    fees: "General/OBC: ₹850 | SC/ST/PwD: ₹175",
    importantDates: [
      { label: "Notification Released", value: "08 Jun 2026" },
      { label: "Last Date to Apply", value: "18 Jul 2026" },
      { label: "Prelims Exam Date", value: "Sep 2026 (Tentative)" },
    ],
    howToApply:
      "Apply online through the IBPS official website. Candidates must upload photograph, signature, and left thumb impression as per guidelines.",
    applyLink: "#",
    officialLink: "#",
  },
];

export function getListingsByCategory(categoryId) {
  if (categoryId === "live") return LISTINGS;
  return LISTINGS.filter((item) => item.category === categoryId);
}

export function getListingById(id) {
  return LISTINGS.find((item) => item.id === id);
}

// ─────────────────────────────────────────────────────────────
// Portal Service data — government utility services (Aadhaar,
// PAN, Voter ID, Vehicle services, schemes, etc.)
// Each entry uses a Lucide icon name (resolved in the component)
// instead of an image path, since no custom icon assets are
// bundled in this project.
// ─────────────────────────────────────────────────────────────

export const PORTAL_SERVICES = [
  {
    id: "dyn_66",
    name: "Census of India (भारत की जनगणना)",
    description:
      "Census of India से संबंधित सभी महत्वपूर्ण सेवाएं और जानकारी ऑनलाइन प्राप्त करें। जनसंख्या गणना, परिवार विवरण, नागरिक डेटा अपडेट, जनगणना पंजीकरण, और सरकारी सर्वेक्षण से जुड़ी जानकारी आसानी से देखें।",
    icon: "Users",
    sub_links: [
      {
        label: "Self Enumeration Online",
        url: "https://se.census.gov.in/",
        type: "official",
      },
      {
        label: "State Timeline",
        url: "https://se.census.gov.in/assets/SE_Timeline-DNw3u9Tb.pdf",
        type: "pdf",
      },
      {
        label: "Question",
        url: "https://se.census.gov.in/assets/SE_Question-DMjMTXHg.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "dyn_85",
    name: "Aadhar Beta Service",
    description:
      "Aadhaar Beta Service Portal के माध्यम से नई UIDAI Aadhaar सेवाएं ऑनलाइन प्राप्त करें जैसे update, mobile linking, address correction, और Aadhaar PVC card services.",
    icon: "Fingerprint",
    sub_links: [
      {
        label: "Official Beta Website",
        url: "https://myaadhaarbeta.uidai.gov.in/",
        type: "official",
      },
      {
        label: "Lock / Unlock Aadhaar Beta",
        url: "https://myaadhaarbeta.uidai.gov.in/lock-unlock-aadhaar/en",
        type: "official",
      },
      {
        label: "Lock / Unlock Biometrics Beta",
        url: "https://tathya.uidai.gov.in/access/login?role=resident",
        type: "official",
      },
      {
        label: "Generate / Retrieve VID Beta",
        url: "https://myaadhaarbeta.uidai.gov.in/genericGenerateOrRetrieveVID/en",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_1",
    name: "Aadhaar Information (UIDAI Link)",
    description:
      "Download your Aadhaar card, update address details, and check mobile linking status. Access PVC card ordering, biometric security features, and fingerprint-based ID print services.",
    icon: "Fingerprint",
    sub_links: [
      {
        label: "Access Official Aadhaar Portal",
        url: "https://myaadhaar.uidai.gov.in/verifyAadhaar",
        type: "official",
      },
      {
        label: "Download E-Aadhaar (Official)",
        url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en",
        type: "official",
      },
      {
        label: "Face Aadhar Download",
        url: "https://akprinthub.com/en/service/aadhaar-card-download-by-face-without-otp-2026",
        type: "official",
      },
      {
        label: "Check Aadhar Mobile Number Link",
        url: "https://myaadhaar.uidai.gov.in/check-aadhaar-validity",
        type: "official",
      },
      {
        label: "Find Aadhar Number / SID",
        url: "https://myaadhaar.uidai.gov.in/retrieve-eid-uid/en",
        type: "official",
      },
      {
        label: "Find / Generate VID Number",
        url: "https://myaadhaar.uidai.gov.in/genericGenerateOrRetriveVID/en",
        type: "official",
      },
      {
        label: "Aadhaar Correction Name/DOB/Photo/Mobile N./Address",
        url: "https://play.google.com/store/apps/details?id=in.gov.uidai.pehchaan",
        type: "official",
      },
      {
        label: "Adhar Verify Email / Mobile",
        url: "https://myaadhaar.uidai.gov.in/verify-email-mobile/en",
        type: "official",
      },
      {
        label: "Enrolment & Update Status Check",
        url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en",
        type: "official",
      },
      {
        label: "Lock/Unlock Aadhaar",
        url: "https://myaadhaar.uidai.gov.in/lock-unlock-aadhaar/en",
        type: "official",
      },
      {
        label: "Aadhaar PVC Card Order",
        url: "https://myaadhaar.uidai.gov.in/genricPVC/en",
        type: "official",
      },
      {
        label: "Check Aadhaar PVC Card Order Status",
        url: "https://myaadhaar.uidai.gov.in/checkStatus/en",
        type: "official",
      },
      {
        label: "Document Update Online",
        url: "https://myaadhaar.uidai.gov.in/du/en_IN",
        type: "official",
      },
      {
        label: "Report Death of a Family Member Online",
        url: "https://tathya.uidai.gov.in/access/login?role=resident",
        type: "official",
      },
      {
        label: "Bank Seeding Status",
        url: "https://tathya.uidai.gov.in/access/login?role=resident",
        type: "official",
      },
      {
        label: "Aadhaar Deactivation Status",
        url: "https://myaadhaar.uidai.gov.in/CheckDeathReportStatus/en",
        type: "official",
      },
      {
        label: "Aadhar Update Appointment Online",
        url: "https://bookappointment.uidai.gov.in/",
        type: "official",
      },
      {
        label: "Aadhaar SMS Services",
        url: "https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services/aadhaar-services-on-sms.html",
        type: "official",
      },
      {
        label: "FORM 1: Aadhaar Enrolment and Update",
        url: "https://uidai.gov.in",
        type: "pdf",
      },
    ],
  },
  {
    id: "dyn_3",
    name: "PAN Card Service",
    description:
      "Apply for a New PAN Card (UTI/NSDL), process corrections, and download E-PAN. Track application status, link Aadhaar with PAN, and order PVC card home delivery easily.",
    icon: "CreditCard",
    sub_links: [
      {
        label: "Mobile & Mail Update (NSDL)",
        url: "https://onlineservices.proteantech.in/paam/endUserAddressUpdate.html",
        type: "official",
      },
      {
        label: "Address Update Free (NSDL)",
        url: "https://onlineservices.proteantech.in/paam/endUserAddressUpdate.html",
        type: "official",
      },
      {
        label: "Link Aadhaar Status",
        url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status",
        type: "official",
      },
      {
        label: "Aadhaar to PAN link",
        url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar",
        type: "official",
      },
      {
        label: "New Pan Apply (NSDL)",
        url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
        type: "official",
      },
      {
        label: "PAN Correction (NSDL)",
        url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
        type: "official",
      },
      {
        label: "E-Pan Download (NSDL)",
        url: "https://onlineservices.proteantech.in/paam/requestAndDownloadEPAN.html",
        type: "official",
      },
      {
        label: "PAN Track (NSDL)",
        url: "https://tin.tin.proteantech.in/pantan/StatusTrack.html",
        type: "official",
      },
      {
        label: "Pan Card PVC Order (NSDL)",
        url: "https://onlineservices.proteantech.in/paam/ReprintEPan.html",
        type: "official",
      },
      {
        label: "Mobile & Mail Update (UTI)",
        url: "https://www.pan.utiitsl.com/PAN_ONLINE/addresschangeHome.action",
        type: "official",
      },
      {
        label: "Address Update Free (UTI)",
        url: "https://www.pan.utiitsl.com/PAN_ONLINE/addresschangeHome.action",
        type: "official",
      },
      {
        label: "New Pan Apply (UTI)",
        url: "https://www.pan.utiitsl.com/newA.html",
        type: "official",
      },
      {
        label: "PAN Correction (UTI)",
        url: "https://www.pan.utiitsl.com/PAN/csf.html",
        type: "official",
      },
      {
        label: "E-Pan Download (UTI)",
        url: "https://www.pan.utiitsl.com/PAN_ONLINE/ePANCardHome",
        type: "official",
      },
      {
        label: "PAN Track (UTI)",
        url: "https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp#forward",
        type: "official",
      },
      {
        label: "Pan Card PVC Order (UTI)",
        url: "https://www.pan.utiitsl.com/PAN_ONLINE/reprintHome.action",
        type: "official",
      },
      {
        label: "Instant PAN Apply",
        url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/getNewEpan",
        type: "official",
      },
      {
        label: "Instant PAN Download",
        url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/checkStatusDownloadEpan",
        type: "official",
      },
      {
        label: "Minor PAN Apply",
        url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
        type: "official",
      },
      {
        label: "PVC PAN/Home Delivery Check Status",
        url: "https://www.indiapost.gov.in/home",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_20",
    name: "Voter ID Correction & Status (NVSP)",
    description:
      "Apply for a new Voter ID, update your address or details, and download your Digital e-EPIC. Search your name in the electoral roll and track application status.",
    icon: "Vote",
    sub_links: [
      {
        label: "Find Voter Number",
        url: "https://electoralsearch.eci.gov.in/",
        type: "official",
      },
      {
        label: "Search your name in last SIR E-Roll - 2026",
        url: "https://voters.eci.gov.in/searchInSIR",
        type: "official",
      },
      {
        label: "Voter List Download",
        url: "https://voters.eci.gov.in/download-eroll",
        type: "official",
      },
      {
        label: "SIR Roll Download",
        url: "https://voters.eci.gov.in/download-eroll",
        type: "official",
      },
      {
        label: "Voter Login",
        url: "https://voters.eci.gov.in/",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_7",
    name: "Ayushman Bharat (PM-JAY)",
    description:
      "Check eligibility for free health treatment up to ₹5 Lakh, apply for your Golden Card, and find empaneled hospitals near you.",
    icon: "HeartPulse",
    sub_links: [
      {
        label: "Ayushman Card Apply",
        url: "https://beneficiary.nha.gov.in/",
        type: "official",
      },
      {
        label: "Ayushman Card Status",
        url: "https://beneficiary.nha.gov.in/",
        type: "official",
      },
      {
        label: "Ayushman Card Download",
        url: "https://beneficiary.nha.gov.in/",
        type: "official",
      },
      {
        label: "Ayushman Card List Download",
        url: "https://beneficiary.nha.gov.in/",
        type: "official",
      },
      {
        label: "Ayushman Hospital Find",
        url: "https://hem.nha.gov.in/search",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_11",
    name: "Driving Licence Service",
    description:
      "Apply for Learner’s or Permanent DL, renew your licence, book slot for driving tests, and download your digital DL copy.",
    icon: "Contact",
    sub_links: [
      {
        label: "DL Mobile Number Update",
        url: "https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do",
        type: "official",
      },
      {
        label: "New DL Apply",
        url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
        type: "official",
      },
      {
        label: "DL Status",
        url: "https://parivahan.gov.in/rcdlstatus/?pur_cd=101",
        type: "official",
      },
      {
        label: "DL Download",
        url: "https://parivahan.gov.in/rcdlstatus/?pur_cd=101",
        type: "official",
      },
      {
        label: "Find DL Number",
        url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
        type: "official",
      },
      {
        label: "Find DL Application Number",
        url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
        type: "official",
      },
      {
        label: "Official Website",
        url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_14",
    name: "RC Service (Registration Certificate)",
    description:
      "Apply for new vehicle registration, renewal of RC, change of address, or get a duplicate copy of your vehicle's Registration Certificate.",
    icon: "FileText",
    sub_links: [
      {
        label: "RC Mobile Number Update",
        url: "https://vahan.parivahan.gov.in/mobileupdate/",
        type: "official",
      },
      {
        label: "Owner Details",
        url: "https://vahan.parivahan.gov.in/nrservices/faces/user/citizen/citizenlogin.xhtml",
        type: "official",
      },
      {
        label: "Print Registration Certificate",
        url: "https://vahan.parivahan.gov.in/vahanservice/vahan/ui/onlineservice/form_print_Rc.xhtml",
        type: "official",
      },
      {
        label: "Know Vehicle Details",
        url: "https://vahan.parivahan.gov.in/vahanservice/vahan/ui/onlineservice/form_print_Rc.xhtml",
        type: "official",
      },
      {
        label: "Add Nominee Details",
        url: "https://vahan.parivahan.gov.in/vahanservice/vahan/ui/eapplication/form_eApplicatonHome.xhtml",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_12",
    name: "Vehicle Service",
    description:
      "Access all vehicle-related services like ownership transfer, fitness certificate, permit application, and NOC for your vehicle.",
    icon: "Car",
    sub_links: [
      {
        label: "Owner Details",
        url: "https://vahan.parivahan.gov.in/nrservices/faces/user/citizen/citizenlogin.xhtml",
        type: "official",
      },
      {
        label: "CNG VAHAN/Apply",
        url: "https://vahan.parivahan.gov.in/cngmaker/vahan/welcome.xhtml",
        type: "official",
      },
      {
        label: "CNG Track Application Status",
        url: "https://vahan.parivahan.gov.in/cngmaker/vahan/user/trackrecord/trackapplicationstatus.xhtml",
        type: "official",
      },
      {
        label: "Vehicle Fitness Testing Booking",
        url: "https://vahan.parivahan.gov.in/AFMS/#/",
        type: "official",
      },
      {
        label: "Fancy Number Search",
        url: "https://fancy.parivahan.gov.in/fancy/faces/public/login.xhtml",
        type: "official",
      },
      {
        label: "Online Payment of National Permit",
        url: "https://vahan.parivahan.gov.in/npermit/faces/np/jsp/nationalpermit.jsp",
        type: "official",
      },
      {
        label: "National Permit Check Transaction Check",
        url: "https://vahan.parivahan.gov.in/npermit/faces/welcome.jsp",
        type: "official",
      },
      {
        label: "Print Permit Receipt",
        url: "https://vahan.parivahan.gov.in/npermit/faces/np/jsp/printpermitreceipt.jsp",
        type: "official",
      },
      {
        label: "All India Tourist Permit",
        url: "https://vahan.parivahan.gov.in/aitp/faces/state.xhtml",
        type: "official",
      },
      {
        label: "FASTag Status",
        url: "https://www.npci.org.in/netcfastag-status",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_62",
    name: "Birth & Death Certificate",
    description:
      "Apply for Birth Certificate and Death Certificate online through the official Civil Registration System (CRS) portal. Register birth & death details, download certificates, and check application status.",
    icon: "FileSignature",
    sub_links: [
      {
        label: "All Forms",
        url: "https://dc.crsorgi.gov.in/assets/download/all_forms_CRS_2019_new.pdf",
        type: "pdf",
      },
      {
        label: "MCCD Form",
        url: "https://dc.crsorgi.gov.in/assets/download/MCCD_Form.pdf",
        type: "pdf",
      },
      {
        label: "Public Login",
        url: "https://dc.crsorgi.gov.in/crs/Auth/general-public",
        type: "official",
      },
      {
        label: "Official Website",
        url: "https://dc.crsorgi.gov.in/crs/home",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_13",
    name: "E-Challan",
    description:
      "Check pending traffic challans online, pay your traffic fines securely, and view your violation history using vehicle or DL number.",
    icon: "ReceiptText",
    sub_links: [
      {
        label: "E-Challan Check",
        url: "https://echallan.parivahan.gov.in/index/accused-challan",
        type: "official",
      },
      {
        label: "E-Challan Pay Status",
        url: "https://vahan.parivahan.gov.in/eTransPgi/transactionStatus",
        type: "official",
      },
      {
        label: "Vahan PGI",
        url: "https://vahan.parivahan.gov.in/vahanpgi/faces/ui/transactionStatus.xhtml",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_6",
    name: "E-Shram Card",
    description:
      "Register as an unorganized worker to get social security benefits, accidental insurance, and direct government scheme transfers.",
    icon: "HardHat",
    sub_links: [
      {
        label: "Eshram Card Apply (Platform Worker)",
        url: "https://register.eshram.gov.in/#/user/platform-worker-registration",
        type: "official",
      },
      {
        label: "Eshram Card Apply",
        url: "https://register.eshram.gov.in/#/user/self",
        type: "official",
      },
      {
        label: "Eshram Card Download",
        url: "https://register.eshram.gov.in/#/user/aadhaar-login",
        type: "official",
      },
      {
        label: "Eshram Card Download (UAN)",
        url: "https://register.eshram.gov.in/#/user/uan-login",
        type: "official",
      },
      {
        label: "Eshram Card Number Find",
        url: "https://register.eshram.gov.in/#/know-your-uan",
        type: "official",
      },
      {
        label: "Eshram Card CSC Login",
        url: "https://connect.csc.gov.in/account/authorize",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_9",
    name: "APAAR ID Card",
    description:
      "One Nation One Student ID: Create your APAAR ID to store academic credits, degrees, and certificates digitally in one place.",
    icon: "GraduationCap",
    sub_links: [
      {
        label: "New Apply",
        url: "https://digilocker.meripehchaan.gov.in/signup",
        type: "official",
      },
      {
        label: "Apaar Login",
        url: "https://digilocker.meripehchaan.gov.in/",
        type: "official",
      },
      { label: "ABC Portal", url: "https://www.abc.gov.in/", type: "official" },
    ],
  },
  {
    id: "dyn_8",
    name: "ABHA Card (Ayushman Bharat Health Account)",
    description:
      "Create your 14-digit ABHA health ID to digitally store and share your medical records, prescriptions, and lab reports securely.",
    icon: "HeartPulse",
    sub_links: [
      {
        label: "Abha Card Apply By Aadhaar",
        url: "https://abha.abdm.gov.in/abha/v3/register/aadhaar",
        type: "official",
      },
      {
        label: "Abha Card Apply By Driving Licence",
        url: "https://abha.abdm.gov.in/abha/v3/register/driving-licence",
        type: "official",
      },
      {
        label: "Abha Card Download",
        url: "https://abha.abdm.gov.in/abha/v3/login",
        type: "official",
      },
      {
        label: "Abha Card E-KYC",
        url: "https://abha.abdm.gov.in/abha/v3/login",
        type: "official",
      },
      {
        label: "Abha Card Number Find",
        url: "https://abha.abdm.gov.in/abha/v3/login/recover",
        type: "official",
      },
      {
        label: "Abha Card Login",
        url: "https://abha.abdm.gov.in/abha/v3/login",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_10",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description:
      "Apply for crop insurance, check application status, and calculate insurance premiums to protect your crops against natural calamities.",
    icon: "Wheat",
    sub_links: [
      {
        label: "New Farmer Registration",
        url: "https://pmfby.gov.in/farmerRegistrationForm",
        type: "official",
      },
      {
        label: "Self Registration",
        url: "https://pmfby.gov.in/selfRegistration",
        type: "official",
      },
      {
        label: "Farmer Login",
        url: "https://pmfby.gov.in/farmerLogin",
        type: "official",
      },
      {
        label: "Official Website / Self Login",
        url: "https://pmfby.gov.in/",
        type: "official",
      },
      {
        label: "Check Application Status",
        url: "https://kisansuvidha.gov.in/crop-insurance/application-status",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_4",
    name: "PMAY-Gramin (Pradhan Mantri Awas Yojana - Rural)",
    description:
      "Check PMAY rural beneficiary list, apply for housing schemes, and track your home construction subsidy status in rural areas.",
    icon: "Home",
    sub_links: [
      {
        label: "Payment/Kist Check",
        url: "https://awaassoft.pmayg.dord.gov.in/netiay/Benificiary.aspx",
        type: "official",
      },
      {
        label: "New List Check",
        url: "https://report.pmayg.dord.gov.in/netiay/SocialAuditReport/BeneficiaryDetailForSocialAuditReport.aspx",
        type: "official",
      },
      {
        label: "Registration No Find",
        url: "https://report.pmayg.dord.gov.in/netiay/EFMSReport/BenAccountFrozenReport.aspx",
        type: "official",
      },
      {
        label: "Search Beneficiary Details",
        url: "https://awaassoft.pmayg.dord.gov.in/netiay/Benificiary.aspx",
        type: "official",
      },
      {
        label: "FTO Tracking Rural",
        url: "https://awaassoft.pmayg.dord.gov.in/netiay/fto_transaction_details.aspx",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_5",
    name: "PMAY-Urban/Sehri (Pradhan Mantri Awas Yojana - Urban)",
    description:
      "Apply for affordable urban housing, check PMAY urban status, and get subsidies under the Credit Linked Subsidy Scheme (CLSS).",
    icon: "Building",
    sub_links: [
      {
        label: "PMAY New Apply-Urban",
        url: "https://pmaymis.gov.in/pmaymis2_2024/PMAY_SURVEY/EligiblityCheck.aspx",
        type: "official",
      },
      {
        label: "Track Assessment Status-Urban",
        url: "https://pmaymis.gov.in/track_application_status.aspx",
        type: "official",
      },
      {
        label: "Track Survey-Urban",
        url: "https://pmaymis.gov.in/pmaymis2_2024/PMAY_SURVEY/TrackApplication.aspx",
        type: "official",
      },
      {
        label: "PMAY Check Eligibility-Urban",
        url: "https://rules.myscheme.gov.in/check-eligibility/pmay-u",
        type: "official",
      },
      {
        label: "Scheme Guidelines Hindi/English",
        url: "https://pmaymis.gov.in/PMAYMIS2_2024/scheme-guidelines.html",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_32",
    name: "EPFO (Employee' Provident Fund)",
    description:
      "Check your PF balance (Passbook), track claim status, and manage your UAN details. Access withdrawal services and update your KYC.",
    icon: "Wallet",
    sub_links: [
      {
        label: "UAN Login Employees (EPFO)",
        url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
        type: "official",
      },
      {
        label: "EPF Passbook (EPFO)",
        url: "https://passbook.epfindia.gov.in/MemberPassBook/login",
        type: "official",
      },
      {
        label: "Find UAN (EPFO)",
        url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/no-auth/uanservice/v2/home",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_31",
    name: "LIC Service (Life Insurance Corporation)",
    description:
      "Pay your insurance premiums online, check policy status, and download premium receipts. Track your claim settlements easily.",
    icon: "ShieldCheck",
    sub_links: [
      {
        label: "Premium Payment (LIC)",
        url: "https://ebiz.licindia.in/D2CPM/",
        type: "official",
      },
      {
        label: "Buy Insurance Policies Online (LIC)",
        url: "https://licindia.in/buy-online",
        type: "official",
      },
      {
        label: "Customer Portal Login (LIC)",
        url: "https://ebiz.licindia.in/D2CPM/",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_30",
    name: "E-NAM (National Agriculture Market)",
    description:
      "Trade your agricultural produce online across India. Access real-time mandi prices, online payment facilities, and find the best buyers for your crops.",
    icon: "Sprout",
    sub_links: [
      {
        label: "E-NAM Registration",
        url: "https://enam.gov.in/web/Enam_ctrl/enam_registration",
        type: "official",
      },
      {
        label: "Login (E-Nam)",
        url: "https://enam.gov.in/NAMV2/faces/infrastructure/SLogin.jsf",
        type: "official",
      },
      {
        label: "Price Details (E-Nam)",
        url: "https://enam.gov.in/web/dashboard/trade-data",
        type: "official",
      },
      {
        label: "Beta E-NAM Registration",
        url: "https://beta.enam.gov.in/register",
        type: "official",
      },
      {
        label: "Beta E-NAM Login",
        url: "https://beta.enam.gov.in/login",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_29",
    name: "PM SVANidhi Yojana",
    description:
      "Apply for affordable working capital loans for street vendors. Track your application status and manage your loan repayment to build a credit score.",
    icon: "HandCoins",
    sub_links: [
      {
        label: "Apply Loan",
        url: "https://www.pmsvanidhi.mohua.gov.in/LoginLoRCumLoan",
        type: "official",
      },
      {
        label: "Apply For ₹15,000 Loan",
        url: "https://www.pmsvanidhi.mohua.gov.in/Login",
        type: "official",
      },
      {
        label: "Apply For ₹25,000 Loan",
        url: "https://www.pmsvanidhi.mohua.gov.in/LoginSecondLoanTerm",
        type: "official",
      },
      {
        label: "Apply For ₹50,000 Loan",
        url: "https://www.pmsvanidhi.mohua.gov.in/LoginThirdLoanTerm",
        type: "official",
      },
      {
        label: "Application Status",
        url: "https://www.pmsvanidhi.mohua.gov.in/Home/Search",
        type: "official",
      },
      {
        label: "Applicant Login",
        url: "https://www.pmsvanidhi.mohua.gov.in/Login?flag=ApplicantLogin",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_28",
    name: "Soil Health Card",
    description:
      "Check your soil health status online and download the Soil Health Card. Get expert recommendations on dosage of nutrients and fertilizers needed for your farm.",
    icon: "Leaf",
    sub_links: [
      {
        label: "User Registration",
        url: "https://soilhealth.dac.gov.in/admin/app/userRegistration",
        type: "official",
      },
      {
        label: "User Login",
        url: "https://soilhealth.dac.gov.in/admin/",
        type: "official",
      },
      {
        label: "Check Ticket Status",
        url: "https://support.soilhealth.dac.gov.in/view.php",
        type: "official",
      },
      {
        label: "Find Soil Testing Labs",
        url: "https://soilhealth.dac.gov.in/soilTestingLabs",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_27",
    name: "MKisan Portal",
    description:
      "Access advisor services and agricultural information through SMS. Get expert advice on weather, crops, and market prices directly on your mobile.",
    icon: "Sprout",
    sub_links: [
      {
        label: "Registration for KSEWA (mKisan)",
        url: "https://mkisan.gov.in/Home/RegisterForKsewa",
        type: "official",
      },
      {
        label: "KSewa Login (mKisan)",
        url: "https://mkisan.gov.in/Home/LoginForKSewa",
        type: "official",
      },
      {
        label: "Farmer Registration (mKisan)",
        url: "https://mkisan.gov.in/Home/FarmerRegistration",
        type: "official",
      },
      {
        label: "Login Registration (mKisan)",
        url: "https://mkisan.gov.in/Home/Login",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_26",
    name: "PM Surya Ghar Yojana (Muft Bijli Yojana)",
    description:
      "Apply for the Solar Rooftop Scheme to get free electricity and subsidies. Check eligibility, calculate solar potential, and track your installation request.",
    icon: "Sun",
    sub_links: [
      {
        label: "Apply",
        url: "https://pmsuryaghar.gov.in/#/consumer-how-to-apply",
        type: "official",
      },
      {
        label: "Benefits Details",
        url: "https://pmsuryaghar.gov.in/#/benefits",
        type: "official",
      },
      {
        label: "Consumer Financing Options",
        url: "https://pmsuryaghar.gov.in/#/consumer-financing-options",
        type: "official",
      },
      {
        label: "Find Registered Vendors",
        url: "https://pmsuryaghar.gov.in/#/registered-vendors",
        type: "official",
      },
      {
        label: "Apply/Login",
        url: "https://consumer.pmsuryaghar.gov.in/consumer/#/login",
        type: "official",
      },
      {
        label: "Vendor Registration",
        url: "https://vendor.pmsuryaghar.gov.in/vendor/#/vendor-register",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_25",
    name: "Udyam Aadhaar Service (MSME)",
    description:
      "Register your small or medium business under MSME to get government benefits. Download your Udyam Certificate and access easy loan schemes for entrepreneurs.",
    icon: "Factory",
    sub_links: [
      {
        label: "Udyam Registration (MSME)",
        url: "https://udyamregistration.gov.in/UdyamRegistration.aspx",
        type: "official",
      },
      {
        label: "Print UAM Certificate",
        url: "https://udyamregistration.gov.in/UA/PrintAcknowledgement_Pub.aspx",
        type: "official",
      },
      {
        label: "Print Udyam Certificate (MSME)",
        url: "https://udyamregistration.gov.in/Udyam_Login.aspx",
        type: "official",
      },
      {
        label: "Verify Udyog Aadhaar",
        url: "https://udyamregistration.gov.in/UA/UA_VerifyUAM.aspx",
        type: "official",
      },
      {
        label: "Verify Udyam Registration Number (MSME)",
        url: "https://udyamregistration.gov.in/Udyam_Verify.aspx",
        type: "official",
      },
      {
        label: "Update/Cancel Udyam Registration",
        url: "https://udyamregistration.gov.in/Udyam_Login.aspx",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_24",
    name: "National Scholarship Portal (NSP)",
    description:
      "Explore and apply for various Central and State Government scholarships. Check your eligibility, submit applications, and track your scholarship payment status.",
    icon: "Award",
    sub_links: [
      {
        label: "Self Registration (NSP)",
        url: "https://scholarships.gov.in/otrapplication/#/",
        type: "official",
      },
      {
        label: "Portal Login (NSP)",
        url: "https://scholarships.gov.in/otrapplication/#/login-page",
        type: "official",
      },
      {
        label: "Change Mobile Number (NSP)",
        url: "https://scholarships.gov.in/otrapplication/#/changemobile",
        type: "official",
      },
      {
        label: "Track Your Payment (NSP)",
        url: "https://pfms.nic.in/SitePages/KnowYourPayment_Dw_NewNew.aspx",
        type: "official",
      },
      {
        label: "Schemes Details (NSP)",
        url: "https://scholarships.gov.in/All-Scholarships",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_23",
    name: "Lost/Found Mobile & Internet",
    description:
      "Report and block your lost or stolen mobile phone to prevent misuse. Track the status of your request and unblock your device once it is recovered.",
    icon: "Smartphone",
    sub_links: [
      {
        label: "IMEI Verification",
        url: "https://ceir.sancharsaathi.gov.in/Device/CeirImeiVerification.jsp",
        type: "official",
      },
      {
        label: "Blocking Lost/Stolen Mobile",
        url: "https://ceir.sancharsaathi.gov.in/Request/CeirUserBlockRequestDirect.jsp",
        type: "official",
      },
      {
        label: "Un-Blocking Recovered/Found Mobile",
        url: "https://ceir.sancharsaathi.gov.in/Request/CeirUserUnblockRequestDirect.jsp",
        type: "official",
      },
      {
        label: "Know Mobile Connections in Your Name",
        url: "https://tafcop.sancharsaathi.gov.in/telecomUser/",
        type: "official",
      },
      {
        label: "Check Lost/Stolen Mobile Status",
        url: "https://ceir.sancharsaathi.gov.in/Request/CeirUserBlockRequestDirect.jsp",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_22",
    name: "Railway Service",
    description:
      "Book IRCTC train tickets, check PNR status, and view live train running status. Access seat availability, train schedules, and online catering services.",
    icon: "TrainFront",
    sub_links: [
      {
        label: "PNR Check",
        url: "https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html",
        type: "official",
      },
      {
        label: "Train Check",
        url: "https://www.indianrail.gov.in/enquiry/TBIS/TrainBetweenImportantStations.html",
        type: "official",
      },
      {
        label: "Train Seat Check",
        url: "https://www.indianrail.gov.in/enquiry/SEAT/SeatAvailability.html",
        type: "official",
      },
      {
        label: "Fare Enquiry",
        url: "https://www.indianrail.gov.in/enquiry/FARE/FareEnquiry.html",
        type: "official",
      },
      {
        label: "Train Number Track",
        url: "https://www.indianrail.gov.in/enquiry/SCHEDULE/TrainSchedule.html",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_21",
    name: "Passport Seva Service",
    description:
      "Register for a new Passport, book appointment slots, and track your application status. Access renewal services and find nearby Passport Seva Kendras (PSK).",
    icon: "BookUser",
    sub_links: [
      {
        label: "Passport Login",
        url: "https://services2.passportindia.gov.in/forms/PreLogin",
        type: "official",
      },
      {
        label: "User Registration",
        url: "https://services2.passportindia.gov.in/forms/registration",
        type: "official",
      },
      {
        label: "Apply Passport",
        url: "https://www.passportindia.gov.in/psp/ApplyPassport",
        type: "official",
      },
      {
        label: "Check Passport Appointment Availability",
        url: "https://www.passportindia.gov.in/psp/checkAppointmentAvailibility",
        type: "official",
      },
      {
        label: "Track Passport Application Status",
        url: "https://www.passportindia.gov.in/psp/trackApplicationService",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_19",
    name: "PM Kisan (Kisan Samman Nidhi Yojana)",
    description:
      "Check your PM Kisan installment status, register as a new farmer, and update E-KYC details. Track your ₹6,000 annual financial assistance status.",
    icon: "Tractor",
    sub_links: [
      {
        label: "PM Kisan Status Check",
        url: "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx",
        type: "official",
      },
      {
        label: "Find Registration Number (PM Kisan)",
        url: "https://pmkisan.gov.in/KnowYour_Registration.aspx",
        type: "official",
      },
      {
        label: "PM Kisan New Farmer Apply",
        url: "https://pmkisan.gov.in/RegistrationFormupdated.aspx",
        type: "official",
      },
      {
        label: "Update Farmer (PM Kisan)",
        url: "https://pmkisan.gov.in/SearchSelfRegisterfarmerDetailsnewUpdated.aspx",
        type: "official",
      },
      {
        label: "Update Mobile Number (PM Kisan)",
        url: "https://pmkisan.gov.in/MobileUpdation_Pub.aspx",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_18",
    name: "GST Verification",
    description:
      "Instantly verify GSTIN details, check taxpayer registration status, and validate business information. Access real-time GST filing history.",
    icon: "Receipt",
    sub_links: [
      {
        label: "Find GST Number",
        url: "https://services.gst.gov.in/services/searchtpbypan",
        type: "official",
      },
      {
        label: "Search by PAN",
        url: "https://services.gst.gov.in/services/searchtpbypan",
        type: "official",
      },
      {
        label: "Search by GSTIN/UIN",
        url: "https://services.gst.gov.in/services/searchtp",
        type: "official",
      },
      {
        label: "New GST Apply",
        url: "https://reg.gst.gov.in/registration/",
        type: "official",
      },
      {
        label: "Track GST Application Status",
        url: "https://services.gst.gov.in/services/arnstatus",
        type: "official",
      },
      {
        label: "Create Challan Payment",
        url: "https://payment.gst.gov.in/payment/",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_17",
    name: "Checkpost Tax/Road Tax",
    description:
      "Pay your vehicle road tax and border checkpost tax online for inter-state travel. Avoid penalties with instant digital receipts.",
    icon: "Banknote",
    sub_links: [
      {
        label: "Checkpost Tax/Road Tax",
        url: "https://parivahan.gov.in/en/node/579",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_16",
    name: "Vahan Green Sewa",
    description:
      "Pay your Green Tax online to reduce environmental impact. Access eco-friendly vehicle services and contribute to a cleaner environment.",
    icon: "Leaf",
    sub_links: [
      {
        label: "Vahan Green Sewa Apply",
        url: "https://vahan.parivahan.gov.in/vahangreensewa/vahan/application.xhtml",
        type: "official",
      },
      {
        label: "Vahan Green Sewa Track Application Status",
        url: "https://vahan.parivahan.gov.in/vahangreensewa/vahan/user/trackrecord/trackapplicationstatus.xhtml",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_15",
    name: "PUC Service (Pollution Under Control)",
    description:
      "Check your vehicle's pollution certificate status online, find authorized PUC centers, and download your digital PUC certificate.",
    icon: "Wind",
    sub_links: [
      {
        label: "PUC Certificate Download",
        url: "https://puc.parivahan.gov.in/puc/views/PucCertificate.xhtml",
        type: "official",
      },
      {
        label: "Register PUC Center",
        url: "https://puc.parivahan.gov.in/puc/views/RegisterUser.xhtml",
        type: "official",
      },
      {
        label: "Active PUC Center List",
        url: "https://puc.parivahan.gov.in/puc/views/PUCCenterList.xhtml",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_37",
    name: "National Payments Corporation of India (NPCI)",
    description:
      "Access secure digital payment services including UPI, IMPS, and AePS. Manage Bharat BillPay (BBPS) and explore Rupay card features.",
    icon: "Landmark",
    sub_links: [
      {
        label: "Bank To Aadhaar Link",
        url: "https://www.npci.org.in/",
        type: "official",
      },
      {
        label: "UPI Complaint Online",
        url: "https://www.npci.org.in/upi-complaint",
        type: "official",
      },
      {
        label: "Other Product Complaint",
        url: "https://www.npci.org.in/complaint-register",
        type: "official",
      },
      {
        label: "Find an ATM",
        url: "https://www.npci.org.in/find-atm",
        type: "official",
      },
      {
        label: "UPI AutoPay block",
        url: "https://www.upihelp.npci.org.in/",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_35",
    name: "National Consumer Helpline (NCH)",
    description:
      "Register your consumer complaints online and track grievance status. Get quick resolution for product and service related issues.",
    icon: "MessageSquareWarning",
    sub_links: [
      {
        label: "Register Grievance (NCH)",
        url: "https://consumerhelpline.gov.in/user/signup.php",
        type: "official",
      },
      {
        label: "Track Your Grievance (NCH)",
        url: "https://consumerhelpline.gov.in/user/track-complaint.php",
        type: "official",
      },
      {
        label: "Upload Documents (NCH)",
        url: "https://consumerhelpline.gov.in/user/upload-docs.php",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_34",
    name: "National Career Service (NCS)",
    description:
      "Explore thousands of job opportunities, register for career counseling, and access vocational training. A one-stop platform for job seekers and employers.",
    icon: "Briefcase",
    sub_links: [
      {
        label: "Register All Type (NCS)",
        url: "https://www.ncs.gov.in/_layouts/15/NCSP/Registration.aspx",
        type: "official",
      },
      {
        label: "Login (NCS)",
        url: "https://www.ncs.gov.in/_layouts/15/ncsp/user-management/login.aspx",
        type: "official",
      },
      {
        label: "Main Website (NCS)",
        url: "https://betacloud.ncs.gov.in/",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_33",
    name: "Check Free CIBIL Score",
    description:
      "Check your latest credit score for free and get a detailed credit report instantly. Monitor your financial health to improve loan approval chances.",
    icon: "TrendingUp",
    sub_links: [
      {
        label: "Check Free CIBIL Score",
        url: "https://creditreport.paisabazaar.com/credit-report/apply",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_65",
    name: "INDANE GAS",
    description:
      "Access Indane Gas online services including new LPG connection, refill cylinder booking, subsidy status check, KYC update, and address correction.",
    icon: "Flame",
    sub_links: [
      {
        label: "Check Gas Subsidy",
        url: "https://cx.indianoil.in/EPICIOCL/faces/GrievanceMainPage.jspx",
        type: "official",
      },
      {
        label: "Give up Subsidy",
        url: "https://cx.indianoil.in/webcenter/portal/LPG/pages_giveupsubsidyvoluntarilylpgservice",
        type: "official",
      },
      {
        label: "Online Application Ujjwala",
        url: "https://cx.indianoil.in/webcenter/portal/LPG/pages_lpgservicenewconnection",
        type: "official",
      },
      {
        label: "Find Your LPG ID",
        url: "https://cx.indianoil.in/webcenter/portal/LPG/pages_findyourlpgid",
        type: "official",
      },
      { label: "User Login", url: "https://cx.indianoil.in", type: "official" },
      {
        label: "User Register",
        url: "https://cx.indianoil.in/webcenter/portal/Customer/pages_cxregistration",
        type: "official",
      },
      {
        label: "Indane Gas Official Website",
        url: "https://cx.indianoil.in/webcenter/portal/LPG/pages_lpgservices",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_64",
    name: "HP GAS",
    description:
      "Access HP Gas online services including new LPG connection, gas cylinder refill booking, subsidy status check, KYC update, and address correction.",
    icon: "Flame",
    sub_links: [
      {
        label: "Book Cylinder",
        url: "https://myhpgas.in/myHPGas/HPGas/BookRefill.aspx",
        type: "official",
      },
      {
        label: "Book & Pay Online",
        url: "https://myhpgas.in/myHPGas/QuickPay.aspx",
        type: "official",
      },
      {
        label: "Check Gas Subsidy",
        url: "https://myhpgas.in/myHPGas/HPGas/OptOutSubsidy.aspx",
        type: "official",
      },
      {
        label: "Locate Distributor",
        url: "https://myhpgas.in/myHPGas/HPGas/LocateDistributor.aspx",
        type: "official",
      },
      {
        label: "Find Your LPG ID",
        url: "https://myhpgas.in/myHPGas/HPGas/FindYourLPGID.aspx",
        type: "official",
      },
      {
        label: "New User SignUp",
        url: "https://myhpgas.in/myHPGas/HPGas/SignUp.aspx",
        type: "official",
      },
      {
        label: "User Login",
        url: "https://myhpgas.in/myHPGas/PortalLogin.aspx",
        type: "official",
      },
      {
        label: "HP Gas Official Website",
        url: "https://myhpgas.in/myHPGas/HPGas/LPGservices.aspx",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_63",
    name: "BHARAT GAS",
    description:
      "Access Bharat Gas online services including new LPG gas connection, refill cylinder booking, subsidy status check, KYC update, and address change.",
    icon: "Flame",
    sub_links: [
      {
        label: "Book Cylinder",
        url: "https://my.ebharatgas.com/Downtime/Index",
        type: "official",
      },
      {
        label: "Book & Pay Online",
        url: "https://my.ebharatgas.com/QuickBook/BookAndPay",
        type: "official",
      },
      {
        label: "Check Gas Subsidy",
        url: "https://my.ebharatgas.com/GiveUpSubsidy/Index",
        type: "official",
      },
      {
        label: "Online Application Ujjwala",
        url: "https://my.ebharatgas.com/bharatgas/LPGServices/ApplyUjjwala2Connection",
        type: "official",
      },
      {
        label: "Find Your LPG ID",
        url: "https://my.ebharatgas.com/Downtime/Index",
        type: "official",
      },
      {
        label: "Bharat Gas Official Website",
        url: "https://my.ebharatgas.com/LPGservices/index",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_82",
    name: "Unique Disability ID Card",
    description:
      "Apply for Unique Disability ID (UDID) Card online and access disability certificate services. Register, download certificates, and check application status.",
    icon: "Accessibility",
    sub_links: [
      {
        label: "Apply Online",
        url: "https://swavlambancard.gov.in/Applyforudid",
        type: "official",
      },
      {
        label: "Track Application",
        url: "https://swavlambancard.gov.in/track-your-application",
        type: "official",
      },
      {
        label: "Login",
        url: "https://swavlambancard.gov.in/login",
        type: "official",
      },
      {
        label: "Official Website",
        url: "https://swavlambancard.gov.in/",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_67",
    name: "Swachh Bharat Mission (स्वच्छाालय योजना)",
    description:
      "Swachh Bharat Mission (SBM) के अंतर्गत शौचालय योजना से जुड़ी सभी सेवाएं ऑनलाइन प्राप्त करें जैसे शौचालय आवेदन, beneficiary status, payment status।",
    icon: "Sparkles",
    sub_links: [
      {
        label: "Apply Online",
        url: "https://sbm.gov.in/SBM_DBT/Secure/DBT/DBT_Registration.aspx",
        type: "official",
      },
      {
        label: "Login",
        url: "https://sbm.gov.in/sbm_dbt/secure/login.aspx",
        type: "official",
      },
      {
        label: "Track Application Status",
        url: "https://sbm.gov.in/sbm_dbt/secure/login.aspx",
        type: "official",
      },
    ],
  },
  {
    id: "dyn_91",
    name: "Fancy Mobile Number",
    description:
      "Search and book premium Fancy Mobile Numbers online. Choose VIP, lucky, memorable, and attractive mobile numbers with easy availability checking.",
    icon: "Phone",
    sub_links: [
      {
        label: "Jio Fancy/VIP Mobile Number",
        url: "https://www.jio.com/selfcare/choice-number/",
        type: "official",
      },
      {
        label: "Airtel Fancy/VIP Mobile Number",
        url: "https://www.airtel.in/blog/postpaid/fancy-phone-number-with-postpaid-sim-connection/",
        type: "official",
      },
      {
        label: "Vi Fancy/VIP Mobile Number",
        url: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
        type: "official",
      },
    ],
  },
];

export function getPortalServiceById(id) {
  return PORTAL_SERVICES.find((item) => item.id === id);
}
