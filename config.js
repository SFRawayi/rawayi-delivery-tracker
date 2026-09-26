// ============================================================
//  Rawayi Delivery Tracker — settings
//  The only line you MUST change is API_URL.
// ============================================================
window.RAWAYI_CONFIG = {
  // Paste the Web app URL you get after deploying apps-script/Code.gs
  // It looks like: https://script.google.com/macros/s/AKfy..../exec
  API_URL: 'https://script.google.com/macros/s/AKfycbxpDelMDjPsgMctR6yhLmL-a31hvUzUCSdS35SBmslswKRH7LDL9pzF8X2kg0k6_cMH/exec',

  // An order counts as "Shipment Stuck" when it has not moved for this many days
  // since the order date (on top of Delayed / Held / Not Serviceable statuses).
  PICKUP_STUCK_DAYS: 3,   // still "AWB Registered / Pickup Pending" after 3 days
  TRANSIT_STUCK_DAYS: 7,  // still "In Transit" after 7 days

  // How often the app re-reads the sheet while open (minutes)
  AUTO_REFRESH_MINUTES: 5,
};
