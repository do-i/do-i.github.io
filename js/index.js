var app = new Vue({
  el: '#bookmark_table',
  data: {
      bookmarks: [],
  },
  methods: {
    showInfo(bookmark) {
      alert(bookmark.webUrl)
    }
  }
});

app.bookmarks = [
  {
    "title": "Catan",
    "webUrl": "https://catanuniverse.com/en/game",
    "icon": "catan.png",
    "group": "game"
  },
  {
    "title": "Dominion",
    "webUrl": "https://dominion.games",
    "icon": "dominion.ico",
    "group": "game"
  },
  {
    "title": "Narou",
    "webUrl": "https://syosetu.com/",
    "icon": "narou.ico",
    "group": "book"
  },
  {
    "title": "Shogi",
    "webUrl": "https://japanesechess.org",
    "icon": "shogi.png",
    "group": "game"
  },
  {
    "title": "Kotlin",
    "webUrl": "https://kotlinlang.org",
    "icon": "kotlin.png",
    "group": "tech"
  },
  {
    "title": "Darksky",
    "webUrl": "https://darksky.net/forecast/41.882,-87.628/us12/en",
    "icon": "darksky.ico",
    "group": "weather"
  },
  {
    "title": "Github",
    "webUrl": "https://github.com/do-i",
    "icon": "github.ico",
    "group": "tech"
  },
  {
    "title": "Jira",
    "webUrl": "https://logicgate.atlassian.net/browse",
    "icon": "jira.ico",
    "group": "tech"
  },
  {
    "title": "Messages Android",
    "webUrl": "https://messages.android.com",
    "icon": "messages.png",
    "group": "communication"
  },
  {
    "title": "Distro Watch",
    "webUrl": "https://distrowatch.com",
    "icon": "distrowatch.ico",
    "group": "linux"
  },
  {
    "title": "Investopedia",
    "webUrl": "https://www.investopedia.com",
    "icon": "investopedia.png",
    "group": "investment"
  },
  {
    "title": "Seeking Alpha",
    "webUrl": "https://seekingalpha.com",
    "icon": "seekingalpha.ico",
    "group": "investment"
  },
  {
    "title": "Google Finance",
    "webUrl": "https://www.google.com/finance",
    "icon": "gfinance.svg",
    "group": "investment"
  },
  {
    "title": "The Register",
    "webUrl": "https://www.theregister.co.uk",
    "icon": "theregister.ico",
    "group": "security"
  },
  {
    "title": "Blogspot",
    "webUrl": "http://ubuntunurd.blogspot.com/",
    "icon": "blogspot.ico",
    "group": "blog"
  },
  {
    "title": "Stock Analysis-On",
    "webUrl": "https://www.stock-analysis-on.net/",
    "icon": "stockanalysis.png",
    "group": "investment"
  },
  {
    "title": "Authy",
    "webUrl": "https://authy.com",
    "icon": "authy.png",
    "group": "security"
  },
  {
    "title": "Temp Pass",
    "webUrl": "https://temporary.pw",
    "icon": "temppass.png",
    "group": "security"
  },
  {
    "title": "FileMail",
    "webUrl": "https://www.filemail.com",
    "icon": "filemail.ico",
    "group": "file"
  },
  {
    "title": "Temp File",
    "webUrl": "https://file.io",
    "icon": "tempfile.svg",
    "group": "file"
  },
  {
    "title": "Go File",
    "webUrl": "https://gofile.io",
    "icon": "gofile.png",
    "group": "file"
  },
  {
    "title": "Diagram",
    "webUrl": "https://sequencediagram.org",
    "icon": "sequencediagram.ico",
    "group": "tool"
  },
  {
    "title": "URL Decoder/Encoder",
    "webUrl": "https://www.urlencoder.org",
    "icon": "urlencoder.webp",
    "group": "tool"
  },
  {
    "title": "Scala",
    "webUrl": "https://docs.scala-lang.org/",
    "icon": "scala.ico",
    "group": "tech"
  },
  {
    "title": "CircleCI",
    "webUrl": "https://circleci.com",
    "icon": "circleci.ico",
    "group": "tech"
  },
  {
    "title": "New Relic",
    "webUrl": "https://newrelic.com/",
    "icon": "newrelic.ico",
    "group": "tech"
  },
  {
    "title": "SonarCloud",
    "webUrl": "https://sonarcloud.io",
    "icon": "sonarcloud.ico",
    "group": "logs"
  },
  {
    "title": "Auth0",
    "webUrl": "https://auth0.com",
    "icon": "auth0.png",
    "group": "security"
  }
]
