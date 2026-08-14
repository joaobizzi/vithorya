// ---------- Estrelas no céu (concentradas no topo, região mais escura) ----------
const ceu = document.getElementById('ceu');
const totalEstrelas = 55;

for (let i = 0; i < totalEstrelas; i++) {
  const estrela = document.createElement('div');
  estrela.className = 'estrela';
  const tamanho = Math.random() * 2 + 1;
  estrela.style.width = tamanho + 'px';
  estrela.style.height = tamanho + 'px';
  estrela.style.left = Math.random() * 100 + 'vw';
  estrela.style.top = Math.random() * 38 + 'vh';
  estrela.style.animationDelay = (Math.random() * 3) + 's';
  estrela.style.animationDuration = (2.4 + Math.random() * 2.6) + 's';
  ceu.appendChild(estrela);
}

// ---------- Nuvens flutuando devagar, em profundidades diferentes ----------
const nuvensFundo = document.getElementById('nuvens');
const totalNuvens = 10;

for (let i = 0; i < totalNuvens; i++) {
  const nuvem = document.createElement('div');
  nuvem.className = 'nuvem-elemento';
  const largura = 90 + Math.random() * 160;
  const altura = largura * 0.45;
  nuvem.style.width = largura + 'px';
  nuvem.style.height = altura + 'px';
  nuvem.style.top = (35 + Math.random() * 55) + 'vh';
  nuvem.style.setProperty('--op', (0.12 + Math.random() * 0.22).toFixed(2));
  nuvem.style.animationDuration = (38 + Math.random() * 40) + 's';
  nuvem.style.animationDelay = (-Math.random() * 40) + 's';
  nuvensFundo.appendChild(nuvem);
}
