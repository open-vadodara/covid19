#!/bin/bash

echo "main.sh start"
set -eu

remote_name="origin"
main_branch="main"
repo_uri="git@github.com:open-vadodara/covid19.git"

echo "1. Scraping data"
python main.py
echo "1. Scraping completed!"

echo "main.sh end"
