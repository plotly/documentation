library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  z = matrix(c(1.5, 1.23469387755, 1.01020408163, 0.826530612245, 0.683673469388, 0.581632653061, 0.520408163265, 0.5, 0.520408163265, 0.581632653061, 0.683673469388, 0.826530612245, 1.01020408163, 1.23469387755, 1.5, 1.36734693878, 1.10204081633, 0.877551020408, 0.69387755102, 0.551020408163, 0.448979591837, 0.387755102041, 0.367346938776, 0.387755102041, 0.448979591837, 0.551020408163, 0.69387755102, 0.877551020408, 1.10204081633, 1.36734693878, 1.25510204082, 0.989795918367, 0.765306122449, 0.581632653061, 0.438775510204, 0.336734693878, 0.275510204082, 0.255102040816, 0.275510204082, 0.336734693878, 0.438775510204, 0.581632653061, 0.765306122449, 0.989795918367, 1.25510204082, 1.16326530612, 0.897959183673, 0.673469387755, 0.489795918367, 0.34693877551, 0.244897959184, 0.183673469388, 0.163265306122, 0.183673469388, 0.244897959184, 0.34693877551, 0.489795918367, 0.673469387755, 0.897959183673, 1.16326530612, 1.09183673469, 0.826530612245, 0.602040816327, 0.418367346939, 0.275510204082, 0.173469387755, 0.112244897959, 0.0918367346939, 0.112244897959, 0.173469387755, 0.275510204082, 0.418367346939, 0.602040816327, 0.826530612245, 1.09183673469, 1.04081632653, 0.775510204082, 0.551020408163, 0.367346938776, 0.224489795918, 0.122448979592, 0.0612244897959, 0.0408163265306, 0.0612244897959, 0.122448979592, 0.224489795918, 0.367346938776, 0.551020408163, 0.775510204082, 1.04081632653, 1.01020408163, 0.744897959184, 0.520408163265, 0.336734693878, 0.19387755102, 0.0918367346939, 0.030612244898, 0.0102040816327, 0.030612244898, 0.0918367346939, 0.19387755102, 0.336734693878, 0.520408163265, 0.744897959184, 1.01020408163, 1.0, 0.734693877551, 0.510204081633, 0.326530612245, 0.183673469388, 0.0816326530612, 0.0204081632653, 0.0, 0.0204081632653, 0.0816326530612, 0.183673469388, 0.326530612245, 0.510204081633, 0.734693877551, 1.0, 1.01020408163, 0.744897959184, 0.520408163265, 0.336734693878, 0.19387755102, 0.0918367346939, 0.030612244898, 0.0102040816327, 0.030612244898, 0.0918367346939, 0.19387755102, 0.336734693878, 0.520408163265, 0.744897959184, 1.01020408163, 1.04081632653, 0.775510204082, 0.551020408163, 0.367346938776, 0.224489795918, 0.122448979592, 0.0612244897959, 0.0408163265306, 0.0612244897959, 0.122448979592, 0.224489795918, 0.367346938776, 0.551020408163, 0.775510204082, 1.04081632653, 1.09183673469, 0.826530612245, 0.602040816327, 0.418367346939, 0.275510204082, 0.173469387755, 0.112244897959, 0.0918367346939, 0.112244897959, 0.173469387755, 0.275510204082, 0.418367346939, 0.602040816327, 0.826530612245, 1.09183673469, 1.16326530612, 0.897959183673, 0.673469387755, 0.489795918367, 0.34693877551, 0.244897959184, 0.183673469388, 0.163265306122, 0.183673469388, 0.244897959184, 0.34693877551, 0.489795918367, 0.673469387755, 0.897959183673, 1.16326530612, 1.25510204082, 0.989795918367, 0.765306122449, 0.581632653061, 0.438775510204, 0.336734693878, 0.275510204082, 0.255102040816, 0.275510204082, 0.336734693878, 0.438775510204, 0.581632653061, 0.765306122449, 0.989795918367, 1.25510204082, 1.36734693878, 1.10204081633, 0.877551020408, 0.69387755102, 0.551020408163, 0.448979591837, 0.387755102041, 0.367346938776, 0.387755102041, 0.448979591837, 0.551020408163, 0.69387755102, 0.877551020408, 1.10204081633, 1.36734693878, 1.5, 1.23469387755, 1.01020408163, 0.826530612245, 0.683673469388, 0.581632653061, 0.520408163265, 0.5, 0.520408163265, 0.581632653061, 0.683673469388, 0.826530612245, 1.01020408163, 1.23469387755, 1.5), nrow=15, ncol=15), 
  x = c(-1.0, -0.857142857143, -0.714285714286, -0.571428571429, -0.428571428571, -0.285714285714, -0.142857142857, 0.0, 0.142857142857, 0.285714285714, 0.428571428571, 0.571428571429, 0.714285714286, 0.857142857143, 1.0), 
  y = c(-1.0, -0.857142857143, -0.714285714286, -0.571428571429, -0.428571428571, -0.285714285714, -0.142857142857, 0.0, 0.142857142857, 0.285714285714, 0.428571428571, 0.571428571429, 0.714285714286, 0.857142857143, 1.0), 
  ncontours = 30, 
  showscale = FALSE, 
  type = "contour"
)
trace2 <- list(
  x = c(-0.8, -0.48, -0.288, -0.1728, -0.10368, -0.062208, -0.0373248, -0.02239488, -0.013436928, -0.0080621568, -0.00483729408, -0.002902376448, -0.0017414258688, -0.00104485552128, -0.000626913312768, -0.000376147987661), 
  y = c(-0.9, -0.72, -0.576, -0.4608, -0.36864, -0.294912, -0.2359296, -0.18874368, -0.150994944, -0.1207959552, -0.09663676416, -0.077309411328, -0.0618475290624, -0.0494780232499, -0.0395824185999, -0.0316659348799), 
  mode = "markers+lines", 
  name = "steepest", 
  line = list(color = "black"), 
  type = "scatter"
)
data <- list(trace1, trace2)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="contour-scatter"))
url <- response$url