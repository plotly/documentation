library(RJSONIO)
path = "exceptions/ggplot2"
trace = TRUE
for (nm in list.files(path, pattern = "\\.[RrSsQq]$")) {
   if (trace) cat(nm, ":")
   source(file.path(path, nm))
   # save plotly_url to file
   writeLines(toJSON(list(url=plotly_url)),
              paste(path, "/", substr(basename(nm), 1, nchar(basename(nm)) - 2), ".json", sep=""))
   rm(plotly_url)
   if (trace) cat("\n")
}
