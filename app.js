// app.js
(() => {
  const els = {
    promptText: document.getElementById("promptText"),
    installBtn: document.getElementById("installBtn"),
    // WCSL-style controls
    btnNext: document.getElementById("btnNext"),
    btnBack: document.getElementById("btnBack"),
    btnFwd:  document.getElementById("btnFwd"),
    // Modal
    modal: document.getElementById("welcomeModal"),
    agreeChk: document.getElementById("agreeChk"),
    agreeBtn: document.getElementById("agreeBtn"),
  };

  // ==== YOUR 100 PROMPTS ====
  const PROMPTS = [
    { t: "You just smelled the nastiest rotten fart you’ve ever smelled" },
    { t: "You just won a lifetime supply of donuts" },
    { t: "You just stubbed your toe" },
    { t: "You just happened to look up and noticed a cow flying in a hot air balloon" },
    { t: "You just got back from the dentist and can’t believe how clean your teeth are" },
    { t: "You just remembered you forgot to change your underwear for the last three days" },
    { t: "You just tooted and you’re not sure if anyone heard" },
    { t: "You’re so hungry you could eat fifteen sandwiches and probably still be hungry" },
    { t: "You just remembered you have a leftover burrito in the fridge and you can’t wait to eat it" },
    { t: "You just found out that you’re going to be on TV" },
    { t: "You just heard the funniest joke ever" },
    { t: "You just accidentally touched a random booger someone had left on the couch" },
    { t: "You just solved a very complicated puzzle and you’re feeling proud" },
    { t: "You cannot believe the burp that just came out of you" },
    { t: "You forgot that today was your own birthday" },
    { t: "You just found out you have to eat cold moldy beans for dinner" },
    { t: "You just realized your big toe has a really long hair growing on it, like as long as a spaghetti noodle" },
    { t: "A bumblebee just flew in your mouth!" },
    { t: "You just stepped barefoot on a sharp LEGO" },
    { t: "You just drank sour milk by mistake and saw on the label that it expired two years ago" },
    { t: "You just ate the spiciest pepper on earth and smoke is basically coming out of your ears" },
    { t: "You just saw the cutest baby kitten pop out of the closet" },
    { t: "You just bit into the warmest, gooey-ist, fresh-baked chocolate chip cookie" },
    { t: "You just sneezed so hard your wig flew off your head" },
    { t: "You just heard your dog start talking and understood everything it said" },
    { t: "You were about to lay down for bed and just found a chicken sitting on your pillow" },
    { t: "You just realized you sat on wet paint" },
    { t: "You just blew the biggest bubble ever (like the size of a car) and it’s floating up to the sky" },
    { t: "You realized you’ve been wearing the same socks for two weeks and they have holes on the bottom and smell rotten" },
    { t: "You just realized you’ve been talking with spinach stuck in your teeth all day" },
    { t: "You just saw an elephant riding a unicycle down the street and nobody else saw it but you" },
    { t: "You just got caught picking your nose on live TV" },
    { t: "You just found a bullfrog sitting on your dinner plate trying to eat your food" },
    { t: "You just sneezed 12 times in a row and it took all your energy" },
    { t: "You just licked the sourest lemon ever" },
    { t: "You just got splashed by a big muddy puddle" },
    { t: "You just saw a grandma doing karate" },
    { t: "You accidentally just pooped a little bit in your pants, whoops!" },
    { t: "A squirrel just snatched your sandwich right out of your hand" },
    { t: "You just realized you’ve been wearing your clothes backwards all day" },
    { t: "You just looked in the mirror and realized you’ve have spaghetti sauce all over your face" },
    { t: "You were just singing a big solo in a concert and burped right in the middle of it" },
    { t: "It just started raining marshmallows" },
    { t: "Your cat just barked" },
    { t: "You just got brain freeze from drinking a milkshake too fast" },
    { t: "You just took a bite of pudding but realized you were pranked and it was actually mud" },
    { t: "You just won a lifetime supply of banana peels" },
    { t: "You just flushed the toilet and heard it say, “Thank you!”" },
    { t: "You just smelled your own stinky armpit after a long day of playing in the hot sun" },
    { t: "You just went to your closet to pick out your outfit for today but it’s literally just full of different sizes of chicken costumes" },
    { t: "You just tried pickle-flavored ice cream" },
    { t: "You just found a baby koala hiding in your backpack" },
    { t: "You just won the international armpit fart competition" },
    { t: "You just heard the most beautiful singing you’ve ever heard and then realized it was coming from a parrot" },
    { t: "You just went to get a snack out of the fridge and saw that it was stocked with all your favorite snacks and food and drinks in the world" },
    { t: "You just sneezed and accidentally tooted at the same time on stage in front of a crowd" },
    { t: "A penguin just waddled into your kitchen" },
    { t: "You just sat down on a whoopee cushion without realizing it but everyone thinks it was real" },
    { t: "You just stuffed 25 giant marshmallows into your cheeks" },
    { t: "You just ate so much peanut butter that your lips are stuck together" },
    { t: "You just saw a monkey juggling bananas at the zoo" },
    { t: "You just drank orange juice right after brushing your teeth" },
    { t: "You just took a slurp of hot, hot soup and it burned your tongue" },
    { t: "You just found out that you sat on slime earlier and it’s been stuck to your butt all day" },
    { t: "You just tripped and landed in a pile of spaghetti but the good news is it’s really delicious" },
    { t: "A hawk just swooped down and snatched your hat off your head" },
    { t: "Your stomach just growled so loud it actually shook the house a little bit" },
    { t: "You just bent down to pick up a pencil and ripped your pants right down the middle" },
    { t: "You just found buried treasure in your backyard" },
    { t: "You just licked an ice cube and your tongue got stuck" },
    { t: "A crowd of people just jumped out and yelled “Surprise! Happy Birthday!” but you don’t know them and it’s not actually your birthday" },
    { t: "You just got sprayed in the face from a water hose by the old lady gardening next door" },
    { t: "Someone is trying to feed you a rotten egg that tastes even worse than it smelled" },
    { t: "You just saw the cutest baby in the world and they waved at you and blew you a kiss" },
    { t: "You just took a lick of your popsicle and realized it isn’t a real popsicle it was just a popsicle-shaped bar of soap" },
    { t: "You just heard a strange sound coming from under your chair" },
    { t: "You just slipped your foot into your shoe and realized someone had filled it with mashed potatoes" },
    { t: "A real pterodactyl just flew over you" },
    { t: "You finally just got rid of your hiccups after having them for five hours" },
    { t: "You just got invited to be the official taste tester for a candy company" },
    { t: "A giraffe just peeked in your window and tried to lick your ear" },
    { t: "Someone just gave you such an enthusiastic high five that it hurt your hand but you’re trying to act tough" },
    { t: "You just found out that a bird has made its nest in your hair" },
    { t: "You just tooted so loud it woke up the whole neighborhood" },
    { t: "You just woke up after accidentally napping for four hours and you don’t know what day it is" },
    { t: "You just tooted and it sounded exactly like the melody to “Row Row Row Your Boat” and everyone is impressed, especially you" },
    { t: "You just noticed your shadow is dancing without you" },
    { t: "You just heard the funniest joke you’ve ever heard" },
    { t: "You just sat down for your flight on an airplane and looked over and there is a pig sitting next to you, all buckled in" },
    { t: "You are about blow out all the candles on your birthday cake and you realllly want your wish to come true this year" },
    { t: "You just bumped your elbow (“funnybone”)" },
    { t: "You just tripped over a toy car and almost fell but caught yourself and wondering if anyone saw" },
    { t: "You just realized there is leftover cheese dip on your face from lunch and you’re thinking about eating it" },
    { t: "You just sat down on a sharp rock" },
    { t: "You just sneezed bubbles instead of snot and they’re floating up into the air" },
    { t: "You just realized you sat on a melted chocolate bar" },
    { t: "You see a cat stuck in a tree and you’re determined to save it but then you realize it’s a baby mountain lion" },
    { t: "You just had an idea for the best invention ever, a sweatshirt with wings that lets you fly" },
    { t: "You just spilled an entire milkshake on your lap and it’s COLD" },
    { t: "You just saw a grandpa riding a skateboard and he did a backflip on it" }
  ];

  // ===== First-visit privacy modal =====
  function showModal(){ els.modal?.classList.remove("hidden"); }
  function hideModal(){ els.modal?.classList.add("hidden"); }
  if (!localStorage.getItem("mtf_ok")) showModal();
  els.agreeChk?.addEventListener("change", () => { els.agreeBtn.disabled = !els.agreeChk.checked; });
  els.agreeBtn?.addEventListener("click", () => { localStorage.setItem("mtf_ok", "1"); hideModal(); });

  // ===== Install flow =====
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredPrompt = e; els.installBtn.hidden = false; });
  els.installBtn?.addEventListener("click", async () => {
    if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; els.installBtn.hidden = true;
  });
  window.addEventListener("appinstalled", () => { els.installBtn.hidden = true; });

  // ===== WCSL-style deck + history + Back/Forward =====
  const elPrompt = els.promptText;
  function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
  function makeOrder(){ return shuffle(Array.from({length:PROMPTS.length},(_,i)=>i)); }

  const KEY = 'mtf_deck_v1';
  function save(s){ localStorage.setItem(KEY, JSON.stringify(s)); }
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}'); } catch { return {}; } }

  let STATE = load();
  if (!Array.isArray(STATE.order) || STATE.order.length !== PROMPTS.length){
    STATE = { order: makeOrder(), idx: 0, history: [], hpos: 0 };
    save(STATE);
  }

  function show(i){ elPrompt.textContent = PROMPTS[i].t; }
  function updateNav(){
    els.btnBack && (els.btnBack.disabled = STATE.hpos <= 1);
    els.btnFwd  && (els.btnFwd.disabled  = STATE.hpos >= STATE.history.length);
  }
  function pickNext(){
    let { order, idx } = STATE;
    const next = order[idx];
    idx++;
    if (idx >= order.length){ order = makeOrder(); idx = 0; }
    STATE.order = order; STATE.idx = idx;
    return next;
  }
  function goNext(){
    if (STATE.hpos < STATE.history.length) STATE.history.splice(STATE.hpos);
    const pick = pickNext();
    STATE.history.push(pick);
    if (STATE.history.length > 500) STATE.history.shift();
    STATE.hpos = STATE.history.length;
    show(pick); updateNav(); save(STATE);
  }
  function goBack(){
    if (STATE.hpos > 1){ STATE.hpos -= 1; show(STATE.history[STATE.hpos-1]); updateNav(); save(STATE); }
  }
  function goFwd(){
    if (STATE.hpos < STATE.history.length){ const idx = STATE.history[STATE.hpos]; STATE.hpos += 1; show(idx); updateNav(); save(STATE); }
  }

  // Wire buttons + keyboard
  els.btnNext?.addEventListener('click', goNext);
  els.btnBack?.addEventListener('click', goBack);
  els.btnFwd ?.addEventListener('click', goFwd);
  window.addEventListener('keydown', e=>{
    if (e.key==='Enter') goNext();
    if (e.key==='ArrowLeft') goBack();
    if (e.key==='ArrowRight') goFwd();
  });

  // First paint: ensure a prompt shows
  if (STATE.history.length){
    STATE.hpos = STATE.history.length;
    show(STATE.history[STATE.history.length-1]);
  } else {
    goNext();
  }

  // ===== Camera + capture with prompt overlay =====
  (function cameraModule(){
    const video = document.getElementById('mtfVideo');
    const canvas = document.getElementById('mtfCanvas');
    const overlay = document.getElementById('cameraOverlay');
    const openBtn = document.getElementById('openCameraBtn');
    const captureBtn = document.getElementById('captureBtn');
    const retakeBtn = document.getElementById('retakeBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    let stream = null;

    function updateOverlayText(text){ if (overlay) overlay.textContent = text || ''; }
    new MutationObserver(()=>updateOverlayText(elPrompt.textContent))
      .observe(elPrompt, { childList:true, characterData:true, subtree:true });

    async function startCamera(){
      try{
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode:'user' }, audio:false });
        if (video){ video.srcObject = stream; }
        if (captureBtn) captureBtn.disabled = false;
        if (openBtn) openBtn.hidden = true;
        updateOverlayText(elPrompt.textContent);
      }catch(err){
        alert('Camera not available. Please check permissions or try a different device.');
        console.error(err);
      }
    }
    function stopCamera(){
      if (stream){ stream.getTracks().forEach(t=>t.stop()); stream = null; }
      if (video) video.srcObject = null;
      if (captureBtn) captureBtn.disabled = true;
      if (openBtn) openBtn.hidden = false;
    }
    function wrapText(ctx, text, x, y, maxWidth, lineHeight){
      const words = text.split(' '); let line='', lines=[];
      for(let n=0;n<words.length;n++){
        const test = line + words[n] + ' ';
        if(ctx.measureText(test).width > maxWidth && n>0){ lines.push(line.trim()); line = words[n] + ' '; }
        else { line = test; }
      }
      lines.push(line.trim());
      const start = y - (lines.length-1)*(lineHeight/2);
      for(let i=0;i<lines.length;i++) ctx.fillText(lines[i], x, start + i*lineHeight);
    }
    function capturePhoto(){
      if (!video) return;
      const w = video.videoWidth, h = video.videoHeight;
      if (!w || !h) return;
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, w, h);

      const prompt = elPrompt.textContent;
      const pad = Math.round(w*0.03);
      const boxH = Math.round(h*0.12);
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fillRect(0, h - boxH - pad, w, boxH + pad);

      ctx.fillStyle = '#fff';
      const fontSize = Math.round(w/18);
      ctx.font = `bold ${fontSize}px Poppins, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const maxWidth = w - pad*4;
      wrapText(ctx, prompt, w/2, h - boxH/2 - pad/2, maxWidth, fontSize*1.15);

      const ts = new Date().toLocaleTimeString();
      ctx.font = `${Math.round(fontSize*0.45)}px Poppins, system-ui, sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.fillText(ts, w - pad - 30, h - pad - 10);

      if (downloadBtn) downloadBtn.hidden = false;
      if (shareBtn) shareBtn.hidden = (navigator.share === undefined);
      if (retakeBtn) retakeBtn.hidden = false;
      if (captureBtn) captureBtn.hidden = true;

      stopCamera();
    }
    function downloadImage(){
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      const short = elPrompt.textContent.slice(0,25).replace(/\s+/g,'_');
      a.download = `make-this-face_${short}_${Date.now()}.png`;
      document.body.appendChild(a); a.click(); a.remove();
    }
    async function shareImage(){
      if (!navigator.share) return;
      canvas.toBlob(async blob=>{
        const file = new File([blob], 'make-this-face.png', { type: 'image/png' });
        try{ await navigator.share({ files:[file], title:'Make This Face', text: elPrompt.textContent }); }
        catch(e){ console.warn('Share canceled/failed', e); }
      }, 'image/png');
    }
    function retake(){
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if (downloadBtn) downloadBtn.hidden = true;
      if (shareBtn) shareBtn.hidden = true;
      if (retakeBtn) retakeBtn.hidden = true;
      if (captureBtn) captureBtn.hidden = false;
      startCamera();
    }

    openBtn?.addEventListener('click', startCamera);
    captureBtn?.addEventListener('click', capturePhoto);
    retakeBtn?.addEventListener('click', retake);
    downloadBtn?.addEventListener('click', downloadImage);
    shareBtn?.addEventListener('click', shareImage);
  })();

  // ===== Service worker (TEMP: comment out during setup if caching gets in the way) =====
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('service-worker.js?v=3').catch(console.error);
  //   });
  // }
})();
