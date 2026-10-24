/**
 * 圖層王 - 香港 IKEA 全屋實體傢俬卡帶庫 (IKEA HK Full House Catalog)
 * 單位全部為毫米 (mm)
 * face 標配宿主面: 'floor' (地板), 'front' (牆身), 'ceiling' (天花)
 */
const IKEA_CATALOG = {
  bedroom: [
    { id: "bed-single-90", name: "IKEA 3呎標準單人床 (90x190)", w: 980, l: 1950, h: 400, face: "floor", col: "#d4a373" },
    { id: "bed-double-120", name: "IKEA 4呎細雙人床 (120x190)", w: 1240, l: 1950, h: 400, face: "floor", col: "#7f8c8d" },
    { id: "bed-malm-135", name: "IKEA Malm 4呎半標準雙人床", w: 1560, l: 2090, h: 380, face: "floor", col: "#d4a373" },
    { id: "bed-malm-gas", name: "IKEA Malm 雙人油壓地台床", w: 1560, l: 2090, h: 1000, face: "floor", col: "#f5f6fa" },
    { id: "bed-hemnes-daybed", name: "IKEA Hemnes 坐卧兩用日熹床", w: 890, l: 2090, h: 830, face: "floor", col: "#ffffff" },
    { id: "wardrobe-kleppstad", name: "IKEA Kleppstad 雙門衣櫃 (細房標配)", w: 790, l: 550, h: 1760, face: "floor", col: "#f5f6fa" },
    { id: "wardrobe-pax-150", name: "IKEA Pax 趟門大衣櫃 (1.5米寬)", w: 1500, l: 660, h: 2360, face: "floor", col: "#2f3640" },
    { id: "desk-micke-73", name: "IKEA Micke 迷你抽屜書枱 (細房神器)", w: 730, l: 500, h: 750, face: "floor", col: "#f5f6fa" },
    { id: "shelf-billy-80", name: "IKEA Billy 標準全高大書櫃 (80寬)", w: 800, l: 280, h: 2020, face: "floor", col: "#ffffff" },
    { id: "shelf-billy-40", name: "IKEA Billy 窄身全高書櫃 (40寬)", w: 400, l: 280, h: 2020, face: "floor", col: "#f5f6fa" },
    { id: "bed-wall-shelf", name: "IKEA Lack 床頭壁掛層板 (掛牆)", w: 1100, l: 260, h: 50, face: "front", col: "#ffffff" }
  ],
  living: [
    { id: "sofa-glostad-2p", name: "IKEA Glostad 雙人布藝小梳化 (1.2米)", w: 1210, l: 780, h: 680, face: "floor", col: "#576574" },
    { id: "sofa-friheten-l", name: "IKEA Friheten L型轉角梳化床", w: 2300, l: 1510, h: 660, face: "floor", col: "#2c3e50" },
    { id: "tv-bench-lack", name: "IKEA Lack 電視地櫃 (90cm)", w: 900, l: 260, h: 450, face: "floor", col: "#1e272c" },
    { id: "coffee-table-lack", name: "IKEA Lack 正方形小茶几 (55cm)", w: 550, l: 550, h: 450, face: "floor", col: "#d4a373" },
    { id: "shelf-kallax-4", name: "IKEA Kallax 四格組合架 (77x77)", w: 770, l: 390, h: 770, face: "floor", col: "#e0a96d" },
    { id: "shelf-kallax-8", name: "IKEA Kallax 八格直橫兩用櫃", w: 770, l: 390, h: 1470, face: "floor", col: "#ffffff" },
    { id: "tv-55-wall", name: "55吋 4K 薄屏電視 (掛牆)", w: 1230, l: 80, h: 710, face: "front", col: "#111111" },
    { id: "living-wall-cabinet", name: "IKEA Besta 客廳掛牆吊櫃", w: 1200, l: 300, h: 400, face: "front", col: "#ffffff" },
    { id: "living-ceiling-fan", name: "智能吸頂風扇燈 (天花頂)", w: 500, l: 500, h: 250, face: "ceiling", col: "#00d2d3" }
  ],
  dining: [
    { id: "table-melltorp-75", name: "IKEA Melltorp 正方迷你餐枱 (75x75)", w: 750, l: 750, h: 740, face: "floor", col: "#ffffff" },
    { id: "table-wangsta-ext", name: "IKEA Wangsta 伸縮餐枱 (2至4人)", w: 1200, l: 750, h: 730, face: "floor", col: "#f5f6fa" },
    { id: "chair-teodores", name: "IKEA Teodores 標準餐椅", w: 460, l: 540, h: 800, face: "floor", col: "#576574" },
    { id: "dining-sideboard", name: "餐邊薄型儲物櫃/水吧地櫃", w: 900, l: 350, h: 850, face: "floor", col: "#d4a373" },
    { id: "dining-pendant-light", name: "飯廳簡約單頭暖光吊燈 (天花)", w: 380, l: 380, h: 400, face: "ceiling", col: "#f1c40f" }
  ],
  kitchen: [
    { id: "kitchen-base-cabinet", name: "標準廚房地櫃連枱面石 (60深)", w: 1200, l: 600, h: 850, face: "floor", col: "#dfe6e9" },
    { id: "kitchen-sink-base", name: "廚房單盤鋅盆地櫃", w: 800, l: 600, h: 850, face: "floor", col: "#b2bec3" },
    { id: "fridge-2door-slim", name: "雙門纖巧型雪櫃 (細廚房標配)", w: 550, l: 600, h: 1650, face: "floor", col: "#636e72" },
    { id: "washing-machine-front", name: "前置式薄身洗衣機", w: 600, l: 500, h: 850, face: "floor", col: "#ffffff" },
    { id: "kitchen-wall-cabinet", name: "廚房雙門儲物吊櫃 (掛牆高位)", w: 800, l: 350, h: 700, face: "front", col: "#ffffff" },
    { id: "cooker-hood-island", name: "抽油煙機 (掛牆/吊掛)", w: 700, l: 500, h: 350, face: "front", col: "#2d3436" }
  ],
  bathroom: [
    { id: "bath-toilet-std", name: "標準貼牆座廁 (含出水距離)", w: 380, l: 680, h: 780, face: "floor", col: "#ffffff" },
    { id: "bath-vanity-basin", name: "洗手盆儲物地櫃 (纖巧型)", w: 600, l: 450, h: 820, face: "floor", col: "#d4a373" },
    { id: "bath-shower-tray", name: "淋浴隔斷企缸石基 (防濺水區)", w: 800, l: 800, h: 100, face: "floor", col: "#636e72" },
    { id: "bath-mirror-cabinet", name: "IKEA Enhet 壁掛雙門鏡櫃 (掛牆)", w: 600, l: 170, h: 750, face: "front", col: "#dfe6e9" },
    { id: "bath-towel-rack", name: "不銹鋼毛巾架 (掛牆)", w: 600, l: 150, h: 100, face: "front", col: "#b2bec3" },
    { id: "bath-heater-ceiling", name: "天花式浴室寶 (天花)", w: 300, l: 300, h: 180, face: "ceiling", col: "#ffffff" }
  ],
  fixtures: [
    { id: "hk-socket-single", name: "🔌 86型標準單位13A電掣 (掛牆)", w: 86, l: 25, h: 86, face: "front", col: "#ffffff" },
    { id: "hk-socket-double", name: "🔌 86型標準雙位13A電掣 (掛牆)", w: 146, l: 25, h: 86, face: "front", col: "#e74c3c" }
  ]
};

function getFlatIkeaCatalog() {
  let list = [];
  Object.keys(IKEA_CATALOG).forEach(cat => {
    list = list.concat(IKEA_CATALOG[cat]);
  });
  return list;
}
