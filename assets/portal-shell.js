(() => {
  const style = document.createElement('style');
  style.id = 'portal-shell-style';
  style.textContent = `
    .utility{display:block!important;height:34px!important;background:#004a80!important;color:#dce9f2!important;font:12px/34px "PingFang SC","Microsoft YaHei",sans-serif!important}
    .utility .wrap,.header .wrap,.nav .wrap{width:min(1200px,calc(100% - 48px))!important;margin:auto!important}
    .utility .wrap{height:34px!important;display:flex!important;align-items:center!important;justify-content:space-between!important}
    body .header.header{height:92px!important;position:relative!important;isolation:isolate!important;overflow:hidden!important;background-color:#004a80!important;background-image:url('assets/images/yangzhou-customs-header-simulated-v1.jpg')!important;background-position:center 48%!important;background-size:cover!important;background-repeat:no-repeat!important;border:0!important;box-shadow:none!important;color:#fff!important}
    .header:before{content:""!important;position:absolute!important;inset:0!important;z-index:-1!important;background:rgba(0,54,96,.72)!important}
    .header:after{content:""!important;position:absolute!important;inset:0!important;z-index:-1!important;background:linear-gradient(90deg,rgba(0,38,70,.38) 0%,rgba(0,74,128,.04) 58%,rgba(0,38,70,.18) 100%)!important;pointer-events:none!important}
    .header .wrap{height:92px!important;position:relative!important;z-index:1!important;display:flex!important;align-items:center!important}
    .portal-logo{width:52px!important;height:52px!important;flex:0 0 52px!important;margin-right:16px!important;border:2px solid rgba(255,255,255,.94)!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:rgba(0,48,86,.38)!important;box-shadow:none!important;color:#fff!important;font:23px/1 "STSong","Songti SC","SimSun",serif!important}
    .brand h1{width:450px!important;height:28px!important;margin:0 0 5px!important;color:#fff!important;font:700 28px/28px "STSong","Songti SC","SimSun",serif!important;letter-spacing:2px!important}
    .brand p{width:450px!important;height:12px!important;margin:0!important;color:#d6e4ee!important;font:11px/12px Georgia,serif!important;letter-spacing:2.4px!important}
    .portal-user{margin-left:auto!important;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#e6f0f6!important;font-size:13px!important}
    .nav{height:52px!important;background:#0068b7!important;border:0!important;border-bottom:3px solid #004a80!important;box-shadow:none!important}
    .nav .wrap{height:49px!important;display:flex!important;align-items:stretch!important}
    .nav a{height:49px!important;min-height:49px!important;padding:0 31px!important;border-left:1px solid rgba(255,255,255,.25)!important;display:flex!important;align-items:center!important;justify-content:center!important;background:#0068b7!important;color:#fff!important;font-size:15px!important;font-weight:400!important;position:relative!important}
    .nav a:first-child{border-left:0!important}.nav a:hover,.nav a.on{background:#004a80!important;color:#fff!important;font-weight:600!important}.nav a.on:after{display:none!important}
    .nav .portal-context{margin-left:auto!important;border-left:1px solid rgba(255,255,255,.3)!important;color:#fff!important;white-space:nowrap!important}
    .honor{background:#fff!important;border:1px solid #cfd8df!important;box-shadow:none!important}
    .honor:before{color:rgba(0,104,183,.06)!important}
    .honor-rule{padding:13px 16px!important;border:1px solid #c5d3dd!important;border-left:4px solid #0068b7!important;background:#f7fafc!important;color:#526776!important}
    .honor-rule b{color:#004a80!important}
    .honor-scan{border-color:#cfd8df!important;background:#fff!important;transition:border-color 160ms ease,box-shadow 160ms ease!important}
    .honor-cover{background:#f2f5f7!important}
    .honor-scan figcaption{border-top-color:#dce3e8!important}
    .honor-scan figcaption span{color:#667887!important}
    .honor-scan:hover{border-color:#0068b7!important;box-shadow:inset 0 3px 0 #0068b7!important}
    .honor-scan:focus-visible{outline:3px solid rgba(0,104,183,.22)!important;outline-offset:2px!important}
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
