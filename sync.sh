#!/usr/bin/env bash


bundler exec jekyll clean
bundler exec jekyll build

rsync -r _site/ weddian:/var/www/branchenbuch.weddian.de
