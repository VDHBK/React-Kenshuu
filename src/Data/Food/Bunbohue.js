const BunbohueJSON = {
  pageInfo: {
    title: "ブンボーフェ",
    keywords: ["名物", "食べ物", "ブンボーフェ"],
  },
  header: {
    title: "ブンボーフェ",
    subtitle: "Vietnamese Culture",
    text: "June 08, 2020",
    image: { src: "bunbohue.jpg", alt: "" },
  },
  sections: [
    // TODO: p and image are in diffent sections?
    {
      type: "Description",
      heading: "ブンボーフェとは",
      paragraphs: [
        "ブンボーフエはベトナム中部都市フエ名物の太いライスヌードルと牛肉を用いた麺料理です。",
        "牛や豚の骨を材料にした味たっぷりのスープが特徴で、味付けにはレモングラスと赤唐辛子を炒めて作った調味料とニョクマム（魚醤）を使用されます。",
        "ブンボーフエは中部の古都フエの名物麺料理ですが、ベトナム全国で朝食、昼食、夕食と時間を問わず広く食べられています。",
      ],
      image: { src: "bunbohue1.jpg", alt: "bunbohue" },
    },
    {
      type: "Article",
      heading: "ブンボーフエの材料",
      paragraphs: [
        {
          text:
            "ブンボーフェの材料とは牛骨、牛のスネ肉、豚足、レモングラス、玉ねぎなどです。",
          image: { src: "nguyenlieu1.jpg", alt: "ingredient" },
        },
        {
          text:
            "フォーの材料とほぼ同じですが、ブンボーフエには欠かせないというものがこだわりの紫色のマムルオック（フエ名産のアミを発酵させた調味料）です。",
          image: { src: "nguyenlieu2.jpg", alt: "ingredient" },
        },
      ],
    },
    {
      type: "Article",
      heading: "出し汁の作り方",
      paragraphs: [
        {
          text:
            "大鍋に湯を沸かし、牛骨、牛のスネ肉、豚足を入れて再沸騰したらざるにあけ湯を捨てる。牛肉は水でよく洗います。<br />再び大鍋に湯を沸かし、牛骨、牛のスネ肉、豚足を入れて火にかけます。沸騰したら玉ねぎ一個、レモングラスを入れ、一時間ほど煮たらすね肉と豚足だけを取り出し、冷水につけて冷ます。水気をふいて薄切りにしておきます（トッピング用）。",
          image: { src: "soup.jpg", alt: "soup" },
        },
        {
          text:
            "さらに一時間ほど煮込みます。あくが浮いてきたら取り除きます。ボウルに水適量（スープが蒸発した分を補う量）とマムルオックを入れ、よく混ぜて溶かします。１０分放置したら、澄んだ上澄み液だけスープに加えます（泥のように沈んだ部分は捨てます）。ヌクマム・砂糖・カイエンヌペッパーも加え、さらに一時間煮込みます。",
          image: { src: "soup1.jpg", alt: "soup" },
        },
      ],
    },
    {
      type: "Article",
      heading: "盛り上がり",
      paragraphs: [
        {
          text:
            "ブンボーフエには香草、もやし、バナナの花と空芯菜の千切りが添えられてくるのが一般的です。",
          image: { src: "rau.jpg", alt: "vegetable" },
        },
        {
          text:
            "器を温め、ブン、すね肉スライス、豚足を盛り付け、スープを注ぎ、トッピング用野菜（好みのハーブ、空芯菜の茎の裂いたもの、スライス玉ねぎ等）を飾って出来上がります！好みでライムをしぼると味が引き締まりましょう。",
          image: { src: "bunbohue2.jpg", alt: "bnbohue" },
        },
      ],
    },
  ],
};

export default BunbohueJSON;
