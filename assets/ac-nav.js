
(function(){
  var m=document.querySelector('.acnav-move'); if(!m) return;
  var a=m.querySelectorAll('a'), prev=a[0], next=a[1];
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
    if(e.key==='ArrowLeft'&&prev&&!prev.classList.contains('off')) location.href=prev.href;
    if(e.key==='ArrowRight'&&next&&!next.classList.contains('off')) location.href=next.href;
    if(e.key==='Escape') location.href=document.querySelector('.acnav-home').href;
  });
})();
