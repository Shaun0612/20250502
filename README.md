# 2025上課筆記

---

##  第一條指令

產生一個全螢幕的畫布，背景顏色為#CECEFF
擷取攝影機的影像，正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js内

説明：
createCanvas(windowWidth, windowHeight): 建立全螢幕畫布。
background('#CECEFF'): 設定背景顏色為淺紫色（#CECEFF）。
createCapture(VIDEO): 啟用攝影機並擷取影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8): 設定影像的寬高為視窗大小的 80%。
image(capture, x, y, capture.width, capture.height): 將攝影機影像繪製在畫布中央。
windowResized: 當視窗大小改變時，畫布會自動調整大小。

---
