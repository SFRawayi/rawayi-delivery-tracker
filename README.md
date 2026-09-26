# Rawayi Delivery Tracker

A login-protected web app that reads the Shopify order sheet and groups every order into delivery-status tabs:
**All Orders · Delivered · In Transit · Out for Delivery · Failed Delivery · RTO · Shipment Stuck · Pickup Pending · Not Shipped · Cancelled**.
Click a tab to see its orders, then click an order for its full details and a courier tracking link.

```
index.html            ← the app (hosted free on GitHub Pages)
config.js             ← paste your Apps Script URL here
apps-script/Code.gs   ← backend: goes inside the Google Sheet (Extensions → Apps Script)
```

## How it works
- The **Google Sheet** stays the source of truth. Whatever your Shopify sync writes there shows up in the app within 5 minutes, or straight away when you press Refresh.
- **Apps Script** (inside the sheet) is the backend. It checks usernames and passwords and only sends order data to people who are logged in.
- **GitHub Pages** hosts the screen your team opens on phone or laptop.
- Users are stored in a hidden tab `_AppUsers`. Passwords are salted and hashed, never saved as plain text. A login lasts 12 hours, then the person has to sign in again.

## Tab rules (based on "Live Tracking Status")
| Tab | Statuses |
|---|---|
| Delivered | Delivered |
| In Transit | In Transit (less than 7 days since order) |
| Out for Delivery | Out for Delivery |
| Failed Delivery | Failed Delivery, Undelivered, NDR |
| RTO | Any status containing RTO / Return |
| Shipment Stuck | Shipment Delayed, Shipment Held, Not Serviceable, plus AWB Registered/Pickup Pending for 3+ days, plus In Transit for 7+ days |
| Pickup Pending | AWB Registered, Pickup Pending, Out for Pickup (under 3 days) |
| Not Shipped | Unfulfilled with no AWB |
| Cancelled | Cancelled status, or voided/refunded and not shipped |
| Other | Anything unrecognised (e.g. "Unrecognized code: 34") |

You can change the 3- and 7-day limits in `config.js`.
