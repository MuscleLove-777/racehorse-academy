/* ============================================
   競走馬の一生アカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('racehorse-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('racehorse-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('racehorse-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('racehorse-progress', JSON.stringify(this.progress)); localStorage.setItem('racehorse-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>競走馬の一生アカデミーへようこそ</h2>
            <p>サラブレッドの誕生・血統から育成・調教、GIレースの世界、健康管理、引退後のセカンドキャリアまで、競走馬の一生を体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>競走馬の一生について深く理解しました。<br>競馬をもっと楽しみましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('racehorse-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('racehorse-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('racehorse-progress'); localStorage.removeItem('racehorse-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: '血統・配合用語', terms: [
                { name: 'サラブレッド', desc: '競走用に品種改良された馬の品種。アラブ馬等を起源とし、速さと持久力に優れる' },
                { name: 'サイアーライン', desc: '父系の血統を辿る系統。ディープインパクト系、キングカメハメハ系など' },
                { name: 'インブリード', desc: '近親交配。5代以内に同じ祖先が複数回現れる配合。能力強化とリスクの両面がある' },
                { name: 'アウトブリード', desc: '5代以内に同じ祖先がいない配合。異系交配とも呼ばれ、体質の強化が期待される' },
                { name: 'ニックス', desc: '特定の種牡馬と繁殖牝馬の血統の組み合わせで、好成績を残しやすい相性のこと' },
                { name: 'クロス', desc: '血統表内で同一の祖先が複数回登場すること。「サンデーサイレンス3×4」のように表記' },
            ]},
            { category: '競走関連用語', terms: [
                { name: 'GI/GII/GIII', desc: 'グレード制による重賞レースの格付け。GIが最高格で日本ダービー、有馬記念等が該当' },
                { name: '重賞', desc: 'グレード制で格付けされた特別レース。GI・GII・GIIIの3段階がある' },
                { name: 'リステッド', desc: '重賞に次ぐ格のレース。重賞昇格候補として位置づけられる特別競走' },
                { name: 'オープン', desc: '出走条件に収得賞金の制限がないクラス。実力上位馬が集まる' },
                { name: '収得賞金', desc: 'レースで獲得した賞金の累計。出走可能なレースのクラスを決定する基準' },
                { name: '本賞金', desc: 'レースの1着から5着（中央競馬）までに支払われる賞金' },
                { name: '出走手当', desc: 'レースに出走するだけで支給される手当金。着順に関わらず支払われる' },
            ]},
            { category: '施設・組織', terms: [
                { name: 'JRA', desc: '日本中央競馬会（Japan Racing Association）。中央競馬を主催する特殊法人' },
                { name: 'NAR', desc: '地方競馬全国協会（National Association of Racing）。地方競馬を統括する組織' },
                { name: '美浦TC', desc: '美浦トレーニングセンター。茨城県にあるJRA東日本の調教拠点' },
                { name: '栗東TC', desc: '栗東トレーニングセンター。滋賀県にあるJRA西日本の調教拠点' },
                { name: '社台SS', desc: '社台スタリオンステーション。北海道にある日本最大級の種牡馬繋養施設' },
                { name: 'ノーザンファーム', desc: '日本最大の競走馬生産牧場。社台グループの中核的存在' },
                { name: 'BTC', desc: '公益財団法人軽種馬育成調教センター（Bloodhorse Training Center）。若馬の育成・調教施設' },
            ]},
            { category: '馬体・健康用語', terms: [
                { name: '屈腱炎', desc: '前脚の屈腱に炎症が起こる疾患。競走馬に最も多い故障の一つで、復帰に長期間を要する' },
                { name: '蹄葉炎', desc: '蹄の内部組織に炎症が起こる重篤な疾患。重度の場合は予後不良となることもある' },
                { name: '疝痛', desc: '腹痛の総称。消化器系の異常で発症し、緊急手術が必要な場合もある' },
                { name: 'ソエ', desc: '若馬の管骨（前脚のスネ）表面に骨膜炎が起こる症状。成長期に多く見られる' },
                { name: '裂蹄', desc: '蹄が割れる症状。蹄の乾燥や栄養不足、蹄質の弱さなどが原因で発生する' },
                { name: '予後不良', desc: '回復の見込みがなく、競走馬としての復帰が不可能な状態。安楽死の判断基準となる' },
                { name: '装蹄師', desc: '馬の蹄を削り、蹄鉄を打つ専門職。馬の脚元の健康を支える重要な役割を担う' },
            ]},
            { category: '人物・職業', terms: [
                { name: '調教師', desc: '競走馬の管理・調教を行う責任者。厩舎を運営し、レースでの出走計画を立てる' },
                { name: '騎手', desc: 'ジョッキー。競走馬に騎乗してレースに参加する。免許が必要' },
                { name: '厩務員', desc: '厩舎で競走馬の日常的な世話を担当する職員。馬の健康管理や手入れを行う' },
                { name: '調教助手', desc: '調教師を補佐し、馬の調教や管理を行う。調教騎乗も担当する' },
                { name: '獣医師', desc: '競走馬の健康管理・治療を行う専門職。レース前の検査や故障馬の治療を担当' },
                { name: 'エージェント', desc: '騎手の騎乗依頼を仲介する代理人。調教師との交渉や騎乗スケジュール管理を行う' },
            ]}
        ];
        const colors = { '血統・配合用語': '#16a34a', '競走関連用語': '#0891b2', '施設・組織': '#dc2626', '馬体・健康用語': '#d97706', '人物・職業': '#7c3aed' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">競走馬と競馬に関する重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
