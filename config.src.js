module.exports = {
  "production" : {
    "beanstalk" : {
      "uri" : '10.180.173.25',
      "port" : "11300"
    },
    "redis" : {
      "server" : "10.180.173.25",
      "port" : "6379"
    }
  },

  "development" : {
    "beanstalk" : {
      "uri" : "127.0.0.1",
      "port" : "11300"
    },
    "redis" : {
      "server" : "127.0.0.1",
      "port" : "6379"
    }
  }
}
