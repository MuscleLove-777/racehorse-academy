/* ============================================
   Level 3: 競走生活・デビューから成長
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "競走生活・デビューから成長",
    icon: "🏁",
    description: "新馬戦からクラシック路線まで、競走馬のキャリア形成を学ぶ",
    modules: [
        {
            id: 301,
            title: "新馬戦とデビュー",
            duration: "12分",
            content: `
<h2>新馬戦（メイクデビュー）の仕組み</h2>
<p>競走馬のキャリアは<strong>新馬戦（メイクデビュー）</strong>から始まります。JRAでは毎年<strong>2歳の6月</strong>からデビュー戦が開催され、若駒たちが初めて競馬場のターフに立ちます。</p>

<div class="info-box tip">
<div class="info-box-title">新馬戦の基本ルール</div>
<ul>
<li><strong>出走資格:</strong> まだ一度も出走したことのない2歳馬（のちに3歳未出走馬も出走可）</li>
<li><strong>開催時期:</strong> 毎年6月の第1週または第2週から開始</li>
<li><strong>距離:</strong> 芝1200m〜2000m、ダート1200m〜1800mなど様々</li>
<li><strong>1着賞金:</strong> 約700万円（2024年時点）</li>
</ul>
</div>

<h3>デビュー戦の重要性</h3>
<p>新馬戦での結果は、その後のキャリアに大きな影響を与えます。新馬勝ちした馬は重賞路線やクラシック路線への切符を手にし、注目が集まります。歴代のダービー馬の多くも新馬戦を勝利しています。</p>

<h2>出走手当と賞金体系</h2>
<p>JRAでは出走するだけでも手当が支給されます。これは馬主の経済的負担を軽減し、出走を促す仕組みです。</p>

<div class="visual-box">
<div class="visual-box-title">出走に関する収入</div>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>本賞金</td><td>1着〜5着までの着順に応じた賞金</td></tr>
<tr><td>出走奨励金</td><td>6着〜8着に支給（本賞金の対象外）</td></tr>
<tr><td>出走手当</td><td>出走したすべての馬に支給（約40〜70万円）</td></tr>
<tr><td>特別出走手当</td><td>特別競走に出走した馬に加算</td></tr>
<tr><td>付加賞</td><td>特別登録料の一部が上位馬に還元</td></tr>
</table>
</div>

<h2>騎手の選択</h2>
<p>デビュー戦でどの騎手に騎乗を依頼するかは、調教師と馬主にとって重要な判断です。</p>

<h3>主戦騎手</h3>
<p>主戦騎手とは、特定の馬に継続的に騎乗する騎手のことです。馬の性格や走り方を熟知しているため、レースでのパフォーマンスが安定しやすくなります。</p>

<h3>短期免許外国人騎手</h3>
<p>JRAでは海外の有力騎手に<strong>短期騎手免許</strong>（最大3ヶ月）を発給しています。C.ルメール騎手やR.ムーア騎手など、世界的な名手が日本で騎乗する機会が増えています。特にGIレースでは外国人騎手の起用が注目されます。</p>

<h2>POG（ペーパーオーナーゲーム）</h2>
<p>POGは、架空のオーナーとして2歳馬を指名し、その馬の成績を競うファンの間で人気のゲームです。</p>

<div class="info-box success">
<div class="info-box-title">POGの基本ルール</div>
<ul>
<li>参加者がドラフト形式で2歳馬を指名（通常10頭程度）</li>
<li>指名馬の獲得賞金の合計で順位を競う</li>
<li>期間は通常6月のデビューから翌年のダービーまで</li>
<li>血統・調教・馬体などの分析力が試される</li>
</ul>
</div>
<p>POGは新馬戦の注目度を高め、競馬ファンの楽しみを広げる文化として定着しています。</p>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "JRAの新馬戦（メイクデビュー）が開催され始めるのは毎年何月からですか？",
                    options: ["4月", "5月", "6月", "7月"],
                    answer: 2,
                    explanation: "JRAの新馬戦は毎年2歳の6月から開催が始まります。ここからすべての競走馬のキャリアがスタートします。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "JRAで出走したすべての馬に支給される手当はどれですか？",
                    options: ["本賞金", "出走奨励金", "出走手当", "付加賞"],
                    answer: 2,
                    explanation: "出走手当は、着順に関係なく出走したすべての馬に支給されます。約40〜70万円が支給され、馬主の経済的負担を軽減します。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "POG（ペーパーオーナーゲーム）の一般的な対象期間はいつまでですか？",
                    options: ["有馬記念まで", "翌年のダービーまで", "菊花賞まで", "年末まで"],
                    answer: 1,
                    explanation: "POGの期間は通常、6月のデビューから翌年のダービー（5月末）までです。3歳クラシックの頂点であるダービーがゴールとなります。"
                },
                {
                    id: "q301_4",
                    type: "fill",
                    question: "JRAで海外の有力騎手に発給される免許の名称は？（○○騎手免許）",
                    answer: "短期騎手免許",
                    explanation: "短期騎手免許は最大3ヶ月間有効で、海外のトップジョッキーが日本のレースに騎乗できる制度です。"
                }
            ]
        },
        {
            id: 302,
            title: "クラス制度と競走体系",
            duration: "15分",
            content: `
<h2>JRAのクラス制度</h2>
<p>JRAの競走は<strong>収得賞金</strong>に基づくクラス制度で体系化されています。馬はレースで賞金を獲得するごとに上のクラスへ昇級し、より強い相手と戦うことになります。</p>

<div class="visual-box">
<div class="visual-box-title">JRAクラス制度一覧</div>
<table>
<tr><th>クラス</th><th>条件</th></tr>
<tr><td>新馬</td><td>未出走馬</td></tr>
<tr><td>未勝利</td><td>1勝未満</td></tr>
<tr><td>1勝クラス</td><td>収得賞金500万円以下</td></tr>
<tr><td>2勝クラス</td><td>収得賞金1,000万円以下</td></tr>
<tr><td>3勝クラス</td><td>収得賞金1,500万円以下</td></tr>
<tr><td>オープン</td><td>収得賞金1,500万円超</td></tr>
<tr><td>リステッド</td><td>格付けL</td></tr>
<tr><td>GIII</td><td>グレード制重賞</td></tr>
<tr><td>GII</td><td>グレード制重賞</td></tr>
<tr><td>GI</td><td>グレード制重賞（最高格）</td></tr>
</table>
</div>

<h2>収得賞金の計算方法</h2>
<p>クラスを決定する<strong>収得賞金</strong>は、単純な獲得賞金の合計ではありません。</p>

<div class="info-box tip">
<div class="info-box-title">収得賞金の計算ルール</div>
<ul>
<li><strong>1着:</strong> 本賞金の全額が加算</li>
<li><strong>2着:</strong> 本賞金の40%が加算</li>
<li><strong>重賞競走の場合:</strong> 1着は本賞金の全額、2着は本賞金の40%が加算</li>
<li>3着以下は収得賞金に加算されない（一部重賞を除く）</li>
</ul>
</div>

<h3>降級制度の廃止（2019年）</h3>
<p>かつてJRAには<strong>降級制度</strong>がありました。毎年6月に4歳馬の収得賞金が半減され、クラスが下がることがありました。しかし、この制度は<strong>2019年に廃止</strong>されました。</p>
<ul>
<li><strong>廃止の理由:</strong> ファンにとって分かりにくい、降級馬が下のクラスで有利になりすぎるといった問題</li>
<li><strong>廃止の影響:</strong> 一度上がったクラスから下がることがなくなり、シンプルで分かりやすい体系に</li>
</ul>

<h2>負担重量（斤量）の決め方</h2>
<p>競走によって負担重量（騎手の体重＋装具の合計）の決定方法が異なります。</p>

<div class="visual-box">
<div class="visual-box-title">負担重量の種類</div>
<table>
<tr><th>種類</th><th>内容</th></tr>
<tr><td>馬齢</td><td>馬の年齢と性別のみで決定。全馬ほぼ同じ重量</td></tr>
<tr><td>定量</td><td>馬齢に加え、GI勝利数などで若干の増減</td></tr>
<tr><td>別定</td><td>収得賞金や勝利実績に応じて重量を加算</td></tr>
<tr><td>ハンデ</td><td>ハンデキャッパーが各馬の能力を評価し、個別に設定</td></tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">ハンデ戦のポイント</div>
ハンデ戦では実力のある馬ほど重い斤量を背負うため、波乱が起きやすくなります。逆に実績の少ない馬は軽い斤量で出走でき、一発逆転のチャンスがあります。
</div>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "JRAで「2勝クラス」に所属する馬の収得賞金の条件はどれですか？",
                    options: ["500万円以下", "1,000万円以下", "1,500万円以下", "2,000万円以下"],
                    answer: 1,
                    explanation: "2勝クラスは収得賞金1,000万円以下の馬が出走するクラスです。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "JRAの降級制度が廃止されたのは何年ですか？",
                    options: ["2015年", "2017年", "2019年", "2021年"],
                    answer: 2,
                    explanation: "降級制度は2019年に廃止されました。以降、一度昇級したクラスから下がることはなくなりました。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "ハンデキャッパーが各馬の能力を評価して個別に負担重量を決める方式はどれですか？",
                    options: ["馬齢", "定量", "別定", "ハンデ"],
                    answer: 3,
                    explanation: "ハンデ戦ではハンデキャッパーが各馬の能力を総合的に評価し、実力差が出にくいように個別に重量を設定します。"
                },
                {
                    id: "q302_4",
                    type: "fill",
                    question: "2着馬の収得賞金は本賞金の何%が加算されますか？（数字のみ）",
                    answer: "40",
                    explanation: "2着の場合、本賞金の40%が収得賞金として加算されます。3着以下は原則として加算されません。"
                }
            ]
        },
        {
            id: 303,
            title: "2歳・3歳の主要レース",
            duration: "15分",
            content: `
<h2>2歳GIレース</h2>
<p>2歳シーズンのクライマックスとなるのが、年末に行われる<strong>3つの2歳GI</strong>です。ここで活躍した馬は翌年のクラシック路線の主役候補となります。</p>

<div class="visual-box">
<div class="visual-box-title">2歳GI一覧</div>
<table>
<tr><th>レース名</th><th>時期</th><th>距離</th><th>コース</th><th>対象</th></tr>
<tr><td>朝日杯フューチュリティS</td><td>12月</td><td>芝1600m</td><td>阪神</td><td>2歳牡馬・牝馬</td></tr>
<tr><td>阪神ジュベナイルF</td><td>12月</td><td>芝1600m</td><td>阪神</td><td>2歳牝馬</td></tr>
<tr><td>ホープフルS</td><td>12月</td><td>芝2000m</td><td>中山</td><td>2歳牡馬・牝馬</td></tr>
</table>
</div>

<h2>3歳クラシック三冠</h2>
<p>日本競馬の<strong>最高の栄誉</strong>とされるのが3歳クラシック三冠です。皐月賞・日本ダービー・菊花賞の3レースすべてを勝つことを<strong>三冠馬</strong>と呼びます。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>皐月賞（4月・中山・芝2000m）</strong>
「最も速い馬が勝つ」と言われる第一冠。中山競馬場の起伏あるコースで行われ、スピードとスタミナのバランスが問われます。1着賞金2億円。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>日本ダービー（東京優駿）（5月・東京・芝2400m）</strong>
「最も運のある馬が勝つ」と言われる第二冠。競馬の祭典と呼ばれ、すべてのホースマンが目標とする最高峰のレース。1着賞金3億円。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>菊花賞（10月・京都・芝3000m）</strong>
「最も強い馬が勝つ」と言われる第三冠。3000mの長距離で、真のスタミナと底力が試されます。1着賞金2億円。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">歴代三冠馬（JRA）</div>
<ul>
<li>セントライト（1941年）</li>
<li>シンザン（1964年）</li>
<li>ミスターシービー（1983年）</li>
<li>シンボリルドルフ（1984年）</li>
<li>ナリタブライアン（1994年）</li>
<li>ディープインパクト（2005年）</li>
<li>オルフェーヴル（2011年）</li>
<li>コントレイル（2020年）</li>
</ul>
</div>

<h2>牝馬三冠</h2>
<p>牝馬（メス馬）には専用のクラシック三冠が用意されています。</p>

<div class="visual-box">
<div class="visual-box-title">牝馬三冠</div>
<table>
<tr><th>レース名</th><th>時期</th><th>距離</th><th>コース</th></tr>
<tr><td>桜花賞</td><td>4月</td><td>芝1600m</td><td>阪神</td></tr>
<tr><td>オークス（優駿牝馬）</td><td>5月</td><td>芝2400m</td><td>東京</td></tr>
<tr><td>秋華賞</td><td>10月</td><td>芝2000m</td><td>京都</td></tr>
</table>
</div>

<h2>主なトライアルレース</h2>
<p>クラシックレースへの出走権を獲得するためのトライアル（前哨戦）が複数あります。上位入着馬に優先出走権が与えられます。</p>

<div class="visual-box">
<div class="visual-box-title">トライアルレース体系</div>
<table>
<tr><th>トライアルレース</th><th>目標レース</th><th>格付け</th></tr>
<tr><td>弥生賞ディープインパクト記念</td><td>皐月賞</td><td>GII</td></tr>
<tr><td>スプリングS</td><td>皐月賞</td><td>GII</td></tr>
<tr><td>青葉賞</td><td>日本ダービー</td><td>GII</td></tr>
<tr><td>プリンシパルS</td><td>日本ダービー</td><td>L</td></tr>
<tr><td>神戸新聞杯</td><td>菊花賞</td><td>GII</td></tr>
<tr><td>セントライト記念</td><td>菊花賞</td><td>GII</td></tr>
<tr><td>チューリップ賞</td><td>桜花賞</td><td>GII</td></tr>
<tr><td>フローラS</td><td>オークス</td><td>GII</td></tr>
<tr><td>ローズS</td><td>秋華賞</td><td>GII</td></tr>
</table>
</div>

<h3>NHKマイルカップ</h3>
<p>5月に東京競馬場の芝1600mで行われるGIレースです。クラシック路線に乗れなかったマイラータイプの3歳馬や、外国産馬にとって重要な目標レースです。</p>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "日本ダービー（東京優駿）の1着賞金はいくらですか？",
                    options: ["1億円", "1.5億円", "2億円", "3億円"],
                    answer: 3,
                    explanation: "日本ダービーの1着賞金は3億円で、JRAの平地GIの中でも最高額です。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "菊花賞が行われる距離として正しいものはどれですか？",
                    options: ["芝2000m", "芝2400m", "芝2500m", "芝3000m"],
                    answer: 3,
                    explanation: "菊花賞は京都競馬場の芝3000mで行われます。「最も強い馬が勝つ」と言われる長距離戦です。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "弥生賞ディープインパクト記念はどのクラシックレースのトライアルですか？",
                    options: ["日本ダービー", "皐月賞", "菊花賞", "桜花賞"],
                    answer: 1,
                    explanation: "弥生賞ディープインパクト記念は皐月賞のトライアルレースです。上位入着馬に皐月賞への優先出走権が与えられます。"
                },
                {
                    id: "q303_4",
                    type: "fill",
                    question: "2020年に無敗で三冠を達成した馬の名前は？",
                    answer: "コントレイル",
                    explanation: "コントレイルは2020年に皐月賞・日本ダービー・菊花賞を無敗で制し、三冠馬となりました。父はディープインパクトです。"
                }
            ]
        },
        {
            id: 304,
            title: "騎手・調教師・馬主の関係",
            duration: "15分",
            content: `
<h2>騎手（ジョッキー）</h2>
<p>騎手は競走馬に騎乗してレースに臨む専門職です。JRAの騎手になるには、<strong>JRA競馬学校の騎手課程</strong>を修了する必要があります。</p>

<h3>騎手の養成課程</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>入学試験</strong>
中学卒業時に受験。身長・体重制限あり（入学時の目安：体重44kg以下）。倍率は10倍以上の狭き門。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>騎手課程（3年間）</strong>
千葉県白井市にあるJRA競馬学校で3年間の全寮制教育。馬術、レース技術、体力トレーニング、一般教養などを学ぶ。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>免許取得・デビュー</strong>
卒業試験に合格し騎手免許を取得。トレーニングセンターの調教師のもとで所属騎手としてデビュー。
</div>
</div>
</div>

<h3>騎手の報酬体系</h3>
<div class="visual-box">
<div class="visual-box-title">騎手の主な収入</div>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>騎乗手当</td><td>1レースごとに支給（約5〜7万円）</td></tr>
<tr><td>進上金（賞金の5%）</td><td>1着賞金の5%が騎手に（例：ダービー3億円の5%＝1,500万円）</td></tr>
<tr><td>特別模範騎手賞</td><td>年間成績優秀者に授与</td></tr>
</table>
</div>

<h3>リーディングジョッキー</h3>
<p>年間で最も多く勝利した騎手に<strong>リーディングジョッキー</strong>の称号が贈られます。近年はC.ルメール騎手や川田将雅騎手が上位を争っています。</p>

<h3>エージェント制度</h3>
<p>エージェントは騎手に代わって<strong>騎乗依頼の仲介</strong>を行う存在です。調教師から騎乗依頼を受け、騎手のスケジュールを管理します。トップジョッキーにはエージェントがつくことが一般的で、効率的な騎乗スケジュールの組み立てに重要な役割を果たします。</p>

<h2>調教師の厩舎経営</h2>
<p>調教師は、競走馬の管理・調教を行う責任者であり、同時に<strong>厩舎の経営者</strong>でもあります。</p>

<div class="info-box tip">
<div class="info-box-title">調教師の主なポイント</div>
<ul>
<li><strong>管理馬上限:</strong> 1厩舎あたり最大28頭（美浦・栗東トレーニングセンター）</li>
<li><strong>預託料:</strong> 馬主が調教師に支払う月額費用（約60〜80万円/頭）</li>
<li><strong>進上金:</strong> 賞金の10%が調教師に</li>
<li><strong>厩務員・助手:</strong> 調教師のもとでスタッフが馬の世話・調教を担当</li>
</ul>
</div>

<h2>馬主の種類</h2>
<p>競走馬を所有する馬主には複数の形態があり、それぞれ異なる要件やメリットがあります。</p>

<div class="visual-box">
<div class="visual-box-title">馬主の種類と比較</div>
<table>
<tr><th>種類</th><th>資産要件（JRA）</th><th>メリット</th><th>デメリット</th></tr>
<tr><td>個人馬主</td><td>所得1,700万円以上/資産7,500万円以上</td><td>自由に馬名・勝負服を決定、冠名使用可</td><td>高額な維持費を1人で負担</td></tr>
<tr><td>法人馬主</td><td>資本金1,000万円以上/過去2年間黒字等</td><td>法人名義で所有、経費計上が容易</td><td>法人設立・維持コスト</td></tr>
<tr><td>組合馬主</td><td>構成員が個人馬主資格を有する2〜10名</td><td>複数人で費用分担</td><td>全員が個人馬主資格必要</td></tr>
<tr><td>一口馬主（クラブ法人）</td><td>特になし（数万円〜参加可）</td><td>少額から参加可能、気軽に馬主体験</td><td>意思決定に関与できない、勝負服はクラブ統一</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">一口馬主の人気</div>
近年、<strong>一口馬主（クラブ法人）</strong>の人気が急上昇しています。サンデーレーシング、キャロットファーム、シルクレーシングなどの有力クラブが多数のGI馬を輩出し、少額の出資でGIの興奮を味わえることが大きな魅力です。
</div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "JRA競馬学校の騎手課程は何年間ですか？",
                    options: ["1年間", "2年間", "3年間", "4年間"],
                    answer: 2,
                    explanation: "JRA競馬学校の騎手課程は3年間の全寮制教育です。千葉県白井市で馬術、レース技術、体力トレーニングなどを学びます。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "騎手に支払われる進上金は1着賞金の何%ですか？",
                    options: ["3%", "5%", "8%", "10%"],
                    answer: 1,
                    explanation: "騎手の進上金は賞金の5%です。例えばダービー（1着賞金3億円）を勝てば1,500万円が騎手に支払われます。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "JRAの個人馬主になるために必要な所得要件は年間いくら以上ですか？",
                    options: ["500万円以上", "1,000万円以上", "1,700万円以上", "2,500万円以上"],
                    answer: 2,
                    explanation: "JRAの個人馬主になるには、過去2年間の所得が1,700万円以上あることが要件の一つです（その他資産要件もあります）。"
                },
                {
                    id: "q304_4",
                    type: "fill",
                    question: "騎手に代わって騎乗依頼の仲介を行う存在を何と呼びますか？",
                    answer: "エージェント",
                    explanation: "エージェントは騎手のスケジュールを管理し、調教師からの騎乗依頼を仲介する重要な役割を担っています。"
                }
            ]
        }
    ]
};
