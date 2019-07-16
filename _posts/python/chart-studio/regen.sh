#!/bin/bash

ls *ipynb | sed 's/\.ipynb$//g' | while read NB; do

  jupyter nbconvert $NB.ipynb --to html --template nb.tpl --output 2019-07-03-$NB.html

 done
