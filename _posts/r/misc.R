################################################################################
# Miscellaneous
################################################################################

# ----------------------------------------------------------------------------
# https://plot.ly/r/static-image-export/ (currently no R page)
# ----------------------------------------------------------------------------

# Use the curl package to download a static image of any publicly viewable figure
library(curl)
curl_download("https://plot.ly/~cpsievert/1000.png", "image.png")
curl_download("https://plot.ly/~cpsievert/1000.pdf", "image.pdf")

# you can also download the underlying SVG

curl_download("https://plot.ly/~cpsievert/1000.svg", "image.svg")
