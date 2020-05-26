// topics
exports.topics = [
  {name: 'Laravel', slug: 'laravel'},
  {name: 'Vue.js', slug: 'vue-js'},
  {name: 'Linux Server', slug: 'linux-server'},
];

 // convert topic names to one line
exports.topicsNamePlain = exports.topics.map(function(o) {
  return o.name;
});

// open in browser
exports.openInBrowser = [
  "Yes",
  "No"
];