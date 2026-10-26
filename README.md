# ar-lead-bot

Slack bot for lead capture – AR Tech Riyadh

AI agent that captures leads from Slack and forwards them to WhatsApp / CRM. Built mobile-first with Node.js and Slack Bolt.

## ✨ Features
- `/lead` slash command to capture name, phone, interest
- Auto-forward to WhatsApp (+966 57 501 9683)
- Stores leads in JSON (easy upgrade to Google Sheets)
- Runs on Termux – no laptop needed

## 🛠️ Tech
`Node.js` • `Slack Bolt` • `OpenAI` • `Termux`

## 🚀 Quick Start (Termux)
```bash
pkg install nodejs git -y
git clone https://github.com/ra7049229-byte/ar-lead-bot
cd ar-lead-bot
npm install @slack/bolt
node bot.js
