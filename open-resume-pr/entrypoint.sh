#!/bin/bash

main() {
  echo 'in entrypoint.sh'
  echo 'Node version:' $(node -v)
  echo 'NPM version:' $(npm -v)
  echo 'Git version:' $(git --version)
  echo 'output of pwd:' && pwd
  echo 'output of ls:' && ls
  echo 'these are arguments set to the workflow' && echo ${*}
}

main
