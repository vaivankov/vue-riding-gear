export default {
  state: {
    ads: [
      {
        title: "Airflame Gloss",
        description: "$375",
        promo: false,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AFPSolidWhiteProfile-0101-8031.jpg?mtime=20161212113716",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProGlossWhiteHelmetMainFeature.jpg?mtime=20161212113946",
        id: "121980921",
      },
      {
        title: "Airflame Construct",
        description: "$395",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/_r300/AFPConstructBlackProfile-0101-8010.jpg?mtime=20160330162033",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProConstructBlackMainFeature.jpg?mtime=20160428173230",
        id: "121980922",
      },
      {
        title: "Airflame Quicksilver",
        description: "$400",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirframeProQuicksilverProfile.jpg?mtime=20170801103340",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/videos/poster/_wFull/AirframeProQuicksilverMainImage.jpg?mtime=20170822092522",
        id: "121980923",
      },
      {
        title: "Airflame Luckylid 3",
        description: "$420",
        promo: false,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirframeProLuckyLidBlack.jpg?mtime=20190807100736",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/AFPLuckyLid3BlackMainImage.jpg?mtime=20190807100748",
        id: "121980924",
      },
      {
        title: "Airfllite El Centro",
        description: "$320",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirfliteElCentroBlueProfile0101-13378.jpg?mtime=20200803150826",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/AirfliteElCentroBlueMainImage.jpg?mtime=20200803150829",
        id: "121980925",
      },
      {
        title: "Airfllite Blockchain",
        description: "$320",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirfliteBlockchainRedProfile.jpg?mtime=20200120114758",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/videos/poster/_wFull/AirfliteBlockchainRedMainImage.jpg?mtime=20200406080631",
        id: "121980926",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}
