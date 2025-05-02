let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色為 #CECEFF
  background('#CECEFF');
  
  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  // 繪製背景
  background('#CECEFF');
  
  // 將攝影機影像顯示在畫布中央
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  image(capture, x, y, capture.width, capture.height);
}

function windowResized() {
  // 當視窗大小改變時，調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
