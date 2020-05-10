#!/bin/bash

for file in plotly.r-docs/**/*.Rmd; do mv $file ${file/.Rmd/.md}; done;
