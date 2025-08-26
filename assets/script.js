
function switchTab(id){
  document.querySelectorAll('.tab-btn').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el=>el.classList.remove('active'));
  document.querySelector('[data-tab-btn="'+id+'"]').classList.add('active');
  document.getElementById(id).classList.add('active');
}
document.addEventListener('DOMContentLoaded',()=>{
  switchTab('problem');
  const btn = document.getElementById('demoBtn');
  const section = document.getElementById('demo');
  if(btn && section){
    btn.addEventListener('click', ()=>{
      section.classList.remove('hidden');
      section.scrollIntoView({behavior:'smooth'});
    });
  }
});
