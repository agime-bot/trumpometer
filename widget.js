/* Trump-O-Meter embeddable widget */
(function(){
  const BASE = 'https://agime-bot.github.io/trumpometer/';
  function moodColor(m){m=(m||'').toUpperCase();if(['AGGRESSIVE','TRIUMPHANT','ERRATIC'].includes(m))return'#e74c3c';if(['DEFENSIVE','DISTRACTED'].includes(m))return'#e67e22';if(['CALCULATED'].includes(m))return'#00d4ff';return'#7878a0';}
  function scoreColor(v){if(v>=8)return'#e74c3c';if(v>=6)return'#e67e22';if(v>=4)return'#f1c40f';return'#2ecc71';}
  fetch(BASE+'data/latest.json?t='+Date.now())
    .then(r=>r.json()).then(d=>{
      const el=document.getElementById('trumpometer-widget');
      if(!el)return;
      const score=d.data.composite,mood=d.data.overall_mood,mc=moodColor(mood);
      el.style.cssText='background:#141428;border:1px solid #1e1e3a;border-radius:12px;padding:1.2rem 1.6rem;text-align:center;width:220px;font-family:Segoe UI,system-ui,sans-serif;display:inline-block';
      el.innerHTML=`<div style="font-size:.7rem;color:#7878a0;text-transform:uppercase;letter-spacing:1px;margin-bottom:.4rem">⚡ Trump-O-Meter</div><div style="font-size:3.2rem;font-weight:900;line-height:1;color:${scoreColor(score)}">${score.toFixed(1)}</div><div style="font-size:.7rem;color:#7878a0;margin-top:.2rem">/ 10 today</div><div style="display:inline-block;margin-top:.6rem;padding:.2rem .7rem;border-radius:20px;font-size:.7rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:${mc}22;color:${mc};border:1px solid ${mc}55">${mood}</div><div style="font-size:.72rem;color:#7878a0;margin-top:.5rem">${d.data.primary_target}</div><div style="font-size:.6rem;color:#444466;margin-top:.8rem"><a href="${BASE}" target="_blank" style="color:#444466;text-decoration:none">trumpometer</a></div>`;
    }).catch(()=>{});
})();
