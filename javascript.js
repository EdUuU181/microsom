// ---------- Utilidades de normalização ----------
const normalize = (s) => (s || "")
  .toString()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[–—−-]+/g, "-")
  .replace(/[^a-z0-9\-\/ ]/gi, " ")
  .replace(/\s+/g, " ")
  .trim()
  .replace(/\bbte\s*pp\b/i, "bte-pp")
  .replace(/\bbte\s+r\b/i, "bte-r")
  .replace(/\bbte\b/i, "bte")
  .replace(/\bric\s+r\b/i, "ric-r")
  .replace(/\bric\b/i, "ric") 
 .toLowerCase();

// ---------- Rótulos de pagamento ----------
const labelPagamento = { avista: "À vista", "30dias": "30 dias", "3x": "3 vezes", "4x": "4 vezes" };

// ---------- Representantes ----------
const representantes = [
  // ---------- TABELA A ----------
  { name: "FLORIPA (SC)", codes: "R00093", table: "A" },
  { name: "BALNEARIO (SC)", codes: "R00451", table: "A" },
  { name: "LAGES (SC)", codes: "R00418", table: "A" },
  { name: "BRASIAUDIO - BRASILIA", codes: "R00087", table: "A" },
  { name: "AUDIONORTE - BRASILIA", codes: "R00340", table: "A" },
  { name: "AUDIOLIFE - BH", codes: "R00156", table: "A" },
  { name: "AUDITIVA - BH", codes: "R00397", table: "A" },
  { name: "AUDIOSONO - BH", codes: "R00446", table: "A" },
  { name: "MICROSOM GOIANIA", codes: "R00435", table: "A" },
  { name: "UNIBEL", codes: "R00445", table: "A" },
  { name: "MICROSOM FORTALEZA", codes: "R00415", table: "A" },
  { name: "SOROCABA", codes: "R00120", table: "B" },
  { name: "TAUBATE", codes: "R00443", table: "B" },
  { name: "LONDRINA", codes: "R00006", table: "B" },
  { name: "MARINGA", codes: "R00086", table: "B" },

  // ---------- TABELA B ----------
  { name: "PORTO ALEGRE", codes: "R00016", table: "B" },
  { name: "CUIABA", codes: "R00440", table: "B" },
  { name: "RONDONOPOLIS", codes: "R00462", table: "B" },
  { name: "AUDIO MS - CAMPO GRANDE", codes: "RA0003", table: "B" },
  { name: "JACAREÍ", codes: "R00404", table: "B" },
  { name: "FAMAX - MANAUS", codes: "R00363", table: "B" },
  { name: "S F MAXIMIANO - MANAUS", codes: "R00434", table: "B" },
  { name: "BAURU", codes: "R00253", table: "B" },
  { name: "MARILIA", codes: "R00494", table: "B" },
  { name: "ITU", codes: "R00437", table: "B" },


  // ---------- TABELA C ----------
  { name: "MICROSOM MACAPA", codes: "R00439", table: "C" },
  { name: "MICROSOM VITORIA", codes: "R00450", table: "C" },
  { name: "MICROSOM UBERLANDIA", codes: "R00426", table: "C" },
  { name: "MICROSOM OSASCO", codes: "R00390", table: "C" },
  { name: "FORTES E NASCIMENTO - CURITIBA", codes: "R00489", table: "C" },
  { name: "BACACHERI - CURITIBA", codes: "R00491", table: "C" },
  { name: "MICROSOM PRES. PRUDENTE", codes: "R00117", table: "C" },
  { name: "MICROSOM CAMAÇARI", codes: "R00422", table: "C" },
  { name: "CASSI PARCEIRO CASCAVEL", codes: "R00476", table: "C" },
  { name: "CASSI PARCEIRO SALVADOR", codes: "R00465", table: "C" },
  { name: "CASSI PARCEIRO JUIZ DE FORA", codes: "R00475", table: "C" },
  { name: "CASSIPARCEIRO PARAUAPEBAS", codes: "R00469", table: "C" },
  { name: "CASSIPARCEIRO JOÃO PESSOA", codes: "R00457", table: "C" },
  { name: "CASSI PARCEIRO MARANHÃO", codes: "R00473", table: "C" },
  { name: "CASSI PARCEIRO TERESINA", codes: "R00466", table: "C" },
  { name: "CASSI PARCEIRO BELEM (PA)", codes: "R00191", table: "C" },
  { name: "CASSI PARCEIRO ARACAJU", codes: "R00467", table: "C" },
  { name: "CASSI PARCEIRO RECIFE", codes: "R00474", table: "C" },
  { name: "CASSI PARCEIRO CAMPINA GRANDE", codes: "R00495", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00470", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00471", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00477", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00478", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00479", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00480", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00481", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00482", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00483", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00484", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00485", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00486", table: "C" },
  { name: "CASSI PARCEIRO RIO DE JANEIRO", codes: "R00487", table: "C" },
];


// ---------- Tabelas de preços ----------
const tabelaA = {
  "INTRIGUE 24 RIC - R ": { avista: 3047.80, "30dias": 3110.00, "3x": 3172.20, "4x": 3235.64 },
  "INTRIGUE 20 RIC - R": { avista: 2744.00, "30dias": 2800.00, "3x": 2856.00, "4x": 2913.12 },
  "INTRIGUE 16 RIC - R": { avista: 2450.00, "30dias": 2500.00, "3x": 2550.00, "4x": 2601.00 },
  "INTRIGUE 12 RIC - R": { avista: 2107.00, "30dias": 2150.00, "3x": 2193.00, "4x": 2236.86},
  "ARC AI 2400 RIC R": { avista: 2793.00, "30dias": 2850.00, "3x": 2907.00, "4x": 2965.14 },
  "ARC AI 2400 BTE R": { avista: 2793.00, "30dias": 2850.00, "3x": 2907.00, "4x": 2965.14 },
  "ARC AI 2400 RIC": { avista: 2528.40, "30dias": 2580.00, "3x": 2631.60, "4x": 2684.23 },
  "ARC AI 2400 BTE": { avista: 2528.40, "30dias": 2580.00, "3x": 2631.60, "4x": 2684.23 },
  "ARC AI 2400 BTE PP": { avista: 2528.40, "30dias": 2580.00, "3x": 2631.60, "4x": 2684.23 },
  "ARC AI 2000 RIC R": { avista: 2528.40, "30dias": 2580.00, "3x": 2631.60, "4x": 2684.23 },
  "ARC AI 2000 BTE R": { avista: 2528.40, "30dias": 2580.00, "3x": 2631.60, "4x": 2684.23 },
  "ARC AI 2000 RIC": { avista: 2317.70, "30dias": 2365.00, "3x": 2412.30, "4x": 2460.55 },
  "ARC AI 2000 BTE": { avista: 2317.70, "30dias": 2365.00, "3x": 2412.30, "4x": 2460.55 },
  "ARC AI 2000 BTE PP": { avista: 2317.70, "30dias": 2365.00, "3x": 2412.30, "4x": 2460.55 },
  "ARC AI 1600 RIC R": { avista: 2317.70, "30dias": 2365.00, "3x": 2412.30, "4x": 2460.55 },
  "ARC AI 1600 BTE R": { avista: 2317.70, "30dias": 2365.00, "3x": 2412.30, "4x": 2460.55 },
  "ARC AI 1600 RIC": { avista: 2009.00, "30dias": 2050.00, "3x": 2091.00, "4x": 2132.82 },
  "ARC AI 1600 BTE": { avista: 2009.00, "30dias": 2050.00, "3x": 2091.00, "4x": 2132.82 },
  "ARC AI 1600 BTE PP": { avista: 2009.00, "30dias": 2050.00, "3x": 2091.00, "4x": 2132.82 },
  "ARC AI 1200 RIC R": { avista: 1960.00, "30dias": 2000.00, "3x": 2040.00, "4x": 2080.80 },
  "ARC AI 1200 BTE R": { avista: 1862.00, "30dias": 1900.00, "3x": 1938.00, "4x": 1976.76 },
  "ARC AI 1200 RIC": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1200 BTE": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1200 BTE PP": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1000 RIC": { avista: 1225.00, "30dias": 1250.00, "3x": 1275.00, "4x": 1300.50 },
  "ARC AI 1000 BTE": { avista: 1225.00, "30dias": 1250.00, "3x": 1275.00, "4x": 1300.50 },
  "ARC AI 1000 BTE PP": { avista: 1225.00, "30dias": 1250.00, "3x": 1275.00, "4x": 1300.50 }
};

const tabelaB = {
  "INTRIGUE 24 RIC - R": { avista: 3199.70, "30dias": 3265.00, "3x": 3330.30, "4x": 3396.91 },
  "INTRIGUE 20 RIC - R": { avista: 2881.20, "30dias": 2940.00, "3x": 2998.80, "4x": 3058.78 },
  "INTRIGUE 16 RIC - R": { avista: 2572.50, "30dias": 2625.00, "3x": 2677.50, "4x": 2731.05 },
  "INTRIGUE 12 RIC - R": { avista: 2107.00, "30dias": 2150.00, "3x": 2193.00, "4x": 2236.86},
  "ARC AI 2400 RIC R": { avista: 2932.65, "30dias": 2992.50, "3x": 3052.35, "4x": 3113.40 },
  "ARC AI 2400 BTE R": { avista: 2932.65, "30dias": 2992.50, "3x": 3052.35, "4x": 3113.40 },
  "ARC AI 2400 RIC": { avista: 2654.82, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2400 BTE": { avista: 2654.82, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2400 BTE PP": { avista: 2654.82, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2000 RIC R": { avista: 2654.82, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2000 BTE R": { avista: 2654.82, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2000 RIC": { avista: 2433.59, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 2000 BTE": { avista: 2433.59, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 2000 BTE PP": { avista: 2433.59, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 1600 RIC R": { avista: 2433.59, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 1600 BTE R": { avista: 2433.59, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 1600 RIC": { avista: 2109.45, "30dias": 2152.50, "3x": 2195.55, "4x": 2239.46 },
  "ARC AI 1600 BTE": { avista: 2109.45, "30dias": 2152.50, "3x": 2195.55, "4x": 2239.46 },
  "ARC AI 1600 BTE PP": { avista: 2109.45, "30dias": 2152.50, "3x": 2195.55, "4x": 2239.46 },
  "ARC AI 1200 RIC R": { avista: 1960.00, "30dias": 2000.00, "3x": 2040.00, "4x": 2080.80 },
  "ARC AI 1200 BTE R": { avista: 1862.00, "30dias": 1900.00, "3x": 1938.00, "4x": 1976.76 },
  "ARC AI 1200 RIC": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1200 BTE": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1200 BTE PP": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1000 RIC": { avista: 1286.25, "30dias": 1312.50, "3x": 1338.75, "4x": 1365.53 },
  "ARC AI 1000 BTE": { avista: 1286.25, "30dias": 1312.50, "3x": 1338.75, "4x": 1365.53 },
  "ARC AI 1000 BTE PP": { avista: 1286.25, "30dias": 1312.50, "3x": 1338.75, "4x": 1365.53 }
};

const tabelaC = {
  "INTRIGUE 24 RIC - R": { avista: 3359.69, "30dias": 3428.25, "3x": 3496.82, "4x": 3566.75 },
  "INTRIGUE 20 RIC - R": { avista: 3025.26, "30dias": 3087.00, "3x": 3148.74, "4x": 3211.71 },
  "INTRIGUE 16 RIC - R": { avista: 2701.13, "30dias": 2756.25, "3x": 2811.38, "4x": 2867.60 },
  "INTRIGUE 12 RIC - R ": { avista: 2107.00, "30dias": 2150.00, "3x": 2193.00, "4x": 2236.86},
  "ARC AI 2400 RIC R": { avista: 3079.28, "30dias": 3142.13, "3x": 3204.97, "4x": 3269.07 },
  "ARC AI 2400 BTE R": { avista: 3079.28, "30dias": 3142.13, "3x": 3204.97, "4x": 3269.07 },
  "ARC AI 2400 RIC": { avista: 2787.56, "30dias": 2844.45, "3x": 2901.34, "4x": 2959.37 },
  "ARC AI 2400 BTE": { avista: 2787.56, "30dias": 2844.45, "3x": 2901.34, "4x": 2959.37 },
  "ARC AI 2400 BTE PP": { avista: 2787.56, "30dias": 2844.45, "3x": 2901.34, "4x": 2959.37 },
  "ARC AI 2000 RIC R": { avista: 2844.45, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2000 BTE R": { avista: 2844.45, "30dias": 2709.00, "3x": 2763.18, "4x": 2818.44 },
  "ARC AI 2000 RIC": { avista: 2607.41, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 2000 BTE": { avista: 2607.41, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 2000 BTE PP": { avista: 2607.41, "30dias": 2483.25, "3x": 2532.92, "4x": 2583.57 },
  "ARC AI 1600 RIC R": { avista: 2555.26, "30dias": 2607.41, "3x": 2659.56, "4x": 2712.75 },
  "ARC AI 1600 BTE R": { avista: 2555.26, "30dias": 2607.41, "3x": 2659.56, "4x": 2712.75 },
  "ARC AI 1600 RIC": { avista: 2214.92, "30dias": 2260.13, "3x": 2305.33, "4x": 2351.43 },
  "ARC AI 1600 BTE": { avista: 2214.92, "30dias": 2260.13, "3x": 2305.33, "4x": 2351.43 },
  "ARC AI 1600 BTE PP": { avista: 2214.92, "30dias": 2260.13, "3x": 2305.33, "4x": 2351.43 },
  "ARC AI 1200 RIC R": { avista: 1960.00, "30dias": 2000.00, "3x": 2040.00, "4x": 2080.80 },
  "ARC AI 1200 BTE R": { avista: 1862.00, "30dias": 1900.00, "3x": 1938.00, "4x": 1976.76 },
  "ARC AI 1200 RIC": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1200 BTE": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1200 BTE PP": { avista: 1470.00, "30dias": 1500.00, "3x": 1530.00, "4x": 1560.60 },
  "ARC AI 1000 RIC": { avista: 1350.56, "30dias": 1378.13, "3x": 1405.69, "4x": 1433.80 },
  "ARC AI 1000 BTE": { avista: 1350.56, "30dias": 1378.13, "3x": 1405.69, "4x": 1433.80 },
  "ARC AI 1000 BTE PP": { avista: 1350.56, "30dias": 1378.13, "3x": 1405.69, "4x": 1433.80 }
};







const tabelas = { A: tabelaA, B: tabelaB, C: tabelaC };

function acharRepresentante(input) {
  const q = normalize(input);
  if (!q) return null;
  return representantes.find(r => normalize(`${r.name} ${r.codes}`).includes(q)) || null;
}

function formatBRL(n) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// lista de aparelhos
const aparelhos = [
  { codigo: "APD10032", modelo: "INTRIGUE 24 RIC - R" },
  { codigo: "APD10035", modelo: "INTRIGUE 20 RIC - R" },
  { codigo: "APD10041", modelo: "INTRIGUE 12 RIC - R" },
  { codigo: "APD10038", modelo: "INTRIGUE 16 RIC - R" },
  { codigo: "APC10196", modelo: "ARC AI 2400 RIC R" },
  { codigo: "APA10237", modelo: "ARC AI 2400 BTE R" },
  { codigo: "APC10193", modelo: "ARC AI 2400 RIC" },
  { codigo: "APA10234", modelo: "ARC AI 2400 BTE" },
  { codigo: "APA10240", modelo: "ARC AI 2400 BTE PP" },
  { codigo: "APC10202", modelo: "ARC AI 2000 RIC R" },
  { codigo: "APA10246", modelo: "ARC AI 2000 BTE R" },
  { codigo: "APC10199", modelo: "ARC AI 2000 RIC" },
  { codigo: "APA10243", modelo: "ARC AI 2000 BTE" },
  { codigo: "APA10249", modelo: "ARC AI 2000 BTE PP" },
  { codigo: "APC10208", modelo: "ARC AI 1600 RIC R" },
  { codigo: "APA10255", modelo: "ARC AI 1600 BTE R" },
  { codigo: "APC10205", modelo: "ARC AI 1600 RIC" },
  { codigo: "APA10252", modelo: "ARC AI 1600 BTE" },
  { codigo: "APA10258", modelo: "ARC AI 1600 BTE PP" },
  { codigo: "APC10214", modelo: "ARC AI 1200 RIC R" },
  { codigo: "APA10264", modelo: "ARC AI 1200 BTE R" },
  { codigo: "APC10211", modelo: "ARC AI 1200 RIC" },
  { codigo: "APA10261", modelo: "ARC AI 1200 BTE" },
  { codigo: "APA10267", modelo: "ARC AI 1200 BTE PP" },
  { codigo: "APC10217", modelo: "ARC AI 1000 RIC" },
  { codigo: "APA10270", modelo: "ARC AI 1000 BTE" },
  { codigo: "APA10276", modelo: "ARC AI 1000 BTE PP" },
];

function acharModelo(valorDigitado) {
  const q = normalize(valorDigitado);

  const encontrado = aparelhos.find(ap =>
    normalize(ap.modelo) === q ||
    normalize(ap.codigo) === q
  );

  return encontrado || null;
}
// ---------- UI (aguarda DOM) ----------
document.addEventListener("DOMContentLoaded", () => {
  const $rep = document.getElementById("repInput");
  const $modelo = document.getElementById("modeloInput");
  const $pag = document.getElementById("pagamento");
  const $btn = document.getElementById("btn");
  const $out = document.getElementById("result");

  function mostrarMensagem(msg) {
    $out.style.display = "block";
    $out.innerHTML = msg;
  }

  function consultar() {
    $out.style.display = "none";
    $out.innerHTML = "";

    const rep = acharRepresentante($rep.value);
    if (!rep) {
      mostrarMensagem("❌ Representante não encontrado. Tente parte do nome ou código.");
      return;
    }

    const aparelho = acharModelo($modelo.value);
    if (!aparelho) {
      mostrarMensagem(`❌ Modelo não encontrado na Tabela <b>${rep.table}</b>.`);
      return;
    }

    const modelo = aparelho.modelo;
    const codigo = aparelho.codigo;

    const forma = $pag.value;
    if (!forma) {
      mostrarMensagem("⚠️ Selecione a forma de pagamento.");
      return;
    }

    const preco = (tabelas[rep.table] && tabelas[rep.table][modelo])
      ? tabelas[rep.table][modelo][forma]
      : undefined;

    if (typeof preco !== "number") {
      mostrarMensagem("❌ Não há preço cadastrado para essa combinação.");
      return;
    }

    $out.style.display = "block";
    $out.innerHTML = `
      <div>
        <b>${modelo}</b> 
        <span style="display:inline-block;padding:3px 8px;border-radius:999px;background:#eef2ff;margin-left:8px">
          Tabela ${rep.table}
        </span>
      </div>
      <div style="color:#6b7280;margin:4px 0">Código do aparelho: <b>${codigo}</b></div>
      <div style="color:#6b7280;margin:6px 0 10px">
        Representante: <b>${rep.name}</b> &middot; Códigos: <b>${rep.codes}</b>
      </div>
      <div><b>${labelPagamento[forma] || forma}:</b> ${formatBRL(preco)}</div>
    `;
  }

  // eventos
  if ($btn) $btn.addEventListener("click", consultar);
  ["repInput", "modeloInput", "pagamento"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") consultar();
    });
  });
});

