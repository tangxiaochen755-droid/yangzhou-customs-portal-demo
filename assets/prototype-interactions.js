(() => {
  const paths = {
    folder: 'M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2ZM4 7v12h16V7H4Z',
    team: 'M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-6 0v6H7v-6a5 5 0 0 1 5-5Zm-6.5 3c.279 0 .55.033.81.094A6.96 6.96 0 0 0 6 16v6H2v-4.5a3.5 3.5 0 0 1 3.5-3.5Zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-4v-6c0-.665-.108-1.306-.309-1.904.259-.063.53-.096.809-.096ZM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
    file: 'M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3Zm-3-2V4H4v15a1 1 0 0 0 1 1h11ZM6 7h8v2H6V7Zm0 4h8v2H6v-2Zm0 4h5v2H6v-2Z',
    exchange: 'M16 3l5 5-5 5v-4H4V7h12V3ZM8 11v4h12v2H8v4l-5-5 5-5Z',
    search: 'M11 2a9 9 0 1 1-5.657 16l-4.242 4.243-1.414-1.414 4.242-4.243A9 9 0 0 1 11 2Zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z',
    eye: 'M12 3c5.392 0 9.878 3.88 10.819 9-.941 5.12-5.427 9-10.819 9S2.122 17.12 1.181 12C2.122 6.88 6.608 3 12 3Zm0 2c-4.236 0-7.86 2.948-8.777 7 .917 4.052 4.541 7 8.777 7s7.86-2.948 8.777-7C19.86 7.948 16.236 5 12 5Zm0 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
    download: 'M13 10h5l-6 6-6-6h5V3h2v7ZM4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7Z',
    send: 'm3.4 20.4 17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a1 1 0 0 0-1.37 1.16L4.2 11H13v2H4.2l-2.17 6.24A1 1 0 0 0 3.4 20.4Z'
  };
  const icon = (name, label = '') => `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="${label ? 'false' : 'true'}"${label ? ` aria-label="${label}"` : ''}><path d="${paths[name]}"></path></svg>`;

  document.querySelectorAll('.folder .icon').forEach((node) => {
    const title = node.parentElement?.querySelector('b')?.textContent || '';
    const name = title.includes('人员') ? 'team' : title.includes('业务') ? 'file' : title.includes('交接') ? 'exchange' : 'folder';
    node.innerHTML = icon(name);
  });
  document.querySelectorAll('.honor-cover img').forEach((img) => {
    img.loading = 'lazy';
    img.decoding = 'async';
    img.fetchPriority = 'low';
  });
  document.querySelectorAll('.field.search').forEach((field) => {
    const placeholder = field.textContent.replace(/[⌕　]/g, '').trim();
    field.innerHTML = `${icon('search')}<input type="search" aria-label="${placeholder}" placeholder="${placeholder}">`;
  });

  const ensureLayer = () => {
    if (document.getElementById('prototype-layer')) return;
    document.body.insertAdjacentHTML('beforeend', '<div id="prototype-layer"><div class="prototype-modal" role="dialog" aria-modal="true" aria-labelledby="prototype-modal-title"><button class="prototype-close" aria-label="关闭">×</button><div class="prototype-modal-icon"></div><h3 id="prototype-modal-title"></h3><div class="prototype-modal-body"></div><div class="prototype-modal-actions"><button class="btn prototype-close-action">关闭</button><button class="btn primary prototype-download">下载示例文件</button></div></div></div><div id="prototype-toast" role="status" aria-live="polite"></div>');
    document.querySelectorAll('.prototype-close,.prototype-close-action').forEach((el) => el.addEventListener('click', closeModal));
    document.getElementById('prototype-layer').addEventListener('click', (e) => { if (e.target.id === 'prototype-layer') closeModal(); });
    document.querySelector('.prototype-download').addEventListener('click', () => toast('文件已加入下载列表'));
  };
  const toast = (message) => {
    ensureLayer();
    const el = document.getElementById('prototype-toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
  };
  const openModal = (title, body, image) => {
    ensureLayer();
    document.getElementById('prototype-modal-title').textContent = title;
    document.querySelector('.prototype-modal-icon').innerHTML = image ? `<img src="${image}" alt="${title}">` : icon('eye');
    document.querySelector('.prototype-modal-body').innerHTML = body;
    document.getElementById('prototype-layer').classList.add('open');
    document.querySelector('.prototype-close').focus();
  };
  function closeModal() { document.getElementById('prototype-layer')?.classList.remove('open'); }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('.honor-scan').forEach((card) => {
    const replacement = card.cloneNode(true);
    card.replaceWith(replacement);
    replacement.addEventListener('click', () => openModal(replacement.querySelector('figcaption').childNodes[0].textContent.trim(), '<p>荣誉原件按原始比例展示。</p><p>归档科室：业务一处　·　资料状态：已归档</p>', replacement.querySelector('img').src));
    replacement.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); replacement.click(); } });
  });

  const runTableQuery = (button) => {
    const toolbar = button.closest('.toolbar');
    const query = toolbar?.querySelector('input[type="search"]')?.value.trim().toLowerCase() || '';
    const rows = toolbar?.nextElementSibling?.querySelectorAll('table tr') || [];
    let shown = 0;
    rows.forEach((row, index) => {
      if (!index) return;
      const match = !query || row.textContent.toLowerCase().includes(query);
      row.hidden = !match;
      if (match) shown++;
    });
    toast(query ? `已找到 ${shown} 条匹配资料` : '已恢复全部资料');
  };

  document.addEventListener('click', (e) => {
    const action = e.target.closest('.a');
    if (action) {
      if (e.target.closest('a')) return;
      const row = action.closest('tr');
      const title = row?.querySelector('td')?.textContent.trim() || '资料详情';
      const label = e.target.textContent;
      if (label.includes('下载') && !label.includes('预览')) toast(`正在准备下载：${title}`);
      else openModal(title, `<p>当前展示该资料的前台只读预览。</p><p>来源：扬州海关业务一处　·　访问范围：科室内部</p><p>最近更新：2026年8月6日　·　当前版本：V3.2</p>`);
      return;
    }
    const button = e.target.closest('button');
    if (button?.textContent.trim() === '查询') { runTableQuery(button); return; }
    if (button && /下载|导出/.test(button.textContent)) { toast(`${button.textContent.trim()}任务已生成`); return; }
    const kbNode = e.target.closest('.tree .node');
    if (kbNode) {
      kbNode.closest('.tree').querySelectorAll('.node').forEach((node) => node.classList.remove('sel'));
      kbNode.classList.add('sel');
      toast(`已切换知识分类：${kbNode.textContent.replace(/[▾▸\d,]/g, '').trim()}`);
      return;
    }
    const filter = e.target.closest('.filter-item');
    if (filter) {
      filter.parentElement.querySelectorAll('.filter-item').forEach((item) => item.classList.remove('active'));
      filter.classList.add('active');
      toast(`已应用筛选：${filter.textContent.trim()}`);
      return;
    }
    const result = e.target.closest('.result');
    if (result) { openModal(result.querySelector('h4')?.textContent || '搜索结果', `<p>${result.querySelector('p')?.textContent || ''}</p><p>${result.querySelector('.meta')?.textContent || ''}</p>`); return; }
    const hot = e.target.closest('.hot span');
    if (hot) {
      const input = hot.closest('.hero')?.querySelector('input');
      if (input) input.value = hot.textContent.trim();
      location.href = `portal-preview.html?page=search&q=${encodeURIComponent(hot.textContent.trim())}`;
      return;
    }
  });

  document.querySelectorAll('.toolbar input[type="search"]').forEach((input) => input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') input.closest('.toolbar')?.querySelector('button')?.click();
  }));

  const portalSearch = document.querySelector('.hero .search input, .search-page .search input');
  const query = new URLSearchParams(location.search).get('q');
  if (portalSearch && query) {
    portalSearch.value = query;
    const title = document.querySelector('.results-head b');
    if (title) title.textContent = `“${query}”相关结果`;
  }
  document.querySelectorAll('.search button').forEach((button) => button.addEventListener('click', () => {
    const input = button.closest('.search')?.querySelector('input');
    if (location.pathname.endsWith('portal-preview.html') && new URLSearchParams(location.search).get('page') === 'search') {
      const title = document.querySelector('.results-head b');
      if (title && input?.value.trim()) title.textContent = `“${input.value.trim()}”相关结果`;
      toast('搜索结果已更新');
    }
  }));

  const quickRoutes = {
    '关务小助手': 'module-preview.html?page=assistant', '知识库': 'module-preview.html?page=kb',
    '人员名录': 'module-preview.html?page=people', '表单下载': 'module-preview.html?page=internal',
    '部门职能': 'module-preview.html?page=duties', '人员与分工': 'module-preview.html?page=people',
    '业务知识': 'module-preview.html?page=kb', '科室历史': 'module-preview.html?page=history',
    '荣誉墙': 'module-preview.html?page=history', '科室特色': 'module-preview.html?page=overview#features',
    '督办协同台账': 'module-preview.html?page=work&dept=office', '办文办会规范': 'module-preview.html?page=business&dept=office',
    '机关服务指南': 'module-preview.html?page=internal&dept=office', '海关文化记忆': 'module-preview.html?page=history&dept=office'
  };
  document.querySelectorAll('.quick,.org-link').forEach((card) => {
    const route = quickRoutes[card.querySelector('b')?.textContent.trim()];
    if (!route) return;
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.addEventListener('click', () => { location.href = route; });
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') card.click(); });
  });

  document.querySelectorAll('.tree-label.node').forEach((node) => node.addEventListener('click', (e) => {
    if (node.matches('a')) return;
    e.preventDefault();
    node.closest('.org-tree').querySelectorAll('.tree-label.node').forEach((item) => item.classList.remove('active'));
    node.classList.add('active');
    const name = node.childNodes[0].textContent.replace(/[○●]/g, '').trim();
    const detail = document.querySelector('.org-detail h4');
    if (detail) detail.textContent = name;
    toast(`已定位科室：${name}`);
  }));

  document.querySelectorAll('.list li').forEach((item) => {
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.addEventListener('click', () => openModal(item.textContent.replace(/\d{2}-\d{2}$/, '').trim(), '<p>当前展示已发布资料或已归档记录的只读摘要。</p><p>所属科室：业务一处　·　更新时间：2026年8月</p>'));
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter') item.click(); });
  });

  const peopleDetails = {
    '赵明远': ['处长', '加工贸易、保税监管、综合协调', '0514-8909 2018', '业务专家、监交人'],
    '王海峰': ['一级主办', '加工贸易备案、变更与核销', '0514-8909 2021', '业务骨干、复审资质'],
    '陈晓倩': ['二级主办', '手册核销、数据复核', '0514-8909 2023', '复审资质、英语专长'],
    '李志刚': ['三级主办', '保税维修、外发加工', '0514-8909 2025', '查验专家、业务骨干'],
    '孙文静': ['四级主办', '综合文字、档案与培训', '0514-8909 2028', '公文写作、综合管理'],
    '刘洋': ['一级行政执法员', '数据分析、业务台账', '0514-8909 2031', '数据分析、日语专长']
  };
  document.querySelectorAll('.person').forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    const name = card.querySelector('h4,b')?.textContent.trim();
    const details = peopleDetails[name] || ['科室成员', '科室综合业务', '0514-8909 2000', '协同办理'];
    const show = () => openModal(name || '人员名片', `<table class="table"><tr><th>职务</th><td>${details[0]}</td></tr><tr><th>主要职责</th><td>${details[1]}</td></tr><tr><th>办公电话</th><td>${details[2]}</td></tr><tr><th>专业标签</th><td>${details[3]}</td></tr></table><p>近期参与：加工贸易业务知识更新、岗位交接资料整理。</p>`);
    card.addEventListener('click', show);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
  });

  document.querySelectorAll('.folders .folder:not(a)').forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.addEventListener('click', () => {
      card.parentElement.querySelectorAll('.folder').forEach((item) => item.classList.remove('selected'));
      card.classList.add('selected');
      const category = card.querySelector('b')?.textContent.trim() || '全部资料';
      const rows = document.querySelectorAll('.toolbar + .card table tr');
      let count = 0;
      rows.forEach((row, index) => {
        if (!index) return;
        const match = row.textContent.includes(category.replace(/资料库$/, '')) || category.includes('总结') && row.textContent.includes('总结') || category.includes('表单') && row.textContent.includes('表单');
        row.hidden = !match;
        if (match) count++;
      });
      toast(count ? `已筛选“${category}”，共 ${count} 份资料` : `已进入“${category}”目录`);
    });
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') card.click(); });
  });

  const generateHandover = document.getElementById('generate-handover');
  if (generateHandover) generateHandover.addEventListener('click', () => {
    const selected = document.querySelectorAll('.handover-type input:checked').length;
    if (!selected) return toast('请至少选择一类交接数据');
    toast(`已按 ${selected} 类数据生成《交接单》初稿`);
    setTimeout(() => { location.href = 'module-preview.html?page=handover&view=draft'; }, 450);
  });

  const uploadButton = document.getElementById('handover-upload-button');
  const fileInput = document.getElementById('handover-file-input');
  if (uploadButton && fileInput) {
    uploadButton.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      const list = document.querySelector('.file-list');
      [...fileInput.files].forEach((file) => list?.insertAdjacentHTML('beforeend', `<tr><td>${file.name.replace(/[<>&]/g, '')}</td><td>${(file.size / 1024 / 1024).toFixed(1)}MB</td><td class="a">预览　删除</td></tr>`));
      if (fileInput.files.length) toast(`已加入 ${fileInput.files.length} 个交接附件`);
    });
  }

  document.getElementById('handover-save')?.addEventListener('click', () => toast('交接单草稿已保存'));
  document.getElementById('handover-submit')?.addEventListener('click', () => {
    toast('交接单已提交接收人确认');
    setTimeout(() => { location.href = 'module-preview.html?page=handover&view=receive'; }, 500);
  });
  document.getElementById('handover-return')?.addEventListener('click', () => {
    const reason = window.prompt('请输入退回原因（必填）', '请补充未办结案件的下一办理期限');
    if (reason?.trim()) toast('已退回移交人填写');
  });
  document.getElementById('handover-receive')?.addEventListener('click', () => {
    toast('已确认接收，交接单进入后台监交审核');
    setTimeout(() => { location.href = 'module-preview.html?page=handover&view=pending'; }, 500);
  });

  const moreRoutes = {
    '更多 →': 'module-preview.html?page=kb', '查看完整介绍 →': 'module-preview.html?page=duties',
    '近期动态': 'module-preview.html?page=overview', '全部人员 →': 'module-preview.html?page=people',
    '完整时间轴 →': 'module-preview.html?page=history', '查看全部 →': 'module-preview.html?page=work'
  };
  document.querySelectorAll('.more').forEach((item) => {
    if (item.matches('a') || item.closest('.results-head')) return;
    item.tabIndex = 0;
    item.setAttribute('role', 'link');
    const text = item.textContent.trim();
    const route = moreRoutes[text] || (item.closest('.panel-h')?.textContent.includes('近期动态') ? 'module-preview.html?page=overview' : '');
    if (!route) return;
    item.addEventListener('click', () => { location.href = route; });
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter') item.click(); });
  });

  document.querySelectorAll('.dept-card.feature').forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.addEventListener('click', () => openModal(card.querySelector('h4')?.textContent || '科室专题', `<p>${card.querySelector('p')?.textContent || ''}</p><p>专题资料：制度文件 6 份、业务案例 12 份、学习材料 8 份。</p>`));
  });

  document.querySelectorAll('.new').forEach((button) => button.addEventListener('click', () => {
    document.querySelector('.msgs')?.replaceChildren();
    document.querySelector('.chat-head b').textContent = '新对话';
    toast('已新建对话');
  }));
  document.querySelectorAll('.hist').forEach((item) => item.addEventListener('click', () => {
    item.parentElement.querySelectorAll('.hist').forEach((node) => node.classList.remove('sel'));
    item.classList.add('sel');
    document.querySelector('.chat-head b').textContent = item.textContent.trim();
    toast('已切换历史对话');
  }));
  const composer = document.querySelector('.composer');
  if (composer) {
    const prompt = composer.childNodes[0].textContent.trim();
    composer.childNodes[0].remove();
    composer.insertAdjacentHTML('afterbegin', `<input aria-label="继续提问" placeholder="${prompt}">`);
    composer.querySelector('.send').innerHTML = icon('send', '发送');
    const send = () => {
      const input = composer.querySelector('input');
      const value = input.value.trim();
      if (!value) return toast('请输入问题后再发送');
      document.querySelector('.msgs')?.insertAdjacentHTML('beforeend', `<div class="msg user"><div class="face">我</div><div class="bubble">${value.replace(/[<>&]/g, '')}</div></div><div class="msg"><div class="face">助手</div><div class="bubble">已根据业务一处授权知识库检索到相关资料。当前为交互原型，正式答案将在后续接入知识服务后生成。</div></div>`);
      input.value = '';
      document.querySelector('.msgs')?.scrollTo({ top: 99999, behavior: 'smooth' });
    };
    composer.querySelector('.send').addEventListener('click', send);
    composer.querySelector('input').addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
  }
  document.documentElement.dataset.prototypeReady = 'true';
})();
