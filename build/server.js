'use strict';

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('starting...'); //var Twitter = require('twitter')

var client = new _twitter2.default({
    consumer_key: 'WLpSXRSZLa9cmoBAxkFBg7fAw',
    consumer_secret: 'F3zAPwePNOtSvdzQdOFp2k0QCqBMYikice4ssl3v9DUYu1ZYQK',
    access_token_key: '4348066813-w2LIBZnoCHniqmMvoIFHhdUOT9nCXgTIwZiIt3V',
    access_token_secret: 'DGdDEXJND3L872L3v38h2XK0QVg6fYQ5YkukXyHa0ezfT'
});

var params = { screen_name: 'nodejs' };

/*client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if(error) {
        console.log('ERROR: {error}')
    } else {
        console.log(tweets)
    }
})*/

client.stream('statuses/filter', { track: 'javascript' }, function (stream) {
    stream.on('data', function (tweet) {
        console.log(tweet.text);
    });

    stream.on('error', function (error) {
        throw error;
    });
});
//# sourceMappingURL=server.js.map
