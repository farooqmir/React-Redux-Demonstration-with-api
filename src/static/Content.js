export default {
  navigation: {
    paths: [
      { displayName: "Home", url: "/" },
      {
        title: "Most Emailed Last Day",
        displayName: "Most Emailed Last Day",
        path: "/Articles/emailed/1"
      },
      {
        title: "Most shared on facebook Last Day",
        displayName: "Most Shared on Facebook Last Day",
        path: "/Articles/facebook/1"
      },
      {
        title: "Most Viewed Last Day",
        displayName: "Most Viewed Today Last Day",
        path: "/Articles/viewed/1"
      }
    ]
  },
  mostPopular: [
    {
      mostViewedFacebookLast1Day: "View most popular on Facebook in last 1 day",
      theme: 0,
      label: "Most shared on Facebook",
      title: "Most shared in 7 Days",
      path: "/Articles/facebook/7",
      apikeyvalue: 7
    },
    {
      mostViewedFacebookLast7Days:
        "View most popular on Facebook in last 7 day",
      theme: 1,
      label: "Most Emailed",
      title: "Most Emailed in 7 Days",
      path: "/Articles/emailed/7",
      apikeyvalue: 7
    },
    {
      mostSharedByEmailInLast1Day: "View shared by email in last 1 day",
      theme: 2,
      label: "Most Viewed",
      title: "Most Viewed in 7 Days",
      path: "/Articles/viewed/7",
      apikeyvalue: 7
    }
  ],
  dashboardCards: [
    {
      title: "Email Articles",
      bodytext: "You can read Emailed articles.",
      linktext: "Read Now",
      linkurl: "/Articles/emailed/1"
    },
    {
      title: "Facebook Articles",
      bodytext: "You can read articles shared on facebook articles.",
      linktext: "Read Now",
      linkurl: "/Articles/facebook/1"
    },
    {
      title: "Most Viewed Articles",
      bodytext: "You can read most viewed articles.",
      linktext: "Read Now",
      linkurl: "/Articles/viewed/1"
    }
  ],
  defaults: {
    articleImage:
      "https://imgplaceholder.com/420x320/593196/f9ebeb/ion-ios-paper"
  },
  labels: {
    //TODO: Labels to be added
  },
  errorMessages: {
    //TODO: Labels to be added
  },
  warningMessages: {
    //TODO: Labels to be added
  },
  titles: {
    //TODO: Labels to be added
  }
};
