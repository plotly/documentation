# Time Series in R | Examples | Plotly



# Time Series Plots in R


```r
# POSIXlt date time class with timezone
library(plotly)
now_lt <- as.POSIXlt(Sys.time(), tz = "GMT")
tm <- seq(0, 600, by = 10)
x <- now_lt - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "seconds from now in GMT"))
```

### POSIXct date time class without timezone


```r
now_ct <- as.POSIXct(Sys.time())
tm <- seq(0, 600, by = 10)
x <- now_ct - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "seconds from now in", Sys.timezone()))
```

### Dates


```r
today <- Sys.Date()
tm <- seq(0, 600, by = 10)
x <- today - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "days from today"))
```
