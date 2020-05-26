const colors = require('colors');
const { topics } = require('./data');

// export function to list coffee
module.exports = function() {
    console.log('MNP TOPICS');
    console.log('------------------');

    // list on separate lines
    topics.forEach((topic) => {
        console.log('%s', colors.bold(topic.name));
    });
};