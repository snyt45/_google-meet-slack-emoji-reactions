export const getManifest = () => {
  return {
    manifest_version: 3,
    name: 'Google Meet Slack Emoji Reactions',
    description: 'Google MeetにSlackの絵文字資産を使ったリアクション機能を提供します。',
    version: '0.1',
    content_scripts: [
      {
        matches: ['http://meet.google.com/*', 'https://meet.google.com/*'],
        js: ['./dist/contentScripts/index.global.js'],
      },
    ],
    action: {
      default_popup: './dist/popup/index.html'
    },
  }
}
