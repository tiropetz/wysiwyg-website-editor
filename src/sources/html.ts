export default `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>sample</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <style>
    html,
body,
div,
span,
iframe,
h1,
h2,
h3,
h4,
h5,
p,
a,
img,
ul,
li,
table,
tr,
th,
td,
tbody,
footer,
header,
main,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  list-style: none;
  text-decoration: none;
}
body {
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}
body {
  width: 100%;
}
#header_inner,
.main_contact,
#section02_inner,
#company {
  width: 960px;
  margin: 0 auto;
}
#header_inner {
  height: 85px;
  position: relative;
}
#header_logo,
#header_contact,
#header_text {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
#header_logo {
  width: 194px;
  height: 40px;
  left: 19px;
}
#header_contact {
  width: 155px;
  height: 51px;
  right: 0;
}
#header_contact_inner {
  display: block;
  width: 102px;
  height: 24px;
  text-align: center;
  padding: 14px 26px 13px 27px;
  background-color: #ff0600;
  transition: 0.4s;
}
#header_contact_inner:hover {
  transform: scale(1.1, 1.1);
}
#header_contact_inner p {
  color: #fff;
}
#header_text {
  width: 243px;
  height: 29px;
  right: 155px;
}
#header_text p {
  font-size: 0.9rem;
}
#main_image {
  display: table;
  width: 100%;
  height: 482px;
  background-size: cover;
}
#main_image_inner {
  width: 100%;
  height: 482px;
  position: relative;
  background: url(https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/6432841/picture_pc_e9cd48501e8ad5f03a13bfefcf9e1f19.jpg)
    no-repeat;
  background-size: cover;
}
h1 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 500px;
  height: 85px;
  margin: auto;
  color: #ccc;
  font-size: 4.3rem;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.scroll {
  height: 87px;
  width: 100%;
  background-color: #aaa;
  position: relative;
  display: table;
}
.scroll:after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  bottom: -14px;
  border-top: 43px solid #aaa;
  border-right: 60px solid transparent;
  border-left: 60px solid transparent;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
}
h2 {
  color: #fff;
  font-size: 1.9rem;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
nav {
  height: 396px;
  width: 100%;
  margin: 0 auto;
}
#main_nav {
  width: 67.5%;
  min-width: 687px;
  height: 396px;
  overflow: hidden;
  margin: 0 auto;
  padding: 88px 0;
}
#main_nav li {
  float: left;
  height: 225px;
  width: 225px;
  border: 2px solid #000;
  border-radius: 50%;
  position: relative;
}
#main_nav li:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 22px;
  right: 0;
  left: 0;
  width: 21px;
  height: 21px;
  margin: auto;
  border-right: 3px solid #000;
  border-bottom: 3px solid #000;
  transform: rotate(45deg);
}
#main_nav li:last-of-type {
  float: none;
  margin: 0 auto;
}
#main_nav li:nth-of-type(2) {
  float: right;
}
#main_nav a {
  color: #000;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 50%;
  text-align: center;
  padding: 83px 0 100px;
}
#div03 {
  margin-bottom: 100px;
}
.contents {
  height: 400px;
  overflow: hidden;
}
.left {
  float: left;
  height: 400px;
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
#photo01 {
  background-image: url(https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/6432843/picture_pc_0c274de1b76f4063c7ce088be3b57004.jpg);
}
#photo02 {
  background-image: url(https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/6432845/picture_pc_3d21e88b8ee49951e3c0931173a8f8ed.jpg);
}
#photo03 {
  background-image: url(https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/6432848/picture_pc_c61a50ca0b2335d65a46645b73a2a480.jpg);
}
.right {
  float: right;
  width: 50%;
  height: 400px;
}
.text {
  background-color: #aaa;
}
.contents p,
h4 {
  margin: 30px 120px 0 21px;
  color: #fff;
}
h4 {
  font-size: 1.25rem;
}
.main_contact {
  height: 163px;
  background-color: #aaa;
  margin-bottom: 100px;
  overflow: hidden;
}
.main_contact_inner {
  width: 50%;
  height: 163px;
  position: relative;
}
.contact_left {
  float: left;
}
.contact_left_inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 307px;
  height: 53px;
  margin: auto;
  overflow: hidden;
}
.contact_left_inner img {
  float: left;
}
.contact_left_inner p {
  float: right;
  font-size: 1.4rem;
  line-height: 20px;
  margin: 9px 0 5px;
}
.contact_left_inner span {
  font-size: 0.9rem;
}
.contact_right {
  float: right;
}
.contact_right_inner {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 243px;
  height: 33px;
  margin: auto;
  padding: 25px 85px 25px 41px;
  background-color: #ff0600;
  transition: 0.4s;
}
.contact_right_inner:hover {
  transform: scale(1.1, 1.1);
}
.contact_right p {
  float: right;
  color: #fff;
  font-size: 1.3rem;
}
footer {
  height: 93px;
  background-color: #aaa;
}
footer p {
  margin-left: 119px;
  font-size: 0.75rem;
  line-height: 93px;
}
</style>
  </head>
  <body>
    <div id="page">
      <header>
        <div id="header_inner">
          <div id="header_logo">
            <img src="https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/6432837/picture_pc_9a06a019fe451a6c54a064d465d927c5.jpg">
          </div>
          <div id="header_contact">
            <a href="#" id="header_contact_inner">
              <p>お問い合わせ</p>
            </a>
          </div>
          <div id="header_text">
            <p>TEL　00-0000-0000<br>
              (受付時間　平日　9:00～17:00)</p>
          </div>
        </div>
      </header>
      <div id="main_image">
        <div id="main_image_inner">
          <h1>キャッチコピー</h1>
        </div>
      </div>
      <main>
        <section id="section01">
          <div class="scroll">
            <h2>テキストテキストテキスト</h2>
          </div>
          <nav>
            <ul id="main_nav">
              <li>
                <a href="#div01">1.テキストテキ<br>ストテキスト</a>
              </li>
              <li>
                <a href="#div03">3.テキストテキ<br>ストテキスト</a>
              </li>
              <li>
                <a href="#div02">2.テキストテキ<br>ストテキスト</a>
              </li>
            </ul>
          </nav>
          <div class="contents" id="div01">
            <div class="left" id="photo01"></div>
            <div class="right text">
              <h4>1.テキストテキストテキストテキスト</h4>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
          <div class="contents" id="div02">
            <div class="left text">
              <h4>2.テキストテキストテキストテキスト</h4>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div class="right" id="photo02"></div>
          </div>
          <div class="contents" id="div03">
            <div class="left" id="photo03"></div>
            <div class="right text">
              <h4>3.テキストテキストテキストテキスト</h4>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
          <div class="main_contact">
            <div class="contact_left main_contact_inner">
              <div class="contact_left_inner">
                <p>TEL 00-0000-0000<br>
                  <span>(受付時間 平日 9:00～17:00)</span>
                </p>
              </div>
            </div>
            <div class="contact_right main_contact_inner">
              <a class="contact_right_inner" href="#">
                <p>問い合わせボタン</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; samplesamplesamplesamplesample</p>
      </footer>
    </div>
  </body>
</html>`;
