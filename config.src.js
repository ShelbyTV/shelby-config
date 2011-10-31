module.exports = {
  "production" : {
    "beanstalk" : {
      "uri" : '10.180.173.25',
      "port" : "11300",
      "tubes" :{
        "link_processing" : "link_processing",
        "link_processing_high" : "link_processing_high",
        "fb_add_user" : "fb_add_user",
        "tumblr_add_user" : "tumblr_add_user",
        "tw_backfill" : "tw_backfill",
        "tw_stream_add" : "tw_stream_add"
      }
    },
    "redis" : {
      "server" : "10.180.173.25",
      "port" : "6379"
    },
  },

  "development" : {
    "beanstalk" : {
      "uri" : "127.0.0.1",
      "port" : "11300",
      "tubes" :{
        "link_processing" : "link_processing",
        "link_processing_high" : "link_processing_high",
        "fb_add_user" : "fb_add_user",
        "tumblr_add_user" : "tumblr_add_user",
        "tw_backfill" : "tw_backfill",
        "tw_stream_add" : "tw_stream_add"
      }
    },
    "redis" : {
      "server" : "127.0.0.1",
      "port" : "6379"
    }
    
  }
};
