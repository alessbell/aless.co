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
  echo 'git push where?' && echo "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"

  # get latest release of alessbell/resume using GET /repos/:owner/:repo/releases/latest
  # see: https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository
  # GET https://api.github.com/repos/alessbell/resume/releases/latest

  # download resume.pdf and save in static/resume.pdf

  touch newfile1.js

  # git add and push to branch beginning with resume/
  # https://github.com/pkgjs/gh-pages/blob/master/entrypoint.sh
  git config --global push.default current
  git config --global user.email "github+resumebot@bellisar.io"
  git config --global user.name "Resume Bot"

  git checkout -b "${BRANCH_NAME}"
  git add .
  git commit -m "Updates resume to version 1.x" # TODO: add latest version num to commit message
  git push "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git" "${BRANCH_NAME}" --force
}

main
