#!/bin/bash

echo "main.sh start"
set -eu

remote_name="origin"
main_branch="main"
repo_uri="git@github.com:open-vadodara/covid19.git"

echo "1. Scraping data"
python main.py
echo "1. Scraping completed!"

if git status | grep 'new file\|modified'
then
    set -e
    git commit -am "data updated on - $(date)"
    git remote set-url "$remote_name" "$repo_uri" # includes access token
    git push --force-with-lease "$remote_name" "$main_branch" "$repo_uri"
else
    set -e
    echo "No changes since last run"
fi

echo "main.sh end"