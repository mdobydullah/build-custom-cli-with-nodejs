const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const data = require('../lib/data');
const open = require('open');

const questions = [
  { type: 'list', name: 'topic', message: 'Choose a topic', choices: data.topicsNamePlain },
  { type: 'confirm', name: 'openInBrowser', message: 'Open the topic in browser?', choices: data.openInBrowser },
];

module.exports = function () {
  inquirer
    .prompt(questions)
    .then(function (answers) {

      // get topic slug from topics array
      var getTopicArry = data.topics.filter(t => t.name == answers.topic);
      var getSlug = getTopicArry[0]['slug'];
      var topicUrl = 'https://www.mynotepaper.com/topics/' + getSlug;

      // print answers
      console.log('\n');
      console.log('YOUR ANSWERS');
      console.log('------------------');

      console.log(pad(colors.grey('Topic: '), 30), answers.topic);
      console.log(pad(colors.grey('Topic URL: '), 30), topicUrl);
      console.log(pad(colors.grey('Open in browser: '), 30), answers.openInBrowser);

      // open topic in browser
      if(answers.openInBrowser) {
        (async () => {
          // opens in the default browser
          await open(topicUrl);
        })();
      }
        
    });
};