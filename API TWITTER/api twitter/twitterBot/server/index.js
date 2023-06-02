let Twit = require('twit')

let T = new Twit({
    // keys y tokens desde la app de twitter developer.twitter.com
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
})
let id_twitter;
function buscar(){
    T.get('search/tweets', { q: 'AlbertoCetzzal', count: 1 }, function(err, data, response) {
      try {
         id_twitter = data.statuses[0].id_str; 
         tuitear(id_twitter);
      } catch (error) {
          
      }
    })
}

function tuitear(tweet){
    T.post('statuses/retweet/:id', { id: tweet }, function (err, data, response) {
        console.log(data)
      })
}

setInterval(buscar, 10*60*1000);
