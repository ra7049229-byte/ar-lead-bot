// ar-lead-bot – AR Tech Riyadh
require('dotenv').config();
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN || 'xoxb-PLACEHOLDER',
  signingSecret: process.env.SLACK_SIGNING_SECRET || 'placeholder',
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN || 'xapp-placeholder'
});

app.command('/lead', async ({ command, ack, say }) => {
  await ack();
  const lead = command.text || 'No details';
  console.log(`🔥 NEW LEAD from ${command.user_name}: ${lead}`);
  await say(`✅ Lead saved: *${lead}*\nAR Tech Riyadh – আমরা শীঘ্রই যোগাযোগ করব। WhatsApp: +966575019683`);
});

(async () => {
  await app.start();
  console.log('⚡ ar-lead-bot is running!');
})();
