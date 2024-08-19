// ここに櫻坂46のメンバーの名前を入力します。
// メンバーの名前を変更したい場合は、以下の配列を編集してください。
var members = [
    "上村莉菜",
    "小池美波",
    "齋藤冬優花",
    "井上梨名",
    "遠藤光莉",
    "大園玲",
    "大沼晶保",
    "幸阪茉里乃",
    "武元唯衣",
    "田村保乃",
    "藤吉夏鈴",
    "増本綺良",
    "松田里奈",
    "森田ひかる",
    "守屋麗奈",
    "山﨑天",
    "石森璃花",
    "遠藤理子",
    "小田倉麗奈",
    "小島凪紗",
    "谷口愛季",
    "中嶋優月",
    "的野美青",
    "向井純葉",
    "村井優",
    "村山美羽",
    "山下瞳月",
    "小林由依",
    "菅井友香",
    "渡邉理佐",    
];

function showRandomMember() {
    var randomIndex = Math.floor(Math.random() * members.length);
    document.getElementById("member").innerHTML = members[randomIndex];
}
