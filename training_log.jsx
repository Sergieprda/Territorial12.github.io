const SESSIONS = [
  {
    n: 1,
    date: '27 May',
    week: 1,
    type: 'Z2 Suave',
    typeColor: '#1FBF82',
    km: 8.22,
    time: '55:08',
    pace: "6'42\"",
    fc: 137,
    fcMax: 151,
    cadence: 177,
    gct: 276,
    vo: 7.2,
    stride: 0.80,
    power: 172,
    elevGain: 18,
    note: 'Primera sesión del plan. FC perfecta (-3 del techo). Cadencia en rango. GCT y zancada: referencia base.',
  },
  {
    n: 2,
    date: '1 Jun',
    week: 1,
    type: 'Z2 Largo',
    typeColor: '#4DDDAA',
    km: 10.17,
    time: '1:10:05',
    pace: "6'53\"",
    fc: 138,
    fcMax: 153,
    cadence: 181,
    gct: 263,
    vo: 7.4,
    stride: 0.80,
    power: 168,
    elevGain: 52,
    note: 'GCT ↓13ms. FC bajo techo largo. Cadencia 181 excelente. 168W referencia largo. Jueves saltado — no repetir sem.2.',
  },
  {
    n: 3,
    date: '3 Jun',
    week: 2,
    type: 'Z2 Suave',
    typeColor: '#1FBF82',
    km: 8.79,
    time: '1:00:06',
    pace: "6'50\"",
    fc: 134,
    fcMax: 148,
    cadence: 184,
    gct: 253,
    vo: 7.3,
    stride: 0.70,
    power: 171,
    elevGain: 45,
    note: 'GCT ↓10ms (tendencia 3/3: -23ms total). FC 134: mejor del plan. 171W = mismo gasto q ses.1 pero zancada más corta — cadencia alta sin potencia de glúteo. A corregir.',
  },
  {
    n: 4,
    date: '8 Jun',
    week: 2,
    type: 'Z2 Largo',
    typeColor: '#4DDDAA',
    km: 12.00,
    time: '1:20:39',
    pace: "6'43\"",
    fc: 139,
    fcMax: 152,
    cadence: 172,
    gct: 279,
    vo: 7.4,
    stride: 0.80,
    power: 172,
    elevGain: 34,
    note: '12 km — mayor largo del plan. 6\'43\"/km a doble distancia que ses.1: progresión real. Zancada recuperada a 0.8m. Cadencia bajó a 172 por foco en zancada — trade-off. GCT sube por fatiga acumulada en km finales: normal.',
  },
  {
    n: 5,
    date: '9 Jun',
    week: 3,
    type: 'Tempo',
    typeColor: '#F0A855',
    km: 6.12,
    time: '38:14',
    pace: "6'15\"",
    fc: 155,
    fcMax: 180,
    cadence: 168,
    gct: 270,
    vo: 7.9,
    stride: 0.90,
    power: 186,
    elevGain: 9,
    note: 'Primera calidad completada. Estructura perfecta 10+15+10+strides. Tempo a 5\'54\" (meta 6\'00\") → FC esfuerzo 169 lpm (techo 162): demasiado rápido. Próximo tempo empezar a 6\'05\". Zancada 0.9m: mejor del plan.',
  },
  {
    n: 6,
    date: '11 Jun',
    week: 3,
    type: 'Z2 Suave',
    typeColor: '#1FBF82',
    km: 7.82,
    time: '55:05',
    pace: "7'03\"",
    fc: 139,
    fcMax: 149,
    cadence: 169,
    gct: 289,
    vo: 7.2,
    stride: 0.80,
    power: 166,
    elevGain: 42,
    note: '166W: mínimo del plan — recuperación genuina. Ritmo 7\'03\": correcto post-tempo. OscV 7.2cm recuperada. FC 139 (+3 sobre techo recovery): residuo del martes. GCT alto por fatiga: normal. Jueves cumplido ✅',
  },
  {
    n: 7,
    date: '15 Jun',
    week: 3,
    type: 'Z2 Largo',
    typeColor: '#4DDDAA',
    km: 12.02,
    time: '1:20:49',
    pace: "6'43\"",
    fc: 144,
    fcMax: 160,
    cadence: 172,
    gct: 284,
    vo: 7.2,
    stride: 0.80,
    power: 172,
    elevGain: 33,
    note: 'Sem 3 cerrada completa ✅. Mismo ritmo/potencia que largo sem.2 a distancia idéntica. FC 144 (techo 143): +1 lpm, esencialmente perfecto. OscV 7.2 recuperada. Base aeróbica estabilizándose.',
  },
  {
    n: 8,
    date: '17 Jun',
    week: 4,
    type: 'Z2 Suave',
    typeColor: '#1FBF82',
    km: 7.88,
    time: '53:26',
    pace: "6'46\"",
    fc: 136,
    fcMax: 174,
    cadence: 174,
    gct: 275,
    vo: 7.1,
    stride: 0.80,
    power: 172,
    elevGain: 55,
    note: 'Ruta más dura del plan: 55m desnivel, Santa Bárbara/Usaquén. FC 136 en terreno exigente = mejora aeróbica real (sem.1 fue 137 en plano). Cadencia exacta en techo 174. OscV 7.1: 2do mejor.',
  },
  {
    n: 9,
    date: '19 Jun',
    week: 4,
    type: 'Z2 Suave',
    typeColor: '#1FBF82',
    km: 5.08,
    time: '35:04',
    pace: "6'54\"",
    fc: 127,
    fcMax: 140,
    cadence: 170,
    gct: 291,
    vo: 7.1,
    stride: 0.80,
    power: 167,
    elevGain: 19,
    note: 'FC 127: mínimo absoluto del plan. Recovery de descarga ejecutado perfecto. Tiempo exacto del plan (35 min). 167W: 2do más bajo. Domingo: TEST 1 — mismo recorrido sem.1. KPI real de adaptación.',
  },
];

const C = {
  bg: '#0D1117', card: '#161B22', border: '#21262D',
  green: '#1FBF82', amber: '#F0A855', blue: '#5B8DEF',
  red: '#F07055', purple: '#A78BFA',
  text: '#E6EDF3', muted: '#7D8590', faint: '#30363D',
};

const COL = [
  { key:'n',        label:'#',          w:28,  align:'center' },
  { key:'date',     label:'Fecha',       w:52,  align:'center' },
  { key:'week',     label:'Sem',         w:36,  align:'center' },
  { key:'type',     label:'Tipo',        w:82,  align:'left'   },
  { key:'km',       label:'km',          w:44,  align:'right'  },
  { key:'time',     label:'Tiempo',      w:52,  align:'right'  },
  { key:'pace',     label:'Ritmo',       w:52,  align:'right'  },
  { key:'fc',       label:'FC ♥',        w:44,  align:'right'  },
  { key:'cadence',  label:'Cad.',        w:40,  align:'right'  },
  { key:'gct',      label:'GCT ms',      w:52,  align:'right'  },
  { key:'vo',       label:'OscV cm',     w:52,  align:'right'  },
  { key:'stride',   label:'Zanc m',      w:50,  align:'right'  },
  { key:'power',    label:'W',           w:40,  align:'right'  },
  { key:'note',     label:'Nota coach',  w:220, align:'left'   },
  {
    n: 4,
    date: '8 Jun',
    week: 2,
    type: 'Z2 Largo',
    typeColor: '#4DDDAA',
    km: 12.00,
    time: '1:20:39',
    pace: "6'43\"",
    fc: 139,
    fcMax: 152,
    cadence: 172,
    gct: 279,
    vo: 7.4,
    stride: 0.80,
    power: 172,
    elevGain: 34,
    note: 'GCT +26ms: zancada forzada bajando cadencia. Paso largo debe venir del despegue (gluteo), no del freno. Cad 172 < obj 174. FC y volumen correctos.',
  },
];

// Thresholds for color coding
function cellColor(key, val) {
  if (val === null || val === undefined || val === '') return C.muted;
  switch(key) {
    case 'fc':       return val <= 140 ? C.green : val <= 144 ? C.amber : C.red;
    case 'cadence':  return val >= 174 && val <= 183 ? C.green : val >= 170 ? C.amber : C.red;
    case 'gct':      return val < 255 ? C.green : val <= 275 ? C.amber : '#F0A855';
    case 'vo':       return val < 7.0 ? C.green : val <= 7.5 ? C.amber : C.red;
    case 'stride':   return val >= 0.85 ? C.green : C.amber;
    case 'pace':     return C.green;
    case 'power':    return C.purple;
    default:         return C.text;
  }
}

function TypeBadge({ label, color }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 600, padding: '2px 7px', borderRadius: 20,
      background: color + '22', color, whiteSpace: 'nowrap',
    }}>{label}</span>
  );
}

export default function TrainingLog() {
  const totalKm  = SESSIONS.reduce((s, r) => s + (r.km || 0), 0);
  const avgFc    = SESSIONS.filter(r=>r.fc).reduce((s,r,_,a)=>s+r.fc/a.length,0);
  const avgCad   = SESSIONS.filter(r=>r.cadence).reduce((s,r,_,a)=>s+r.cadence/a.length,0);
  const sessions = SESSIONS.length;

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif", padding: '12px 8px', minHeight: '100%' }}>

      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>🏃 Log de entrenamiento — Media Maratón Bogotá</div>
        <div style={{ fontSize: 11, color: C.muted }}>Plan Nippard × Híbrido · 2600 m altitud · Seguimiento sesión a sesión</div>
      </div>

      {/* Summary KPIs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {[
          { label: 'Sesiones',    val: sessions,               color: C.text  },
          { label: 'Km totales',  val: `${Math.round(totalKm * 10)/10} km`,  color: C.green },
          { label: 'FC media',    val: sessions ? `${Math.round(avgFc)} lpm`:'—', color: C.amber },
          { label: 'Cadencia avg',val: sessions ? `${Math.round(avgCad)} ppm`:'—', color: C.blue  },
        ].map(({ label, val, color }) => (
          <div key={label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontSize: 9, color: C.muted, textTransform: 'uppercase', letterSpacing: '.07em' }}>{label}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color, fontFamily: 'monospace' }}>{val}</span>
          </div>
        ))}
      </div>

      {/* Table — scrollable horizontally */}
      <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${C.border}` }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 900 }}>
          <thead>
            <tr style={{ background: C.faint }}>
              {COL.map(c => (
                <th key={c.key} style={{
                  fontSize: 9, fontWeight: 600, color: C.muted,
                  textTransform: 'uppercase', letterSpacing: '.06em',
                  padding: '8px 10px', textAlign: c.align,
                  borderBottom: `1px solid ${C.border}`,
                  whiteSpace: 'nowrap', minWidth: c.w,
                }}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SESSIONS.map((row, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${C.faint}`, transition: 'background .15s' }}
                onMouseEnter={e => e.currentTarget.style.background = C.card}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {COL.map(c => {
                  const val = row[c.key];
                  if (c.key === 'type') return (
                    <td key={c.key} style={{ padding: '10px 10px', textAlign: c.align }}>
                      <TypeBadge label={row.type} color={row.typeColor} />
                    </td>
                  );
                  if (c.key === 'note') return (
                    <td key={c.key} style={{ padding: '10px 10px', fontSize: 11, color: C.muted, lineHeight: 1.5, textAlign: c.align, minWidth: c.w }}>
                      {val}
                    </td>
                  );
                  return (
                    <td key={c.key} style={{
                      padding: '10px 10px', fontSize: 12, textAlign: c.align,
                      fontFamily: ['km','time','pace','fc','cadence','gct','vo','stride','power'].includes(c.key) ? 'monospace' : 'inherit',
                      fontWeight: ['km','pace','fc'].includes(c.key) ? 600 : 400,
                      color: cellColor(c.key, val),
                      whiteSpace: 'nowrap',
                    }}>
                      {val !== null && val !== undefined ? val : <span style={{ color: C.faint }}>—</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12, fontSize: 10, color: C.muted }}>
        {[[C.green,'En objetivo'],[C.amber,'Atención / mejorar'],[C.red,'Fuera de rango']].map(([c,l]) => (
          <span key={l} style={{ display:'flex', alignItems:'center', gap:5 }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:c, display:'inline-block' }} />{l}
          </span>
        ))}
        <span style={{ color: C.faint, marginLeft: 'auto' }}>GCT = contacto suelo · OscV = oscilación vertical · Zanc = longitud zancada</span>
      </div>
    </div>
  );
}
