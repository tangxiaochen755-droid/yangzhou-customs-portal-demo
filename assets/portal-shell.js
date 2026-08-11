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
    .home-page .hero{background-image:url('assets/images/customs-knowledge-search-hero-blue-deepened-v3.jpg')!important}
    @media(max-width:1100px){.utility .wrap,.header>.wrap,.nav .wrap{width:calc(100% - 32px)!important}.nav a{padding-inline:20px!important}}
  `;
  document.head.appendChild(style);
  document.documentElement.dataset.portalShell = 'shared';

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

  const previousUtility = document.querySelector('.utility');
  if (previousUtility) previousUtility.remove();
  document.querySelector('.header').innerHTML = `<div class="utility"><div class="wrap"><span>2026年8月11日　星期二</span><span>内部资料　·　注意保密</span></div></div><div class="wrap"><div class="portal-logo"><img src="assets/images/customs-emblem-gold.png" alt="中国海关关徽"></div><div class="brand"><h1>扬州海关科室传承与交接工作平台</h1><p>CUSTOMS DEPARTMENT KNOWLEDGE PORTAL</p></div><span class="portal-user">${demoUser.name}　⌄</span></div>`;

  const context = `<a class="portal-context" id="department-context" href="module-preview.html?page=overview&dept=${demoUser.departmentId}">我的科室：${demoUser.departmentName}　→</a>`;
  document.querySelector('.nav').innerHTML = `<div class="wrap">${items.map(([id,label,href]) => `<a class="${id === active ? 'on' : ''}" href="${href}">${label}</a>`).join('')}${context}</div>`;
  document.querySelectorAll('.honor-cover img').forEach((img) => { img.src = img.getAttribute('src').replace(/\.png$/, '.jpg'); });

  const interactions = document.createElement('script');
  interactions.src = 'assets/prototype-interactions.js';
  document.body.appendChild(interactions);
})();
