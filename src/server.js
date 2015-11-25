//var Twitter = require('twitter')

import Twitter from 'twitter'

console.log('starting...')

var client = new Twitter({
    consumer_key: 'WLpSXRSZLa9cmoBAxkFBg7fAw',
    consumer_secret: 'F3zAPwePNOtSvdzQdOFp2k0QCqBMYikice4ssl3v9DUYu1ZYQK',
    access_token_key: '4348066813-w2LIBZnoCHniqmMvoIFHhdUOT9nCXgTIwZiIt3V',
    access_token_secret: 'DGdDEXJND3L872L3v38h2XK0QVg6fYQ5YkukXyHa0ezfT'
})

var params = { screen_name: 'nodejs' }

/*client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if(error) {
        console.log('ERROR: {error}')
    } else {
        console.log(tweets)
    }
})*/

client.stream('statuses/filter', {track: 'javascript'}, (stream) => {
    stream.on('data', (tweet) => {
        console.log(tweet.text)
    })

    stream.on('error', (error) => { throw error })
})