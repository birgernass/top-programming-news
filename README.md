# top-programming-news

Get the top entries from [Hacker News](https://news.ycombinator.com) and [r/programming](https://www.reddit.com/r/programming)

## usage

 ```bash
 $ yarn add top-programming-news
 $ # or
 $ npm i --save top-programming-news
 $ node
 ```

The default limit is 30, the number of entries on the Hacker News front page.

```js
> const news = require('top-programming-news')
undefined
> news.both(1).then(console.log)
Promise { <pending> }
> [ [ { id: 13840785,
      title: 'Planet Explorer Beta',
      url: 'https://www.planet.com/',
      comments: 'https://news.ycombinator.com/item?id=13840785' } ],
  [ { id: '5ym1fv',
      title: 'Password Rules Are Bullshit',
      url: 'https://blog.codinghorror.com/password-rules-are-bullshit/',
      comments: 'https://www.reddit.com/r/programming/comments/5ym1fv/password_rules_are_bullshit/' } ] ]
```

```js
> news.hackernews(1).then(console.log)
Promise { <pending> }
> [ { id: 13840785,
    title: 'Planet Explorer Beta',
    url: 'https://www.planet.com/',
    comments: 'https://news.ycombinator.com/item?id=13840785' } ]
```

```js
> news.reddit(1).then(console.log)
Promise { <pending> }
> [ { id: '5ym1fv',
    title: 'Password Rules Are Bullshit',
    url: 'https://blog.codinghorror.com/password-rules-are-bullshit/',
    comments: 'https://www.reddit.com/r/programming/comments/5ym1fv/password_rules_are_bullshit/' } ]
```

# License
MIT
