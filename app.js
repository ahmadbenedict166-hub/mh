
/* 核心逻辑与数据保持 100% 原样兼容 */
const INITIAL_REGEXES=[{"id":"scheme_history_rubbing","scriptName":"残篇金石 · 墨拓断简","findRegex":"/<Diary>([\\s\\S]*?)<\\/Diary>/gims","replaceString":"```html\n<style>\n.r-box { background: #FAF6EE; color: #261F1D; border: 3px double currentColor; padding: 18px; max-width: 360px; margin: 10px auto; font-family: serif; }\n.r-tag { font-size: 10px; border: 1px solid currentColor; padding: 1px 6px; font-weight: bold; display: inline-block; margin-bottom: 8px; }\n</style>\n<div class=\"r-box\">\n  <div class=\"r-tag\">野史断篇 · 卷七</div>\n  <div style=\"font-size: 13px; line-height: 1.85; text-align: justify; white-space: pre-wrap;\">$1</div>\n</div>\n```","trimStrings":[],"placement":[2],"disabled":false,"markdownOnly":false,"promptOnly":false,"runOnEdit":true,"substituteRegex":0,"minDepth":null,"maxDepth":null,"category":"history","tag":"双弦回纹 · 典籍断简","sampleText":"<details><summary>📜 胤史余烬</summary>\n<Diary>\n景泰三十八年·除夕。\n是夜大雪，偏廊短剑暗换，无人察觉东宫已起杀心。\n</Diary>\n</details>"},{"id":"scheme_diary_glass","scriptName":"薄暮手记 · 私密日记","findRegex":"/<Diary>([\\s\\S]*?)<\\/Diary>/gims","replaceString":"```html\n<style>\n.d-box { background: rgba(255,253,248,0.85); border: 1px solid #E6E2D6; border-radius: 8px; padding: 18px 20px; max-width: 360px; margin: 10px auto; color: #2E2B27; font-family: serif; box-shadow: 0 4px 16px rgba(0,0,0,0.03); }\n.d-head { display: flex; justify-content: space-between; border-bottom: 1px dashed #E6E2D6; padding-bottom: 6px; margin-bottom: 10px; font-size: 13px; font-weight: bold; color: #D97757; }\n.d-content { font-size: 13px; line-height: 1.85; white-space: pre-wrap; text-align: justify; }\n</style>\n<div class=\"d-box\">\n  <div class=\"d-head\"><span>私 密 日 记</span><span style=\"font-size:11px; opacity:0.6;\">✦</span></div>\n  <div class=\"d-content\">$1</div>\n  <div style=\"text-align:center; font-size:10px; opacity:0.5; margin-top:10px; letter-spacing:0.2em;\">仅 供 查 阅</div>\n</div>\n```","trimStrings":[],"placement":[2],"disabled":false,"markdownOnly":false,"promptOnly":false,"runOnEdit":true,"substituteRegex":0,"minDepth":null,"maxDepth":null,"category":"diary","tag":"毛玻璃 · 昼夜微调","sampleText":"正文第一段。\n\n<Diary>\n景泰三十八年·十月廿三·丑时\n\n他皱眉了。\n那道褶痕出现的时候，我整个人像是被人从背后浇了一盆冰水。\n</Diary>\n\n正文继续。"},{"id":"scheme_stat_matrix","scriptName":"天机沙盘 · 状态矩阵","findRegex":"/<Stat>([\\s\\S]*?)<\\/Stat>/gims","replaceString":"```html\n<style>\n.s-box { background: #11141D; color: #CBD5E1; border: 1px solid #2D3748; border-radius: 8px; padding: 16px; max-width: 360px; margin: 10px auto; font-family: sans-serif; }\n.s-head { display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px; margin-bottom: 10px; font-size: 12px; font-weight: bold; color: #38BDF8; }\n.s-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 10px; }\n.s-pill { background: #1E2433; padding: 6px 8px; border-radius: 4px; font-size: 11px; }\n.s-k { color: #64748B; font-size: 9px; margin-bottom: 2px; }\n.s-v { font-weight: bold; color: #F87171; }\n</style>\n<div class=\"s-box\">\n  <div class=\"s-head\"><span>◆ 天机权谋推演</span><span>回合局势</span></div>\n  <div class=\"s-grid\">\n    <div class=\"s-pill\"><div class=\"s-k\">储位状态</div><div class=\"s-v\">岌岌可危 ↓</div></div>\n    <div class=\"s-pill\"><div class=\"s-k\">帝心信任</div><div class=\"s-v\" style=\"color:#E2E8F0;\">3/10 (衰退)</div></div>\n  </div>\n  <div style=\"font-size:12px; line-height:1.6; background:rgba(255,255,255,0.03); padding:8px; border-radius:4px; white-space:pre-wrap;\">$1</div>\n</div>\n```","trimStrings":[],"placement":[2],"disabled":false,"markdownOnly":false,"promptOnly":false,"runOnEdit":true,"substituteRegex":0,"minDepth":null,"maxDepth":null,"category":"stat","tag":"状态参数 · 指标矩阵","sampleText":"<Stat>\n宁安公主 (长宁)：神色微敛，暗自盘算退路。\n待办：1.试探口风(50%) 2.暗查密信(20%)\n</Stat>"},{"id":"scheme_typewriter","scriptName":"打字机手稿 · 调查断片","findRegex":"/<Manuscript>([\\s\\S]*?)<\\/Manuscript>/gims","replaceString":"```html\n<style>\n.tw-box { background: #FFFFFF; color: #1E293B; border: 1px solid currentColor; padding: 22px 18px; font-family: monospace; max-width: 360px; margin: 14px auto; position: relative; }\n.tw-tape { position: absolute; top: -6px; left: 50%; transform: translateX(-50%); width: 60px; height: 12px; background: currentColor; opacity: 0.15; }\n</style>\n<div class=\"tw-box\">\n  <div class=\"tw-tape\"></div>\n  <div style=\"font-size: 10px; border-bottom: 1px dashed currentColor; padding-bottom: 4px; margin-bottom: 10px; opacity: 0.7;\">REC // CONFIDENTIAL ARCHIVE</div>\n  <div style=\"font-size: 12px; line-height: 1.8; white-space: pre-wrap;\">$1</div>\n</div>\n```","trimStrings":[],"placement":[2],"disabled":false,"markdownOnly":false,"promptOnly":false,"runOnEdit":true,"substituteRegex":0,"minDepth":null,"maxDepth":null,"category":"lit","tag":"等宽机械 · 和纸胶带","sampleText":"<Manuscript>\nMANUSCRIPT NO. 27\n所有的日光、风与水波，都在服务于这个人。\n</Manuscript>"}];
const KEYS={lib:'stm_regex_library_v3',groups:'stm_regex_groups_v3',draft:'stm_regex_draft_v3',saved:'stm_regex_saved_workspaces_v3',widths:'stm_regex_pane_widths_v3',galleryItems:'stm_inspiration_items_v1',galleryGroups:'stm_inspiration_groups_v1',galleryTags:'stm_inspiration_tags_v1',sidebar:'stm_sidebar_collapsed_v1',studioMode:'stm_studio_mode_v1'};
const CATEGORY_LABELS={history:'史料古籍',diary:'私密手记',stat:'状态面板',lit:'文学排版',custom:'自定义'};
const PLACEMENT_LABELS={1:'用户输入',2:'AI响应',3:'斜杠命令',5:'世界信息',6:'推理'};
let regexLibrary=[];let regexGroups=[];let pipeline=[];let savedWorkspaces={};let currentWorkspaceId=null;let currentWorkspaceName='未命名工作台';let paneRatios=[.36,.29,.35];let pipelineErrors=[];
let regexEditorTarget=null;let chooserMode='regex';let groupEditorId=null;let groupEditorMembers=[];let galleryCategory='all';let galleryTagFilter='all';
let galleryItems=[];let galleryGroups=[];let customGalleryTags=[];let galleryGroupEditorId=null;let galleryItemEditorId=null;let galleryItemEditorDraft=null;let galleryDragState=null;let pendingHtmlImportQueue=[];let currentHtmlImport=null;
let studioMode='regex';let designPipeline=[];let designDraft={html:'',css:'',js:''};let activeDesignCodeTab='html';let previewTraceSteps=[];let activePreviewStep='final';

const $=id=>document.getElementById(id);
const clone=o=>JSON.parse(JSON.stringify(o));
function uid(){return (crypto?.randomUUID?.()||('id_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2)));}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeName(s){return String(s||'file').replace(/[\\/:*?"<>|\x00-\x1f]/g,'_').trim()||'file';}

function highlightTagToken(tag){
  const m=String(tag).match(/^(<\/?)([^\s>]+)([\s\S]*?)(\/?>)$/);
  if(!m)return `<span class="tok-tag">${esc(tag)}</span>`;
  let attrs='',rest=m[3]||'',last=0;
  const ar=/([:\w-]+)(\s*=\s*)("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[^\s>]+)/g;
  let a;
  while((a=ar.exec(rest))){
    attrs+=highlightPlainSpecial(rest.slice(last,a.index));
    attrs+=`<span class="tok-attr">${esc(a[1])}</span>${esc(a[2])}<span class="tok-string">${highlightPlainSpecial(a[3])}</span>`;
    last=ar.lastIndex;
  }
  attrs+=highlightPlainSpecial(rest.slice(last));
  return `<span class="tok-punc">${esc(m[1])}</span><span class="tok-tag">${esc(m[2])}</span>${attrs}<span class="tok-punc">${esc(m[4])}</span>`;
}
function highlightPlainSpecial(text){
  const src=String(text??'');
  const re=/(\{\{[^{}]+\}\}|\$<[^>]+>|\$\d+|#[0-9A-Fa-f]{3,8}\b|--[A-Za-z_][\w-]*|\b\d+(?:\.\d+)?(?:px|rem|em|vh|vw|vmin|vmax|fr|%|ms|s|deg)?\b)/g;
  let out='',last=0,m;
  while((m=re.exec(src))){
    out+=esc(src.slice(last,m.index));
    const t=m[0];
    let cls='number';
    if(t.startsWith('{{'))cls='macro';
    else if(/^\$(?:\d+|<)/.test(t))cls='capture';
    else if(t.startsWith('#'))cls='color';
    else if(t.startsWith('--'))cls='var';
    out+=`<span class="tok-${cls}">${esc(t)}</span>`;
    last=re.lastIndex;
  }
  return out+esc(src.slice(last));
}
function lastUnescapedSlash(text){
  for(let i=text.length-1;i>0;i--){
    if(text[i]!=='/')continue;
    let bs=0; for(let j=i-1;j>=0&&text[j]==='\\';j--)bs++;
    if(bs%2===0)return i;
  }
  return -1;
}
function highlightRegexBody(body){
  let out='',plain='';
  const flush=()=>{if(plain){out+=highlightPlainSpecial(plain);plain=''}};
  for(let i=0;i<body.length;){
    const c=body[i];
    if(c==='\\'){
      flush(); let j=i+1;
      if(body[j]==='p'||body[j]==='P'){
        j++; if(body[j]==='{'){j++; while(j<body.length&&body[j]!=='}')j++; if(j<body.length)j++;}
      }else if(body[j]==='u'){j=Math.min(body.length,j+5)}
      else if(body[j]==='x'){j=Math.min(body.length,j+3)}
      else if(j<body.length){j++;}
      out+=`<span class="tok-re-escape">${esc(body.slice(i,j))}</span>`; i=j; continue;
    }
    if(c==='['){
      flush(); out+='<span class="tok-re-class-punc">[</span>'; i++;
      let inner='';
      while(i<body.length&&body[i]!==']'){
        if(body[i]==='\\'){
          if(inner){out+=`<span class="tok-re-class">${esc(inner)}</span>`;inner=''}
          let j=Math.min(body.length,i+2);
          out+=`<span class="tok-re-escape">${esc(body.slice(i,j))}</span>`;i=j;continue;
        }
        inner+=body[i++];
      }
      if(inner)out+=`<span class="tok-re-class">${esc(inner)}</span>`;
      if(i<body.length){out+='<span class="tok-re-class-punc">]</span>';i++;}
      continue;
    }
    if(c==='('){
      flush();
      const rest=body.slice(i);
      const gm=rest.match(/^\(\?(?::|=|!|<=|<!|<[A-Za-z_][\w-]*>)/);
      if(gm){out+=`<span class="tok-re-group">${esc(gm[0])}</span>`;i+=gm[0].length;}
      else{out+='<span class="tok-re-group-punc">(</span>';i++;}
      continue;
    }
    if(c===')'){flush();out+='<span class="tok-re-group-punc">)</span>';i++;continue;}
    const qm=body.slice(i).match(/^(?:\{\d+(?:,\d*)?\}|[*+?])\??/);
    if(qm){flush();out+=`<span class="tok-re-quant">${esc(qm[0])}</span>`;i+=qm[0].length;continue;}
    if(c==='^'||c==='$'){flush();out+=`<span class="tok-re-anchor">${esc(c)}</span>`;i++;continue;}
    if(c==='|'){flush();out+='<span class="tok-re-alt">|</span>';i++;continue;}
    if(c==='.'){flush();out+='<span class="tok-re-dot">.</span>';i++;continue;}
    plain+=c;i++;
  }
  flush(); return out;
}
function highlightRegex(text){
  const src=String(text??'');
  if(src.startsWith('/')){
    const end=lastUnescapedSlash(src);
    if(end>0){
      const flags=src.slice(end+1);
      if(/^[dgimsuvy]*$/.test(flags)){
        return `<span class="tok-re-delim">/</span>${highlightRegexBody(src.slice(1,end))}<span class="tok-re-delim">/</span><span class="tok-re-flags">${esc(flags)}</span>`;
      }
    }
  }
  return highlightRegexBody(src);
}
function highlightCss(css){
  const src=String(css??''); let out='',i=0,brace=0,inValue=false;
  const add=(cls,t)=>{out+=cls?`<span class="${cls}">${esc(t)}</span>`:esc(t)};
  while(i<src.length){
    if(src.startsWith('/*',i)){
      const e=src.indexOf('*/',i+2); const j=e<0?src.length:e+2; add('tok-comment',src.slice(i,j));i=j;continue;
    }
    const c=src[i];
    if(c==='"'||c==="'"){
      const q=c;let j=i+1;while(j<src.length){if(src[j]==='\\'){j+=2;continue}if(src[j]===q){j++;break}j++}add('tok-string',src.slice(i,j));i=j;continue;
    }
    const cap=src.slice(i).match(/^(?:\{\{[^{}]+\}\}|\$<[^>]+>|\$\d+)/);
    if(cap){add(cap[0].startsWith('{{')?'tok-macro':'tok-capture',cap[0]);i+=cap[0].length;continue;}
    const variable=src.slice(i).match(/^--[A-Za-z_][\w-]*/);
    if(variable){add('tok-var',variable[0]);i+=variable[0].length;continue;}
    const color=src.slice(i).match(/^#[0-9A-Fa-f]{3,8}\b/);
    if(color){add('tok-color',color[0]);i+=color[0].length;continue;}
    const num=src.slice(i).match(/^\d+(?:\.\d+)?(?:px|rem|em|vh|vw|vmin|vmax|fr|%|ms|s|deg)?\b/);
    if(num){
      const nm=num[0].match(/^(\d+(?:\.\d+)?)(.*)$/);add('tok-number',nm[1]);if(nm[2])add('tok-css-unit',nm[2]);i+=num[0].length;continue;
    }
    const at=src.slice(i).match(/^@[A-Za-z_-][\w-]*/);
    if(at){add('tok-css-atrule',at[0]);i+=at[0].length;continue;}
    const cls=src.slice(i).match(/^\.[A-Za-z_-][\w-]*/);
    if(cls&&brace===0){add('tok-css-selector',cls[0]);i+=cls[0].length;continue;}
    const pseudo=src.slice(i).match(/^::?[A-Za-z_-][\w-]*/);
    if(pseudo&&brace===0){add('tok-css-pseudo',pseudo[0]);i+=pseudo[0].length;continue;}
    const idsel=src.slice(i).match(/^#[A-Za-z_-][\w-]*/);
    if(idsel&&brace===0){add('tok-css-selector',idsel[0]);i+=idsel[0].length;continue;}
    const ident=src.slice(i).match(/^[A-Za-z_-][\w-]*/);
    if(ident){
      const t=ident[0]; let k=i+t.length;while(k<src.length&&/\s/.test(src[k]))k++;
      if(brace>0&&!inValue&&src[k]===':')add('tok-css-property',t);
      else if(inValue&&src[k]==='(')add('tok-css-function',t);
      else if(brace===0)add('tok-css-selector',t);
      else if(inValue)add('tok-css-value',t);
      else add('',t);
      i+=t.length;continue;
    }
    if(c==='{'){add('tok-css-punc',c);brace++;inValue=false;i++;continue;}
    if(c==='}'){add('tok-css-punc',c);brace=Math.max(0,brace-1);inValue=false;i++;continue;}
    if(c===':'&&brace>0){add('tok-css-punc',c);inValue=true;i++;continue;}
    if(c===';'&&brace>0){add('tok-css-punc',c);inValue=false;i++;continue;}
    if('{}:;,()>+~='.includes(c)){add('tok-css-punc',c);i++;continue;}
    add('',c);i++;
  }
  return out;
}
function highlightJs(js){
  const src=String(js??'');let out='',i=0;
  const add=(cls,t)=>{out+=cls?`<span class="${cls}">${esc(t)}</span>`:esc(t)};
  const keywords=new Set(['const','let','var','function','return','if','else','for','while','do','switch','case','break','continue','try','catch','finally','throw','new','class','extends','this','typeof','instanceof','in','of','async','await','true','false','null','undefined']);
  const builtins=new Set(['document','window','localStorage','sessionStorage','console','Math','JSON','Array','Object','String','Number','Boolean','Date','RegExp','Promise','Set','Map']);
  while(i<src.length){
    if(src.startsWith('//',i)){let j=src.indexOf('\n',i+2);if(j<0)j=src.length;add('tok-comment',src.slice(i,j));i=j;continue;}
    if(src.startsWith('/*',i)){const e=src.indexOf('*/',i+2);const j=e<0?src.length:e+2;add('tok-comment',src.slice(i,j));i=j;continue;}
    const c=src[i];
    if(c==='"'||c==="'"||c==='`'){
      const q=c;let j=i+1;while(j<src.length){if(src[j]==='\\'){j+=2;continue}if(src[j]===q){j++;break}j++}add('tok-string',src.slice(i,j));i=j;continue;
    }
    const cap=src.slice(i).match(/^(?:\{\{[^{}]+\}\}|\$<[^>]+>|\$\d+)/);
    if(cap){add(cap[0].startsWith('{{')?'tok-macro':'tok-capture',cap[0]);i+=cap[0].length;continue;}
    const num=src.slice(i).match(/^(?:0x[0-9A-Fa-f]+|\d+(?:\.\d+)?)/);
    if(num){add('tok-number',num[0]);i+=num[0].length;continue;}
    const ident=src.slice(i).match(/^[A-Za-z_$][\w$]*/);
    if(ident){
      const t=ident[0];let k=i+t.length;while(k<src.length&&/\s/.test(src[k]))k++;
      let p=i-1;while(p>=0&&/\s/.test(src[p]))p--;
      if(keywords.has(t))add('tok-js-keyword',t);
      else if(builtins.has(t))add('tok-js-builtin',t);
      else if(p>=0&&src[p]==='.')add('tok-js-property',t);
      else if(src[k]==='(')add('tok-js-function',t);
      else add('',t);
      i+=t.length;continue;
    }
    if('=+-*/%!?<>|&~^'.includes(c)){let j=i+1;while(j<src.length&&'=+-*/%!?<>|&~^'.includes(src[j])&&j-i<3)j++;add('tok-js-operator',src.slice(i,j));i=j;continue;}
    if('(){}[];,:.'.includes(c)){add('tok-punc',c);i++;continue;}
    add('',c);i++;
  }
  return out;
}
function highlightHtmlMixed(text){
  const src=String(text??'');
  const block=/(```(?:html|css|javascript|js)?\s*)|(<style\b[^>]*>[\s\S]*?<\/style\s*>)|(<script\b[^>]*>[\s\S]*?<\/script\s*>)|(<!--[\s\S]*?-->)|(<!DOCTYPE[^>]*>)|(<\/?[A-Za-z\u4e00-\u9fff_][^>]*>)/gi;
  let out='',last=0,m;
  while((m=block.exec(src))){
    out+=highlightPlainSpecial(src.slice(last,m.index));
    const tok=m[0];
    if(/^```/.test(tok))out+=`<span class="tok-fence">${esc(tok)}</span>`;
    else if(/^<!--/.test(tok))out+=`<span class="tok-comment">${esc(tok)}</span>`;
    else if(/^<!doctype/i.test(tok))out+=`<span class="tok-doctype">${esc(tok)}</span>`;
    else if(/^<style\b/i.test(tok)){
      const mm=tok.match(/^(<style\b[^>]*>)([\s\S]*?)(<\/style\s*>)$/i);
      out+=highlightTagToken(mm[1])+highlightCss(mm[2])+highlightTagToken(mm[3]);
    }else if(/^<script\b/i.test(tok)){
      const mm=tok.match(/^(<script\b[^>]*>)([\s\S]*?)(<\/script\s*>)$/i);
      out+=highlightTagToken(mm[1])+highlightJs(mm[2])+highlightTagToken(mm[3]);
    }else out+=highlightTagToken(tok);
    last=block.lastIndex;
  }
  return out+highlightPlainSpecial(src.slice(last));
}
function highlightSyntax(text,mode='mixed'){
  if(mode==='regex')return highlightRegex(text);
  if(mode==='css')return highlightCss(text);
  if(mode==='js')return highlightJs(text);
  if(mode==='html'||mode==='mixed')return highlightHtmlMixed(text);
  return highlightPlainSpecial(text);
}
function updateCodeHighlight(textarea){const shell=textarea?.closest('.code-editor-shell');const pre=shell?.querySelector('.code-highlight');if(!pre)return;pre.innerHTML=highlightSyntax(textarea.value,textarea.dataset.codeMode||shell.dataset.mode||'mixed')+'\n';pre.scrollTop=textarea.scrollTop;pre.scrollLeft=textarea.scrollLeft}
function enhanceCodeEditors(root=document){root.querySelectorAll('textarea[data-code-mode]').forEach(t=>{if(t.dataset.highlightReady==='1'){updateCodeHighlight(t);return}const shell=document.createElement('div');shell.className='code-editor-shell';shell.dataset.mode=t.dataset.codeMode||'mixed';const pre=document.createElement('pre');pre.className='code-highlight';pre.setAttribute('aria-hidden','true');t.parentNode.insertBefore(shell,t);shell.appendChild(pre);shell.appendChild(t);t.dataset.highlightReady='1';t.addEventListener('input',()=>updateCodeHighlight(t));t.addEventListener('scroll',()=>{pre.scrollTop=t.scrollTop;pre.scrollLeft=t.scrollLeft});if(window.ResizeObserver)new ResizeObserver(()=>{pre.scrollTop=t.scrollTop;pre.scrollLeft=t.scrollLeft}).observe(t);updateCodeHighlight(t)})}
function toast(msg,type=''){const el=document.createElement('div');el.className='toast '+type;el.textContent=msg;$('toastWrap').appendChild(el);setTimeout(()=>el.remove(),2600)}
function numOrNull(v){if(v===null||v===undefined||v==='')return null;const n=Number(v);return Number.isFinite(n)?n:null}
function normalizeRegex(raw={}){
  const placement=Array.isArray(raw.placement)?raw.placement.map(Number).filter(x=>[1,2,3,5,6].includes(x)):[2];
  const trims=Array.isArray(raw.trimStrings)?raw.trimStrings:(typeof raw.trimStrings==='string'?raw.trimStrings.split(/\r?\n/).filter(Boolean):[]);
  return {
    id:String(raw.id||uid()),scriptName:String(raw.scriptName??raw.name??'未命名正则'),findRegex:String(raw.findRegex??raw.pattern??''),replaceString:String(raw.replaceString??raw.replace??''),
    trimStrings:trims,placement,disabled:Boolean(raw.disabled??false),markdownOnly:Boolean(raw.markdownOnly??false),promptOnly:Boolean(raw.promptOnly??false),runOnEdit:Boolean(raw.runOnEdit??true),
    substituteRegex:[0,1,2].includes(Number(raw.substituteRegex))?Number(raw.substituteRegex):0,minDepth:numOrNull(raw.minDepth),maxDepth:numOrNull(raw.maxDepth),
    category:String(raw.category||'custom'),tag:String(raw.tag||''),sampleText:String(raw.sampleText??raw.text??'')
  };
}
function toSTRegex(raw){const s=normalizeRegex(raw);return {id:s.id,scriptName:s.scriptName,findRegex:s.findRegex,replaceString:s.replaceString,trimStrings:s.trimStrings,placement:s.placement,disabled:s.disabled,markdownOnly:s.markdownOnly,promptOnly:s.promptOnly,runOnEdit:s.runOnEdit,substituteRegex:s.substituteRegex,minDepth:s.minDepth,maxDepth:s.maxDepth};}
function memberRefId(x){return typeof x==='string'?x:String(x?.regexId||x?.sourceId||x?.id||x?.script?.id||'')}
function rawGroupMembers(raw={}){
  if(Array.isArray(raw.regexIds))return raw.regexIds;
  if(Array.isArray(raw.members))return raw.members;
  if(Array.isArray(raw.regexes))return raw.regexes;
  if(Array.isArray(raw.scripts))return raw.scripts;
  return [];
}
function normalizeGroup(raw={}){const regexIds=rawGroupMembers(raw).map(memberRefId).filter(Boolean);return {id:String(raw.id||uid()),name:String(raw.name||raw.groupName||'未命名正则组'),description:String(raw.description||raw.desc||''),regexIds,expanded:Boolean(raw.expanded)}}

const GALLERY_UNGROUPED='__ungrouped__';
function parseTags(value){
  const arr=Array.isArray(value)?value:String(value||'').split(/[,，、;；|｜]+/);
  return [...new Set(arr.map(x=>String(x||'').trim()).filter(Boolean))];
}
function normalizeGalleryGroup(raw={}){
  return {id:String(raw.id||uid()),name:String(raw.name||'未命名方案组'),description:String(raw.description||''),tags:parseTags(raw.tags),collapsed:Boolean(raw.collapsed),order:Number.isFinite(Number(raw.order))?Number(raw.order):Date.now()};
}
function normalizeGalleryItem(raw={}){
  return {id:String(raw.id||uid()),kind:raw.kind==='design'?'design':'regex',regexId:raw.regexId?String(raw.regexId):null,groupId:raw.groupId?String(raw.groupId):null,title:String(raw.title||''),tags:parseTags(raw.tags),description:String(raw.description||''),sourceFile:String(raw.sourceFile||''),html:String(raw.html||''),css:String(raw.css||''),js:String(raw.js||''),headExtra:String(raw.headExtra||''),order:Number.isFinite(Number(raw.order))?Number(raw.order):Date.now()};
}
function saveGallery(){localStorage.setItem(KEYS.galleryItems,JSON.stringify(galleryItems));localStorage.setItem(KEYS.galleryGroups,JSON.stringify(galleryGroups));localStorage.setItem(KEYS.galleryTags,JSON.stringify(customGalleryTags));}
function nextGalleryOrder(groupId=null){const xs=galleryItems.filter(x=>(x.groupId||null)===(groupId||null));return xs.length?Math.max(...xs.map(x=>Number(x.order)||0))+1:1;}
function nextGalleryGroupOrder(){return galleryGroups.length?Math.max(...galleryGroups.map(x=>Number(x.order)||0))+1:1;}
function ensureRegexGalleryItems(){
  let changed=false;const live=new Set(regexLibrary.map(x=>x.id));
  const before=galleryItems.length;galleryItems=galleryItems.filter(x=>x.kind!=='regex'||live.has(x.regexId));if(galleryItems.length!==before)changed=true;
  for(const s of regexLibrary){if(!galleryItems.some(x=>x.kind==='regex'&&x.regexId===s.id)){galleryItems.push(normalizeGalleryItem({kind:'regex',regexId:s.id,title:'',tags:parseTags(s.tag),groupId:null,order:nextGalleryOrder(null)}));changed=true}}
  if(changed)saveGallery();return changed;
}
function galleryItemTitle(item){if(item.kind==='regex'){const s=regexLibrary.find(x=>x.id===item.regexId);return item.title||s?.scriptName||'已删除正则'}return item.title||'未命名设计方案'}
function galleryItemTags(item){const tags=[...(item.tags||[])];if(item.kind==='regex'){const s=regexLibrary.find(x=>x.id===item.regexId);tags.push(...parseTags(s?.tag||''));if(s?.category&&CATEGORY_LABELS[s.category])tags.push(CATEGORY_LABELS[s.category])}return [...new Set(tags.filter(Boolean))]}
function galleryGroupById(id){return galleryGroups.find(g=>g.id===id)||null}
function uniqueGalleryGroupName(base){let root=String(base||'导入方案组').trim()||'导入方案组',name=root,n=2;while(galleryGroups.some(g=>g.name===name))name=`${root} (${n++})`;return name}

function saveCore(){localStorage.setItem(KEYS.lib,JSON.stringify(regexLibrary));localStorage.setItem(KEYS.groups,JSON.stringify(regexGroups));}
function persistDraft(){const d=captureWorkspace();localStorage.setItem(KEYS.draft,JSON.stringify(d));$('autosaveText').textContent='草稿已自动保存 · '+new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});}
function loadData(){
  try{const x=JSON.parse(localStorage.getItem(KEYS.lib)||'null');regexLibrary=Array.isArray(x)?x.map(normalizeRegex):INITIAL_REGEXES.map(normalizeRegex)}catch{regexLibrary=INITIAL_REGEXES.map(normalizeRegex)}
  try{const x=JSON.parse(localStorage.getItem(KEYS.groups)||'[]');regexGroups=Array.isArray(x)?x.map(normalizeGroup):[]}catch{regexGroups=[]}
  try{const x=JSON.parse(localStorage.getItem(KEYS.galleryItems)||'[]');galleryItems=Array.isArray(x)?x.map(normalizeGalleryItem):[]}catch{galleryItems=[]}
  try{const x=JSON.parse(localStorage.getItem(KEYS.galleryGroups)||'[]');galleryGroups=Array.isArray(x)?x.map(normalizeGalleryGroup):[]}catch{galleryGroups=[]}
  try{const x=JSON.parse(localStorage.getItem(KEYS.galleryTags)||'[]');customGalleryTags=Array.isArray(x)?parseTags(x):[]}catch{customGalleryTags=[]}
  studioMode=localStorage.getItem(KEYS.studioMode)==='design'?'design':'regex';
  ensureRegexGalleryItems();
  try{savedWorkspaces=JSON.parse(localStorage.getItem(KEYS.saved)||'{}')||{}}catch{savedWorkspaces={}}
  try{const r=JSON.parse(localStorage.getItem(KEYS.widths)||'null');if(Array.isArray(r)&&r.length===3)paneRatios=r}catch{}
  try{const d=JSON.parse(localStorage.getItem(KEYS.draft)||'null');if(d)applyWorkspace(d,false)}catch{}
}
function captureContext(){return {placement:Number($('placementSelect').value),channel:$('channelSelect').value,depth:numOrNull($('depthInput').value)??0,isEdit:$('editCheck').checked,stripFence:$('stripFenceCheck').checked,user:$('userMacro').value,char:$('charMacro').value};}
function captureWorkspace(){syncDesignDraftFromInputs();return {format:'sillytavern-regex-workbench',version:4,id:currentWorkspaceId,name:$('workspaceName')?.value||currentWorkspaceName,studioMode,inputText:$('fullText')?.value||'',context:captureContext(),pipeline:clone(pipeline),designPipeline:clone(designPipeline),designDraft:clone(designDraft),paneRatios:clone(paneRatios),exportedAt:new Date().toISOString()};}
function applyWorkspace(w,render=true){
  currentWorkspaceId=w.id||null;currentWorkspaceName=w.name||'未命名工作台';
  pipeline=Array.isArray(w.pipeline)?w.pipeline.map(p=>({instanceId:p.instanceId||uid(),sourceId:p.sourceId||null,script:normalizeRegex(p.script||p),expanded:Boolean(p.expanded)})):[];
  designPipeline=Array.isArray(w.designPipeline)?w.designPipeline.map(p=>({instanceId:p.instanceId||uid(),sourceId:p.sourceId||p.item?.id||null,item:normalizeGalleryItem(p.item||p),expanded:Boolean(p.expanded)})):[];
  designDraft={html:String(w.designDraft?.html||''),css:String(w.designDraft?.css||''),js:String(w.designDraft?.js||'')};
  studioMode=w.studioMode==='design'?'design':'regex';
  const c=w.context||{};
  requestAnimationFrame(()=>{
    if($('workspaceName'))$('workspaceName').value=currentWorkspaceName;if($('fullText'))$('fullText').value=w.inputText||'';
    if($('placementSelect'))$('placementSelect').value=String(c.placement??2);if($('channelSelect'))$('channelSelect').value=c.channel||'display';if($('depthInput'))$('depthInput').value=c.depth??0;
    if($('editCheck'))$('editCheck').checked=Boolean(c.isEdit);if($('stripFenceCheck'))$('stripFenceCheck').checked=c.stripFence!==false;if($('userMacro'))$('userMacro').value=c.user||'User';if($('charMacro'))$('charMacro').value=c.char||'Character';
    syncDesignInputsFromDraft();if(Array.isArray(w.paneRatios)&&w.paneRatios.length===3)paneRatios=w.paneRatios;
    if(render){switchStudioMode(studioMode,false);renderAll();applyPaneRatios();}
  });
}
function saveSavedMap(){localStorage.setItem(KEYS.saved,JSON.stringify(savedWorkspaces));renderWorkspaceSelect()}
function renderWorkspaceSelect(){const s=$('workspaceSelect');if(!s)return;s.innerHTML='<option value="">当前草稿</option>'+Object.values(savedWorkspaces).sort((a,b)=>(b.updatedAt||'').localeCompare(a.updatedAt||'')).map(w=>`<option value="${esc(w.id)}" ${w.id===currentWorkspaceId?'selected':''}>${esc(w.name||'未命名')}</option>`).join('')}
function saveWorkspace(forceNew=false){let name=$('workspaceName').value.trim()||'未命名工作台';let id=forceNew?uid():(currentWorkspaceId||uid());const snap=captureWorkspace();snap.id=id;snap.name=name;snap.updatedAt=new Date().toISOString();savedWorkspaces[id]=snap;currentWorkspaceId=id;currentWorkspaceName=name;saveSavedMap();persistDraft();toast('工作台已保存','ok')}
function newWorkspace(){openConfirm({title:'新建工作台',message:'创建空白工作台？',confirmText:'新建',onConfirm:()=>{currentWorkspaceId=null;currentWorkspaceName='未命名工作台';pipeline=[];designPipeline=[];designDraft={html:'',css:'',js:''};$('workspaceName').value=currentWorkspaceName;$('fullText').value='';syncDesignInputsFromDraft();renderAll();persistDraft();renderWorkspaceSelect()}})}
function deleteWorkspace(){if(!currentWorkspaceId){toast('当前只是草稿，没有已保存快照');return}const name=savedWorkspaces[currentWorkspaceId]?.name||'未命名工作台';openConfirm({title:'删除工作台',message:`删除「${name}」？`,description:'只删除这个已保存的工作台快照，不会删除正则库或正则组。',confirmText:'删除',danger:true,onConfirm:()=>{delete savedWorkspaces[currentWorkspaceId];currentWorkspaceId=null;saveSavedMap();toast('已删除工作台快照');persistDraft()}})}

/* SillyTavern-like regex semantics */
function regexFromStringLikeST(input){
  try{
    const text=String(input||'');
    if(!text)return null;
    if(text.startsWith('/')){
      let end=-1;
      for(let i=text.length-1;i>0;i--){
        if(text[i]!=='/')continue;
        let bs=0;
        for(let j=i-1;j>=0&&text[j]==='\\';j--)bs++;
        if(bs%2===0){end=i;break}
      }
      if(end>0){
        const flags=text.slice(end+1);
        if(/^[dgimsuvy]*$/.test(flags))return new RegExp(text.slice(1,end),flags);
      }
    }
    return new RegExp(text);
  }catch{return null}
}
function escapeRegexMacro(x){return String(x??'').replace(/[\n\r\t\v\f\0.^$*+?{}[\]\\/|()]/g,s=>({"\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\f":"\\f","\0":"\\0"}[s]||'\\'+s))}
function macroMap(){return {user:$('userMacro')?.value||'User',char:$('charMacro')?.value||'Character'};}
function substituteCommon(str,escMode=false){const m=macroMap();return String(str??'').replace(/{{\s*(user|name1)\s*}}/gi,()=>escMode?escapeRegexMacro(m.user):m.user).replace(/{{\s*(char|name2)\s*}}/gi,()=>escMode?escapeRegexMacro(m.char):m.char)}
function filterString(raw,trims){let out=String(raw??'');for(const t of (trims||[])){out=out.split(substituteCommon(t,false)).join('')}return out}
function runRegexScriptLikeST(script,raw){let out=String(raw??'');if(!script||script.disabled||!script.findRegex||!out)return out;let regexString=script.findRegex;if(Number(script.substituteRegex)===1)regexString=substituteCommon(regexString,false);else if(Number(script.substituteRegex)===2)regexString=substituteCommon(regexString,true);const re=regexFromStringLikeST(regexString);if(!re)throw new Error('无法编译 Find Regex');return out.replace(re,function(match){const args=[...arguments];let repl=String(script.replaceString??'').replace(/{{match}}/gi,'$0');const replaced=repl.replace(/\$(\d+)|\$<([^>]+)>/g,(_,num,groupName)=>{let val;if(num!==undefined){val=args[Number(num)]}else if(groupName){const groups=args[args.length-1];val=groups&&typeof groups==='object'?groups[groupName]:undefined}if(!val)return'';return filterString(val,script.trimStrings)});return substituteCommon(replaced,false)})}
function depthAllows(s,depth){if(typeof depth!=='number')return true;if(s.minDepth!==null&&!Number.isNaN(Number(s.minDepth))&&Number(s.minDepth)>=-1&&depth<Number(s.minDepth))return false;if(s.maxDepth!==null&&!Number.isNaN(Number(s.maxDepth))&&Number(s.maxDepth)>=0&&depth>Number(s.maxDepth))return false;return true}
function phaseAllows(s,phase){if(phase==='source')return !s.markdownOnly&&!s.promptOnly;if(phase==='display')return Boolean(s.markdownOnly);if(phase==='prompt')return Boolean(s.promptOnly);return false}
function runPhase(text,phase,ctx){let out=text;pipeline.forEach((item,index)=>{const s=item.script;if(s.disabled)return;if(!phaseAllows(s,phase))return;if(ctx.isEdit&&!s.runOnEdit)return;if(!depthAllows(s,ctx.depth))return;if(!Array.isArray(s.placement)||!s.placement.includes(ctx.placement))return;try{out=runRegexScriptLikeST(s,out)}catch(e){pipelineErrors.push({index,name:s.scriptName,message:e.message})}});return out}
function runPhaseWithTrace(text,phase,ctx,trace){let out=text;pipeline.forEach((item,index)=>{const s=item.script;if(s.disabled)return;if(!phaseAllows(s,phase))return;if(ctx.isEdit&&!s.runOnEdit)return;if(!depthAllows(s,ctx.depth))return;if(!Array.isArray(s.placement)||!s.placement.includes(ctx.placement))return;try{out=runRegexScriptLikeST(s,out);trace.push({key:'regex-'+index,index,name:s.scriptName||('正则 '+(index+1)),phase,text:out})}catch(e){pipelineErrors.push({index,name:s.scriptName,message:e.message})}});return out}
function computeOutputTrace(){const ctx=captureContext();pipelineErrors=[];const input=$('fullText').value||'';const trace=[{key:'original',index:-1,name:'原始',phase:'original',text:input}];let source=runPhaseWithTrace(input,'source',ctx,trace);let output=source;if(ctx.channel==='prompt')output=runPhaseWithTrace(source,'prompt',ctx,trace);else if(ctx.channel==='display')output=runPhaseWithTrace(source,'display',ctx,trace);trace.push({key:'final',index:9999,name:'最终渲染',phase:'final',text:output});return {output,trace}}
function computeOutput(){return computeOutputTrace().output}
function buildCleanPreviewDocument(rendered){
  const html=String(rendered??'');
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>${html}</body>
</html>`;
}
function hasCompleteBody(html){return /<body(?:\s[^>]*)?>[\s\S]*?<\/body\s*>/i.test(String(html??''))}
function normalizeFullPageDocument(html){
  let doc=String(html??'').trim();
  if(/<html(?:\s|>)/i.test(doc)){
    if(!/<!doctype\s+html/i.test(doc))doc='<!DOCTYPE html>\n'+doc;
    return doc;
  }
  return `<!DOCTYPE html>
<html lang="zh-CN">
${doc}
</html>`;
}
function preparePreviewDocument(rendered,useFenceMode=true){
  const raw=String(rendered??'');
  if(!useFenceMode)return {document:buildCleanPreviewDocument(raw),mode:'原始输出'};

  const fenceRe=/```html\s*([\s\S]*?)\s*```/gi;
  const matches=[...raw.matchAll(fenceRe)];

  // 与酒馆助手的使用方式靠拢：只有“单个、独占输出、含完整 body”的 html 代码块，
  // 才视为一个独立前端页面。其它情况只是 HTML 片段，不擅自升级成整页。
  if(matches.length===1){
    const m=matches[0];
    const before=raw.slice(0,m.index).trim();
    const after=raw.slice((m.index||0)+m[0].length).trim();
    const inner=String(m[1]??'').trim();
    if(!before&&!after&&hasCompleteBody(inner)){
      return {document:normalizeFullPageDocument(inner),mode:'完整页面 · <body> iframe'};
    }
  }

  const fragment=raw.replace(fenceRe,'$1');
  return {document:buildCleanPreviewDocument(fragment),mode:matches.length?'HTML 片段':'普通输出'};
}
function renderPreviewTraceTabs(){const box=$('previewTraceTabs');if(!box)return;if(studioMode==='design'){box.classList.add('hidden');return}box.classList.remove('hidden');const steps=previewTraceSteps.filter((s,i,a)=>a.findIndex(x=>x.key===s.key)===i);box.innerHTML=steps.map(s=>`<button class="preview-trace-tab ${activePreviewStep===s.key?'active':''}" data-preview-step="${esc(s.key)}" title="${esc(s.name)}">${s.key==='final'?'最终渲染':s.key==='original'?'原始':esc(String(s.index+1).padStart(2,'0')+' · '+s.name)}</button>`).join('');box.querySelectorAll('[data-preview-step]').forEach(b=>b.onclick=()=>{activePreviewStep=b.dataset.previewStep;renderRegexPreview()})}
function renderRegexPreview(){updateCodeHighlight($('fullText'));const result=computeOutputTrace();previewTraceSteps=result.trace;const selected=previewTraceSteps.find(s=>s.key===activePreviewStep)||previewTraceSteps.find(s=>s.key==='final')||previewTraceSteps[previewTraceSteps.length-1];if(!previewTraceSteps.some(s=>s.key===activePreviewStep))activePreviewStep='final';renderPreviewTraceTabs();const out=selected?.text??result.output;const prepared=preparePreviewDocument(out,$('stripFenceCheck').checked);$('previewFrame').srcdoc=prepared.document;$('previewStats').textContent=out.length+' 字符 · '+prepared.mode;$('inputStats').textContent=($('fullText').value||'').length+' 字符';if(pipelineErrors.length){$('previewStatus').className='error';$('previewStatus').textContent='正则错误：'+pipelineErrors.map(x=>(x.index+1)+'. '+x.name).join('、')}else{$('previewStatus').className='ok';$('previewStatus').textContent=(selected?.key==='final'?'已执行':'查看 '+(selected?.name||'中间结果'))+' · '+$('channelSelect').selectedOptions[0].textContent+' · '+prepared.mode};renderPipelineErrorOnly();$('pipelineSummary').textContent=`${pipeline.length} 条 · ${pipeline.filter(x=>!x.script.disabled).length} 条启用`}
function renderPreview(){if(studioMode==='design')renderDesignPreview();else renderRegexPreview()}

/* Gallery */
function renderGalleryTagFilters(){
  const row=$('galleryTagRow');if(!row)return;
  const tags=new Set(customGalleryTags);galleryGroups.forEach(g=>(g.tags||[]).forEach(t=>tags.add(t)));galleryItems.forEach(i=>galleryItemTags(i).forEach(t=>tags.add(t)));
  const arr=[...tags].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  row.innerHTML='<button class="filter-chip '+(galleryTagFilter==='all'?'active':'')+'" data-gallery-tag="all">全部标签</button>'+arr.map(t=>`<button class="filter-chip ${galleryTagFilter===t?'active':''}" data-gallery-tag="${esc(t)}">${esc(t)}</button>`).join('');
  row.querySelectorAll('[data-gallery-tag]').forEach(b=>b.onclick=()=>{galleryTagFilter=b.dataset.galleryTag;renderGallery()});
}
function galleryItemSearchText(item){const title=galleryItemTitle(item),tags=galleryItemTags(item).join(' ');if(item.kind==='regex'){const s=regexLibrary.find(x=>x.id===item.regexId);return `${title} ${tags} ${item.description||''} ${s?.findRegex||''} ${s?.replaceString||''}`.toLowerCase()}return `${title} ${tags} ${item.description||''} ${item.html||''} ${item.css||''} ${item.js||''} ${item.sourceFile||''}`.toLowerCase()}
function buildDesignPreviewDocument(item){
  const links=String(item.headExtra||'');const css=String(item.css||'');const body=String(item.html||'');const js=String(item.js||'').replace(/<\/script/gi,'<\\/script');
  const scriptBlock=js?('<scr'+'ipt>'+js+'</scr'+'ipt>'):'';
  return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">${links}<style>${css}</style></head><body>${body}${scriptBlock}</body></html>`;
}
function renderGalleryItemCard(item){
  const title=galleryItemTitle(item),tags=galleryItemTags(item),source=item.sourceFile||'';
  if(item.kind==='regex'){
    const s=regexLibrary.find(x=>x.id===item.regexId);if(!s)return'';
    return `<article class="gallery-card" data-gallery-item="${esc(item.id)}"><div class="gallery-card-head"><div class="gallery-card-head-left"><span class="card-drag-handle" draggable="true" data-drag-item="${esc(item.id)}" title="拖动移动 / 排序">⋮⋮</span><div class="gallery-card-head-main"><b>${esc(title)}</b><div class="gallery-card-meta"><span class="badge accent">正则</span><span class="badge">${esc(CATEGORY_LABELS[s.category]||s.category)}</span>${tags.map(t=>`<span class="badge">${esc(t)}</span>`).join('')}<span class="badge ${s.disabled?'danger':'ok'}">${s.disabled?'Disabled':'Enabled'}</span></div>${source?`<div class="gallery-card-source">来源：${esc(source)}</div>`:''}</div></div><span class="badge">${(s.placement||[]).map(x=>PLACEMENT_LABELS[x]||x).join('/')||'无范围'}</span></div>${item.description?`<div class="gallery-card-desc">${esc(item.description)}</div>`:''}<div class="gallery-preview"><iframe data-preview-item="${esc(item.id)}" sandbox="allow-scripts allow-forms"></iframe></div><div class="gallery-actions regex-actions"><button class="btn primary" data-gadd="${esc(s.id)}">加入工作台</button><button class="btn" data-gedit="${esc(s.id)}">编辑正则</button><button class="btn" data-gmeta="${esc(item.id)}">卡片信息</button><button class="btn" data-gcopy="${esc(s.id)}">复制</button><button class="btn danger" data-gdel="${esc(s.id)}">删除</button></div></article>`;
  }
  return `<article class="gallery-card" data-gallery-item="${esc(item.id)}"><div class="gallery-card-head"><div class="gallery-card-head-left"><span class="card-drag-handle" draggable="true" data-drag-item="${esc(item.id)}" title="拖动移动 / 排序">⋮⋮</span><div class="gallery-card-head-main"><b>${esc(title)}</b><div class="gallery-card-meta"><span class="badge accent">设计</span>${tags.map(t=>`<span class="badge">${esc(t)}</span>`).join('')}</div>${source?`<div class="gallery-card-source">来源：${esc(source)}</div>`:''}</div></div></div>${item.description?`<div class="gallery-card-desc">${esc(item.description)}</div>`:''}<div class="gallery-preview"><iframe data-preview-item="${esc(item.id)}" sandbox="allow-scripts allow-forms"></iframe></div><div class="gallery-actions" style="grid-template-columns:1.25fr repeat(4,1fr)"><button class="btn primary" data-gdesign-add="${esc(item.id)}">加入设计台</button><button class="btn" data-gdesign-edit="${esc(item.id)}">编辑</button><button class="btn" data-gmeta="${esc(item.id)}">移动 / 标签</button><button class="btn" data-gdesign-copy="${esc(item.id)}">复制</button><button class="btn danger" data-gdesign-del="${esc(item.id)}">删除</button></div></article>`;
}
function renderGalleryGroup(group,items,isUngrouped=false){
  const gid=isUngrouped?GALLERY_UNGROUPED:group.id;const name=isUngrouped?'未分组':group.name;const desc=isUngrouped?'尚未放入方案组的组件。可直接把卡片拖进其他组。':group.description;const tags=isUngrouped?[]:(group.tags||[]);const collapsed=!isUngrouped&&group.collapsed;
  return `<section class="gallery-group-box ${collapsed?'collapsed':''}" data-gallery-group="${esc(gid)}"><div class="gallery-group-head">${isUngrouped?'<span class="group-drag-handle" style="opacity:.25;cursor:default">••</span>':`<span class="group-drag-handle" draggable="true" data-drag-group="${esc(gid)}" title="拖动方案组排序">⋮⋮</span>`}<div class="gallery-group-main"><div class="gallery-group-title-line"><span class="gallery-group-name">${esc(name)}</span><span class="badge accent">${items.length} 张</span></div>${desc?`<div class="gallery-group-desc">${esc(desc)}</div>`:''}${tags.length?`<div class="gallery-group-tags">${tags.map(t=>`<span class="badge">${esc(t)}</span>`).join('')}</div>`:''}</div><div class="gallery-group-actions">${isUngrouped?'':`<button class="btn small" data-gallery-group-collapse="${esc(gid)}">${collapsed?'展开':'折叠'}</button><button class="btn small" data-gallery-group-edit="${esc(gid)}">编辑</button><button class="btn small danger" data-gallery-group-delete="${esc(gid)}">删除组</button>`}</div></div><div class="gallery-group-body"><div class="gallery-group-grid" data-drop-group="${esc(gid)}">${items.length?items.map(renderGalleryItemCard).join(''):'<div class="empty-group-drop">把方案卡片拖到这里，或在“卡片信息”中选择此组。</div>'}</div></div></section>`;
}
function renderGallery(){
  ensureRegexGalleryItems();renderGalleryTagFilters();const root=$('galleryGroupsRoot');const q=$('gallerySearch').value.trim().toLowerCase();
  const typePass=i=>galleryCategory==='all'||i.kind===galleryCategory;const tagPass=i=>galleryTagFilter==='all'||galleryItemTags(i).includes(galleryTagFilter);
  const groups=[...galleryGroups].sort((a,b)=>(a.order||0)-(b.order||0));let html='',shown=0;
  for(const g of groups){const groupText=`${g.name} ${g.description||''} ${(g.tags||[]).join(' ')}`.toLowerCase();const groupQ=!q||groupText.includes(q);const groupTagMatch=galleryTagFilter==='all'||(g.tags||[]).includes(galleryTagFilter);const items=galleryItems.filter(i=>i.groupId===g.id&&typePass(i)&&(groupTagMatch||tagPass(i))&&(groupQ||galleryItemSearchText(i).includes(q))).sort((a,b)=>(a.order||0)-(b.order||0));if(items.length||groupQ&&groupTagMatch){html+=renderGalleryGroup(g,items,false);shown+=items.length}}
  const loose=galleryItems.filter(i=>!i.groupId&&typePass(i)&&tagPass(i)&&(!q||galleryItemSearchText(i).includes(q))).sort((a,b)=>(a.order||0)-(b.order||0));if(loose.length)html+=renderGalleryGroup(null,loose,true),shown+=loose.length;
  if(!html){root.innerHTML='<div class="empty"><b>没有匹配方案</b>可以新建方案、建立方案组，或导入 Gemini HTML / SillyTavern Regex JSON。</div>';return}
  root.innerHTML=html;bindGalleryRenderedEvents();root.querySelectorAll('iframe[data-preview-item]').forEach(f=>{const item=galleryItems.find(x=>x.id===f.dataset.previewItem);if(!item)return;if(item.kind==='design'){f.srcdoc=buildDesignPreviewDocument(item);return}const s=regexLibrary.find(x=>x.id===item.regexId);if(!s)return;let preview=s.sampleText||'<div style="padding:18px;font:12px sans-serif;color:#888">此正则暂无示例文本，可编辑正则补充。</div>';try{if(s.sampleText)preview=runRegexScriptLikeST(s,preview)}catch(e){preview=`<pre style="color:#b42318;padding:12px;white-space:pre-wrap">${esc(e.message)}</pre>`}f.srcdoc=preparePreviewDocument(preview,$('stripFenceCheck')?.checked!==false).document});
}
function setGalleryCategory(cat){galleryCategory=cat;document.querySelectorAll('[data-gallery-cat]').forEach(b=>b.classList.toggle('active',b.dataset.galleryCat===cat));renderGallery()}
function bindGalleryRenderedEvents(){
  const root=$('galleryGroupsRoot');if(!root)return;
  root.querySelectorAll('[data-gadd]').forEach(b=>b.onclick=()=>{addRegexToPipeline(b.dataset.gadd);toast('已加入工作台','ok')});
  root.querySelectorAll('[data-gedit]').forEach(b=>b.onclick=()=>openRegexEditor({type:'library',id:b.dataset.gedit}));
  root.querySelectorAll('[data-gmeta]').forEach(b=>b.onclick=()=>openGalleryItemEditor(b.dataset.gmeta));
  root.querySelectorAll('[data-gcopy]').forEach(b=>b.onclick=()=>duplicateRegex(b.dataset.gcopy));
  root.querySelectorAll('[data-gdel]').forEach(b=>b.onclick=()=>deleteRegex(b.dataset.gdel));
  root.querySelectorAll('[data-gdesign-add]').forEach(b=>b.onclick=()=>{addDesignToPipeline(b.dataset.gdesignAdd);toast('已加入设计工作台','ok')});
  root.querySelectorAll('[data-gdesign-edit]').forEach(b=>b.onclick=()=>openGalleryItemEditor(b.dataset.gdesignEdit,true));
  root.querySelectorAll('[data-gdesign-copy]').forEach(b=>b.onclick=()=>duplicateGalleryDesign(b.dataset.gdesignCopy));
  root.querySelectorAll('[data-gdesign-del]').forEach(b=>b.onclick=()=>deleteGalleryDesign(b.dataset.gdesignDel));
  root.querySelectorAll('[data-gallery-group-edit]').forEach(b=>b.onclick=()=>openGalleryGroupEditor(b.dataset.galleryGroupEdit));
  root.querySelectorAll('[data-gallery-group-collapse]').forEach(b=>b.onclick=()=>{const g=galleryGroupById(b.dataset.galleryGroupCollapse);if(g){g.collapsed=!g.collapsed;saveGallery();renderGallery()}});
  root.querySelectorAll('[data-gallery-group-delete]').forEach(b=>b.onclick=()=>deleteGalleryGroup(b.dataset.galleryGroupDelete));
  bindGalleryDragAndDrop();
}
function bindGalleryDragAndDrop(){
  const root=$('galleryGroupsRoot');if(!root)return;
  root.querySelectorAll('[data-drag-item]').forEach(h=>{h.ondragstart=e=>{galleryDragState={type:'item',id:h.dataset.dragItem};e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain','item:'+h.dataset.dragItem)};h.ondragend=()=>{galleryDragState=null;root.querySelectorAll('.drag-over,.drop-target').forEach(x=>x.classList.remove('drag-over','drop-target'))}});
  root.querySelectorAll('[data-drag-group]').forEach(h=>{h.ondragstart=e=>{galleryDragState={type:'group',id:h.dataset.dragGroup};e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain','group:'+h.dataset.dragGroup)};h.ondragend=()=>{galleryDragState=null;root.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'))}});
  root.querySelectorAll('[data-gallery-item]').forEach(card=>{card.ondragover=e=>{if(galleryDragState?.type!=='item'||galleryDragState.id===card.dataset.galleryItem)return;e.preventDefault();card.classList.add('drag-over')};card.ondragleave=()=>card.classList.remove('drag-over');card.ondrop=e=>{if(galleryDragState?.type!=='item')return;e.preventDefault();card.classList.remove('drag-over');const parent=card.closest('[data-drop-group]');moveGalleryItem(galleryDragState.id,parent?.dataset.dropGroup||GALLERY_UNGROUPED,card.dataset.galleryItem)}});
  root.querySelectorAll('[data-drop-group]').forEach(grid=>{grid.ondragover=e=>{if(galleryDragState?.type!=='item')return;e.preventDefault();grid.classList.add('drop-target')};grid.ondragleave=e=>{if(!grid.contains(e.relatedTarget))grid.classList.remove('drop-target')};grid.ondrop=e=>{if(galleryDragState?.type!=='item'||e.target.closest('[data-gallery-item]'))return;e.preventDefault();grid.classList.remove('drop-target');moveGalleryItem(galleryDragState.id,grid.dataset.dropGroup,null)}});
  root.querySelectorAll('[data-gallery-group]').forEach(box=>{box.ondragover=e=>{if(galleryDragState?.type!=='group'||box.dataset.galleryGroup===GALLERY_UNGROUPED||galleryDragState.id===box.dataset.galleryGroup)return;e.preventDefault();box.classList.add('drag-over')};box.ondragleave=()=>box.classList.remove('drag-over');box.ondrop=e=>{if(galleryDragState?.type!=='group'||box.dataset.galleryGroup===GALLERY_UNGROUPED)return;e.preventDefault();box.classList.remove('drag-over');moveGalleryGroup(galleryDragState.id,box.dataset.galleryGroup)}});
}
function moveGalleryItem(id,targetGroup,beforeId=null){const item=galleryItems.find(x=>x.id===id);if(!item)return;const gid=targetGroup===GALLERY_UNGROUPED?null:targetGroup;item.groupId=gid;const peers=galleryItems.filter(x=>x.id!==id&&(x.groupId||null)===(gid||null)).sort((a,b)=>(a.order||0)-(b.order||0));let pos=beforeId?peers.findIndex(x=>x.id===beforeId):peers.length;if(pos<0)pos=peers.length;peers.splice(pos,0,item);peers.forEach((x,i)=>x.order=i+1);saveGallery();renderGallery()}
function moveGalleryGroup(id,beforeId){const groups=[...galleryGroups].sort((a,b)=>(a.order||0)-(b.order||0)).filter(g=>g.id!==id);const moving=galleryGroupById(id);if(!moving)return;let pos=groups.findIndex(g=>g.id===beforeId);if(pos<0)pos=groups.length;groups.splice(pos,0,moving);groups.forEach((g,i)=>g.order=i+1);galleryGroups=groups;saveGallery();renderGallery()}

/* gallery CRUD & Gemini HTML import */
function populateGalleryGroupSelect(selected=null){const s=$('galleryItemGroupSelect');if(!s)return;s.innerHTML='<option value="">未分组</option>'+[...galleryGroups].sort((a,b)=>(a.order||0)-(b.order||0)).map(g=>`<option value="${esc(g.id)}" ${g.id===selected?'selected':''}>${esc(g.name)}</option>`).join('')}
function openGalleryGroupEditor(id=null){galleryGroupEditorId=id;const g=id?galleryGroupById(id):null;$('galleryGroupEditorTitle').textContent=g?'编辑方案组':'新建方案组';$('galleryGroupNameInput').value=g?.name||'新方案组';$('galleryGroupTagsInput').value=(g?.tags||[]).join(', ');$('galleryGroupDescInput').value=g?.description||'';showModal('galleryGroupEditorBackdrop')}
function saveGalleryGroupEditor(){const name=$('galleryGroupNameInput').value.trim();if(!name){toast('请输入方案组名称','error');return}if(galleryGroupEditorId){const g=galleryGroupById(galleryGroupEditorId);if(g){g.name=name;g.tags=parseTags($('galleryGroupTagsInput').value);g.description=$('galleryGroupDescInput').value.trim()}}else{galleryGroups.push(normalizeGalleryGroup({name,tags:parseTags($('galleryGroupTagsInput').value),description:$('galleryGroupDescInput').value.trim(),order:nextGalleryGroupOrder()}))}saveGallery();hideModal('galleryGroupEditorBackdrop');renderGallery();toast('方案组已保存','ok')}
function deleteGalleryGroup(id){const g=galleryGroupById(id);if(!g)return;const n=galleryItems.filter(x=>x.groupId===id).length;openConfirm({title:'删除方案组',message:`删除方案组「${g.name}」？`,description:`组内 ${n} 张卡片不会删除，会移动到“未分组”。`,confirmText:'删除组',danger:true,onConfirm:()=>{galleryItems.filter(x=>x.groupId===id).forEach(x=>{x.groupId=null;x.order=nextGalleryOrder(null)});galleryGroups=galleryGroups.filter(x=>x.id!==id);saveGallery();renderGallery();toast('方案组已删除')}})}
function openGalleryItemEditor(id=null,focusCode=false){
  galleryItemEditorId=id;galleryItemEditorDraft=null;let item=id?galleryItems.find(x=>x.id===id):null;
  if(!item){galleryItemEditorDraft=normalizeGalleryItem({kind:'design',title:'新设计方案',groupId:null,order:nextGalleryOrder(null)});item=galleryItemEditorDraft}
  const title=galleryItemTitle(item);$('galleryItemEditorTitle').textContent=item.kind==='regex'?'编辑展厅卡片信息':(id?'编辑设计方案':'新建设计方案');$('galleryItemTitleInput').value=title;$('galleryItemTagsInput').value=(item.tags||[]).join(', ');$('galleryItemDescInput').value=item.description||'';$('galleryItemSourceInput').value=item.sourceFile|| (item.kind==='regex'?'SillyTavern Regex Library':'手动创建');populateGalleryGroupSelect(item.groupId||'');$('galleryDesignCodeArea').classList.toggle('hidden',item.kind!=='design');$('galleryRegexItemTip').classList.toggle('hidden',item.kind!=='regex');if(item.kind==='design'){$('galleryItemHtmlInput').value=item.html||'';$('galleryItemCssInput').value=item.css||'';$('galleryItemJsInput').value=item.js||''}showModal('galleryItemEditorBackdrop');requestAnimationFrame(()=>{enhanceCodeEditors($('galleryItemEditorBackdrop'));['galleryItemHtmlInput','galleryItemCssInput','galleryItemJsInput'].forEach(x=>updateCodeHighlight($(x)));if(focusCode&&item.kind==='design')$('galleryItemHtmlInput').focus()})
}
function saveGalleryItemEditor(){
  let item=galleryItemEditorId?galleryItems.find(x=>x.id===galleryItemEditorId):galleryItemEditorDraft;if(!item)return;
  item.title=$('galleryItemTitleInput').value.trim();item.tags=parseTags($('galleryItemTagsInput').value);item.description=$('galleryItemDescInput').value.trim();const gid=$('galleryItemGroupSelect').value||null;if((item.groupId||null)!==gid){item.groupId=gid;item.order=nextGalleryOrder(gid)}if(item.kind==='design'){item.html=$('galleryItemHtmlInput').value;item.css=$('galleryItemCssInput').value;item.js=$('galleryItemJsInput').value}
  if(!galleryItemEditorId){galleryItems.push(normalizeGalleryItem(item));galleryItemEditorDraft=null}else{galleryItemEditorDraft=null}
  saveGallery();hideModal('galleryItemEditorBackdrop');renderGallery();toast('方案已保存','ok')
}
function duplicateGalleryDesign(id){const item=galleryItems.find(x=>x.id===id&&x.kind==='design');if(!item)return;const c=clone(item);c.id=uid();c.title=galleryItemTitle(item)+' 副本';c.order=nextGalleryOrder(c.groupId||null);galleryItems.push(normalizeGalleryItem(c));saveGallery();renderGallery();toast('已复制设计方案','ok')}
function deleteGalleryDesign(id){const item=galleryItems.find(x=>x.id===id&&x.kind==='design');if(!item)return;openConfirm({title:'删除设计方案',message:`删除「${galleryItemTitle(item)}」？`,description:'删除后将从灵感展厅移除，无法从本地恢复。',confirmText:'删除',danger:true,onConfirm:()=>{galleryItems=galleryItems.filter(x=>x.id!==id);saveGallery();renderGallery();toast('设计方案已删除')}})}
function stripHtmlExtension(name){return String(name||'').replace(/\.(?:html?|xhtml)$/i,'')}
function detectGeminiGallery(doc){
  const selectors=['.design-card','.card-box','.demo-block'];let best={selector:'',nodes:[]};for(const sel of selectors){const nodes=[...doc.querySelectorAll(sel)].filter(n=>!n.parentElement?.closest(sel));if(nodes.length>best.nodes.length)best={selector:sel,nodes}}
  if(best.nodes.length<2){const gallery=doc.querySelector('.gallery,.gallery-grid,.container');if(gallery){const nodes=[...gallery.children].filter(n=>n.nodeType===1&&(/方案|STYLE|款式/i.test(n.textContent||'')));if(nodes.length>best.nodes.length)best={selector:'auto:gallery-children',nodes}}}
  return best;
}
function textFrom(el,selectors){for(const s of selectors){const n=el.querySelector(s);const t=n?.textContent?.replace(/\s+/g,' ').trim();if(t)return t}return''}
function extractGeminiImportPlan(text,fileName){
  const doc=new DOMParser().parseFromString(text,'text/html');const found=detectGeminiGallery(doc);if(found.nodes.length<2)throw new Error('没有识别到多个方案卡片。建议让 Gemini 保留 .design-card / .card-box / .demo-block 或“方案 01”结构。');
  const css=[...doc.querySelectorAll('style')].map(x=>x.textContent||'').join('\n\n');const js=[...doc.querySelectorAll('script:not([src])')].map(x=>x.textContent||'').join('\n\n');const headExtra=[...doc.querySelectorAll('link[rel="stylesheet"]')].map(x=>x.outerHTML).join('\n');
  const items=found.nodes.map((node,i)=>{const idx=textFrom(node,['.design-idx','.card-idx','.demo-tag span:first-child'])||String(i+1).padStart(2,'0');const title=textFrom(node,['.design-name','.card-name','.demo-tag span:last-child'])||`方案 ${idx}`;const tagText=textFrom(node,['.design-tag','.card-tag']);const description=textFrom(node,['.design-desc','.desc-area','.demo-desc']);let preview=node.querySelector('.design-body,.preview-area');let html='';if(preview)html=preview.innerHTML;else{const c=node.cloneNode(true);c.querySelectorAll('.design-head,.card-head,.demo-tag,.design-desc,.desc-area,.demo-desc').forEach(x=>x.remove());html=c.innerHTML}return {title,tags:parseTags(tagText),description,html,css,js,headExtra,selected:true,idx}});
  const title=(doc.querySelector('title')?.textContent||stripHtmlExtension(fileName)).trim();return {fileName,title,selector:found.selector,items};
}
function queueGeminiHtmlFiles(files){const list=[...files];if(!list.length)return;pendingHtmlImportQueue.push(...list);if(!currentHtmlImport)openNextGeminiHtmlImport()}
function openNextGeminiHtmlImport(){if(currentHtmlImport||!pendingHtmlImportQueue.length)return;const file=pendingHtmlImportQueue.shift();const fr=new FileReader();fr.onload=()=>{try{currentHtmlImport=extractGeminiImportPlan(fr.result,file.name);renderHtmlImportModal();showModal('htmlImportBackdrop')}catch(e){toast(`${file.name}: ${e.message}`,'error');currentHtmlImport=null;openNextGeminiHtmlImport()}};fr.readAsText(file)}
function renderHtmlImportModal(){const p=currentHtmlImport;if(!p)return;$('htmlImportSummary').innerHTML=`文件：<b>${esc(p.fileName)}</b><br>识别结构：<code>${esc(p.selector)}</code> · 检测到 <b>${p.items.length}</b> 个方案。每张方案会保留原页面 CSS / JS 作为独立预览依赖。`;$('htmlImportGroupName').value=uniqueGalleryGroupName(p.title||stripHtmlExtension(p.fileName));$('htmlImportGroupTags').value='Gemini导入';$('htmlImportList').innerHTML=p.items.map((it,i)=>`<label class="html-import-row"><input type="checkbox" data-html-select="${i}" ${it.selected?'checked':''}><div><input class="input" data-html-title="${i}" value="${esc(it.title)}"><small>${esc(it.idx)} · ${esc(it.description||'无说明')}</small></div><input class="input tag-edit" data-html-tags="${i}" value="${esc((it.tags||[]).join(', '))}" placeholder="标签"></label>`).join('');const sync=()=>{$('htmlImportSelectedCount').textContent=p.items.filter(x=>x.selected).length+' 条'};$('htmlImportList').querySelectorAll('[data-html-select]').forEach(x=>x.onchange=()=>{p.items[Number(x.dataset.htmlSelect)].selected=x.checked;sync()});$('htmlImportList').querySelectorAll('[data-html-title]').forEach(x=>x.oninput=()=>p.items[Number(x.dataset.htmlTitle)].title=x.value);$('htmlImportList').querySelectorAll('[data-html-tags]').forEach(x=>x.oninput=()=>p.items[Number(x.dataset.htmlTags)].tags=parseTags(x.value));sync()}
function setHtmlImportSelection(value){if(!currentHtmlImport)return;currentHtmlImport.items.forEach(x=>x.selected=value);renderHtmlImportModal()}
function commitGeminiHtmlImport(){const p=currentHtmlImport;if(!p)return;const selected=p.items.filter(x=>x.selected);if(!selected.length){toast('至少选择一个方案','error');return}const group=normalizeGalleryGroup({name:uniqueGalleryGroupName($('htmlImportGroupName').value.trim()||p.title),tags:parseTags($('htmlImportGroupTags').value),description:`由 ${p.fileName} 自动拆分导入`,order:nextGalleryGroupOrder()});galleryGroups.push(group);selected.forEach((it,i)=>galleryItems.push(normalizeGalleryItem({kind:'design',groupId:group.id,title:it.title,tags:it.tags,description:it.description,sourceFile:p.fileName,html:it.html,css:it.css,js:it.js,headExtra:it.headExtra,order:i+1})));saveGallery();hideModal('htmlImportBackdrop');toast(`已拆分导入 ${selected.length} 个方案 → ${group.name}`,'ok');currentHtmlImport=null;renderGallery();openNextGeminiHtmlImport()}

/* pipeline */
function addRegexToPipeline(id){const s=regexLibrary.find(x=>x.id===id);if(!s)return;pipeline.push({instanceId:uid(),sourceId:s.id,script:clone(s),expanded:false});persistDraft();renderPipeline();renderPreview()}
function addGroupToPipeline(id){const g=regexGroups.find(x=>x.id===id);if(!g)return;let n=0;(g.regexIds||[]).forEach(r=>{const s=regexLibrary.find(x=>x.id===r);if(s){pipeline.push({instanceId:uid(),sourceId:s.id,script:clone(s),expanded:false});n++}});persistDraft();renderPipeline();renderPreview();toast(`已加入正则组「${g.name}」· ${n} 条`,'ok')}
function renderPipeline(){const box=$('pipelineList');$('pipelineCount').textContent=pipeline.length+' 条';$('pipelineSummary').textContent=`${pipeline.length} 条 · ${pipeline.filter(x=>!x.script.disabled).length} 条启用`;if(!pipeline.length){box.innerHTML='<div class="empty"><b>执行列表为空</b>点击上方“＋正则”或“＋正则组”。</div>';return}box.innerHTML=pipeline.map((it,i)=>{const s=it.script;return `<div class="regex-card ${s.disabled?'disabled':''} ${it.expanded?'open':''}" data-card-instance="${esc(it.instanceId)}"><div class="regex-row" data-expand="${esc(it.instanceId)}"><div class="order">${String(i+1).padStart(2,'0')}</div><div style="min-width:0"><div class="regex-name">${esc(s.scriptName)}</div><div class="regex-meta"><span class="badge accent">${esc(CATEGORY_LABELS[s.category]||s.category)}</span><span class="badge">${(s.placement||[]).map(x=>PLACEMENT_LABELS[x]||x).join('/')||'无范围'}</span>${it.sourceId?'<span class="badge ok">库副本</span>':'<span class="badge warn">独立副本</span>'}</div></div><div class="icon-actions" data-noexpand><button class="icon-btn" data-toggle="${esc(it.instanceId)}" title="启用/停用">${s.disabled?'○':'●'}</button><button class="icon-btn" data-up="${esc(it.instanceId)}" title="上移">↑</button><button class="icon-btn" data-down="${esc(it.instanceId)}" title="下移">↓</button><button class="icon-btn" data-remove="${esc(it.instanceId)}" title="移除">×</button></div></div><div class="regex-detail"><div class="inline-edit-label"><span>Find Regex / 查找</span><span>直接修改 · 自动保存工作副本</span></div><textarea class="inline-edit-area" data-code-mode="regex" data-inline-find="${esc(it.instanceId)}" spellcheck="false">${esc(s.findRegex||'')}</textarea><div class="inline-edit-label"><span>Replace With / 替换</span><span>拖动右下角可放大编辑区</span></div><textarea class="inline-edit-area replace" data-code-mode="html" data-inline-replace="${esc(it.instanceId)}" spellcheck="false">${esc(s.replaceString||'')}</textarea><div class="setting-line"><span class="badge">Trim ${s.trimStrings.length}</span><span class="badge">Macro ${s.substituteRegex}</span><span class="badge">Depth ${s.minDepth??'∞'} → ${s.maxDepth??'∞'}</span><span class="badge">RunEdit ${s.runOnEdit?'on':'off'}</span></div><div class="inline-edit-tip"><b>工作台修改不会自动覆盖正则库原件。</b> 确认后可保存回原件、另存为新正则，或导出当前副本。</div><div class="detail-actions"><button class="btn small primary" data-save-lib="${esc(it.instanceId)}">保存回正则库</button><button class="btn small" data-save-new="${esc(it.instanceId)}">另存为新正则</button><button class="btn small" data-export-work="${esc(it.instanceId)}">导出当前 ST JSON</button></div></div></div>`}).join('');enhanceCodeEditors(box);box.querySelectorAll('[data-expand]').forEach(r=>r.onclick=e=>{if(e.target.closest('[data-noexpand]'))return;const it=pipeline.find(x=>x.instanceId===r.dataset.expand);if(it){it.expanded=!it.expanded;persistDraft();renderPipeline()}});box.querySelectorAll('[data-toggle]').forEach(b=>b.onclick=e=>{e.stopPropagation();const it=pipeline.find(x=>x.instanceId===b.dataset.toggle);if(it){it.script.disabled=!it.script.disabled;persistDraft();renderPipeline();renderPreview()}});box.querySelectorAll('[data-up]').forEach(b=>b.onclick=e=>{e.stopPropagation();movePipeline(b.dataset.up,-1)});box.querySelectorAll('[data-down]').forEach(b=>b.onclick=e=>{e.stopPropagation();movePipeline(b.dataset.down,1)});box.querySelectorAll('[data-remove]').forEach(b=>b.onclick=e=>{e.stopPropagation();pipeline=pipeline.filter(x=>x.instanceId!==b.dataset.remove);persistDraft();renderPipeline();renderPreview()});box.querySelectorAll('[data-inline-find]').forEach(t=>t.oninput=()=>{const it=pipeline.find(x=>x.instanceId===t.dataset.inlineFind);if(!it)return;it.script.findRegex=t.value;persistDraft();renderPreview()});box.querySelectorAll('[data-inline-replace]').forEach(t=>t.oninput=()=>{const it=pipeline.find(x=>x.instanceId===t.dataset.inlineReplace);if(!it)return;it.script.replaceString=t.value;persistDraft();renderPreview()});box.querySelectorAll('[data-save-lib]').forEach(b=>b.onclick=()=>savePipelineToLibrary(b.dataset.saveLib,false));box.querySelectorAll('[data-save-new]').forEach(b=>b.onclick=()=>savePipelineToLibrary(b.dataset.saveNew,true));box.querySelectorAll('[data-export-work]').forEach(b=>b.onclick=()=>{const it=pipeline.find(x=>x.instanceId===b.dataset.exportWork);if(it)downloadJson(toSTRegex(it.script),`regex-${safeName(it.script.scriptName)}.json`)})}
function renderPipelineErrorOnly(){document.querySelectorAll('[data-card-instance]').forEach((el,i)=>el.classList.toggle('error',pipelineErrors.some(e=>e.index===i)))}
function movePipeline(id,d){const i=pipeline.findIndex(x=>x.instanceId===id);const j=i+d;if(i<0||j<0||j>=pipeline.length)return;[pipeline[i],pipeline[j]]=[pipeline[j],pipeline[i]];persistDraft();renderPipeline();renderPreview()}
function savePipelineToLibrary(instanceId,asNew){
  const it=pipeline.find(x=>x.instanceId===instanceId);if(!it)return;
  if(asNew||!it.sourceId){const s=clone(it.script);s.id=uid();const n=prompt('保存为新的正则名称：',s.scriptName+' 副本');if(!n)return;s.scriptName=n.trim()||s.scriptName;regexLibrary.push(s);it.sourceId=s.id;saveCore();persistDraft();renderLibrary();renderGallery();renderPipeline();toast('已另存到正则库','ok');return}
  const idx=regexLibrary.findIndex(x=>x.id===it.sourceId);if(idx<0)return savePipelineToLibrary(instanceId,true);
  openConfirm({title:'覆盖正则库原件',message:`用当前工作副本覆盖「${regexLibrary[idx].scriptName}」？`,description:'Find Regex、Replace With 和该正则的其他字段都会以当前工作副本为准。',confirmText:'覆盖保存',danger:true,onConfirm:()=>{const s=clone(it.script);s.id=it.sourceId;regexLibrary[idx]=s;saveCore();renderLibrary();renderGallery();toast('正则库已更新','ok')}})
}
function fillSamples(){const texts=pipeline.map(x=>x.script.sampleText).filter(Boolean);if(!texts.length){toast('当前执行列表没有示例文本');return}$('fullText').value=texts.join('\n\n');persistDraft();renderPreview()}

/* library CRUD */
function renderLibrary(){const q=$('librarySearch').value.trim().toLowerCase();const pf=$('libraryPlacementFilter').value;const box=$('libraryList');const arr=regexLibrary.filter(s=>(pf==='all'||s.placement.includes(Number(pf)))&&(!q||`${s.scriptName} ${s.tag} ${s.findRegex}`.toLowerCase().includes(q)));if(!arr.length){box.innerHTML='<div class="empty"><b>没有找到正则</b>新建或导入 SillyTavern 导出的 .json。</div>';return}box.innerHTML=arr.map(s=>`<div class="lib-card"><div class="lib-top"><div class="lib-main"><div class="lib-name">${esc(s.scriptName)}</div><div class="lib-sub">${esc(CATEGORY_LABELS[s.category]||s.category)}${s.tag?' · '+esc(s.tag):''} · ${(s.placement||[]).map(x=>PLACEMENT_LABELS[x]||x).join('/')||'无范围'}</div></div><span class="badge ${s.disabled?'danger':'ok'}">${s.disabled?'Disabled':'Enabled'}</span></div><div class="lib-code">${highlightSyntax(s.findRegex,'regex')}</div><div class="card-actions"><button class="btn small primary" data-lib-add="${esc(s.id)}">加入执行</button><button class="btn small" data-lib-edit="${esc(s.id)}">编辑</button><button class="btn small" data-lib-copy="${esc(s.id)}">复制</button><button class="btn small" data-lib-export="${esc(s.id)}">导出 ST</button><button class="btn small danger" data-lib-del="${esc(s.id)}">删除</button></div></div>`).join('');box.querySelectorAll('[data-lib-add]').forEach(b=>b.onclick=()=>addRegexToPipeline(b.dataset.libAdd));box.querySelectorAll('[data-lib-edit]').forEach(b=>b.onclick=()=>openRegexEditor({type:'library',id:b.dataset.libEdit}));box.querySelectorAll('[data-lib-copy]').forEach(b=>b.onclick=()=>duplicateRegex(b.dataset.libCopy));box.querySelectorAll('[data-lib-export]').forEach(b=>b.onclick=()=>exportSingleRegex(b.dataset.libExport));box.querySelectorAll('[data-lib-del]').forEach(b=>b.onclick=()=>deleteRegex(b.dataset.libDel))}
function duplicateRegex(id){const s=regexLibrary.find(x=>x.id===id);if(!s)return;const c=clone(s);c.id=uid();c.scriptName+=' 副本';regexLibrary.push(c);saveCore();renderLibrary();renderGallery();toast('已复制正则','ok')}
function deleteRegex(id){const s=regexLibrary.find(x=>x.id===id);if(!s)return;const used=regexGroups.filter(g=>(g.regexIds||[]).includes(id));openConfirm({title:'删除正则',message:`删除「${s.scriptName}」？`,description:'删除后无法从正则库恢复。',detail:used.length?`该正则还被 ${used.length} 个正则组引用；确认删除后，会同时从这些组中移除引用。`:'',confirmText:'删除',danger:true,onConfirm:()=>{regexLibrary=regexLibrary.filter(x=>x.id!==id);regexGroups.forEach(g=>g.regexIds=(g.regexIds||[]).filter(r=>r!==id));galleryItems=galleryItems.filter(x=>!(x.kind==='regex'&&x.regexId===id));saveCore();saveGallery();renderLibrary();renderGroups();renderGallery();toast('已删除正则')}})}
function exportSingleRegex(id){const s=regexLibrary.find(x=>x.id===id);if(s)downloadJson(toSTRegex(s),`regex-${safeName(s.scriptName)}.json`)}
function exportLibraryBackup(){downloadJson({format:'sillytavern-regex-workbench-library',version:4,regexes:regexLibrary,groups:regexGroups,exportedAt:new Date().toISOString()},'regex-library-backup.json')}
function repairFindRegexFields(text){
  return String(text).replace(/("findRegex"\s*:\s*")((?:\\.|[^"\\])*)(")/g,(all,head,value,tail)=>{
    let fixed='';
    for(let i=0;i<value.length;){
      if(value[i]!=='\\'){fixed+=value[i++];continue}
      let j=i;
      while(j<value.length&&value[j]==='\\')j++;
      const count=j-i;
      const next=value[j];
      if(count%2===1&&next!=='"')fixed+='\\'.repeat(count+1);
      else fixed+='\\'.repeat(count);
      i=j;
    }
    return head+fixed+tail;
  });
}
function repairRegexJsonEscapes(text){let out='',inside=false;for(let i=0;i<text.length;i++){const c=text[i];if(!inside){out+=c;if(c==='"')inside=true;continue}if(c==='"'){out+=c;inside=false;continue}if(c==='\\'){const n=text[i+1];if(n===undefined){out+='\\\\';continue}if('"\\/bfnrtu'.includes(n)){out+='\\'+n;i++;continue}out+='\\\\'+n;i++;continue}out+=c}return out}
function parseJsonLenient(text){
  try{return JSON.parse(text)}catch(first){
    try{return JSON.parse(repairFindRegexFields(text))}catch(targeted){
      try{return JSON.parse(repairRegexJsonEscapes(repairFindRegexFields(text)))}catch(second){throw new Error(`JSON 解析失败：${second.message}`)}
    }
  }
}
function regexPayload(data){
  if(Array.isArray(data))return {regexes:data,groupName:null,group:null,groups:null};
  if(data?.format==='sillytavern-regex-workbench-library')return {regexes:Array.isArray(data.regexes)?data.regexes:[],groups:Array.isArray(data.groups)?data.groups:[],group:null,groupName:null};
  if(data?.format==='sillytavern-regex-workbench-group'&&data.group)return {regexes:Array.isArray(data.regexes)?data.regexes:[],groupName:data.group.name||null,group:data.group,groups:null};
  if(Array.isArray(data?.regexes))return {regexes:data.regexes,groupName:data.group?.name||data.name||null,group:data.group||null,groups:Array.isArray(data.groups)?data.groups:null};
  if(Array.isArray(data?.scripts))return {regexes:data.scripts,groupName:data.group?.name||data.name||null,group:data.group||null,groups:Array.isArray(data.groups)?data.groups:null};
  if(Array.isArray(data?.data))return {regexes:data.data,groupName:data.group?.name||data.name||null,group:data.group||null,groups:Array.isArray(data.groups)?data.groups:null};
  if(data?.findRegex!==undefined||data?.pattern!==undefined)return {regexes:[data],groupName:null,group:null,groups:null};
  throw new Error('没有识别到 Regex 数据');
}
function regexSignature(raw){const s=normalizeRegex(raw);return JSON.stringify({scriptName:s.scriptName,findRegex:s.findRegex,replaceString:s.replaceString,trimStrings:s.trimStrings,placement:s.placement,disabled:s.disabled,markdownOnly:s.markdownOnly,promptOnly:s.promptOnly,runOnEdit:s.runOnEdit,substituteRegex:s.substituteRegex,minDepth:s.minDepth,maxDepth:s.maxDepth})}
function sameRegex(a,b){return regexSignature(a)===regexSignature(b)}
function importOneRegex(raw,{reuseExact=true}={}){
  const s=normalizeRegex(raw);
  const existingById=regexLibrary.find(x=>x.id===s.id);
  if(existingById){if(sameRegex(existingById,s))return {id:existingById.id,status:'reused'};s.id=uid()}
  if(reuseExact){const exact=regexLibrary.find(x=>regexSignature(x)===regexSignature(s));if(exact)return {id:exact.id,status:'reused'}}
  regexLibrary.push(s);return {id:s.id,status:'added'};
}
function uniqueGroupName(base){let root=base||'导入正则组',name=root,n=2;while(regexGroups.some(g=>g.name===name))name=`${root} (${n++})`;return name}
function importRegexFiles(files){
  [...files].forEach(file=>{const fr=new FileReader();fr.onload=()=>{try{
    const data=parseJsonLenient(fr.result);const p=regexPayload(data);
    let added=0,reused=0;const idMap={};
    for(const r of p.regexes){const oldId=String(r?.id||'');const result=importOneRegex(r);if(oldId)idMap[oldId]=result.id;result.status==='added'?added++:reused++}
    let restoredGroups=0;
    if(Array.isArray(p.groups)&&p.groups.length){
      for(const raw of p.groups){const ng=normalizeGroup(raw);ng.id=uid();ng.name=uniqueGroupName(ng.name);ng.regexIds=rawGroupMembers(raw).map(memberRefId).map(id=>idMap[id]||id).filter(id=>regexLibrary.some(x=>x.id===id));ng.expanded=false;regexGroups.push(ng);restoredGroups++}
    }
    saveCore();renderLibrary();renderGallery();renderGroups();
    toast(`已导入正则库：新增 ${added} 条${reused?` · 复用 ${reused} 条`:''}${restoredGroups?` · 恢复 ${restoredGroups} 个组`:''}`,'ok');
  }catch(e){toast(`${file.name}: ${e.message}`,'error')}};fr.readAsText(file)})
}

/* editor */
function openRegexEditor(target){regexEditorTarget=target;let s;if(target.type==='library')s=regexLibrary.find(x=>x.id===target.id);else if(target.type==='pipeline')s=pipeline.find(x=>x.instanceId===target.id)?.script;else s=normalizeRegex({id:uid(),scriptName:'新正则',placement:[2],markdownOnly:true,runOnEdit:true,category:'custom'});if(!s)return;s=clone(s);$('regexEditorTitle').textContent=target.type==='new'?'新建正则':(target.type==='pipeline'?'编辑工作副本':'编辑正则库原件');$('reName').value=s.scriptName;$('reCategory').value=s.category||'custom';$('reFind').value=s.findRegex;$('reReplace').value=s.replaceString;$('reTrim').value=(s.trimStrings||[]).join('\n');document.querySelectorAll('[name="rePlacement"]').forEach(c=>c.checked=(s.placement||[]).includes(Number(c.value)));$('reDisabled').checked=s.disabled;$('reRunEdit').checked=s.runOnEdit;$('reMarkdownOnly').checked=s.markdownOnly;$('rePromptOnly').checked=s.promptOnly;$('reSubstitute').value=String(s.substituteRegex||0);$('reMinDepth').value=s.minDepth??'';$('reMaxDepth').value=s.maxDepth??'';$('reTag').value=s.tag||'';$('reSample').value=s.sampleText||'';showModal('regexEditorBackdrop');requestAnimationFrame(()=>{enhanceCodeEditors($('regexEditorBackdrop'));updateCodeHighlight($('reFind'));updateCodeHighlight($('reReplace'))})}
function collectRegexEditor(){const placement=[...document.querySelectorAll('[name="rePlacement"]:checked')].map(x=>Number(x.value));return normalizeRegex({id:uid(),scriptName:$('reName').value.trim()||'未命名正则',findRegex:$('reFind').value,replaceString:$('reReplace').value,trimStrings:$('reTrim').value.split(/\r?\n/).filter(Boolean),placement,disabled:$('reDisabled').checked,markdownOnly:$('reMarkdownOnly').checked,promptOnly:$('rePromptOnly').checked,runOnEdit:$('reRunEdit').checked,substituteRegex:Number($('reSubstitute').value),minDepth:numOrNull($('reMinDepth').value),maxDepth:numOrNull($('reMaxDepth').value),category:$('reCategory').value,tag:$('reTag').value,sampleText:$('reSample').value})}
function saveRegexEditor(){const s=collectRegexEditor();if(!s.findRegex)toast('提示：Find Regex 为空，这条正则不会生效');if(regexEditorTarget.type==='new'){regexLibrary.push(s);saveCore();renderLibrary();renderGallery()}else if(regexEditorTarget.type==='library'){const i=regexLibrary.findIndex(x=>x.id===regexEditorTarget.id);if(i>=0){s.id=regexLibrary[i].id;regexLibrary[i]=s;saveCore();renderLibrary();renderGallery()}}else if(regexEditorTarget.type==='pipeline'){const it=pipeline.find(x=>x.instanceId===regexEditorTarget.id);if(it){s.id=it.script.id;it.script=s;persistDraft();renderPipeline();renderPreview()}}hideModal('regexEditorBackdrop');toast('已保存修改','ok')}

/* groups */
function renderGroups(){
  const q=$('groupSearch').value.trim().toLowerCase();const box=$('groupList');
  const arr=regexGroups.filter(g=>!q||`${g.name} ${g.description||''} ${(g.regexIds||[]).map(id=>regexLibrary.find(x=>x.id===id)?.scriptName||'').join(' ')}`.toLowerCase().includes(q));
  if(!arr.length){box.innerHTML='<div class="empty"><b>还没有正则组</b>“导入组”用于把一个 JSON 文件作为有序正则组导入；也可以手动新建。</div>';return}
  box.innerHTML=arr.map(g=>{
    const members=(g.regexIds||[]).map(id=>regexLibrary.find(x=>x.id===id)).filter(Boolean);
    const seq=members.slice(0,4).map((s,i)=>`<span class="seq-item"><span class="seq-num">${i+1}</span>${esc(s.scriptName)}</span>`).join('')+(members.length>4?`<span class="seq-item">… +${members.length-4}</span>`:'');
    return `<div class="group-card ${g.expanded?'open':''}"><div class="group-card-head" data-group-expand="${esc(g.id)}"><div class="group-top"><div class="group-main"><div class="group-name">${esc(g.name)}</div><div class="group-sub">${esc(g.description||'无说明')}</div><div class="group-sequence">${seq||'<span class="seq-item">组内为空</span>'}</div><div class="group-summary">执行顺序固定为 1 → ${Math.max(1,members.length)} · 点击展开查看 Find Regex</div></div><span class="badge accent">${members.length} 条</span></div></div><div class="group-members-list">${members.length?members.map((s,i)=>`<div class="group-member-view"><div class="num">${i+1}</div><div style="min-width:0"><b>${esc(s.scriptName)}</b><code>${highlightSyntax(s.findRegex,'regex')}</code></div></div>`).join(''):'<div class="empty" style="margin:3px"><b>组内为空</b></div>'}</div><div class="card-actions"><button class="btn small primary" data-group-add="${esc(g.id)}">整组加入工作台</button><button class="btn small" data-group-edit="${esc(g.id)}">编辑成员 / 顺序</button><button class="btn small" data-group-export="${esc(g.id)}">导出数组</button><button class="btn small danger" data-group-del="${esc(g.id)}">删除</button></div></div>`
  }).join('');
  box.querySelectorAll('[data-group-expand]').forEach(h=>h.onclick=()=>{const g=regexGroups.find(x=>x.id===h.dataset.groupExpand);if(g){g.expanded=!g.expanded;saveCore();renderGroups()}});
  box.querySelectorAll('[data-group-add]').forEach(b=>b.onclick=()=>addGroupToPipeline(b.dataset.groupAdd));
  box.querySelectorAll('[data-group-edit]').forEach(b=>b.onclick=()=>openGroupEditor(b.dataset.groupEdit));
  box.querySelectorAll('[data-group-export]').forEach(b=>b.onclick=()=>exportGroup(b.dataset.groupExport));
  box.querySelectorAll('[data-group-del]').forEach(b=>b.onclick=()=>deleteGroup(b.dataset.groupDel));
}
function openGroupEditor(id=null){
  groupEditorId=id;const g=id?regexGroups.find(x=>x.id===id):null;groupEditorMembers=g?clone(g.regexIds||[]):[];
  $('groupEditorTitle').textContent=g?'编辑正则组':'新建正则组';$('groupNameInput').value=g?.name||'新正则组';$('groupDescInput').value=g?.description||'';$('groupMemberSearch').value='';
  renderGroupEditorMembers();renderGroupAvailableList();showModal('groupEditorBackdrop');
}
function renderGroupEditorMembers(){
  const box=$('groupMemberList');$('groupMemberCount').textContent=`${groupEditorMembers.length} 条 · 从上到下执行`;
  if(!groupEditorMembers.length){box.innerHTML='<div class="empty" style="margin:0"><b>组内为空</b>可从右侧正则库加入，或直接导入 JSON 到本组。</div>';return}
  box.innerHTML=groupEditorMembers.map((id,i)=>{const s=regexLibrary.find(x=>x.id===id);return `<div class="member-row" draggable="true" data-member-index="${i}"><div class="member-drag" title="拖动排序">⋮⋮</div><div style="min-width:0"><b>${esc(s?.scriptName||'已删除正则')}</b><small style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${highlightSyntax(s?.findRegex||id,'regex')}</small></div><div class="member-actions"><button class="icon-btn" data-mup="${i}" title="上移" ${i===0?'disabled':''}>↑</button><button class="icon-btn" data-mdown="${i}" title="下移" ${i===groupEditorMembers.length-1?'disabled':''}>↓</button><button class="icon-btn" data-mdel="${i}" title="移除">×</button></div></div>`}).join('');
  box.querySelectorAll('[data-mup]').forEach(b=>b.onclick=()=>moveMember(Number(b.dataset.mup),-1));
  box.querySelectorAll('[data-mdown]').forEach(b=>b.onclick=()=>moveMember(Number(b.dataset.mdown),1));
  box.querySelectorAll('[data-mdel]').forEach(b=>b.onclick=()=>{groupEditorMembers.splice(Number(b.dataset.mdel),1);renderGroupEditorMembers();renderGroupAvailableList()});
  initGroupMemberDrag();
}
function initGroupMemberDrag(){
  let from=-1;
  $('groupMemberList').querySelectorAll('[data-member-index]').forEach(row=>{
    row.addEventListener('dragstart',e=>{from=Number(row.dataset.memberIndex);row.classList.add('dragging');e.dataTransfer.effectAllowed='move'});
    row.addEventListener('dragend',()=>{row.classList.remove('dragging');$('groupMemberList').querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));from=-1});
    row.addEventListener('dragover',e=>{e.preventDefault();row.classList.add('drag-over');e.dataTransfer.dropEffect='move'});
    row.addEventListener('dragleave',()=>row.classList.remove('drag-over'));
    row.addEventListener('drop',e=>{e.preventDefault();const to=Number(row.dataset.memberIndex);if(from<0||to<0||from===to)return;const [m]=groupEditorMembers.splice(from,1);groupEditorMembers.splice(to,0,m);renderGroupEditorMembers()});
  });
}
function renderGroupAvailableList(){
  const box=$('groupAvailableList');if(!box)return;const q=$('groupMemberSearch').value.trim().toLowerCase();
  const arr=regexLibrary.filter(s=>!q||`${s.scriptName} ${s.tag} ${s.findRegex}`.toLowerCase().includes(q));
  if(!arr.length){box.innerHTML='<div class="empty" style="margin:0"><b>没有匹配正则</b></div>';return}
  box.innerHTML=arr.map(s=>{const selected=groupEditorMembers.includes(s.id);return `<div class="group-available-row ${selected?'selected':''}"><div style="min-width:0"><b>${esc(s.scriptName)}</b><small>${esc(s.findRegex)}</small></div><button class="btn small ${selected?'':'primary'}" data-group-pick="${esc(s.id)}" ${selected?'disabled':''}>${selected?'已加入':'＋ 加入'}</button></div>`}).join('');
  box.querySelectorAll('[data-group-pick]').forEach(b=>b.onclick=()=>{if(!groupEditorMembers.includes(b.dataset.groupPick)){groupEditorMembers.push(b.dataset.groupPick);renderGroupEditorMembers();renderGroupAvailableList()}});
}
function moveMember(i,d){const j=i+d;if(j<0||j>=groupEditorMembers.length)return;[groupEditorMembers[i],groupEditorMembers[j]]=[groupEditorMembers[j],groupEditorMembers[i]];renderGroupEditorMembers()}
function saveGroup(){const name=$('groupNameInput').value.trim();if(!name){toast('请输入正则组名称','error');return}const clean=groupEditorMembers.filter(id=>regexLibrary.some(x=>x.id===id));if(groupEditorId){const g=regexGroups.find(x=>x.id===groupEditorId);if(g){g.name=name;g.description=$('groupDescInput').value.trim();g.regexIds=clone(clean)}}else{regexGroups.push({id:uid(),name,description:$('groupDescInput').value.trim(),regexIds:clone(clean),expanded:true})}saveCore();renderGroups();hideModal('groupEditorBackdrop');toast(`正则组已保存 · ${clean.length} 条`,'ok')}
function deleteGroup(id){const g=regexGroups.find(x=>x.id===id);if(!g)return;openConfirm({title:'删除正则组',message:`删除「${g.name}」？`,description:'只删除正则组及其顺序关系，组内正则原件仍保留在正则库。',confirmText:'删除组',danger:true,onConfirm:()=>{regexGroups=regexGroups.filter(x=>x.id!==id);saveCore();renderGroups()}})}
function exportGroup(id){const g=regexGroups.find(x=>x.id===id);if(!g)return;const regs=(g.regexIds||[]).map(r=>regexLibrary.find(x=>x.id===r)).filter(Boolean).map(toSTRegex);downloadJson(regs,`${safeName(g.name)}.json`)}
function orderedImportedRegexes(payload){
  let arr=Array.isArray(payload.regexes)?payload.regexes:[];const refs=rawGroupMembers(payload.group||{});
  if(refs.length){const map=new Map(arr.map(r=>[String(r?.id||''),r]));const ordered=[];const used=new Set();for(const ref of refs){if(typeof ref==='object'&&(ref.findRegex!==undefined||ref.pattern!==undefined)){ordered.push(ref);used.add(ref);continue}const hit=map.get(memberRefId(ref));if(hit){ordered.push(hit);used.add(hit)}}arr=[...ordered,...arr.filter(r=>!used.has(r))]}
  return arr;
}
function importGroupFiles(files){
  [...files].forEach(file=>{const fr=new FileReader();fr.onload=()=>{try{
    const data=parseJsonLenient(fr.result);const p=regexPayload(data);
    if(Array.isArray(p.groups)&&p.groups.length){
      const idMap={};let added=0,reused=0;
      for(const r of p.regexes){const oldId=String(r?.id||'');const result=importOneRegex(r);if(oldId)idMap[oldId]=result.id;result.status==='added'?added++:reused++}
      let made=0;for(const raw of p.groups){const ng=normalizeGroup(raw);const refs=rawGroupMembers(raw);ng.id=uid();ng.name=uniqueGroupName(ng.name);ng.regexIds=refs.map(memberRefId).map(id=>idMap[id]||id).filter(id=>regexLibrary.some(x=>x.id===id));ng.expanded=true;regexGroups.push(ng);made++}
      saveCore();renderGroups();renderLibrary();renderGallery();toast(`已导入 ${made} 个正则组 · 新增 ${added} 条正则${reused?` · 复用 ${reused} 条`:''}`,'ok');return;
    }
    const arr=orderedImportedRegexes(p);if(!arr.length)throw new Error('组文件中没有正则');
    const ids=[];let added=0,reused=0;for(const r of arr){const result=importOneRegex(r);ids.push(result.id);result.status==='added'?added++:reused++}
    const base=(p.groupName||file.name.replace(/\.json$/i,'')).trim()||'导入正则组';
    const g={id:uid(),name:uniqueGroupName(base),description:p.group?.description||`从 ${file.name} 导入`,regexIds:ids,expanded:true};regexGroups.push(g);
    saveCore();renderGroups();renderLibrary();renderGallery();toast(`已导入正则组「${g.name}」· ${ids.length} 条（新增 ${added}${reused?` / 复用 ${reused}`:''}）`,'ok');
  }catch(e){toast(`${file.name}: ${e.message}`,'error')}};fr.readAsText(file)})
}
function importRegexFilesIntoOpenGroup(files){
  [...files].forEach(file=>{const fr=new FileReader();fr.onload=()=>{try{
    const data=parseJsonLenient(fr.result);const p=regexPayload(data);const arr=orderedImportedRegexes(p);if(!arr.length)throw new Error('文件中没有正则');
    let addedToGroup=0,newLib=0,reused=0;
    for(const r of arr){const result=importOneRegex(r);result.status==='added'?newLib++:reused++;if(!groupEditorMembers.includes(result.id)){groupEditorMembers.push(result.id);addedToGroup++}}
    saveCore();renderLibrary();renderGallery();renderGroupEditorMembers();renderGroupAvailableList();toast(`${file.name}：加入本组 ${addedToGroup} 条 · 正则库新增 ${newLib}${reused?` · 复用 ${reused}`:''}`,'ok');
  }catch(e){toast(`${file.name}: ${e.message}`,'error')}};fr.readAsText(file)})
}

/* chooser */
function openChooser(mode){chooserMode=mode;$('chooserTitle').textContent=mode==='regex'?'从正则库添加':'选择正则组';$('chooserSearch').value='';renderChooser();showModal('chooserBackdrop')}
function renderChooser(){
  const q=$('chooserSearch').value.trim().toLowerCase();const box=$('chooserList');
  if(chooserMode==='group'){
    const arr=regexGroups.filter(g=>!q||`${g.name} ${g.description||''}`.toLowerCase().includes(q));
    box.innerHTML=arr.length?arr.map(g=>`<div class="choose-row"><div><b>${esc(g.name)}</b><small>${(g.regexIds||[]).length} 条 · ${esc(g.description||'')}</small></div><button class="btn small primary" data-choose-group="${esc(g.id)}">添加整组</button></div>`).join(''):'<div class="empty"><b>没有正则组</b>先在“正则组”页签新建或导入。</div>';
    box.querySelectorAll('[data-choose-group]').forEach(b=>b.onclick=()=>{addGroupToPipeline(b.dataset.chooseGroup);hideModal('chooserBackdrop')});return;
  }
  const arr=regexLibrary.filter(s=>!q||`${s.scriptName} ${s.tag} ${s.findRegex}`.toLowerCase().includes(q));
  box.innerHTML=arr.length?arr.map(s=>`<div class="choose-row"><div style="min-width:0"><b>${esc(s.scriptName)}</b><small>${esc(s.findRegex)}</small></div><button class="btn small primary" data-choose-regex="${esc(s.id)}">加入执行</button></div>`).join(''):'<div class="empty"><b>没有匹配正则</b></div>';
  box.querySelectorAll('[data-choose-regex]').forEach(b=>b.onclick=()=>{addRegexToPipeline(b.dataset.chooseRegex);hideModal('chooserBackdrop')});
}

/* export/import */
function downloadJson(data,name){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
function exportPipelineRegexes(){
  if(!pipeline.length){
    toast('执行列表为空');
    return;
  }

  // SillyTavern 官方 Regex 导入器接受：
  // 1) 单个 RegexScript 对象
  // 2) RegexScript 对象数组
  // 因此这里必须直接导出数组，不能套工作台自定义 wrapper。
  const scripts=pipeline.map(x=>toSTRegex(x.script));

  // 导出前做一次最基本的兼容检查，避免名称为空或 Find Regex 无法编译。
  const invalid=scripts
    .map((s,i)=>({
      index:i,
      name:s.scriptName,
      reason:!String(s.scriptName||'').trim()
        ?'缺少 scriptName'
        :(!regexFromStringLikeST(s.findRegex)?'Find Regex 无法编译':'')
    }))
    .filter(x=>x.reason);

  if(invalid.length){
    toast(
      '无法导出：'+invalid.map(x=>`${x.index+1}. ${x.name||'未命名'}（${x.reason}）`).join('；'),
      'error'
    );
    return;
  }

  downloadJson(
    scripts,
    `st-regex-${safeName($('workspaceName').value)}.json`
  );
  toast(`已导出 ${scripts.length} 条 · 可直接导入 SillyTavern Regex`,'ok');
}


/* ================= v5.6 Sidebar / Filters / Tags ================= */
function setSidebarCollapsed(collapsed){const side=$('appSidebar');if(!side)return;side.classList.toggle('collapsed',Boolean(collapsed));$('sidebarCollapseBtn').textContent=collapsed?'›':'‹';localStorage.setItem(KEYS.sidebar,collapsed?'1':'0');requestAnimationFrame(applyPaneRatios)}
function initGalleryFilterBehavior(){
  const shell=$('galleryFilterShell'),body=$('galleryPage')?.querySelector('.gallery-body');if(!shell||!body)return;
  let last=0;
  body.addEventListener('scroll',()=>{const y=body.scrollTop,dy=y-last;if(y<20)shell.classList.remove('auto-hidden');else if(dy>8)shell.classList.add('auto-hidden');else if(dy<-8)shell.classList.remove('auto-hidden');last=y},{passive:true});
  [$('galleryFilterRow'),$('galleryTagRow')].filter(Boolean).forEach(row=>row.addEventListener('wheel',e=>{if(row.scrollWidth<=row.clientWidth)return;if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();row.scrollLeft+=e.deltaY}},{passive:false}));
}
function toggleGalleryFilterExpanded(){const shell=$('galleryFilterShell');if(!shell)return;const on=shell.classList.toggle('expanded');shell.classList.remove('auto-hidden');$('galleryFilterToggleBtn').textContent=on?'收起':'展开'}
function explicitGalleryTags(){const tags=new Set(customGalleryTags);galleryGroups.forEach(g=>(g.tags||[]).forEach(t=>tags.add(t)));galleryItems.forEach(i=>(i.tags||[]).forEach(t=>tags.add(t)));regexLibrary.forEach(s=>parseTags(s.tag).forEach(t=>tags.add(t)));return [...tags].sort((a,b)=>a.localeCompare(b,'zh-CN'))}
function renderTagManager(){const list=$('tagManagerList');if(!list)return;const tags=explicitGalleryTags();if(!tags.length){list.innerHTML='<div class="empty"><b>暂无标签</b></div>';return}list.innerHTML=tags.map(t=>{let count=0;galleryGroups.forEach(g=>count+=(g.tags||[]).includes(t));galleryItems.forEach(i=>count+=(i.tags||[]).includes(t));regexLibrary.forEach(r=>count+=parseTags(r.tag).includes(t));return `<div class="tag-manager-row"><div><b>${esc(t)}</b><small>${count?`使用 ${count} 次`:'未使用'}</small></div><button class="btn small danger" data-tag-delete="${esc(t)}">删除</button></div>`}).join('');list.querySelectorAll('[data-tag-delete]').forEach(b=>b.onclick=()=>deleteGalleryTag(b.dataset.tagDelete))}
function addGalleryTag(){const t=$('tagManagerInput').value.trim();if(!t)return;if(!customGalleryTags.includes(t))customGalleryTags.push(t);$('tagManagerInput').value='';saveGallery();renderTagManager();renderGallery();}
function deleteGalleryTag(tag){openConfirm({title:'删除标签',message:`删除标签「${tag}」？`,confirmText:'删除',danger:true,onConfirm:()=>{customGalleryTags=customGalleryTags.filter(t=>t!==tag);galleryGroups.forEach(g=>g.tags=(g.tags||[]).filter(t=>t!==tag));galleryItems.forEach(i=>i.tags=(i.tags||[]).filter(t=>t!==tag));regexLibrary.forEach(r=>{const xs=parseTags(r.tag).filter(t=>t!==tag);r.tag=xs.join(', ')});if(galleryTagFilter===tag)galleryTagFilter='all';saveCore();saveGallery();renderTagManager();renderGallery();renderLibrary();}})}

/* ================= v5.6 Design workbench ================= */
function syncDesignDraftFromInputs(){if(!$('designExtraHtml'))return;designDraft={html:$('designExtraHtml').value||'',css:$('designExtraCss').value||'',js:$('designExtraJs').value||''}}
function syncDesignInputsFromDraft(){if(!$('designExtraHtml'))return;$('designExtraHtml').value=designDraft.html||'';$('designExtraCss').value=designDraft.css||'';$('designExtraJs').value=designDraft.js||'';['designExtraHtml','designExtraCss','designExtraJs'].forEach(id=>{const el=$(id);if(el)updateCodeHighlight(el)})}
function switchDesignCodeTab(tab){activeDesignCodeTab=tab;document.querySelectorAll('.design-code-tab').forEach(b=>b.classList.toggle('active',b.dataset.designCodeTab===tab));document.querySelectorAll('[data-design-code-panel]').forEach(p=>p.classList.toggle('active',p.dataset.designCodePanel===tab));requestAnimationFrame(()=>{const map={html:'designExtraHtml',css:'designExtraCss',js:'designExtraJs'};updateCodeHighlight($(map[tab]))})}
function switchDesignManagerTab(tab){document.querySelectorAll('.design-manager-tab').forEach(b=>b.classList.toggle('active',b.dataset.designTab===tab));$('designTabPipeline').classList.toggle('active',tab==='pipeline');$('designTabLibrary').classList.toggle('active',tab==='library');if(tab==='library')renderDesignLibrary();else renderDesignPipeline()}
function switchStudioMode(mode,persist=true){
  studioMode=mode==='design'?'design':'regex';if(persist)localStorage.setItem(KEYS.studioMode,studioMode);
  document.querySelectorAll('[data-studio-mode]').forEach(b=>b.classList.toggle('active',b.dataset.studioMode===studioMode));
  const design=studioMode==='design';$('regexTextView').classList.toggle('hidden',design);$('designTextView').classList.toggle('hidden',!design);$('regexManagerView').classList.toggle('hidden',design);$('designManagerView').classList.toggle('hidden',!design);$('regexPaneActions').classList.toggle('hidden',design);$('designPaneActions').classList.toggle('hidden',!design);
  $('textPaneTitle').textContent=design?'② 组合代码':'② 完整文本';$('managerPaneTitle').textContent=design?'③ 设计组件':'③ 正则 / 正则组';$('pipelineSummary').classList.toggle('hidden',design);
  if(design){syncDesignInputsFromDraft();renderDesignPipeline();renderDesignLibrary();}else{renderPipeline();renderLibrary();renderGroups();}
  renderPreview();if(persist)persistDraft();
}
function addDesignToPipeline(id){const item=galleryItems.find(x=>x.id===id&&x.kind==='design');if(!item)return;designPipeline.push({instanceId:uid(),sourceId:item.id,item:clone(item),expanded:false});renderDesignPipeline();renderDesignPreview();persistDraft()}
function moveDesignPipeline(instanceId,dir){const i=designPipeline.findIndex(x=>x.instanceId===instanceId);const j=i+dir;if(i<0||j<0||j>=designPipeline.length)return;[designPipeline[i],designPipeline[j]]=[designPipeline[j],designPipeline[i]];renderDesignPipeline();renderDesignPreview();persistDraft()}
function toggleDesignPipeline(instanceId){const p=designPipeline.find(x=>x.instanceId===instanceId);if(!p)return;p.expanded=!p.expanded;renderDesignPipeline();persistDraft()}
function renderDesignPipeline(){const box=$('designPipelineList');if(!box)return;$('designPipelineCount').textContent=designPipeline.length+' 条';if(!designPipeline.length){box.innerHTML='<div class="empty"><b>组合列表为空</b></div>';return}box.innerHTML=designPipeline.map((p,i)=>`<div class="design-pipeline-card ${p.expanded?'open':''}" data-design-instance="${esc(p.instanceId)}"><div class="design-pipeline-row" data-design-toggle="${esc(p.instanceId)}"><div class="order">${String(i+1).padStart(2,'0')}</div><div style="min-width:0"><div class="regex-name">${esc(p.item.title||'未命名设计')}</div><div class="regex-meta">${(p.item.tags||[]).slice(0,3).map(t=>`<span class="badge">${esc(t)}</span>`).join('')}</div></div><div class="icon-actions"><button class="icon-btn" data-design-up="${esc(p.instanceId)}" title="上移">↑</button><button class="icon-btn" data-design-down="${esc(p.instanceId)}" title="下移">↓</button><button class="icon-btn" data-design-remove="${esc(p.instanceId)}" title="移除">×</button><span class="design-disclosure">${p.expanded?'⌃':'⌄'}</span></div></div>${p.expanded?`<div class="design-pipeline-detail"><div class="inline-edit-label"><span>HTML</span><span>当前组合副本</span></div><textarea class="inline-edit-area design-inline-editor" data-design-field="html" data-code-mode="html" data-design-edit="${esc(p.instanceId)}" spellcheck="false">${esc(p.item.html||'')}</textarea><div class="inline-edit-label"><span>CSS</span></div><textarea class="inline-edit-area design-inline-editor" data-design-field="css" data-code-mode="css" data-design-edit="${esc(p.instanceId)}" spellcheck="false">${esc(p.item.css||'')}</textarea><div class="inline-edit-label"><span>JS</span></div><textarea class="inline-edit-area design-inline-editor" data-design-field="js" data-code-mode="js" data-design-edit="${esc(p.instanceId)}" spellcheck="false">${esc(p.item.js||'')}</textarea><div class="inline-actions"><button class="btn small" data-design-reset="${esc(p.instanceId)}">从源方案恢复</button><button class="btn small primary" data-design-save-source="${esc(p.instanceId)}">保存回源方案</button></div></div>`:''}</div>`).join('');
box.querySelectorAll('[data-design-toggle]').forEach(row=>row.onclick=e=>{if(e.target.closest('button,textarea,input,select'))return;toggleDesignPipeline(row.dataset.designToggle)});
box.querySelectorAll('[data-design-up]').forEach(b=>b.onclick=e=>{e.stopPropagation();moveDesignPipeline(b.dataset.designUp,-1)});box.querySelectorAll('[data-design-down]').forEach(b=>b.onclick=e=>{e.stopPropagation();moveDesignPipeline(b.dataset.designDown,1)});box.querySelectorAll('[data-design-remove]').forEach(b=>b.onclick=e=>{e.stopPropagation();designPipeline=designPipeline.filter(x=>x.instanceId!==b.dataset.designRemove);renderDesignPipeline();renderDesignPreview();persistDraft()});
box.querySelectorAll('[data-design-edit]').forEach(t=>t.addEventListener('input',()=>{const p=designPipeline.find(x=>x.instanceId===t.dataset.designEdit);if(!p)return;p.item[t.dataset.designField]=t.value;updateCodeHighlight(t);persistDraft();renderDesignPreview()}));
box.querySelectorAll('[data-design-reset]').forEach(b=>b.onclick=()=>{const p=designPipeline.find(x=>x.instanceId===b.dataset.designReset);const src=galleryItems.find(x=>x.id===p?.sourceId&&x.kind==='design');if(!p||!src)return;p.item=clone(src);p.expanded=true;renderDesignPipeline();renderDesignPreview();persistDraft()});
box.querySelectorAll('[data-design-save-source]').forEach(b=>b.onclick=()=>{const p=designPipeline.find(x=>x.instanceId===b.dataset.designSaveSource);const src=galleryItems.find(x=>x.id===p?.sourceId&&x.kind==='design');if(!p||!src)return;openConfirm({title:'保存回源方案',message:`用当前工作台修改覆盖「${src.title||'未命名设计'}」？`,confirmText:'覆盖保存',onConfirm:()=>{const keep={id:src.id,kind:'design',groupId:src.groupId,order:src.order,createdAt:src.createdAt};Object.assign(src,clone(p.item),keep,{updatedAt:new Date().toISOString()});saveGalleryState();renderGallery();renderDesignLibrary();toast('已保存回源方案','ok')}})});
requestAnimationFrame(()=>enhanceCodeEditors(box))}
function renderDesignLibrary(){const box=$('designLibraryList');if(!box)return;const q=($('designLibrarySearch')?.value||'').trim().toLowerCase();const arr=galleryItems.filter(i=>i.kind==='design'&&(!q||galleryItemSearchText(i).includes(q))).sort((a,b)=>(a.order||0)-(b.order||0));if(!arr.length){box.innerHTML='<div class="empty"><b>没有设计方案</b></div>';return}box.innerHTML=arr.map(i=>`<div class="lib-card"><div class="lib-top"><div class="lib-main"><div class="lib-name">${esc(galleryItemTitle(i))}</div><div class="lib-sub">${galleryItemTags(i).slice(0,4).map(esc).join(' · ')}</div></div><button class="btn small primary" data-design-lib-add="${esc(i.id)}">加入</button></div><div class="design-lib-preview">${highlightSyntax((i.html||'').replace(/\s+/g,' ').slice(0,180),'html')}</div></div>`).join('');box.querySelectorAll('[data-design-lib-add]').forEach(b=>b.onclick=()=>addDesignToPipeline(b.dataset.designLibAdd))}
function buildDesignWorkbenchDocument(){syncDesignDraftFromInputs();const css=[...new Set(designPipeline.map(p=>p.item.css||'').filter(Boolean))].join('\n\n');const heads=[...new Set(designPipeline.map(p=>p.item.headExtra||'').filter(Boolean))].join('\n');const html=designPipeline.map(p=>`<div class="design-workbench-item" data-design-source="${esc(p.sourceId||'')}">${p.item.html||''}</div>`).join('\n')+(designDraft.html||'');const scripts=[...new Set(designPipeline.map(p=>p.item.js||'').filter(Boolean))];if(designDraft.js)scripts.push(designDraft.js);const js=scripts.join('\n\n').replace(/<\/script/gi,'<\\/script');const scriptBlock=js?('<scr'+'ipt>'+js+'</scr'+'ipt>'):'';return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">${heads}<style>${css}\n${designDraft.css||''}</style></head><body>${html}${scriptBlock}</body></html>`}
function renderDesignPreview(){if(!$('previewFrame'))return;const doc=buildDesignWorkbenchDocument();$('previewFrame').srcdoc=doc;$('previewStats').textContent=`${designPipeline.length} 个组件`;$('previewStatus').className='ok';$('previewStatus').textContent='设计组合';$('previewTraceTabs')?.classList.add('hidden');}

/* pane widths */
function applyPaneRatios(){if(innerWidth<=980)return;const grid=$('studioGrid');if(!grid)return;const total=grid.clientWidth-14;let r=paneRatios;const sum=r.reduce((a,b)=>a+b,0)||1;r=r.map(x=>x/sum);const widths=r.map(x=>Math.round(total*x));grid.style.gridTemplateColumns=`${widths[0]}px 7px ${widths[1]}px 7px ${widths[2]}px`}
function initSplitter(id,leftId,rightId,index){const sp=$(id);sp.addEventListener('pointerdown',e=>{if(innerWidth<=980)return;e.preventDefault();sp.classList.add('dragging');sp.setPointerCapture(e.pointerId);const left=$(leftId),right=$(rightId),grid=$('studioGrid');const startX=e.clientX,l0=left.getBoundingClientRect().width,r0=right.getBoundingClientRect().width;const minL=index===0?240:280,minR=index===0?280:340;const move=ev=>{let d=ev.clientX-startX;d=Math.max(minL-l0,Math.min(r0-minR,d));const lw=l0+d,rw=r0-d;const cols=grid.style.gridTemplateColumns.split(' ');if(index===0){cols[0]=lw+'px';cols[2]=rw+'px'}else{cols[2]=lw+'px';cols[4]=rw+'px'}grid.style.gridTemplateColumns=cols.join(' ')};const up=ev=>{sp.classList.remove('dragging');sp.releasePointerCapture(ev.pointerId);sp.removeEventListener('pointermove',move);sp.removeEventListener('pointerup',up);const a=$('previewPane').getBoundingClientRect().width,b=$('textPane').getBoundingClientRect().width,c=$('regexPane').getBoundingClientRect().width,sum=a+b+c;paneRatios=[a/sum,b/sum,c/sum];localStorage.setItem(KEYS.widths,JSON.stringify(paneRatios));persistDraft()};sp.addEventListener('pointermove',move);sp.addEventListener('pointerup',up)})}

function switchPage(page){
  const isGallery=page==='gallery';
  const gallery=$('galleryPage');
  const studio=$('studioPage');
  gallery.style.display=isGallery?'flex':'none';
  studio.style.display=isGallery?'none':'flex';
  $('navGallery').classList.toggle('active',isGallery);
  $('navStudio').classList.toggle('active',!isGallery);
  if(isGallery){
    renderGallery();
  }else{
    if(studioMode==='design'){renderDesignPipeline();renderDesignLibrary()}else renderPipeline();
    renderPreview();
    requestAnimationFrame(applyPaneRatios);
  }
}
function switchManagerTab(tab){
  const target={pipeline:'tabPipeline',library:'tabLibrary',groups:'tabGroups'}[tab]||'tabPipeline';
  document.querySelectorAll('.manager-tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.tab===tab));
  document.querySelectorAll('.tab-panel').forEach(panel=>panel.classList.toggle('active',panel.id===target));
  if(tab==='library')renderLibrary();
  else if(tab==='groups')renderGroups();
  else renderPipeline();
}
const modalStack=[];
let pendingConfirm=null;
function refreshModalLayers(){modalStack.forEach((id,i)=>{const el=$(id);if(el)el.style.zIndex=String(1000+i*20)});$('toastWrap').style.zIndex=String(1000+modalStack.length*20+20)}
function showModal(id){const el=$(id);if(!el)return;const old=modalStack.indexOf(id);if(old>=0)modalStack.splice(old,1);modalStack.push(id);el.classList.add('show');refreshModalLayers();requestAnimationFrame(()=>enhanceCodeEditors(el))}
function hideModal(id){const el=$(id);if(el){el.classList.remove('show');el.style.zIndex=''}const i=modalStack.indexOf(id);if(i>=0)modalStack.splice(i,1);if(id==='confirmBackdrop')pendingConfirm=null;refreshModalLayers()}
function openConfirm({title='请确认',message='确认执行此操作？',description='',detail='',confirmText='确认',danger=false,onConfirm=null}={}){pendingConfirm=typeof onConfirm==='function'?onConfirm:null;$('confirmTitle').textContent=title;$('confirmMessage').textContent=message;$('confirmDescription').textContent=description||'';$('confirmDetail').textContent=detail||'';$('confirmDetail').classList.toggle('hidden',!detail);$('confirmOkBtn').textContent=confirmText;$('confirmIcon').textContent=danger?'!':'?';$('confirmModal').classList.toggle('is-danger',danger);showModal('confirmBackdrop')}
function acceptConfirm(){const action=pendingConfirm;pendingConfirm=null;hideModal('confirmBackdrop');if(action)action()}
function cancelConfirm(){pendingConfirm=null;hideModal('confirmBackdrop')}
function renderAll(){renderWorkspaceSelect();renderPipeline();renderLibrary();renderGroups();renderDesignPipeline();renderDesignLibrary();renderPreview();renderGallery();enhanceCodeEditors(document)}

function bind(){
  $('navGallery').onclick=()=>switchPage('gallery');
  $('navStudio').onclick=()=>switchPage('studio');
  $('sidebarCollapseBtn').onclick=()=>setSidebarCollapsed(!$('appSidebar').classList.contains('collapsed'));
  document.querySelectorAll('[data-studio-mode]').forEach(b=>b.onclick=()=>switchStudioMode(b.dataset.studioMode));
  document.querySelectorAll('.design-code-tab').forEach(b=>b.onclick=()=>switchDesignCodeTab(b.dataset.designCodeTab));
  document.querySelectorAll('.design-manager-tab').forEach(b=>b.onclick=()=>switchDesignManagerTab(b.dataset.designTab));
  $('quickAddDesignBtn').onclick=()=>{switchDesignManagerTab('library');$('designLibrarySearch').focus()};
  $('designLibrarySearch').oninput=renderDesignLibrary;
  $('clearDesignPipelineBtn').onclick=()=>{if(!designPipeline.length)return;openConfirm({title:'清空设计组合',message:`移除当前 ${designPipeline.length} 个设计组件？`,confirmText:'清空',danger:true,onConfirm:()=>{designPipeline=[];renderDesignPipeline();renderDesignPreview();persistDraft()}})};
  ['designExtraHtml','designExtraCss','designExtraJs'].forEach(id=>$(id).addEventListener('input',()=>{syncDesignDraftFromInputs();updateCodeHighlight($(id));persistDraft();renderDesignPreview()}));
  $('gallerySearch').oninput=renderGallery;
  $('galleryFilterToggleBtn').onclick=toggleGalleryFilterExpanded;
  $('galleryTagManageBtn').onclick=()=>{renderTagManager();showModal('tagManagerBackdrop');setTimeout(()=>$('tagManagerInput').focus(),0)};
  $('tagManagerAddBtn').onclick=addGalleryTag;
  $('tagManagerInput').addEventListener('keydown',e=>{if(e.key==='Enter')addGalleryTag()});
  document.querySelectorAll('[data-gallery-cat]').forEach(b=>b.onclick=()=>setGalleryCategory(b.dataset.galleryCat));
  $('galleryNewBtn').onclick=()=>openGalleryItemEditor(null,true);
  $('galleryNewGroupBtn').onclick=()=>openGalleryGroupEditor();
  $('galleryHtmlImportBtn').onclick=()=>$('galleryHtmlFileInput').click();
  $('galleryHtmlFileInput').onchange=e=>{queueGeminiHtmlFiles(e.target.files);e.target.value=''};
  $('galleryImportBtn').onclick=()=>$('regexFileInput').click();
  $('saveGalleryGroupBtn').onclick=saveGalleryGroupEditor;
  $('saveGalleryItemBtn').onclick=saveGalleryItemEditor;
  $('htmlImportSelectAllBtn').onclick=()=>setHtmlImportSelection(true);
  $('htmlImportSelectNoneBtn').onclick=()=>setHtmlImportSelection(false);
  $('confirmHtmlImportBtn').onclick=commitGeminiHtmlImport;
  
  document.querySelectorAll('.manager-tab').forEach(b=>b.onclick=()=>switchManagerTab(b.dataset.tab));
  $('librarySearch').oninput=renderLibrary;
  $('libraryPlacementFilter').onchange=renderLibrary;
  $('groupSearch').oninput=renderGroups;
  
  $('quickAddRegexBtn').onclick=()=>openChooser('regex');
  $('quickAddGroupBtn').onclick=()=>openChooser('group');
  $('chooserSearch').oninput=renderChooser;
  $('newRegexBtn').onclick=()=>openRegexEditor({type:'new'});
  $('saveRegexEditorBtn').onclick=saveRegexEditor;
  $('newGroupBtn').onclick=()=>openGroupEditor();
  $('saveGroupBtn').onclick=saveGroup;
  $('confirmOkBtn').onclick=acceptConfirm;
  $('confirmCancelBtn').onclick=cancelConfirm;
  $('confirmCloseBtn').onclick=cancelConfirm;
  $('groupMemberSearch').oninput=renderGroupAvailableList;
  $('groupImportMemberBtn').onclick=()=>$('groupMemberFileInput').click();
  $('groupMemberFileInput').onchange=e=>{importRegexFilesIntoOpenGroup(e.target.files);e.target.value=''};
  $('groupClearMembersBtn').onclick=()=>{if(!groupEditorMembers.length)return;openConfirm({title:'清空组成员',message:'移除当前组内的全部正则？',description:'只影响正在编辑的组，不会删除正则库原件。',confirmText:'清空',danger:true,onConfirm:()=>{groupEditorMembers=[];renderGroupEditorMembers();renderGroupAvailableList()}})};
  
  $('clearPipelineBtn').onclick=()=>{if(!pipeline.length)return;openConfirm({title:'清空执行列表',message:`移除当前 ${pipeline.length} 条执行正则？`,description:'只清空工作台执行列表，不会删除正则库或正则组。',confirmText:'清空',danger:true,onConfirm:()=>{pipeline=[];persistDraft();renderPipeline();renderPreview()}})};
  $('fillSamplesBtn').onclick=fillSamples;
  $('clearTextBtn').onclick=()=>{$('fullText').value='';persistDraft();renderPreview()};
  $('refreshPreviewBtn').onclick=renderPreview;
  
  ['fullText','placementSelect','channelSelect','depthInput','editCheck','stripFenceCheck','userMacro','charMacro'].forEach(id=>{
    const e=$(id);
    e.addEventListener(e.tagName==='SELECT'||e.type==='checkbox'?'change':'input',()=>{persistDraft();renderPreview()});
  });
  
  $('saveWorkspaceBtn').onclick=()=>saveWorkspace(false);
  $('saveAsWorkspaceBtn').onclick=()=>{
    const n=prompt('另存为工作台名称：',$('workspaceName').value+' 副本');
    if(n){$('workspaceName').value=n;currentWorkspaceId=null;saveWorkspace(true)}
  };
  $('newWorkspaceBtn').onclick=newWorkspace;
  $('deleteWorkspaceBtn').onclick=deleteWorkspace;
  $('workspaceSelect').onchange=()=>{
    const id=$('workspaceSelect').value;
    if(!id)return;
    const w=savedWorkspaces[id];
    if(w){applyWorkspace(w,true);persistDraft()}
  };
  $('workspaceName').oninput=()=>{currentWorkspaceName=$('workspaceName').value;persistDraft()};
  
  $('importRegexBtn').onclick=()=>$('regexFileInput').click();
  $('exportLibraryBtn').onclick=exportLibraryBackup;
  $('regexFileInput').onchange=e=>{importRegexFiles(e.target.files);e.target.value=''};
  $('importGroupBtn').onclick=()=>$('groupFileInput').click();
  $('groupFileInput').onchange=e=>{importGroupFiles(e.target.files);e.target.value=''};
  $('exportPipelineRegexBtn').onclick=exportPipelineRegexes;
  
  document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>{const id=b.dataset.close;hideModal(id);if(id==='htmlImportBackdrop'&&currentHtmlImport){currentHtmlImport=null;setTimeout(openNextGeminiHtmlImport,0)}});
  document.querySelectorAll('.modal-backdrop').forEach(m=>m.addEventListener('mousedown',e=>{if(e.target!==m||modalStack[modalStack.length-1]!==m.id)return;if(m.id==='confirmBackdrop')cancelConfirm();else{hideModal(m.id);if(m.id==='htmlImportBackdrop'&&currentHtmlImport){currentHtmlImport=null;setTimeout(openNextGeminiHtmlImport,0)}}}));
  document.addEventListener('keydown',e=>{if(e.key!=='Escape'||!modalStack.length)return;const top=modalStack[modalStack.length-1];if(top==='confirmBackdrop')cancelConfirm();else{hideModal(top);if(top==='htmlImportBackdrop'&&currentHtmlImport){currentHtmlImport=null;setTimeout(openNextGeminiHtmlImport,0)}}});
  
  initSplitter('splitter1','previewPane','textPane',0);
  initSplitter('splitter2','textPane','regexPane',1);
  window.addEventListener('resize',applyPaneRatios);
}

window.addEventListener('DOMContentLoaded',()=>{
  loadData();
  bind();
  setSidebarCollapsed(localStorage.getItem(KEYS.sidebar)==='1');
  initGalleryFilterBehavior();
  syncDesignInputsFromDraft();
  switchStudioMode(studioMode,false);
  renderAll();
  applyPaneRatios();
  switchPage('gallery');
});
