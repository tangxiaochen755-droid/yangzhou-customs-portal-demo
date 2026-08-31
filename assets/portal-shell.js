(() => {
  const style = document.createElement('style');
  style.id = 'portal-shell-style';
  style.textContent = `
    .utility{display:block!important;position:absolute!important;inset:0 0 auto!important;z-index:2!important;height:34px!important;background:transparent!important;border-bottom:1px solid rgba(255,255,255,.16)!important;color:#dce9f2!important;font:12px/34px "PingFang SC","Microsoft YaHei",sans-serif!important}
    .utility .wrap,.header>.wrap,.nav .wrap{width:min(1200px,calc(100% - 48px))!important;margin:auto!important}
    .utility .wrap{height:34px!important;display:flex!important;align-items:center!important;justify-content:space-between!important}
    body .header.header{height:126px!important;position:relative!important;isolation:isolate!important;overflow:hidden!important;background-color:#004a80!important;background-image:url('assets/images/yangzhou-customs-header-simulated-v1.jpg')!important;background-position:center 48%!important;background-size:cover!important;background-repeat:no-repeat!important;border:0!important;box-shadow:none!important;color:#fff!important}
    .header:before{content:""!important;position:absolute!important;inset:0!important;z-index:-1!important;background:rgba(0,54,96,.72)!important}
    .header:after{content:""!important;position:absolute!important;inset:0!important;z-index:-1!important;background:linear-gradient(90deg,rgba(0,38,70,.38) 0%,rgba(0,74,128,.04) 58%,rgba(0,38,70,.18) 100%)!important;pointer-events:none!important}
    .header>.wrap{height:92px!important;margin-top:34px!important;position:relative!important;z-index:1!important;display:flex!important;align-items:center!important}
    .portal-logo{width:60px!important;height:60px!important;flex:0 0 60px!important;margin-right:18px!important;border:0!important;border-radius:0!important;display:grid!important;place-items:center!important;background:transparent!important;box-shadow:none!important;color:#fff!important;font:23px/1 "STSong","Songti SC","SimSun",serif!important}
    .portal-logo img{display:block!important;width:60px!important;height:60px!important;object-fit:contain!important;filter:drop-shadow(0 1px 1px rgba(0,25,44,.35))!important}
    .brand h1{width:450px!important;height:28px!important;margin:0 0 5px!important;color:#fff!important;font:700 28px/28px "STSong","Songti SC","SimSun",serif!important;letter-spacing:2px!important}
    .brand p{width:450px!important;height:12px!important;margin:0!important;color:#d6e4ee!important;font:11px/12px Georgia,serif!important;letter-spacing:2.4px!important}
    body main :is(h1,h2,h3,h4,h5,h6),body main .panel-h,body main .ch,.prototype-modal h3{font-family:"PingFang SC","Microsoft YaHei",Arial,sans-serif!important}
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
    .timeline{padding:0 24px 0 66px!important;position:relative!important}
    .timeline:before{left:34px!important;top:30px!important;bottom:30px!important;width:2px!important;background:#a9bdcc!important}
    .timeline .event{min-height:124px!important;margin:0!important;padding:18px 0 22px!important;border-bottom:1px solid #dce3e8!important;position:relative!important}
    .timeline .event:last-child{border-bottom:0!important}
    .timeline .event:before{left:-41px!important;top:21px!important;width:18px!important;height:18px!important;border:5px solid #eaf4fb!important;background:#0068b7!important;border-radius:50%!important}
    .ui-icon{width:22px;height:22px;display:block;fill:currentColor}
    .folder .icon{display:grid!important;place-items:center!important;color:#0068b7!important}
    .folder .icon .ui-icon{width:24px;height:24px}
    .field.search{padding:0 12px!important;display:flex!important;align-items:center!important;gap:8px!important}
    .field.search input{width:100%;border:0;outline:0;background:transparent;color:#253b4c;font:inherit}
    .filter-item,.result,.tree .node,.hist,.new,.a{cursor:pointer}
    .filter-item.active{color:#004a80!important;font-weight:600!important;background:#eaf4fb!important;margin-inline:-10px;padding-inline:10px!important}
    #prototype-layer{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(0,33,58,.58)}
    #prototype-layer.open{display:flex}
    .prototype-modal{width:min(720px,92vw);max-height:86vh;overflow:auto;position:relative;padding:28px;background:#fff;border-top:4px solid #0068b7;box-shadow:0 22px 60px rgba(0,33,58,.28);color:#263b4b}
    .prototype-close{position:absolute;right:14px;top:10px;width:34px;height:34px;border:0;background:transparent;color:#526776;font-size:26px;cursor:pointer}
    .prototype-modal-icon{color:#0068b7}.prototype-modal-icon>.ui-icon{width:32px;height:32px}.prototype-modal-icon img{display:block;max-width:100%;max-height:58vh;margin:0 auto 18px;object-fit:contain}
    .prototype-modal h3{margin:12px 0;color:#004a80;font-family:"STSong","Songti SC","SimSun",serif;font-size:22px}
    .prototype-modal-body{line-height:1.8;color:#526776}.prototype-modal-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:22px;padding-top:16px;border-top:1px solid #dce3e8}
    #prototype-toast{position:fixed;left:50%;bottom:38px;z-index:10000;transform:translate(-50%,18px);padding:10px 18px;background:#003f70;color:#fff;opacity:0;pointer-events:none;transition:160ms ease;box-shadow:0 8px 24px rgba(0,33,58,.24)}
    #prototype-toast.show{opacity:1;transform:translate(-50%,0)}
    .quick[role="link"]{cursor:pointer}.composer input{flex:1;border:0;outline:0;background:transparent;font:inherit;color:#263b4b}.send .ui-icon{width:18px;height:18px;margin:auto}
    .person[role="button"],.folder[role="button"],.dept-card[role="button"],.more[role="link"]{cursor:pointer}.folder.selected{border-color:#0068b7!important;box-shadow:inset 0 3px 0 #0068b7!important;background:#f7fbfe!important}
    :is(.person,.folder,.dept-card,.quick,.org-link,.more)[tabindex]:focus-visible{outline:3px solid rgba(0,104,183,.24)!important;outline-offset:2px!important}
    .home-page .hero{background-image:url('assets/images/customs-knowledge-search-hero-yangzhou-building-v4.jpg')!important}
    .department-home-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:18px}
    .department-home-action{min-height:118px;padding:22px 24px;border:1px solid #cfdbe4;background:#fff;display:flex;align-items:center;gap:16px;transition:transform 160ms ease,border-color 160ms ease,box-shadow 160ms ease}
    .department-home-action:hover{transform:translateY(-2px);border-color:#0068b7;box-shadow:0 8px 22px rgba(0,74,128,.1)}
    .department-home-action .action-icon{width:46px;height:46px;flex:0 0 46px;display:grid;place-items:center;background:#eaf4fb;color:#0068b7;font-size:23px;font-weight:700}
    .department-home-action b{display:block;margin-bottom:7px;color:#004a80;font-size:17px}.department-home-action span{color:#667887;font-size:12px;line-height:1.6}
    .department-content-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.department-content-grid .quick{height:88px;padding:15px}
    .permission-tag{display:inline-block;margin-left:8px;padding:2px 6px;background:#eaf4fb;color:#005b9d;font-size:11px}
    .handover-no-access{color:#788895!important;cursor:pointer}.handover-no-access:hover{color:#004a80!important}
    .department-space-tabs{display:flex;align-items:stretch;margin:0 0 18px;border-top:1px solid #b9cad7;border-bottom:1px solid #d4dee6;background:#fff;overflow-x:auto}
    .department-space-tab{min-width:max-content;height:58px;padding:0 20px;border:0;border-right:1px solid #d8e1e7;background:#fff;color:#536978;font-size:15px;font-weight:600;cursor:pointer;position:relative}
    .department-space-tab:hover{color:#0068b7;background:#f7fafc}.department-space-tab.active{color:#004a80;background:#fff}
    .department-space-tab.active:after{content:"";position:absolute;left:20px;right:20px;bottom:0;height:4px;background:#0068b7}
    .department-space-tab:focus-visible{outline:3px solid rgba(0,104,183,.22);outline-offset:-3px}
    .department-space-panel[hidden]{display:none}.department-space-panel{min-height:330px;padding:8px 0 22px}
    .department-section-title{margin:0 0 16px;color:#004a80;font-size:21px}.department-copy{color:#344b5d;font-size:15px;line-height:2;text-align:justify}
    .department-overview-layout{display:grid;grid-template-columns:1.05fr 1.4fr;gap:24px}.department-overview-photo{min-height:260px;display:grid;place-items:center;background:#eaf4fb;border:1px solid #ccdbe6;color:#0068b7;font-size:28px;font-weight:700}
    .department-leader{display:flex;justify-content:center;margin:8px 0 28px}.department-leader .person{width:220px;display:block;text-align:center}.department-leader .photo{width:86px;height:112px;margin:0 auto 12px;font-size:28px}
    .department-people-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.department-people-grid .person{display:block;text-align:center}.department-people-grid .photo{width:72px;height:92px;margin:0 auto 10px}
    .portal-global-search{width:340px;height:34px;margin:auto 0 auto auto;display:flex;align-self:center;background:#fff;border:1px solid rgba(255,255,255,.5)}
    .portal-global-search input{min-width:0;flex:1;padding:0 11px;border:0;outline:0;background:#fff;color:#263d4d;font:13px "PingFang SC","Microsoft YaHei",sans-serif}
    .portal-global-search input::placeholder{color:#85939d}.portal-global-search button{width:42px;border:0;border-left:1px solid #c3d0d9;background:#eaf4fb;color:#004a80;cursor:pointer;font-size:18px}
    .portal-global-search:focus-within{outline:3px solid rgba(255,255,255,.35);outline-offset:2px}
    .department-version-switch{margin-left:auto;display:flex;align-items:center;gap:0;border:1px solid #9db3c3;background:#fff}
    .department-version-switch a{height:30px;padding:0 12px;display:flex;align-items:center;border-left:1px solid #c8d5de;color:#5e7484;font-size:12px}
    .department-version-switch a:first-child{border-left:0}.department-version-switch a:hover{background:#eaf4fb;color:#004a80}.department-version-switch a.active{background:#0068b7;color:#fff;font-weight:600}
    @media(max-width:1100px){.utility .wrap,.header>.wrap,.nav .wrap{width:calc(100% - 32px)!important}.nav a{padding-inline:20px!important}}
  `;
  document.head.appendChild(style);
  document.documentElement.dataset.portalShell = 'shared';

  const params = new URLSearchParams(location.search);
  const page = params.get('page') || 'home';
  const isModule = location.pathname.endsWith('module-preview.html');
  const isDepartmentPortal = location.pathname.endsWith('department-portal-highfi.html');
  const isDepartmentSpace = isDepartmentPortal || (isModule && page === 'overview');
  const isHr = params.get('role') === 'hr';
  const demoUser = isHr
    ? { name: '周敏', departmentId: 'hr', departmentName: '人事科', canViewOrganization: true }
    : { name: '林建国', departmentId: 'business', departmentName: '业务一处', canViewOrganization: false };
  const active = page === 'handover' ? 'handover' : page === 'assistant' ? 'assistant' : (!isModule && !isDepartmentPortal && page === 'home' ? 'organization' : 'department');
  const items = [
    ['department', '科室空间', `module-preview.html?page=overview&dept=${demoUser.departmentId}${isHr ? '&role=hr' : ''}`],
    ['handover', '工作交接', `module-preview.html?page=handover&dept=${demoUser.departmentId}${isHr ? '&role=hr' : ''}`],
    ['assistant', 'AI问答', `module-preview.html?page=assistant&dept=${demoUser.departmentId}${isHr ? '&role=hr' : ''}`],
  ];
  if (demoUser.canViewOrganization) items.push(['organization', '组织架构', 'portal-preview.html?page=home&role=hr']);

  const previousUtility = document.querySelector('.utility');
  if (previousUtility) previousUtility.remove();
  document.querySelector('.header').innerHTML = `<div class="utility"><div class="wrap"><span>2026年8月11日　星期二</span><span>内部资料　·　注意保密</span></div></div><div class="wrap"><div class="portal-logo"><img src="assets/images/customs-emblem-gold.png" alt="中国海关关徽"></div><div class="brand"><h1>扬州海关科室传承与交接工作平台</h1><p>CUSTOMS DEPARTMENT KNOWLEDGE PORTAL</p></div><span class="portal-user">${demoUser.name}　⌄</span></div>`;

  const context = isDepartmentSpace
    ? `<form class="portal-global-search" id="portal-global-search" role="search"><input aria-label="全局搜索" placeholder="全局搜索人员、文档、知识或交接记录"><button type="submit" aria-label="搜索">⌕</button></form>`
    : `<a class="portal-context" id="department-context" href="module-preview.html?page=overview&dept=${demoUser.departmentId}${isHr ? '&role=hr' : ''}">所属科室：${demoUser.departmentName}</a>`;
  document.querySelector('.nav').innerHTML = `<div class="wrap">${items.map(([id,label,href]) => `<a class="${id === active ? 'on' : ''}" href="${href}">${label}</a>`).join('')}${context}</div>`;
  if (isDepartmentSpace) {
    const crumbWrap = document.querySelector('.crumb .wrap');
    if (crumbWrap) {
      crumbWrap.insertAdjacentHTML('beforeend', `<nav class="department-version-switch" aria-label="科室空间版本切换"><a class="${isDepartmentPortal ? '' : 'active'}" href="module-preview.html?page=overview&dept=${demoUser.departmentId}${isHr ? '&role=hr' : ''}">栏目切换版</a><a class="${isDepartmentPortal ? 'active' : ''}" href="department-portal-highfi.html?dept=${demoUser.departmentId}${isHr ? '&role=hr' : ''}">门户版</a></nav>`);
    }
    const searchForm = document.getElementById('portal-global-search');
    searchForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = searchForm.querySelector('input').value.trim();
      if (typeof window.prototypeToast === 'function') window.prototypeToast(value ? `正在全局搜索“${value}”` : '请输入搜索关键词');
    });
  }
  document.querySelectorAll('.honor-cover img').forEach((img) => { img.src = img.getAttribute('src').replace(/\.png$/, '.jpg'); });

  const interactions = document.createElement('script');
  interactions.src = 'assets/prototype-interactions.js';
  document.body.appendChild(interactions);
})();
