#!/bin/bash

main() {
  echo 'in entrypoint.sh'
  echo 'Node version:' $(node -v)
  echo 'NPM version:' $(npm -v)
  echo 'Git version:' $(git --version)
  echo 'Git branch:' $(git branch)
  echo 'output of pwd:' && pwd
  echo 'output of ls:' && ls
  echo 'output of git config:' && git config --list
  echo 'these are arguments set to the workflow' && echo ${*}

  # get latest release of alessbell/resume using GET /repos/:owner/:repo/releases/latest
  # see: https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository
  # GET https://api.github.com/repos/alessbell/resume/releases/latest

  # download resume.pdf and save in static/resume.pdf
  touch newfile.js

  # git add and push to branch beginning with resume/
  git config --global push.default current
  git config --global user.email "github+resumebot@bellisar.io"
  git config --global user.name "Resume Bot"

  git checkout -b resume/new-version
  git add .
  git commit -m "Trying something"
  git push -u
}

main
