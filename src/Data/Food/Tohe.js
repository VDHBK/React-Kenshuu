const ToheJSON = {
  pageInfo: {
    title: "トーへ",
    keywords: ["伝統", "文化", "食べ物", "トーへ"],
    description:
      "日本の飴細工をご存知でしょうか？ベトナムにも飴細工みたいなものがありますよ。但し、 飴細工と違う点のはこれが麦粉で作られます(笑笑)。それでは、この記事はベトナムのトーへを紹介させて頂きます。",
  },
  header: {
    title: "ベトナム伝統的なおもちゃのトーへ",
    subtitle: "Vietnamese Culture",
    text: "June 06, 2020" ,
    image: { src: "tohe.jpg", alt: "To He" },
  },
  sections: [
    // TODO: p and image are in diffent sections?
    {
      type: "Description",
      paragraphs: [
        "日本の飴細工をご存知でしょうか？ベトナムにも飴細工みたいなものがありますよ。Link</a>但し、飴細工と違う点のはこれが麦粉で作られます(笑笑)。それでは、この記事はベトナムのトーへを紹介させて頂きます。",
        "トーへ（英語：Toy　Figurine, 原名：Tò He は麦粉で漫画のキャラクターや動物のように作られるものです。昔、ベトナムの子供たちはすごく人気があります。お祭り、中秋の際によく見かけたが今では珍しくなった。",
      ],
      image: { src: "tohe1.jpg", alt: "to he1" },
    },
    {
      type: "Images",
      heading: "トーへ粉の準備",
      images: [
        { src: "fl1.jpg", alt: "flour 1" },
        { src: "fl2.jpg", alt: "flour 2" },
        { src: "fl3.jpg", alt: "flour 3" },
        { src: "fl4.jpeg", alt: "flour 4" },
        { src: "fl5.jpg", alt: "flour 5" },
      ],
    },
    {
      type: "List",
      heading: "原材料(0,5 Kg の分)",
      items: [
        "小麦粉　 ：　0,3 Kg",
        "もち米粉 ：　0,2 Kg",
        "香料　　 ： チョコレート、バニラ, 油等（お好み）",
        "保管料　 ：　アルム（Alum）　2 gram",
        "食色料　 ：  赤、青、緑色等",
      ],
    },
    {
      type: "OrderList",
      heading: "粉を作る流れ",
      items: [
        "水を抜けるように小麦粉ともち米粉を混ぜる",
        "混合の粉に40 ml 水を入れて練る。次、球形に分ける",
        "６分ほど茹でる。終わったら水を切って15分で冷ます。しっかりに各球形の米粉を混ぜ続ける",
        "香料と保管料を入れて練る。色に応じて味が違うから、まず、各分を分けてください！",
        "各分の麦粉に食色料を入れる",
      ],
      comment:
        "以上の内容は上手く出来ましたか？じゃあ、トーへを作りましょうね！",
    },
  ],
};

export default ToheJSON;
