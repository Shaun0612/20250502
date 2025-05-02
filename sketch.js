let capture;
let graphics;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色為 #CECEFF
  background('#CECEFF');
  
  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素

  // 建立與攝影機影像相同大小的圖形
  graphics = createGraphics(capture.width, capture.height);
}

function draw() {
  // 繪製背景
  background('#CECEFF');
  
  // 將攝影機影像顯示在畫布中央，並左右翻轉
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  push(); // 儲存當前繪圖狀態
  translate(width, 0); // 將原點移動到畫布右側
  scale(-1, 1); // 水平翻轉畫布
  image(capture, x, y, capture.width, capture.height);
  pop(); // 恢復繪圖狀態

  // 更新 graphics 的內容
  graphics.background(0); // 設定背景為黑色
  for (let i = 0; i < graphics.width; i += 20) {
    for (let j = 0; j < graphics.height; j += 20) {
      let col = capture.get(i, j); // 從 capture 中取得相對應位置的顏色
      graphics.fill(col);
      graphics.noStroke();
      graphics.ellipse(i + 10, j + 10, 15, 15); // 繪製圓，中心點偏移 10
    }
  }

  // 在攝影機影像上方顯示圖形，並修正左右翻轉
  push(); // 儲存當前繪圖狀態
  translate(width, 0); // 將原點移動到畫布右側
  scale(-1, 1); // 水平翻轉畫布
  image(graphics, x , y); // 調整位置，讓圖形顯示在影像上方
  pop(); // 恢復繪圖狀態
}

function windowResized() {
  // 當視窗大小改變時，調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
