const BanhcayJSON = {
  pageInfo: {
    title: "banh cay",
    keywords: ["食べ物", "banh cay"],
    description:
      "「Banh Cay」はタイビンの人々の名物であり伝統的な料理でもあります。しなやかさ、適度な甘さ、もち米、胡麻ピーナッツの香りがとても愛されています。",
  },
  header: {
    title: "BANH CAY LANG NGUYEN!",
    subtitle: "Vietnamese Culture",
    text: "July 06, 2020" ,
    image: { src: "banh-cay-header.jpg", alt: "Banh Cay" },
  },
  sections: [
    // TODO: p and image are in diffent sections?
    {
      type: "Description",
      paragraphs: [
        "「Banh Cay」はタイビンの人々の名物であり伝統的な料理でもあります。しなやかさ、適度な甘さ、もち米、胡麻ピーナッツの香りがとても愛されています。",
        "村人の「Nguyen」は、「Banh Cay」は「Nguyen Cong」一家の6番目の丘の娘である「Nguyen Thi Tan」夫人が最初に作ったと言いました。 1739年に、彼女は「Hien Tong」の治世中に「Duong Giao淑女」に叙階された。絵の具をたくさん食べましたが、故郷の味を忘れていなかったので、故郷の素材から5種類のスパイスという新しいケーキを作りました。彼女が王「Hien Tong」を贈った後、王は称賛されて卵のように見えたので、彼はそれを「Banh Cay」として置きました。",
      ],
    },
    {
      type: "Images",
      heading: "",
      images: [{ src: "lang-nguyen.jpg", alt: "lang nguyen" }],
    },
    {
      type: "List",
      heading: "原材料(4人分)",
      items: [
        "ラード　:　300g、砂糖300g、塩50g",
        "Cáy卵　：　0.3g (Gạch cáy）",
        "Gac　：　1フルーツ",
        "もち米　：　1kg",
        "ごま　:　100g",
        "ピーナッツ　:　200g",
        "ジンジャー　：　小さい球根",
        "みかんの皮　：　2つのみかんの皮",
        "ニンジン　：　1塊茎",
        "Dành dànhフルーツ　：　5フルーツ",
      ],
    },
    {
      type: "Images",
      heading: "",
      images: [{ src: "nguyen-lieu.jpg", alt: "nguyen-lieu" }],
    },
    {
      type: "Article",
      heading: "作り方",
      paragraphs: [
        {
          text:
            "ステップ1：プロセス材料. もち米を冷水に一晩浸し、茹でて再度処理します。ピーナッツはローストし、皮を取り除きます。",
          image: { src: "fl1.jpg", alt: "flour 1" },
        },
        {
          text:
            "次に、もち米のローストを火にかけ、膨らませてろ過し、殻をきれいにします。",
          image: { src: "fl1-2.jpg", alt: "flour 1-2" },
        },
        {
          text:
            "ステップ2：ラードの炒め物. 豚肉を塩と砂糖で約半月漬けたものをさいの目に切ります。次に、鍋をストーブの上に置いて加熱し、脂肪が透明になってカリカリになるまで、少量の砂糖で脂肪を炒めます。",
          image: { src: "fl2.jpg", alt: "flour 2" },
        },
        {
          text:
            "ステップ3：砂糖菓子を作る. 冷たい水を入れたボウルに砂糖を混ぜます。生姜汁を小さめに混ぜます。次に、フライパンを加熱し、にんじんを砂糖水、みかんの皮、生姜汁で炒めます。熟したニンジンはストーブを切ってプレートを作ります。",
          image: { src: "fl3.jpg", alt: "flour 3" },
        },
        {
          text:
            "ステップ4：もち米を2つに分けます. もち米を2つに分けます。パート1、Gacもち米を調理する。パート２、もち米を「使用済み」の水で炊く。そして、もち米がまだ熱いうちに、すり鉢に入れ、小麦粉のように滑らかに潰します。",
          image: { src: "fl4.jpg", alt: "flour 4" },
        },
        {
          text:
            "ステップ5：生地を転がし、ラードでかき混ぜる. 生地を丁寧に平らにし、ジャムのように薄くスライスして乾かします。次に、ラードを熱い鍋に入れ、油で加熱し、次に島の粉をパリパリして香りがよくなるまで加熱します。",
          image: { src: "fl5.jpg", alt: "flour 5" },
        },
        {
          text:
            "ステップ6：混合物を型に入れます. 上記の材料をすべて大きなボウルに入れ、砂糖を加えてよく混ぜます。次に、熱い鍋に入れて香りが出るまで加熱し、底にゴマを入れた型に注ぎ、ケーキを指でしっかりと押して細かく切る。",
          image: { src: "fl6.jpg", alt: "flour 6" },
        },
      ],
    },
    {
      type: "Article",
      heading: "完成品",
      paragraphs: [
        {
          text:
            "出来上がったら、ケーキを皿に取り、お茶と一緒に飲むととても美味しいです。",
          image: { src: "thanh-pham.jpg", alt: "thanh pham" },
        },
      ],
    },
  ],
};

export default BanhcayJSON;
