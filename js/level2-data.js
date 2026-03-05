/* ============================================
   Level 2: 育成と調教
   ============================================ */
const LEVEL2_DATA = {
    id: 2,
    title: "育成と調教",
    icon: "🏇",
    description: "牧場での育成からトレセン入厩、デビューまでの過程を学ぶ",
    modules: [
        {
            id: 201,
            title: "当歳から1歳まで",
            duration: "12分",
            content: `
<h2>離乳</h2>
<p>サラブレッドの仔馬は<strong>生後5〜6ヶ月</strong>で母馬から離乳します。離乳は仔馬にとって大きなストレスですが、自立と成長のために必要な過程です。</p>
<ul>
<li>離乳の方法: 徐々に母馬との接触時間を減らす「段階的離乳」が主流</li>
<li>離乳後は同世代の仔馬たちと一緒に放牧され、群れの中で<strong>社会性を獲得</strong>する</li>
</ul>

<h2>群れでの成長</h2>
<p>離乳後の仔馬は群れの中で重要な社会行動を学びます。</p>
<ul>
<li><strong>順位関係の学習:</strong> 馬社会の上下関係を理解する</li>
<li><strong>コミュニケーション:</strong> 他の馬との意思疎通の方法を学ぶ</li>
<li><strong>運動能力の発達:</strong> 群れで走り回ることで筋力・心肺機能が自然に鍛えられる</li>
</ul>

<h2>栄養管理</h2>
<p>当歳から1歳にかけては<strong>骨格形成期</strong>であり、栄養管理が極めて重要です。</p>

<div class="info-box warning">
<div class="info-box-title">骨格形成期の注意点</div>
<ul>
<li>カルシウムとリンのバランスが骨の発育に影響する</li>
<li>過剰な栄養は急激な成長を招き、骨軟骨症（OCD）のリスクを高める</li>
<li>逆に栄養不足は骨格の発育不良につながる</li>
<li>良質な牧草と適切な配合飼料のバランスが重要</li>
</ul>
</div>

<h2>セリ市場の仕組み</h2>
<p>日本の主なセリ市場では、当歳馬や1歳馬が取引されます。</p>

<table>
<thead>
<tr><th>セリ名</th><th>開催時期</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td><strong>セレクトセール</strong></td><td>7月</td><td>社台グループ主催。日本最高峰のセリ。当歳・1歳が対象</td></tr>
<tr><td><strong>HBAセール（サマーセール等）</strong></td><td>8月</td><td>日本軽種馬協会主催。幅広い価格帯の馬が上場</td></tr>
<tr><td><strong>セプテンバーセール</strong></td><td>9月</td><td>HBA主催。1歳馬が中心</td></tr>
</tbody>
</table>

<h2>セレクトセール最高価格の推移</h2>
<p>セレクトセールは年々取引額が上昇しており、日本競馬産業の活況を示しています。</p>

<table>
<thead>
<tr><th>年度</th><th>最高価格（税別）</th><th>備考</th></tr>
</thead>
<tbody>
<tr><td>2019年</td><td>5億8,000万円</td><td>ディープインパクト産駒</td></tr>
<tr><td>2021年</td><td>5億1,000万円</td><td>キタサンブラック産駒</td></tr>
<tr><td>2022年</td><td>6億2,000万円</td><td>セール総額過去最高を更新</td></tr>
<tr><td>2023年</td><td>7億円</td><td>過去最高額を更新</td></tr>
</tbody>
</table>
            `,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "サラブレッドの仔馬は一般的に生後何ヶ月で離乳しますか？",
                    options: ["生後1〜2ヶ月", "生後3〜4ヶ月", "生後5〜6ヶ月", "生後9〜10ヶ月"],
                    answer: 2,
                    explanation: "サラブレッドの仔馬は生後5〜6ヶ月で母馬から離乳します。離乳後は同世代の仔馬と群れで過ごし社会性を学びます。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "当歳〜1歳の時期に特に重要な栄養管理の理由はどれですか？",
                    options: ["筋肉量を最大化するため", "骨格形成期であるため", "競走能力を早期に判定するため", "毛並みを良くするため"],
                    answer: 1,
                    explanation: "当歳から1歳は骨格形成期であり、カルシウムとリンのバランスなど栄養管理が極めて重要です。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "社台グループ主催の日本最高峰のセリはどれですか？",
                    options: ["HBAセール", "セプテンバーセール", "セレクトセール", "オータムセール"],
                    answer: 2,
                    explanation: "セレクトセールは毎年7月に開催される社台グループ主催の日本最高峰のセリ市場です。"
                },
                {
                    id: "q201_4",
                    type: "fill",
                    question: "過剰な栄養による急激な成長が引き起こすリスクのある骨の病気は？（アルファベット3文字）",
                    answer: "OCD",
                    explanation: "OCD（骨軟骨症）は成長期の過剰栄養による急激な成長が原因で発症するリスクがあります。"
                }
            ]
        },
        {
            id: 202,
            title: "育成牧場での日々",
            duration: "15分",
            content: `
<h2>馴致（じゅんち）</h2>
<p><strong>馴致</strong>とは、馬を人間に慣れさせ、扱いやすくするための訓練です。育成の最初のステップであり、その後のすべての調教の基礎となります。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>ハルター（端綱）着け</strong>
馬の頭にハルター（無口）を付け、人間の指示で歩く・止まるといった基本動作を教える。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>引き運動</strong>
ハルターを付けた状態で人間と一緒に歩く訓練。左右の指示や速度の調整を学ぶ。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>人に慣れさせる</strong>
体中を触られることに慣れさせ、蹄の手入れや馬装（装鞍）への抵抗をなくす。
</div>
</div>
</div>

<h2>騎乗馴致（ブレーキング）</h2>
<p><strong>ブレーキング</strong>は馬に人を乗せることを受け入れさせる過程で、育成において最も重要な段階の一つです。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>鞍付け</strong>
まず鞍（サドル）を背中に乗せることに慣れさせる。最初は軽いパッドから始め、徐々に鞍の重さに馴らす。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>騎乗</strong>
人間が馬の背中にまたがる。最初は馬が落ち着くまで動かず、徐々に歩行を開始する。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>歩様指導</strong>
常歩（なみあし）→速歩（はやあし）→駈歩（かけあし）と段階的に歩様を教えていく。
</div>
</div>
</div>

<h2>BTC（ブリーダーズ・トレーニング・センター）</h2>
<p><strong>BTC</strong>は北海道浦河町にある育成調教施設で、日本軽種馬協会が運営しています。</p>
<ul>
<li>800mと1,000mの屋内坂路コースを完備</li>
<li>冬季でも調教が可能な全天候型施設</li>
<li>全国の育成牧場から馬が集まり、本格的な調教を受ける</li>
<li>北海道の厳しい冬でも安定した育成環境を提供</li>
</ul>

<h2>主要育成牧場</h2>

<table>
<thead>
<tr><th>牧場名</th><th>所在地</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td><strong>ノーザンファーム空港</strong></td><td>北海道安平町</td><td>坂路完備。GI馬を多数輩出する育成部門</td></tr>
<tr><td><strong>山元トレーニングセンター</strong></td><td>宮城県山元町</td><td>ノーザンファーム系列。温暖な気候で冬季育成に優位</td></tr>
<tr><td><strong>グランデファーム</strong></td><td>北海道安平町</td><td>独立系の有力育成牧場</td></tr>
<tr><td><strong>大栄牧場</strong></td><td>北海道浦河町</td><td>育成専門牧場として高い評価</td></tr>
</tbody>
</table>

<h2>坂路での鍛錬</h2>
<p>育成牧場での調教において<strong>坂路（はんろ）</strong>は重要なトレーニング施設です。</p>
<ul>
<li>上り坂を駆け上がることで、<strong>心肺機能と筋力</strong>を効率的に鍛えられる</li>
<li>平坦なコースより脚への負担が少なく、故障リスクが低い</li>
<li>ノーザンファームの坂路は全長1,000m、高低差約30mで、トレセンの坂路に近い環境</li>
</ul>
            `,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "馬に人を乗せることを受け入れさせる過程を何と呼びますか？",
                    options: ["馴致", "ブレーキング", "ゲート試験", "追い切り"],
                    answer: 1,
                    explanation: "ブレーキング（騎乗馴致）は馬に人を乗せることを受け入れさせる過程で、鞍付け→騎乗→歩様指導の順に進みます。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "BTC（ブリーダーズ・トレーニング・センター）がある場所はどこですか？",
                    options: ["北海道安平町", "北海道浦河町", "宮城県山元町", "茨城県美浦村"],
                    answer: 1,
                    explanation: "BTCは北海道浦河町にある日本軽種馬協会が運営する育成調教施設です。"
                },
                {
                    id: "q202_3",
                    type: "choice",
                    question: "馬の歩様の正しい段階的な順序はどれですか？",
                    options: [
                        "駈歩→速歩→常歩",
                        "速歩→常歩→駈歩",
                        "常歩→速歩→駈歩",
                        "常歩→駈歩→速歩"
                    ],
                    answer: 2,
                    explanation: "歩様は常歩（なみあし）→速歩（はやあし）→駈歩（かけあし）の順に段階的に教えていきます。"
                },
                {
                    id: "q202_4",
                    type: "fill",
                    question: "北海道浦河町にある育成調教施設の略称は？（アルファベット3文字）",
                    answer: "BTC",
                    explanation: "BTC（ブリーダーズ・トレーニング・センター）は日本軽種馬協会が運営する育成調教施設で、屋内坂路コースを完備しています。"
                }
            ]
        },
        {
            id: 203,
            title: "トレーニングセンター入厩",
            duration: "15分",
            content: `
<h2>日本の2大トレーニングセンター</h2>
<p>JRA（日本中央競馬会）は2つのトレーニングセンター（トレセン）を運営しています。すべての中央競馬の競走馬は、いずれかのトレセンに所属します。</p>

<table>
<thead>
<tr><th>項目</th><th>美浦トレーニングセンター</th><th>栗東トレーニングセンター</th></tr>
</thead>
<tbody>
<tr><td><strong>所在地</strong></td><td>茨城県美浦村（関東）</td><td>滋賀県栗東市（関西）</td></tr>
<tr><td><strong>開場年</strong></td><td>1978年</td><td>1969年</td></tr>
<tr><td><strong>馬房数</strong></td><td>約2,000馬房</td><td>約2,400馬房</td></tr>
<tr><td><strong>坂路コース</strong></td><td>全長1,200m（2023年リニューアル）</td><td>全長1,085m、高低差32m</td></tr>
<tr><td><strong>ウッドチップコース</strong></td><td>1周1,600m・2,000m</td><td>1周1,800m・2,000m</td></tr>
<tr><td><strong>特徴</strong></td><td>2023年に坂路を大幅改修し施設強化</td><td>坂路調教のメッカ。GI馬を多数輩出</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">関東 vs 関西</div>
<p>近年は栗東（関西）所属馬がGIレースで優位な成績を残す傾向があります。これは坂路コースの充実度や調教メソッドの差が要因とされてきましたが、美浦の施設改修により差は縮まりつつあります。</p>
</div>

<h2>調教師の役割と免許制度</h2>
<p><strong>調教師</strong>は競走馬の管理・調教の全責任を負うプロフェッショナルです。</p>
<ul>
<li><strong>免許:</strong> JRAの調教師試験に合格する必要がある（合格率約5%）</li>
<li><strong>定年:</strong> 70歳で定年</li>
<li><strong>主な業務:</strong> 調教計画の策定、レース選択、馬主との連絡、厩舎の経営</li>
<li><strong>厩舎:</strong> 1つの厩舎で管理できる馬は最大約20〜30頭</li>
</ul>

<h2>厩務員の日常業務</h2>
<p><strong>厩務員</strong>は競走馬の日々の世話を担当する専門職です。通常1人で2〜3頭を担当します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>早朝4時〜5時: 飼い付け・馬房掃除</strong>
朝の飼料を与え、馬房の寝藁を交換。馬の体調を目視で確認。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>6時〜9時: 調教</strong>
調教コースで騎乗調教。坂路やウッドチップコースで指示されたメニューをこなす。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>9時〜12時: 手入れ・昼飼い</strong>
調教後の馬体の手入れ（洗い、ブラッシング）。昼の飼料を与える。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>午後: 曳き運動・夕飼い</strong>
軽い運動と夕方の飼料。翌日の調教に向けた準備。
</div>
</div>
</div>

<h2>調教助手の役割</h2>
<p><strong>調教助手</strong>は調教師を補佐し、実際の騎乗調教を指揮する重要な役割です。</p>
<ul>
<li>調教時に馬に騎乗し、状態を調教師に報告する</li>
<li>将来の調教師候補として経験を積むケースが多い</li>
<li>攻め馬（追い切り）の騎乗も担当する</li>
</ul>

<h2>入厩時期</h2>
<p>育成牧場からトレーニングセンターに入厩する時期は、通常<strong>1歳秋〜2歳春</strong>です。</p>
<ul>
<li>早い馬は1歳の秋（10月頃）にはトレセンに移動</li>
<li>遅い馬は2歳の春（3〜4月）に入厩</li>
<li>入厩のタイミングは馬の成長度合いと目標レースによって判断される</li>
</ul>
            `,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "栗東トレーニングセンターがある都道府県はどこですか？",
                    options: ["茨城県", "京都府", "滋賀県", "大阪府"],
                    answer: 2,
                    explanation: "栗東トレーニングセンターは滋賀県栗東市にあります。関西馬の調教拠点です。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "JRA調教師試験の合格率はおよそどれくらいですか？",
                    options: ["約1%", "約5%", "約15%", "約25%"],
                    answer: 1,
                    explanation: "JRA調教師試験の合格率は約5%と非常に難関です。"
                },
                {
                    id: "q203_3",
                    type: "choice",
                    question: "厩務員が1人で担当する馬の頭数は通常何頭ですか？",
                    options: ["1頭", "2〜3頭", "5〜6頭", "10頭以上"],
                    answer: 1,
                    explanation: "厩務員は通常1人で2〜3頭を担当し、日々の飼い付けや手入れ、調教の騎乗などを行います。"
                },
                {
                    id: "q203_4",
                    type: "fill",
                    question: "JRA調教師の定年は何歳ですか？（数字のみ）",
                    answer: "70",
                    explanation: "JRAの調教師は70歳で定年を迎えます。"
                }
            ]
        },
        {
            id: 204,
            title: "デビューまでの調教過程",
            duration: "15分",
            content: `
<h2>ゲート試験（発走調教検査）</h2>
<p>競走馬がレースに出走するためには、まず<strong>ゲート試験</strong>に合格しなければなりません。正式名称は「発走調教検査」です。</p>

<div class="info-box tip">
<div class="info-box-title">ゲート試験の内容と合格基準</div>
<ul>
<li><strong>枠入り:</strong> 発馬機（ゲート）にスムーズに入ること</li>
<li><strong>駐立:</strong> ゲート内で静かに立っていること</li>
<li><strong>発走:</strong> ゲートが開いたら真っ直ぐにスタートすること</li>
<li>通常2〜3回の発走を行い、問題なければ合格</li>
<li>合格できない馬はゲート再審査を受ける必要がある</li>
</ul>
</div>

<h2>追い切り（最終調教）の見方</h2>
<p><strong>追い切り</strong>とは、レース本番前に行われる最終的な負荷の高い調教のことです。通常レースの<strong>2〜3日前</strong>（水曜日か木曜日）に行われます。</p>
<ul>
<li>追い切りの内容はスポーツ紙やウェブサイトで公開され、予想の重要な材料となる</li>
<li>単走（1頭で追う）と併走（他の馬と並んで追う）がある</li>
<li>併走の場合、相手馬との着差や手応えが注目される</li>
</ul>

<h2>調教タイムの読み方</h2>
<p>調教タイムは<strong>ハロン（F = furlong = 200m）</strong>単位で計測されます。</p>

<table>
<thead>
<tr><th>コース</th><th>一般的な計測区間</th><th>好タイムの目安</th></tr>
</thead>
<tbody>
<tr><td><strong>坂路4F（800m）</strong></td><td>800mの坂路全体</td><td>52秒台以下</td></tr>
<tr><td><strong>坂路ラスト1F</strong></td><td>坂路の最後の200m</td><td>12秒台</td></tr>
<tr><td><strong>Wコース5F（1,000m）</strong></td><td>ウッドチップ1,000m</td><td>65秒台以下</td></tr>
<tr><td><strong>Wコースラスト1F</strong></td><td>最後の200m</td><td>11秒台</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">タイムの注意点</div>
<p>調教タイムは馬場状態や天候によって大きく変動します。タイムの絶対値だけでなく、<strong>ラスト1Fの加速具合（末脚の伸び）</strong>が重要です。ラストで加速している馬は余力がある証拠とされます。</p>
</div>

<h2>調教パターン</h2>
<p>調教の強度を表す用語があり、レース予想において重要な情報です。</p>

<table>
<thead>
<tr><th>用語</th><th>意味</th><th>解説</th></tr>
</thead>
<tbody>
<tr><td><strong>馬なり</strong></td><td>馬の自然なペース</td><td>騎手が追わず馬任せ。余裕のある走り</td></tr>
<tr><td><strong>強め</strong></td><td>やや促す程度</td><td>手綱を少し動かす程度の負荷</td></tr>
<tr><td><strong>一杯</strong></td><td>全力に近い追い</td><td>騎手がしっかりと追って全力で走らせる</td></tr>
<tr><td><strong>仕掛けて</strong></td><td>途中から加速</td><td>後半からペースを上げるパターン</td></tr>
</tbody>
</table>

<h2>能力試験（地方競馬）</h2>
<p>地方競馬では、デビュー前に<strong>能力試験</strong>を受ける必要があります。</p>
<ul>
<li>実際のレースと同様の条件で走り、一定の基準タイム以内でゴールすること</li>
<li>ゲートからの発走や走行中の態度も審査対象</li>
<li>中央競馬にはこの制度はなく、ゲート試験のみ</li>
</ul>

<h2>デビュー戦の選択</h2>
<p>新馬戦（メイクデビュー）の条件選択は、その後の競走生活を左右する重要な判断です。</p>

<div class="info-box success">
<div class="info-box-title">デビュー戦選択の要素</div>
<ul>
<li><strong>芝 or ダート:</strong> 血統や調教の動きから適性を判断。芝向きの血統でも、まずダートでデビューさせるケースもある</li>
<li><strong>距離:</strong> 短距離（1,200m〜1,400m）、中距離（1,600m〜2,000m）など。スピードタイプか持久力タイプかで選択</li>
<li><strong>競馬場:</strong> 関東馬は東京・中山、関西馬は阪神・京都が中心。ローカル（小倉・新潟等）を選ぶ場合もある</li>
<li><strong>時期:</strong> 2歳の6月から新馬戦が始まる。早期デビューを目指すか、じっくり成長を待つか</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "競走馬がレースに出走するために最初に合格しなければならない試験は何ですか？",
                    options: ["能力試験", "追い切り審査", "ゲート試験（発走調教検査）", "馬体検査"],
                    answer: 2,
                    explanation: "ゲート試験（発走調教検査）に合格しなければレースに出走できません。枠入り、駐立、発走が審査されます。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "調教で「馬なり」とはどういう意味ですか？",
                    options: ["全力で走らせること", "馬の自然なペースで走ること", "坂路で追うこと", "併走すること"],
                    answer: 1,
                    explanation: "「馬なり」は騎手が追わず馬任せの自然なペースで走ることを意味します。余裕のある走りを表します。"
                },
                {
                    id: "q204_3",
                    type: "choice",
                    question: "中央競馬の新馬戦（メイクデビュー）が始まるのはいつですか？",
                    options: ["2歳の3月", "2歳の6月", "2歳の9月", "3歳の1月"],
                    answer: 1,
                    explanation: "中央競馬の新馬戦は2歳の6月から始まります。早期デビューを目指す馬はこの時期を目標に調教されます。"
                },
                {
                    id: "q204_4",
                    type: "fill",
                    question: "調教タイムの計測単位「F」は何を意味しますか？（カタカナで）",
                    answer: "ハロン",
                    explanation: "F（furlong = ハロン）は200mに相当する距離の単位で、調教タイムの計測に使われます。"
                }
            ]
        }
    ]
};
