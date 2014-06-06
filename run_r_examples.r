## finds all .R files within a folder and soruces them
sourceEntireFolder <- function(folderName, verbose=FALSE, showWarnings=TRUE) { 
  files <- list.files(folderName, full.names=TRUE)

  # Grab only R files
  files <- files[ grepl("\\.[rR]$", files) ]

  if (!length(files) && showWarnings)
    warning("No R files in ", folderName)

  for (f in files) {
    if (verbose)
      cat("sourcing: ", f, "\n")
    ## TODO:  add caught whether error or not and return that
    try(source(f, local=FALSE, echo=FALSE), silent=!verbose)
  }
  return(invisible(NULL))
}

sourceEntireFolder('/Users/chris/plotlygithub/documentation/executable/r', verbose=TRUE)
