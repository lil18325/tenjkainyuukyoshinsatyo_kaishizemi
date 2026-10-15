/* ============================================================
   データ定義（事前案内・ネタバレなし版）
   ============================================================ */

// 1. キャラクターデータ
const CHARAS = [
  {
    id: "lion",
    name: "リオン・アルヴェイン",
    shortName: "リオン",
    kana: "Lion Alvein",
    fullImg: "images/Lion1.webp",
    bgTop: "#d4d1ce",
    bgBottom: "#6d6c8f",
    quoteBg: "#575651",
    thumbZoom: 550,
    thumbX: -230,
    thumbY: -35,
    quote: "「俺が見守っている。安心しろ」",
    desc: "天界入境審査庁で働いている幹部天使。<br>新人審査官のサポート役。威厳に見られがちだが意外と親しみやすい人。"
  },
  {
    id: "robert",
    name: "ローベルト・ヴィンター",
    shortName: "ローベルト",
    kana: "Robert Winter",
    fullImg: "images/Robert1.webp",
    bgTop: "#d5cbca",
    bgBottom: "#734967",
    quoteBg: "#b14447b3",
    thumbZoom: 460,
    thumbX: -165,
    thumbY: -63,
    quote: "「諸君！期待しているぞ！」",
    desc: "天界入境審査庁の幹部天使。<br>新人審査官教育担当。信心深く、優秀な天使。<br>とても目立つ人。"
  },
  {
    id: "nicolo",
    name: "ニコロ・アレッシオ",
    shortName: "ニコロ",
    kana: "Nicolo Alessio",
    fullImg: "images/Nicolo1.webp",
    bgTop: "#e9e4d9",
    bgBottom: "#777495",
    quoteBg: "#87856b",
    thumbZoom: 330,
    thumbX: -110,
    thumbY: -40,
    quote: "「一緒に頑張りましょう！！」",
    desc: "天界入境審査庁で働いている先輩審査官。<br>明るく朗らかな頑張り屋。わりとへっぽこ？"
  },
  {
    id: "komugi",
    name: "コムギ・アマハ",
    shortName: "コムギ",
    kana: "Komugi Amaha",
    fullImg: "images/Komugi1.webp",
    bgTop: "#c9d7ce",
    bgBottom: "#66708f",
    quoteBg: "#3b6755",
    thumbZoom: 280,
    thumbX: -88,
    thumbY: -30,
    quote: "「しあわせおつかれさまです〜！」",
    desc: " <br> "
  },
  {
    id: "shade",
    name: "シェイド・グレイ",
    shortName: "シェイド",
    kana: "Shade Grey",
    fullImg: "images/Shade1.webp",
    bgTop: "#bacde9",
    bgBottom: "#5f6aa1",
    quoteBg: "#192f5e",
    thumbZoom: 425,
    thumbX: -90,
    thumbY: -45,
    quote: "「えっと……真面目にやっているので通してください」",
    desc: " <br> "
  },
  {
    id: "beryl",
    name: "ベリル・フィンスター",
    shortName: "ベリル",
    kana: "Beryl Finster",
    fullImg: "images/Beryl1.webp",
    bgTop: "#efcfe2",
    bgBottom: "#7e679c",
    quoteBg: "#ce2282",
    thumbZoom: 380,
    thumbX: -143,
    thumbY: -40,
    quote: "「まんじゅう早く食べてーなー」",
    desc: " <br> "
  },
  {
    id: "orphes",
    name: "オルフェス・ローウェル",
    shortName: "オルフェス",
    kana: "Orphes Lowell",
    fullImg: "images/Orphes1.webp",
    bgTop: "#b1b7ce",
    bgBottom: "#5c6191",
    quoteBg: "#43599c",
    thumbZoom: 460,
    thumbX: -170,
    thumbY: -45,
    quote: "「ふふ、仕事明けって気が楽だねぇ」",
    desc: " <br> "
  },
  {
    id: "sophia",
    name: "ソフィア・リクレア",
    shortName: "ソフィア",
    kana: "Sophia Ricrea",
    fullImg: "images/Sophia1.webp",
    bgTop: "#d1bad9",
    bgBottom: "#6e5f98",
    quoteBg: "#733e7b",
    thumbZoom: 330,
    thumbX: -100,
    thumbY: -40,
    quote: "「キミも観察が好きなの？」",
    desc: " <br> "
  }
];

// 2. 審査手順（GAME FLOW）
const FLOW_STEPS = [
  { num: "01", title: "難易度選択", desc: "難易度を選択し、札を小窓に入れる。", image: "images/sousa-1.webp" },
  { num: "02", title: "書類確認", desc: "ファイルから入境希望者リスト、ロゴ・マーク一覧を取り出す。", image: "images/sousa-2.webp" },
  { num: "03", title: "審査開始", desc: "合図があったら審査開始！審査するポイントはチェックリストを参考にする。", image: "images/sousa-3.webp" },
  { num: "04", title: "判決の選択", desc: "入境を許可する場合は「入境許可」スタンプを、拒否する場合は「入境拒否」スタンプを審判書に押す。", image: "images/sousa-4.webp" },
  { num: "05", title: "書類返却", desc: "合図がなったら、書類を優しく小窓に戻す。", image: "images/sousa-5.webp" },
  { num: "06", title: "結果確認", desc: "5人分審査し終えたら、書類をファイルに戻し、審判書を持って退出する。", image: "images/sousa-6.webp" }
];

// 3. イベント開催情報（EVENT INFO）
const EVENT_INFO = {
  date: "2026.10.16（金）- 10.18（日）",
  time: "16日 : 12:00 - 14:30 / 15:00 - 17:30<br>17,18日 : 11:00 - 14:00 / 15:00 - 18:00",
  location: "8号館2F 8-206教室",
  ticket: "参加無料",
  image: "images/access.webp"
};

// 4. グッズ情報（GOODS）
const GOODS_DATA = [
  {
    name: "ポストカード",
    price: "￥100 (税込)",
    desc: "ポストカードは絵柄2種類",
    image: "images/goods-postcard.webp"
  },
  {
    name: "缶バッジ",
    price: "￥200 (税込)",
    desc: "缶バッジは「天界バッジ」実際に審査で使う天界バッジの再現をしてます。<br> 天界の一員になれる品物です！ ",
    image: "images/goods-badge.webp"
  },
  {
    name: "フレークステッカー",
    price: "￥300 (税込)",
    desc: "フレークステッカーは「全8キャラとシンボルマーク封入」 10枚入りです。",
    image: "images/goods-seal.webp"
  }
];

// 5. フード情報（FOOD）
const FOOD_DATA = [
  {
    name: "天界まんじゅう（単品）",
    price: "¥350 (税込)",
    desc: "天界名物！<br>単品は黒糖と白があります。",
    image: "images/food-manju1.webp",
    noveltyImg: "images/food-promo-manju.webp",
    noveltyDesc: "ブロマイド全4種！<br>ランダムで一枚ついてきます。"
  },
  {
    name: "天界まんじゅう（4個セット）",
    price: "¥1200円 (税込)",
    desc: "4個入りはそれぞれ二つずつ入ってます。",
    image: "images/food-manju2.webp",
    noveltyImg: "images/food-promo-manju.webp",
    noveltyDesc: "ブロマイド全4種！<br>全種ついてきます。"
  },
  {
    name: "ニンゲンラムネ",
    price: "¥300 (税込)",
    desc: "悪魔が好きな人間界のラムネ",
    image: "images/food-ramune.webp",
    noveltyImg: "images/food-promo-ramune.webp",
    noveltyDesc: "キャラクタータグ全8種！<br>ランダムで一枚ついてきます。"
  }
];