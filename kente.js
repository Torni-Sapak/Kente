const KENTE_LINES = [
  {
    lineName: 'Royal Gold Line',
    tribeName: 'Ashanti',
    region: 'Kumasi, Ashanti Kingdom',
    dance: 'Adowa — arms sweep wide like wings, slow dignified steps',
    accent: '#D4A017',
    sky: [26, 13, 0],
    ground: [42, 20, 0],
    kente: ['#D4A017', '#1A5C1A', '#CC2200', '#1A1A1A', '#F5E642', '#8B4513'],
    moveFunc: function (idx, t, vol, phase) {
      if (vol <= 0) return { armL: -15, armR: 15, bob: 0, sway: 0, legL: 0, legR: 0, tilt: 0, torso: 0, armLen: 1.0 };
      let sp = 0.014 + vol * 0.018;
      let sweep = sin(t * sp + phase);
      return {
        armL:   sweep * (60 + vol * 50),
        armR:   -sweep * (55 + vol * 45),
        bob:    sin(t * sp * 2 + phase) * (1 + vol * 4),
        sway:   sin(t * sp * 0.5 + phase) * (1 + vol * 3),
        legL:   sin(t * sp + phase) * (2 + vol * 6),
        legR:   sin(t * sp + phase + PI) * (2 + vol * 6),
        tilt:   sweep * (3 + vol * 6),
        torso:  sin(t * sp + phase) * (1 + vol * 3),
        armLen: 1.3 + vol * 0.3
      };
    },
    figures: [
      { skin: '#7B4218', g: 'M', role: 'Chief',   headpiece: true },
      { skin: '#5C3010', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#8B5230', g: 'M', role: 'Drummer', drum: true      },
      { skin: '#6B3A18', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#7B4218', g: 'M', role: 'Elder',   headpiece: true }
    ]
  },
  {
    lineName: 'Volta Heritage Line',
    tribeName: 'Ewe',
    region: 'Volta Region, Ho',
    dance: 'Agbadza — heavy stomp, arms piston hard, deep knee bounce',
    accent: '#CE1126',
    sky: [13, 5, 5],
    ground: [26, 8, 8],
    kente: ['#CE1126', '#EEEEEE', '#006B3F', '#FCD116', '#111111', '#8B0000'],
    moveFunc: function (idx, t, vol, phase) {
      if (vol <= 0) return { armL: 0, armR: 0, bob: 0, sway: 0, legL: 0, legR: 0, tilt: 0, torso: 0, armLen: 1.0 };
      let sp = 0.06 + vol * 0.14;
      let beat  = abs(sin(t * sp + phase));
      let beat2 = abs(sin(t * sp + phase + PI));
      return {
        armL:   -80 + beat  * (140 + vol * 60),
        armR:   -80 + beat2 * (140 + vol * 60),
        bob:    -beat * (8 + vol * 22),
        sway:   sin(t * sp + phase) * (1 + vol * 2),
        legL:   beat  * (15 + vol * 40),
        legR:   beat2 * (15 + vol * 40),
        tilt:   sin(t * sp * 2 + phase) * (5 + vol * 12),
        torso:  sin(t * sp * 2 + phase) * (8 + vol * 18),
        armLen: 0.85
      };
    },
    figures: [
      { skin: '#6B3A18', g: 'M', role: 'Drummer', drum: true      },
      { skin: '#5C3010', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#7B4218', g: 'M', role: 'Dancer'                   },
      { skin: '#8B5230', g: 'F', role: 'Singer',  headwrap: true  },
      { skin: '#6B3A18', g: 'M', role: 'Elder',   headpiece: true }
    ]
  },
  {
    lineName: 'Royal Violet Line',
    tribeName: 'Akan',
    region: 'Central Region',
    dance: 'Fontomfrom — stiff regal posture, arms held wide like royalty',
    accent: '#9B30FF',
    sky: [10, 0, 18],
    ground: [18, 0, 31],
    kente: ['#4B0082', '#DAA520', '#2F4F2F', '#8B0000', '#CD853F', '#1a1a6e'],
    moveFunc: function (idx, t, vol, phase) {
      if (vol <= 0) return { armL: -70, armR: -70, bob: 0, sway: 0, legL: 0, legR: 0, tilt: 0, torso: -10, armLen: 1.0 };
      let sp    = 0.008 + vol * 0.012;
      let glide = sin(t * sp + phase);
      return {
        armL:   -(65 + vol * 20) + glide * (5 + vol * 10),
        armR:   -(65 + vol * 20) - glide * (5 + vol * 10),
        bob:    sin(t * sp * 4 + phase) * (0.5 + vol * 2),
        sway:   glide * (0.5 + vol * 1.5),
        legL:   sin(t * sp + phase) * (1 + vol * 4),
        legR:   sin(t * sp + phase + PI) * (1 + vol * 4),
        tilt:   glide * (1 + vol * 2),
        torso:  -(8 + vol * 12),
        armLen: 1.5 + vol * 0.2
      };
    },
    figures: [
      { skin: '#7B4218', g: 'M', role: 'King',   headpiece: true, crown: true },
      { skin: '#5C3010', g: 'F', role: 'Queen',  headwrap: true,  crown: true },
      { skin: '#8B5230', g: 'M', role: 'Herald'                               },
      { skin: '#6B3A18', g: 'F', role: 'Dancer', headwrap: true               },
      { skin: '#7B4218', g: 'M', role: 'Guard'                                }
    ]
  },
  {
    lineName: 'Coastal Green Line',
    tribeName: 'Fante',
    region: 'Cape Coast & Elmina',
    dance: 'Osode — fluid wave hips, arms flow like ocean, shoulders dip and roll',
    accent: '#006B3F',
    sky: [0, 13, 7],
    ground: [0, 26, 13],
    kente: ['#006B3F', '#FCD116', '#FFFFFF', '#CE1126', '#004A2A', '#228B22'],
    moveFunc: function (idx, t, vol, phase) {
      if (vol <= 0) return { armL: 0, armR: 0, bob: 0, sway: 0, legL: 0, legR: 0, tilt: 0, torso: 0, armLen: 1.0 };
      let sp    = 0.028 + vol * 0.05;
      let wave  = sin(t * sp + phase);
      let wave2 = sin(t * sp * 2 + phase);
      return {
        armL:   wave * (30 + vol * 50),
        armR:   sin(t * sp + phase + PI * 0.7) * (28 + vol * 45),
        bob:    wave2 * (2 + vol * 5) - vol * 2,
        sway:   wave * (4 + vol * 14),
        legL:   wave * (3 + vol * 10),
        legR:   sin(t * sp + phase + PI * 0.5) * (3 + vol * 10),
        tilt:   wave2 * (6 + vol * 18),
        torso:  wave * (4 + vol * 10),
        armLen: 1.1
      };
    },
    figures: [
      { skin: '#8B5230', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#7B4218', g: 'M', role: 'Chief',   headpiece: true },
      { skin: '#5C3010', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#6B3A18', g: 'M', role: 'Drummer', drum: true      },
      { skin: '#8B5230', g: 'F', role: 'Dancer',  headwrap: true  }
    ]
  },
  {
    lineName: 'Festival Blue Line',
    tribeName: 'Ga',
    region: 'Greater Accra — Homowo Festival',
    dance: 'Kpanlogo — wild jumps, arms fling every direction, pure freestyle chaos',
    accent: '#4682B4',
    sky: [0, 5, 16],
    ground: [0, 9, 26],
    kente: ['#1A5C9A', '#FCD116', '#CE1126', '#FFFFFF', '#003366', '#4682B4'],
    moveFunc: function (idx, t, vol, phase) {
      if (vol <= 0) return { armL: 0, armR: 0, bob: 0, sway: 0, legL: 0, legR: 0, tilt: 0, torso: 0, armLen: 1.0 };
      let sp    = 0.08 + vol * 0.2;
      let chaos = sin(t * sp * 3.7 + phase * 2.1);
      let jump  = max(0, sin(t * sp * 2 + phase));
      let wild  = sin(t * sp * 1.3 + phase + 1.5);
      return {
        armL:   sin(t * sp * 2.3 + phase) * (50 + vol * 90),
        armR:   sin(t * sp * 1.6 + phase + 1.8) * (50 + vol * 85),
        bob:    -jump * (10 + vol * 30),
        sway:   chaos * (5 + vol * 18),
        legL:   sin(t * sp * 2 + phase) * (12 + vol * 45),
        legR:   sin(t * sp * 2 + phase + PI * 0.6) * (12 + vol * 40),
        tilt:   chaos * (8 + vol * 25),
        torso:  wild * (6 + vol * 20),
        armLen: 1.0 + vol * 0.2
      };
    },
    figures: [
      { skin: '#6B3A18', g: 'M', role: 'Youth'                    },
      { skin: '#5C3010', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#7B4218', g: 'M', role: 'Drummer', drum: true      },
      { skin: '#8B5230', g: 'F', role: 'Dancer',  headwrap: true  },
      { skin: '#6B3A18', g: 'M', role: 'Youth'                    }
    ]
  }
];

let mic, amp;
let micStarted = false;
let currentLine = 0;
let buttons = [];
let micBtn;

let smoothedVol = 0;
let currentVol  = 0;

const BOTTOM_BAR = 90;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  mic = new p5.AudioIn();
  amp = new p5.Amplitude();
  buildButtons();
}

function buildButtons() {
  buttons.forEach(b => b.remove());
  buttons = [];
  if (micBtn) micBtn.remove();

  const btnW   = 138;
  const btnH   = 34;
  const gap    = 8;
  const totalW = KENTE_LINES.length * btnW + (KENTE_LINES.length - 1) * gap;
  const startX = (windowWidth - totalW) / 2;
  const btnY   = windowHeight - 50 + (50 - btnH) / 2;

  KENTE_LINES.forEach((line, i) => {
    let btn = createButton(line.lineName);
    btn.position(startX + i * (btnW + gap), btnY);
    btn.size(btnW, btnH);
    btn.mousePressed(() => { currentLine = i; });
    btn.style('background', line.accent);
    btn.style('color', i === 0 ? '#000' : '#fff');
    btn.style('border', 'none');
    btn.style('border-radius', '20px');
    btn.style('font-size', '12px');
    btn.style('font-weight', '600');
    btn.style('cursor', 'pointer');
    buttons.push(btn);
  });

  micBtn = createButton('🎤 Enable Mic');
  micBtn.position(windowWidth - 150, btnY);
  micBtn.size(130, btnH);
  micBtn.mousePressed(() => startMic());
  micBtn.style('background', '#006B3F');
  micBtn.style('color', '#fff');
  micBtn.style('border', 'none');
  micBtn.style('border-radius', '20px');
  micBtn.style('font-size', '12px');
  micBtn.style('font-weight', '600');
  micBtn.style('cursor', 'pointer');
}

async function startMic() {
  await userStartAudio();
  mic.start(() => {
    amp.setInput(mic);
    micStarted  = true;
    micBtn.html('🎤 Mic ON');
    micBtn.style('background', '#00A060');
  });
}

function getVolume() {
  if (!micStarted) return 0;

  let raw = amp.getLevel();

  // Multiply by 30 so even quiet/distant sound triggers dancing
  let amplified = constrain(raw * 30, 0, 1);

  if (amplified > 0.05) {
    smoothedVol = lerp(smoothedVol, amplified, 0.4);
  } else {
    smoothedVol = lerp(smoothedVol, 0, 0.5);
    if (smoothedVol < 0.01) smoothedVol = 0;
  }

  return smoothedVol;
}

function draw() {
  currentVol = getVolume();
  const tr = KENTE_LINES[currentLine];

  background(tr.sky[0], tr.sky[1], tr.sky[2]);
  drawKenteBanner(tr.kente);
  drawStars();
  drawMoon(tr);
  drawGround(tr);

  if (currentVol > 0.2) {
    noStroke();
    fill(255, 120, 0, (currentVol - 0.2) * 30);
    rect(0, height * 0.5, width, height * 0.5 - BOTTOM_BAR);
  }

  drawTorch(width * 0.10, height * 0.62, currentVol);
  drawTorch(width * 0.58, height * 0.62, currentVol);
  drawTorch(width * 0.90, height * 0.62, currentVol);

  const figs    = tr.figures;
  const spacing = width / (figs.length + 1);
  figs.forEach((fig, i) => {
    drawFigure(fig, spacing * (i + 1), height * 0.62, currentVol, tr.kente, tr.moveFunc, i);
  });

  drawInfoOverlay(tr);

  fill(15, 8, 3);
  noStroke();
  rect(0, height - BOTTOM_BAR, width, BOTTOM_BAR);

  drawVolumeBar(currentVol);
}

function drawMoon(tr) {
  fill(255, 245, 200); noStroke();
  circle(width * 0.88, height * 0.22, 34);
  fill(tr.sky[0], tr.sky[1], tr.sky[2]);
  circle(width * 0.88 + 10, height * 0.22 - 5, 28);
}

function drawGround(tr) {
  fill(tr.ground[0], tr.ground[1], tr.ground[2]);
  rect(0, height * 0.72, width, height * 0.28 - BOTTOM_BAR);
}

function drawInfoOverlay(tr) {
  fill(tr.accent); noStroke();
  textSize(width * 0.022);
  textStyle(BOLD);
  textFont('Georgia');
  textAlign(LEFT);
  text(tr.lineName, width * 0.03, height * 0.21);

  fill(255, 255, 255);
  textSize(width * 0.013);
  textStyle(NORMAL);
  textFont('sans-serif');
  text('Inspired by ' + tr.tribeName + ' tradition', width * 0.03, height * 0.21 + width * 0.019);

  fill(255, 255, 255);
  text(tr.region, width * 0.03, height * 0.21 + width * 0.034);
}

function drawKenteBanner(palette) {
  const cols = 24;
  const rows = 3;
  const cw   = width / cols;
  const rh   = (height * 0.13) / rows;
  noStroke();
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      fill(palette[(c + r) % palette.length]);
      rect(c * cw, r * rh, cw - 0.5, rh - 0.5);
    }
  }
}

function drawStars() {
  fill(255, 255, 255, 190); noStroke();
  const pts = [
    [0.07, 0.38], [0.18, 0.22], [0.31, 0.44], [0.44, 0.28], [0.60, 0.18],
    [0.73, 0.36], [0.87, 0.24], [0.93, 0.42], [0.24, 0.52], [0.56, 0.48], [0.81, 0.50]
  ];
  pts.forEach(([sx, sy]) => {
    circle(sx * width, height * 0.13 + sy * (height * 0.42), 2.5);
  });
}

function drawTorch(x, y, vol) {
  fill(92, 42, 0); noStroke();
  rect(x - 3, y, 6, 32);
  const flicker = vol > 0 ? sin(frameCount * 0.28 + x * 0.01) * 0.35 : 0.1;
  fill(255, floor(90 + 70 * flicker), 0, 224);
  ellipse(x, y - 9, 14 + vol * 10, 28 + vol * 14);
  fill(255, 215, 40, 190);
  ellipse(x, y - 5, 6 + vol * 4, 14 + vol * 6);
}

function drawFigure(fig, mx, baseY, vol, palette, moveFn, idx) {
  const phase  = (idx / 5) * TWO_PI;
  const mv     = moveFn(idx, frameCount, vol, phase);
  const sc     = 0.95;
  const bh     = 50 * sc;
  const hw     = fig.g === 'M' ? 17 * sc : 14 * sc;
  const k0     = palette[idx % palette.length];
  const k1     = palette[(idx + 2) % palette.length];
  const k2     = palette[(idx + 4) % palette.length];
  const cx     = mx + mv.sway;
  const by     = baseY + mv.bob;
  const al     = 26 * sc * (mv.armLen || 1.0);
  const ll     = 32 * sc;

  push();
  translate(cx, by);
  noStroke();

  // Left arm
  push(); translate(-hw - 2, 3); rotate(radians(mv.armL));
  fill(fig.skin); rect(-4 * sc, 0, 8 * sc, al); circle(0, al, 8 * sc);
  pop();

  // Right arm
  push(); translate(hw + 2, 3); rotate(radians(mv.armR));
  fill(fig.skin); rect(-4 * sc, 0, 8 * sc, al); circle(0, al, 8 * sc);
  pop();

  // Drum
  if (fig.drum) drawDrum(34 * sc, 36 * sc, sc, k0, k1, k2);

  // Legs — drawn before torso, never affected by torso rotation
  noStroke();
  if (fig.g === 'M') {
    fill(fig.skin);
    push(); translate(-8 * sc, bh); rotate(radians(mv.legL));
    rect(-4.5 * sc, 0, 9 * sc, ll); pop();
    push(); translate(8 * sc, bh); rotate(radians(mv.legR));
    rect(-4.5 * sc, 0, 9 * sc, ll); pop();
    // Shoes
    fill('#C68642');
    rect(-14 * sc, bh + ll - 3, 14 * sc, 7 * sc);
    rect(2  * sc, bh + ll - 3, 14 * sc, 7 * sc);
  } else {
    // Female — legs peek below skirt
    fill(fig.skin);
    push(); translate(-6 * sc, bh * 0.95); rotate(radians(mv.legL));
    rect(-4 * sc, 0, 8 * sc, ll * 0.6); pop();
    push(); translate(6 * sc, bh * 0.95); rotate(radians(mv.legR));
    rect(-4 * sc, 0, 8 * sc, ll * 0.6); pop();
    // Shoes
    fill('#C68642');
    rect(-12 * sc, bh * 0.95 + ll * 0.58, 12 * sc, 6 * sc);
    rect(1   * sc, bh * 0.95 + ll * 0.58, 12 * sc, 6 * sc);
  }

  // Torso (rotation only affects upper body)
  push();
  rotate(radians(mv.torso));
  if (fig.g === 'M') {
    fill(k0); rect(-hw, 0, hw * 2, bh);
    fill(k1); rect(-hw, bh * 0.22, hw * 2, bh * 0.09);
    fill(k2); rect(-hw, bh * 0.50, hw * 2, bh * 0.09);
    fill(k1); rect(-hw, bh * 0.74, hw * 2, bh * 0.08);
  } else {
    fill(k0); rect(-hw, 0, hw * 2, bh * 0.48);
    fill(k1); rect(-hw, bh * 0.17, hw * 2, bh * 0.07);
    const sw2 = hw + 7 * sc;
    fill(k0); rect(-sw2, bh * 0.48, sw2 * 2, bh * 0.55);
    fill(k2); rect(-sw2, bh * 0.60, sw2 * 2, bh * 0.07);
    fill(k1); rect(-sw2, bh * 0.78, sw2 * 2, bh * 0.06);
  }
  pop();

  // Neck
  fill(fig.skin); noStroke();
  rect(-4 * sc, -8 * sc, 8 * sc, 10 * sc);

  // Head
  const hr = 12 * sc;
  push();
  translate(0, -8 * sc - hr);
  rotate(radians(mv.tilt));

  fill(fig.skin); noStroke();
  ellipse(0, 0, hr * 1.64, hr * 2);
  fill(30);
  arc(0, 0, hr * 1.64, hr * 2, PI, TWO_PI);

  if (fig.headwrap) {
    fill(k2); rect(-hr, -hr * 0.68, hr * 2, hr * 0.72);
    fill(k1); rect(-hr, -hr * 0.68, hr * 2, hr * 0.13);
    fill(k2); ellipse(hr * 0.35, -hr * 0.68, hr * 0.6, hr * 0.44);
  }

  if (fig.headpiece) {
    fill(k0); rect(-hr * 0.85, -hr * 1.02, hr * 1.7, hr * 0.38);
    if (fig.crown) {
      fill('#FFD700');
      for (let p = -2; p <= 2; p++) {
        rect(p * hr * 0.32 - 2.5, -hr * 1.36, 5, hr * 0.36);
        circle(p * hr * 0.32, -hr * 1.36, 8);
      }
    }
  }

  // Eyes
  fill(0, 0, 0, 180);
  ellipse(-hr * 0.28, hr * 0.06, 5, 3.6);
  ellipse( hr * 0.28, hr * 0.06, 5, 3.6);
  pop();

  pop();

  // Role label — drawn at fixed mx position, not affected by sway/bob
  fill(255, 255, 255);
  textSize(13 * sc); textAlign(CENTER); textStyle(BOLD);
  const labelY = baseY + 50 * sc + 32 * sc + 18;
  text(fig.role, mx, labelY);
}

function drawDrum(x, y, sc, k0, k1, k2) {
  push(); translate(x, y); noStroke();
  fill('#8B5A2B'); ellipse(0, 0, 26 * sc, 40 * sc);
  fill('#C68642');
  ellipse(0, -16 * sc, 26 * sc, 8 * sc);
  ellipse(0,  16 * sc, 26 * sc, 8 * sc);
  stroke('#F5DEB3'); strokeWeight(1.3);
  line(-10*sc, -12*sc, -10*sc, 12*sc);
  line( -5*sc, -14*sc,  -5*sc, 14*sc);
  line(   0,  -15*sc,    0,  15*sc);
  line(  5*sc, -14*sc,   5*sc, 14*sc);
  line( 10*sc, -12*sc,  10*sc, 12*sc);
  noStroke();
  fill(k0); ellipse(0, 0, 10 * sc, 10 * sc);
  fill(k1); ellipse(0, -16 * sc, 10 * sc, 3 * sc);
  fill(k2); ellipse(0,  16 * sc, 10 * sc, 3 * sc);
  pop();
}

function drawVolumeBar(vol) {
  const textY = height - BOTTOM_BAR + 16;
  const barY  = textY + 6;

  fill(255, 255, 255);
  textSize(13); textStyle(BOLD); textAlign(LEFT);
  let lbl;
  if (!micStarted)              lbl = 'Enable the mic — dancers are waiting';
  else if (vol === 0)           lbl = 'No sound detected — dancers paused';
  else if (vol < 0.2)           lbl = 'Gentle sway — festival begins';
  else if (vol < 0.45)          lbl = 'Picking up — drums call the crowd';
  else if (vol < 0.7)           lbl = 'Full dance — celebration rises';
  else                          lbl = 'FRENZY — maximum energy!';
  text(lbl, 12, textY);

  const maxBarW = width * 0.25;
  const barW    = vol * maxBarW;
  const barX    = width - maxBarW - 150;
  const c = vol < 0.35 ? color('#006B3F') : vol < 0.7 ? color('#D4A017') : color('#CE1126');
  fill(c); noStroke();
  rect(barX, barY, barW, 7, 4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildButtons();
}