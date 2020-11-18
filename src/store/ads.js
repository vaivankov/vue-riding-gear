export default {
  state: {
    ads: [
      {
        title: "Airflame Gloss",
        price: "$375",
        description: "Purity at its finest, the Airframe Pro Solids speak for themselves. Only the finely-engineered shape of the Airframe Pro is on display - its “Angle of Attack” orientation purpose-built for aggressive riding positions. So fresh, so clean, the Airframe Pro Solid is simply stunning.",
        promo: false,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AFPSolidWhiteProfile-0101-8031.jpg?mtime=20161212113716",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProGlossWhiteHelmetMainFeature.jpg?mtime=20161212113946",
        id: "121980921",
      },
      {
        title: "Airflame Construct",
        price: "$395",
        description: "Everyone claims to make a premier helmet, but only ICON lays their shells bare to prove it. The Airframe Pro Construct showcases its hand-laid composite shell for the whole world to see. All the better to see the precision-designed Airframe Pro Construct silhouette.",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/_r300/AFPConstructBlackProfile-0101-8010.jpg?mtime=20160330162033",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProConstructBlackMainFeature.jpg?mtime=20160428173230",
        id: "121980922",
      },
      {
        title: "Airflame Quicksilver",
        price: "$400",
        description: "The unique paint on our QUICKSILVER AIRFRAME PRO is a labor of love. Hand-applied in multiple coats and then painstakingly burnished, antiqued, and polished. Each helmet’s finish is as unique as the rider who wears it. Be quick, be silver, be gold…err, silver.",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirframeProQuicksilverProfile.jpg?mtime=20170801103340",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/videos/poster/_wFull/AirframeProQuicksilverMainImage.jpg?mtime=20170822092522",
        id: "121980923",
      },
      {
        title: "Airflame Luckylid 3",
        price: "$420",
        description: "A-B-G: Always be gamblin’, because if you ain’t gamblin’, you ain’t livin’. Close calls and closer cars—in the Airframe Pro Lucky Lid 3, going for broke never looked so good. The third episode in a hot run of lids, this time we drew the dead man’s hand, only to laugh and up the ante. The AFP is built using the “Angle of Attack” orientation for an aggressive sport bike riding posture. So read ‘em and weep, because when you play with ICON, you go all in.",
        promo: false,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirframeProLuckyLidBlack.jpg?mtime=20190807100736",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/AFPLuckyLid3BlackMainImage.jpg?mtime=20190807100748",
        id: "121980924",
      },
      {
        title: "Airfllite El Centro",
        price: "$320",
        description: "Juiced rides and summertime vibes, the Airflite™ El Centro delivers pinstripe lines for those solid times. It instills that 'cruising into the eye of a storm hitting switches' kind of confidence. Whether you're low to slow or show, your choice is simple - El Centro.",
        promo: true,
        previewImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirfliteElCentroBlueProfile0101-13378.jpg?mtime=20200803150826",
        fullImage:
          "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/AirfliteElCentroBlueMainImage.jpg?mtime=20200803150829",
        id: "121980925",
      },
      {
        title: "Airfllite Blockchain",
        price: "$320",
        description: "The Post-Digital Wasteland is a treacherous landscape. You gotta keep your head safe from Jackers who want to skim Double Dollars off your personal accounts. Finding kit like that isn’t easy. It means traveling deep into the Fractured Shore, finding a chick who can do Fin Jobs, and getting yourself augmented with a top-tier, underground-developed accessory package that keeps your head checked and your credits secure.",
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
    },
    adById(state) {
      return (adId) => {
        return state.ads.find((ad) => ad.id === adId)
      }
    }
  }
}
