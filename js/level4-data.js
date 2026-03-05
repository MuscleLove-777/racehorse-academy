/* ============================================
   Level 4: 競走生活・頂点を目指して
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "競走生活・頂点を目指して",
    icon: "🏆",
    description: "GIレースの世界と海外遠征、ダート競馬まで完全網羅",
    modules: [
        {
            id: 401,
            title: "GIレースの世界",
            duration: "15分",
            content: `
<h2>JRA GIレース一覧</h2>
<p>GI（グレードワン）は競馬における<strong>最高格のレース</strong>です。JRAでは年間を通じて多数のGIレースが開催され、競馬界のスターホースたちがしのぎを削ります。</p>

<div class="visual-box">
<div class="visual-box-title">JRA GIレース一覧（前半：2月〜6月）</div>
<table>
<tr><th>レース名</th><th>時期</th><th>距離</th><th>コース</th><th>1着賞金</th></tr>
<tr><td>フェブラリーS</td><td>2月</td><td>ダ1600m</td><td>東京</td><td>1億円</td></tr>
<tr><td>高松宮記念</td><td>3月</td><td>芝1200m</td><td>中京</td><td>1.4億円</td></tr>
<tr><td>大阪杯</td><td>4月</td><td>芝2000m</td><td>阪神</td><td>2億円</td></tr>
<tr><td>桜花賞</td><td>4月</td><td>芝1600m</td><td>阪神</td><td>1.2億円</td></tr>
<tr><td>皐月賞</td><td>4月</td><td>芝2000m</td><td>中山</td><td>2億円</td></tr>
<tr><td>天皇賞（春）</td><td>5月</td><td>芝3200m</td><td>京都</td><td>2億円</td></tr>
<tr><td>NHKマイルC</td><td>5月</td><td>芝1600m</td><td>東京</td><td>1.2億円</td></tr>
<tr><td>ヴィクトリアマイル</td><td>5月</td><td>芝1600m</td><td>東京</td><td>1.2億円</td></tr>
<tr><td>オークス</td><td>5月</td><td>芝2400m</td><td>東京</td><td>1.5億円</td></tr>
<tr><td>日本ダービー</td><td>5月</td><td>芝2400m</td><td>東京</td><td>3億円</td></tr>
<tr><td>安田記念</td><td>6月</td><td>芝1600m</td><td>東京</td><td>2億円</td></tr>
<tr><td>宝塚記念</td><td>6月</td><td>芝2200m</td><td>阪神</td><td>2.2億円</td></tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">JRA GIレース一覧（後半：9月〜12月）</div>
<table>
<tr><th>レース名</th><th>時期</th><th>距離</th><th>コース</th><th>1着賞金</th></tr>
<tr><td>スプリンターズS</td><td>9月</td><td>芝1200m</td><td>中山</td><td>1.4億円</td></tr>
<tr><td>秋華賞</td><td>10月</td><td>芝2000m</td><td>京都</td><td>1.2億円</td></tr>
<tr><td>菊花賞</td><td>10月</td><td>芝3000m</td><td>京都</td><td>2億円</td></tr>
<tr><td>天皇賞（秋）</td><td>10月</td><td>芝2000m</td><td>東京</td><td>2億円</td></tr>
<tr><td>エリザベス女王杯</td><td>11月</td><td>芝2200m</td><td>京都</td><td>1.2億円</td></tr>
<tr><td>マイルCS</td><td>11月</td><td>芝1600m</td><td>阪神</td><td>1.5億円</td></tr>
<tr><td>ジャパンカップ</td><td>11月</td><td>芝2400m</td><td>東京</td><td>5億円</td></tr>
<tr><td>チャンピオンズカップ</td><td>12月</td><td>ダ1800m</td><td>中京</td><td>1億円</td></tr>
<tr><td>阪神ジュベナイルF</td><td>12月</td><td>芝1600m</td><td>阪神</td><td>6,500万円</td></tr>
<tr><td>朝日杯フューチュリティS</td><td>12月</td><td>芝1600m</td><td>阪神</td><td>7,000万円</td></tr>
<tr><td>有馬記念</td><td>12月</td><td>芝2500m</td><td>中山</td><td>5億円</td></tr>
<tr><td>ホープフルS</td><td>12月</td><td>芝2000m</td><td>中山</td><td>7,000万円</td></tr>
</table>
</div>

<h2>賞金体系</h2>
<p>GIレースの賞金は高額ですが、馬主に入る金額はそこから関係者への進上金が差し引かれます。</p>

<div class="info-box tip">
<div class="info-box-title">賞金の配分（進上金）</div>
<ul>
<li><strong>調教師:</strong> 賞金の10%</li>
<li><strong>騎手:</strong> 賞金の5%</li>
<li><strong>厩務員:</strong> 賞金の5%</li>
<li><strong>馬主の手取り:</strong> 賞金の80%</li>
</ul>
</div>

<div class="visual-box">
<div class="visual-box-title">本賞金以外の収入</div>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>本賞金</td><td>1着〜5着に着順に応じて支給</td></tr>
<tr><td>付加賞</td><td>特別登録料の一部を上位馬に還元</td></tr>
<tr><td>出走手当</td><td>出走全馬に支給</td></tr>
<tr><td>特別出走手当</td><td>重賞等の特別競走で加算</td></tr>
<tr><td>内国産馬所有奨励賞</td><td>内国産馬が重賞を勝った場合等に加算</td></tr>
</table>
</div>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "JRAのGIレースで1着賞金が最も高いレースはどれですか？（2024年時点）",
                    options: ["日本ダービー", "有馬記念", "ジャパンカップ", "天皇賞（秋）"],
                    answer: 2,
                    explanation: "ジャパンカップと有馬記念の1着賞金は5億円で、JRA最高額です。日本ダービーは3億円です。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "1着賞金のうち、馬主の手取りは何%ですか？",
                    options: ["70%", "75%", "80%", "85%"],
                    answer: 2,
                    explanation: "賞金の80%が馬主の手取りとなります。残り20%は調教師（10%）、騎手（5%）、厩務員（5%）への進上金です。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "天皇賞（春）が行われる距離はどれですか？",
                    options: ["芝2400m", "芝2500m", "芝3000m", "芝3200m"],
                    answer: 3,
                    explanation: "天皇賞（春）は京都競馬場の芝3200mで行われる、JRA最長距離のGIレースです。"
                },
                {
                    id: "q401_4",
                    type: "fill",
                    question: "JRAで唯一のファン投票で出走馬が決まるGIレースの名称は？",
                    answer: "有馬記念",
                    explanation: "有馬記念は年末のグランプリレースで、ファン投票の上位馬から出走馬が選ばれる独特の仕組みを持っています。"
                }
            ]
        },
        {
            id: 402,
            title: "古馬の主要レースと年間ローテーション",
            duration: "15分",
            content: `
<h2>春の古馬路線</h2>
<p>4歳以上の<strong>古馬</strong>にとって、春シーズンは大阪杯から始まり、宝塚記念で締めくくられます。距離適性によって複数の路線に分かれます。</p>

<h3>中距離〜長距離路線</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>大阪杯（4月・芝2000m・阪神）</strong>
春の中距離王決定戦。ここからGI戦線が本格化します。天皇賞（春）か宝塚記念への分岐点。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>天皇賞（春）（5月・芝3200m・京都）</strong>
3200mの長距離GI。スタミナ自慢の馬が集結。近年は長距離路線の馬が減少傾向。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>宝塚記念（6月・芝2200m・阪神）</strong>
春のグランプリ。ファン投票で出走馬が決まります。梅雨時期で馬場状態が変わりやすいのが特徴。
</div>
</div>
</div>

<h3>マイル路線</h3>
<p>安田記念（6月・芝1600m・東京）を目標とする路線。ヴィクトリアマイルからの牝馬の参戦も多く、レベルの高い一戦です。</p>

<h2>秋の古馬路線</h2>
<p>秋は競馬のベストシーズン。年間最高のメンバーが揃うビッグレースが連続します。</p>

<h3>王道路線（中距離）</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>天皇賞（秋）（10月・芝2000m・東京）</strong>
秋の古馬中距離チャンピオン決定戦。東京競馬場の広いコースで、実力が問われるレース。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>ジャパンカップ（11月・芝2400m・東京）</strong>
国際招待レースとして創設。1着賞金5億円。日本馬のレベル向上により、近年は日本馬が圧倒的に強い。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>有馬記念（12月・芝2500m・中山）</strong>
1年を締めくくるグランプリ。ファン投票で選ばれた馬が出走。日本競馬で最も盛り上がるレースの一つ。
</div>
</div>
</div>

<h3>スプリント路線</h3>
<p>短距離（1200m）を得意とする馬たちの路線です。</p>
<ul>
<li><strong>高松宮記念</strong>（3月・芝1200m・中京）：春のスプリント王決定戦</li>
<li><strong>スプリンターズS</strong>（9月・芝1200m・中山）：秋のスプリント王決定戦</li>
</ul>

<h3>牝馬限定路線</h3>
<ul>
<li><strong>ヴィクトリアマイル</strong>（5月・芝1600m・東京）：古馬牝馬マイルGI</li>
<li><strong>エリザベス女王杯</strong>（11月・芝2200m・京都）：古馬牝馬中距離GI</li>
</ul>

<h2>ローテーション戦略</h2>
<p>競走馬のレース間隔や出走レースの選択は、成績を左右する重要な要素です。</p>

<div class="info-box tip">
<div class="info-box-title">ローテーションの重要ポイント</div>
<ul>
<li><strong>間隔:</strong> 中2〜4週が標準。詰めすぎると疲労、空けすぎると勘が鈍る</li>
<li><strong>輸送:</strong> 美浦（関東）↔ 栗東（関西）の長距離輸送はストレスに。輸送減を防ぐ工夫が必要</li>
<li><strong>適性:</strong> 距離・コース・馬場状態の適性を考慮してレースを選択</li>
<li><strong>目標レース:</strong> ピークをGIに合わせる「叩き台」（前哨戦）の活用</li>
</ul>
</div>

<h2>リーディングサイアー</h2>
<p><strong>リーディングサイアー</strong>とは、年間で産駒の獲得賞金総額が最も多い種牡馬です。ディープインパクトが長年にわたりリーディングサイアーに君臨し、近年はロードカナロア、キタサンブラックなどが台頭しています。</p>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "秋の古馬王道路線の順番として正しいものはどれですか？",
                    options: [
                        "ジャパンカップ → 天皇賞（秋）→ 有馬記念",
                        "天皇賞（秋）→ 有馬記念 → ジャパンカップ",
                        "天皇賞（秋）→ ジャパンカップ → 有馬記念",
                        "有馬記念 → 天皇賞（秋）→ ジャパンカップ"
                    ],
                    answer: 2,
                    explanation: "秋の王道路線は天皇賞（秋）（10月）→ ジャパンカップ（11月）→ 有馬記念（12月）の順で行われます。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "宝塚記念が行われる時期と特徴として正しいものはどれですか？",
                    options: [
                        "5月・晴天が多く良馬場になりやすい",
                        "6月・梅雨時期で馬場状態が変わりやすい",
                        "7月・真夏で暑さ対策が課題",
                        "9月・秋競馬の開幕戦"
                    ],
                    answer: 1,
                    explanation: "宝塚記念は6月に行われ、梅雨時期と重なるため馬場が悪化しやすいのが特徴です。重馬場巧者が台頭することもあります。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "年間で産駒の獲得賞金総額が最も多い種牡馬の称号は何ですか？",
                    options: ["チャンピオンサイアー", "リーディングサイアー", "プレミアムサイアー", "グランドサイアー"],
                    answer: 1,
                    explanation: "リーディングサイアーは、年間で産駒の獲得賞金総額が最も多い種牡馬に与えられる称号です。"
                },
                {
                    id: "q402_4",
                    type: "fill",
                    question: "GI前に調整として出走する前哨戦のことを通称何と呼びますか？（ひらがな4文字）",
                    answer: "たたきだい",
                    explanation: "「叩き台」とは、目標のGIレースにピークを合わせるために、調整目的で出走する前哨戦のことです。"
                }
            ]
        },
        {
            id: 403,
            title: "ダート・地方競馬の世界",
            duration: "15分",
            content: `
<h2>ダート競走の特徴</h2>
<p>日本の競馬は芝コースが注目されがちですが、<strong>ダート（砂）コース</strong>も重要な競走体系を持っています。</p>

<h3>芝とダートの違い</h3>
<div class="visual-box">
<div class="visual-box-title">芝コースとダートコースの比較</div>
<table>
<tr><th>項目</th><th>芝</th><th>ダート</th></tr>
<tr><td>路面</td><td>天然芝</td><td>砂（一部クッション砂を混合）</td></tr>
<tr><td>スピード</td><td>高速</td><td>芝より遅い</td></tr>
<tr><td>パワー</td><td>瞬発力重視</td><td>パワー・持続力重視</td></tr>
<tr><td>雨の影響</td><td>滑りやすくなる（重・不良馬場）</td><td>水を含むと締まり高速化する傾向</td></tr>
<tr><td>キックバック</td><td>少ない</td><td>前の馬が蹴り上げた砂を被る</td></tr>
<tr><td>主な適性血統</td><td>サンデーサイレンス系等</td><td>ミスタープロスペクター系等</td></tr>
</table>
</div>

<h3>JRAのダートGI</h3>
<ul>
<li><strong>フェブラリーS</strong>（2月・ダ1600m・東京）：冬のダート王決定戦</li>
<li><strong>チャンピオンズカップ</strong>（12月・ダ1800m・中京）：年末のダート最強馬決定戦</li>
</ul>

<h2>地方競馬の世界</h2>
<p>JRA（中央競馬）とは別に、各地方自治体が運営する<strong>地方競馬</strong>が全国で開催されています。地方競馬は主にダートコースで行われ、独自の競走体系を持っています。</p>

<div class="visual-box">
<div class="visual-box-title">地方競馬の主要場</div>
<table>
<tr><th>地区</th><th>競馬場</th><th>所在地</th><th>特徴</th></tr>
<tr><td rowspan="4">南関東</td><td>大井</td><td>東京都</td><td>日本最大の地方競馬場。東京大賞典の舞台</td></tr>
<tr><td>川崎</td><td>神奈川県</td><td>川崎記念が有名。小回りコース</td></tr>
<tr><td>船橋</td><td>千葉県</td><td>かしわ記念の舞台。直線が長い</td></tr>
<tr><td>浦和</td><td>埼玉県</td><td>浦和記念の舞台。コンパクトなコース</td></tr>
<tr><td>東海</td><td>名古屋・笠松</td><td>愛知・岐阜</td><td>名古屋大賞典等。オグリキャップの出身地（笠松）</td></tr>
<tr><td>近畿</td><td>園田</td><td>兵庫県</td><td>兵庫チャンピオンシップ等</td></tr>
<tr><td>四国</td><td>高知</td><td>高知県</td><td>ハルウララで有名に。夜さ恋ナイター</td></tr>
<tr><td>北海道</td><td>門別・帯広</td><td>北海道</td><td>門別はホッカイドウ競馬。帯広はばんえい競馬</td></tr>
<tr><td>東北</td><td>盛岡・水沢</td><td>岩手県</td><td>盛岡は芝コースもある珍しい地方競馬場</td></tr>
<tr><td>九州</td><td>佐賀</td><td>佐賀県</td><td>佐賀記念等</td></tr>
</table>
</div>

<h2>交流重賞</h2>
<p>中央競馬と地方競馬の馬が同じレースで対戦するのが<strong>交流重賞（ダートグレード競走）</strong>です。</p>

<div class="visual-box">
<div class="visual-box-title">主な交流重賞（JpnI/GI格）</div>
<table>
<tr><th>レース名</th><th>時期</th><th>競馬場</th><th>距離</th></tr>
<tr><td>川崎記念</td><td>1月</td><td>川崎</td><td>2100m</td></tr>
<tr><td>かしわ記念</td><td>5月</td><td>船橋</td><td>1600m</td></tr>
<tr><td>帝王賞</td><td>6月</td><td>大井</td><td>2000m</td></tr>
<tr><td>JBCクラシック</td><td>11月</td><td>持ち回り</td><td>2000m前後</td></tr>
<tr><td>JBCスプリント</td><td>11月</td><td>持ち回り</td><td>1200m前後</td></tr>
<tr><td>JBCレディスクラシック</td><td>11月</td><td>持ち回り</td><td>1800m前後</td></tr>
<tr><td>東京大賞典</td><td>12月</td><td>大井</td><td>2000m</td></tr>
</table>
</div>

<h3>NAR（地方競馬全国協会）</h3>
<p><strong>NAR</strong>は地方競馬を統括する団体で、JRAが中央競馬を管轄するのに対し、NARは地方競馬の競走や騎手免許の管理を行っています。</p>

<h3>地方から中央への挑戦</h3>
<p>地方競馬で活躍した馬がJRAのレースに挑戦する仕組みもあります。</p>
<div class="info-box success">
<div class="info-box-title">中央挑戦の成功例</div>
<ul>
<li><strong>オグリキャップ:</strong> 笠松競馬から中央に移籍し、スーパースターに</li>
<li><strong>ハイセイコー:</strong> 大井競馬から中央に移籍し、社会現象を巻き起こした</li>
<li><strong>コパノリッキー:</strong> 地方交流重賞でも活躍したダートの王者</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "ダートコースで雨が降った場合の一般的な傾向はどれですか？",
                    options: [
                        "芝と同様に滑りやすくなる",
                        "砂が締まりタイムが速くなる傾向",
                        "レースが中止になる",
                        "走行不能になる"
                    ],
                    answer: 1,
                    explanation: "ダートコースは水を含むと砂が締まり、高速化する傾向があります。芝コースとは逆の特性です。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "南関東4競馬場に含まれないのはどれですか？",
                    options: ["大井", "川崎", "園田", "浦和"],
                    answer: 2,
                    explanation: "南関東4競馬場は大井・川崎・船橋・浦和です。園田は兵庫県にある近畿地区の競馬場です。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "笠松競馬から中央に移籍して大活躍した馬はどれですか？",
                    options: ["ハイセイコー", "オグリキャップ", "コパノリッキー", "ハルウララ"],
                    answer: 1,
                    explanation: "オグリキャップは岐阜県の笠松競馬から中央に移籍し、有馬記念を制するなど大活躍したスーパースターです。"
                },
                {
                    id: "q403_4",
                    type: "fill",
                    question: "地方競馬を統括する団体の略称は？（アルファベット3文字）",
                    answer: "NAR",
                    explanation: "NAR（National Association of Racing）は地方競馬全国協会の略称で、地方競馬の競走運営や騎手免許の管理を行っています。"
                }
            ]
        },
        {
            id: 404,
            title: "海外遠征",
            duration: "15分",
            content: `
<h2>日本馬の海外遠征</h2>
<p>日本競馬のレベルは年々向上し、世界の主要レースに<strong>日本馬が積極的に遠征</strong>するようになりました。海外GIでの勝利は、日本馬の実力を世界に示す大きな成果です。</p>

<div class="visual-box">
<div class="visual-box-title">日本馬の主な海外遠征先</div>
<table>
<tr><th>レース名</th><th>国</th><th>距離</th><th>日本馬の主な成績</th></tr>
<tr><td>凱旋門賞</td><td>フランス</td><td>2400m</td><td>未勝利（エルコンドルパサー2着、オルフェーヴル2着×2等）</td></tr>
<tr><td>ドバイワールドカップ</td><td>UAE</td><td>2000m</td><td>ウシュバテソーロ優勝（2023年）等</td></tr>
<tr><td>ドバイシーマクラシック</td><td>UAE</td><td>2410m</td><td>ジェンティルドンナ優勝（2014年）等</td></tr>
<tr><td>ドバイターフ</td><td>UAE</td><td>1800m</td><td>リアルスティール優勝（2017年）等</td></tr>
<tr><td>香港カップ</td><td>香港</td><td>2000m</td><td>アグネスデジタル優勝（2001年）等</td></tr>
<tr><td>香港マイル</td><td>香港</td><td>1600m</td><td>アドマイヤマーズ優勝（2019年）等</td></tr>
<tr><td>香港ヴァーズ</td><td>香港</td><td>2400m</td><td>サトノクラウン優勝（2016年）等</td></tr>
<tr><td>ブリーダーズカップ</td><td>アメリカ</td><td>各種</td><td>マルシュロレーヌ ディスタフ優勝（2021年）等</td></tr>
<tr><td>サウジカップ</td><td>サウジアラビア</td><td>1800m</td><td>パンサラッサ優勝（2023年）等</td></tr>
<tr><td>コックスプレート</td><td>オーストラリア</td><td>2040m</td><td>リスグラシュー優勝（2019年）等</td></tr>
</table>
</div>

<h2>凱旋門賞への挑戦</h2>
<p>凱旋門賞はフランス・パリのロンシャン競馬場で行われる<strong>世界最高峰の芝レース</strong>です。日本馬は長年にわたって挑戦を続けていますが、未だ勝利には至っていません。</p>

<div class="info-box warning">
<div class="info-box-title">凱旋門賞での日本馬の壁</div>
<ul>
<li><strong>馬場の違い:</strong> ロンシャンの重い洋芝は日本の軽い芝とは異なる</li>
<li><strong>時差・気候:</strong> ヨーロッパと日本の気候差への順応が課題</li>
<li><strong>長期遠征のストレス:</strong> 数ヶ月にわたる遠征は馬の体調管理が難しい</li>
<li><strong>ペース:</strong> 欧州特有のスローペースからの瞬発力勝負への対応</li>
</ul>
</div>

<h2>検疫制度</h2>
<p>馬の海外遠征には<strong>検疫</strong>が不可欠です。馬の伝染病を防ぐため、輸出入の際に厳格な検疫手続きが必要です。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>出国前検疫</strong>
日本国内の検疫施設（白井・常磐）で一定期間待機し、健康状態を確認。必要なワクチン接種や検査を実施。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>輸送</strong>
専用の航空便（ホースバン付き貨物機）で輸送。長時間のフライトは馬への負担が大きい。給水・給餌のタイミングも重要。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>入国時検疫</strong>
遠征先の国の検疫施設で健康チェック。国によって検疫期間や要件が異なる。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>帰国後検疫</strong>
日本帰国後も検疫施設で一定期間の待機が必要。海外で感染症に接触していないかを確認。
</div>
</div>
</div>

<h2>遠征の課題</h2>
<div class="visual-box">
<div class="visual-box-title">海外遠征の主な課題</div>
<table>
<tr><th>課題</th><th>内容</th></tr>
<tr><td>時差</td><td>生活リズムの乱れ。調教・レース時間の調整が必要</td></tr>
<tr><td>馬場適性</td><td>芝の種類（洋芝vs野芝）、砂質の違い、コース形態の違い</td></tr>
<tr><td>輸送ストレス</td><td>長時間のフライトによる疲労、脱水、体重減少</td></tr>
<tr><td>気候</td><td>気温・湿度の違いへの順応</td></tr>
<tr><td>検疫</td><td>出国・入国・帰国時の検疫期間がレーススケジュールを制約</td></tr>
<tr><td>コスト</td><td>輸送費、滞在費、保険料など高額な遠征費用</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">近年の日本馬の快挙</div>
近年、日本馬は世界各地のGIで勝利を収めています。特にドバイ、香港、サウジアラビアでの活躍が目立ち、日本競馬の実力が世界的に認められるようになりました。ウシュバテソーロのドバイワールドカップ制覇（2023年）やパンサラッサのサウジカップ優勝（2023年）は記憶に新しい快挙です。
</div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "凱旋門賞が行われる競馬場はどこですか？",
                    options: ["シャンティイ競馬場", "ロンシャン競馬場", "ドーヴィル競馬場", "メゾンラフィット競馬場"],
                    answer: 1,
                    explanation: "凱旋門賞はフランス・パリのロンシャン競馬場で行われます。日本馬は未だ勝利に至っていません。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "2023年にドバイワールドカップを制した日本馬はどれですか？",
                    options: ["パンサラッサ", "マルシュロレーヌ", "ウシュバテソーロ", "レモンポップ"],
                    answer: 2,
                    explanation: "ウシュバテソーロが2023年のドバイワールドカップを制し、日本馬として快挙を成し遂げました。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "海外遠征で凱旋門賞を日本馬が勝てない大きな要因の一つはどれですか？",
                    options: ["距離が長すぎる", "賞金が低い", "重い洋芝の馬場適性", "出走馬が少ない"],
                    answer: 2,
                    explanation: "ロンシャンの重い洋芝は日本の軽い芝とは大きく異なり、日本馬にとって最大の壁の一つとなっています。"
                },
                {
                    id: "q404_4",
                    type: "fill",
                    question: "2021年にブリーダーズカップ・ディスタフを制した日本馬の名前は？",
                    answer: "マルシュロレーヌ",
                    explanation: "マルシュロレーヌは2021年にアメリカのブリーダーズカップ・ディスタフを制し、日本馬として初のブリーダーズカップ優勝を果たしました。"
                }
            ]
        }
    ]
};
