(() => {
  const style = document.createElement('style');
  style.id = 'portal-shell-style';
  style.textContent = `
    .utility{display:block!important;height:34px!important;background:#004a80!important;color:#dce9f2!important;font:12px/34px "PingFang SC","Microsoft YaHei",sans-serif!important}
    .utility .wrap,.header .wrap,.nav .wrap{width:min(1200px,calc(100% - 48px))!important;margin:auto!important}
    .utility .wrap{height:34px!important;display:flex!important;align-items:center!important;justify-content:space-between!important}
    .header{height:92px!important;background:#004a80!important;border:0!important;box-shadow:none!important;color:#fff!important}
    .header .wrap{height:92px!important;display:flex!important;align-items:center!important}
    .portal-logo{width:52px!important;height:52px!important;flex:0 0 52px!important;margin-right:16px!important;border:2px solid #fff!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:#004a80!important;box-shadow:none!important;color:#fff!important;font:23px/1 "STSong","Songti SC","SimSun",serif!important}
    .brand h1{width:450px!important;height:28px!important;margin:0 0 5px!important;color:#fff!important;font:700 28px/28px "STSong","Songti SC","SimSun",serif!important;letter-spacing:2px!important}
    .brand p{width:450px!important;height:12px!important;margin:0!important;color:#d6e4ee!important;font:11px/12px Georgia,serif!important;letter-spacing:2.4px!important}
    .portal-user{margin-left:auto!important;padding:0!important;border:0!important;background:#004a80!important;box-shadow:none!important;color:#e6f0f6!important;font-size:13px!important}
    .nav{height:52px!important;background:#0068b7!important;border:0!important;border-bottom:3px solid #004a80!important;box-shadow:none!important}
    .nav .wrap{height:49px!important;display:flex!important;align-items:stretch!important}
    .nav a{height:49px!important;min-height:49px!important;padding:0 31px!important;border-left:1px solid rgba(255,255,255,.25)!important;display:flex!important;align-items:center!important;justify-content:center!important;background:#0068b7!important;color:#fff!important;font-size:15px!important;font-weight:400!important;position:relative!important}
    .nav a:first-child{border-left:0!important}.nav a:hover,.nav a.on{background:#004a80!important;color:#fff!important;font-weight:600!important}.nav a.on:after{display:none!important}
    .nav .portal-context{margin-left:auto!important;border-left:1px solid rgba(255,255,255,.3)!important;color:#fff!important;white-space:nowrap!important}
    @media(max-width:1100px){.utility .wrap,.header .wrap,.nav .wrap{width:calc(100% - 32px)!important}.nav a{padding-inline:20px!important}}
  `;
  document.head.appendChild(style);

  const params = new URLSearchParams(location.search);
  const page = params.get('page') || 'home';
  const isModule = location.pathname.endsWith('module-preview.html');
  const demoUser = { name: '林建国', departmentId: 'business', departmentName: '业务一处' };
  const active = isModule ? (['kb', 'assistant'].includes(page) ? 'knowledge' : 'department') : (page === 'search' ? 'search' : 'home');
  const items = [
    ['home', '门户首页', 'portal-preview.html?page=home'],
    ['department', '科室空间', 'module-preview.html?page=overview'],
    ['knowledge', '知识库', 'module-preview.html?page=kb'],
    ['search', '全局搜索', 'portal-preview.html?page=search'],
  ];

  let utility = document.querySelector('.utility');
  if (!utility) {
    utility = document.createElement('div');
    utility.className = 'utility';
    document.body.insertBefore(utility, document.body.firstChild);
  }
  utility.innerHTML = '<div class="wrap"><span>2026年8月11日　星期二</span><span>内部资料　·　注意保密</span></div>';

  document.querySelector('.header').innerHTML = `<div class="wrap"><div class="portal-logo">关</div><div class="brand"><h1>扬州海关科室传承与交接工作平台</h1><p>CUSTOMS DEPARTMENT KNOWLEDGE PORTAL</p></div><span class="portal-user">${demoUser.name}　⌄</span></div>`;

  const context = `<a class="portal-context" id="department-context" href="module-preview.html?page=overview&dept=${demoUser.departmentId}">我的科室：${demoUser.departmentName}　→</a>`;
  document.querySelector('.nav').innerHTML = `<div class="wrap">${items.map(([id,label,href]) => `<a class="${id === active ? 'on' : ''}" href="${href}">${label}</a>`).join('')}${context}</div>`;
})();
