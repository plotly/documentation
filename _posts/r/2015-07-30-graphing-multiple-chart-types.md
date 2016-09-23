# Layering Graphical Elements in R | Examples | Plotly



# Graphing Multiple Chart Types in R

### Scatterplot with loess smoother


```r
library(plotly)
p <- plot_ly(mtcars, x = ~disp, color = I("black")) %>%
  add_markers(y = ~mpg, text = rownames(mtcars), showlegend = F) %>%
  add_lines(y = ~fitted(loess(mpg ~ disp)), color = I("red"),
            name = "loess smoother", showlegend = T)
p
```


  
### Loess smoother with uncertainty bounds


```r
m <- loess(mpg ~ disp, data = mtcars)

p %>%
  add_ribbons(
    data = broom::augment(m),
    ymin = ~.fitted - 1.96 * .se.fit, 
    ymax = ~.fitted + 1.96 * .se.fit, 
    color = I("red"), name = "standard error"
  )
```



### Plotting forecast objects


```r
library(forecast)
fit <- ets(USAccDeaths)
fore <- forecast(fit, h = 48, level = c(80, 95))

plot_ly() %>%
  add_lines(x = time(USAccDeaths), y = USAccDeaths, 
            color = I("black"), name = "observed") %>%
  add_ribbons(x = time(fore$mean), ymin = fore$lower[, 2], ymax = fore$upper[, 2],
              color = I("gray95"), name = "95% confidence") %>%
  add_ribbons(x = time(fore$mean), ymin = fore$lower[, 1], ymax = fore$upper[, 1],
              color = I("gray80"), name = "80% confidence") %>%
  add_lines(x = time(fore$mean), y = fore$mean, color = I("blue"), name = "prediction")
```


