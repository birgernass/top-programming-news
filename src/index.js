const fetch = require('node-fetch')

const testStatus = res =>
  res.status >= 400
    ? Promise.reject(new Error(`${res.status}: ${res.statusText}`))
    : Promise.resolve(res)

function hackernews(limit = 30) {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(testStatus)
    .then(res => res.json())
    .then(res => [...res.slice(0, limit)])
    .then(res =>
      Promise.all(
        res.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(res => ({
                id: res.id,
                title: res.title,
                url: res.url,
                comments: `https://news.ycombinator.com/item?id=${res.id}`,
              })
            ))))
}

function reddit(limit = 30) {
  return fetch(`https://www.reddit.com/r/programming.json?limit=${limit}`)
    .then(testStatus)
    .then(res => res.json())
    .then(res => res.data.children)
    .then(res => res.map(
      entry => ({
        id: entry.data.id,
        title: entry.data.title,
        url: entry.data.url,
        comments: `https://www.reddit.com${entry.data.permalink}`,
      })
    ))
}

function both(limit = 30) {
  return Promise.all([
    hackernews(limit),
    reddit(limit),
  ])
}

exports.hackernews = hackernews
exports.reddit = reddit
exports.both = both
