#!/bin/bash

# Suggested by Github actions to be strict
set -e
set -o pipefail

################################################################################
# Global Variables (we can't use GITHUB_ prefix)
################################################################################

API_VERSION=v3
BASE=https://api.github.com
AUTH_HEADER="Authorization: token ${GITHUB_TOKEN}"
HEADER="Accept: application/vnd.github.${API_VERSION}+json"
HEADER="${HEADER}; application/vnd.github.antiope-preview+json; application/vnd.github.shadow-cat-preview+json"

# URLs
REPO_URL="${BASE}/repos/${GITHUB_REPOSITORY}"
PULLS_URL=$REPO_URL/pulls

create_pull_request() {

    # JSON strings
    SOURCE="$(echo -n "${1}" | jq --raw-input --slurp ".")"  # from this branch
    TARGET="$(echo -n "${2}" | jq --raw-input --slurp ".")"  # pull request TO this target
    BODY="$(echo -n "${3}" | jq --raw-input --slurp ".")"    # this is the content of the message
    TITLE="$(echo -n "${4}" | jq --raw-input --slurp ".")"   # pull request title
    DRAFT="false";

    # Check if the branch already has a pull request open

    DATA="{\"base\":${TARGET}, \"head\":${SOURCE}, \"body\":${BODY}}"
    RESPONSE=$(curl -sSL -H "${AUTH_HEADER}" -H "${HEADER}" --user "${GITHUB_ACTOR}" -X GET --data "${DATA}" ${PULLS_URL})
    PR=$(echo "${RESPONSE}" | jq --raw-output '.[] | .head.ref')
    echo "Response ref: ${PR}"

    # Option 1: The pull request is already open
    if [[ "${PR}" == "${SOURCE}" ]]; then
        echo "Pull request from ${SOURCE} to ${TARGET} is already open!"

    # Option 2: Open a new pull request
    else
        # Post the pull request
        DATA="{\"title\":${TITLE}, \"body\":${BODY}, \"base\":${TARGET}, \"head\":${SOURCE}, \"draft\":${DRAFT}}"
        echo "curl --user ${GITHUB_ACTOR} -X POST --data ${DATA} ${PULLS_URL}"
        curl -sSL -H "${AUTH_HEADER}" -H "${HEADER}" --user "${GITHUB_ACTOR}" -X POST --data "${DATA}" ${PULLS_URL}
        echo $?
    fi
}

main() {
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
  git config --global user.email "github@bellisar.io"
  git config --global user.name "Alessia Bellisario"

  git checkout -b "${BRANCH_NAME}"
  git add .
  git commit -m "Updates resume to version 1.x" # TODO: add latest version num to commit message
  git push "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git" "${BRANCH_NAME}"


  if [ -z "${PULL_REQUEST_BRANCH}" ]; then
      PULL_REQUEST_BRANCH=master
  fi
  echo "Pull requests will go to ${PULL_REQUEST_BRANCH}"

  # Get the name of the action that was triggered
  # BRANCH=$(jq --raw-output .ref "${GITHUB_EVENT_PATH}");
  BRANCH=$(echo "${BRANCH/refs\/heads\//}")
  echo "Found branch $BRANCH"
  # BRANCH=

  # If it's to the target branch, ignore it
  if [[ "${BRANCH}" == "${PULL_REQUEST_BRANCH}" ]]; then
    echo "Target and current branch are identical (${BRANCH}), skipping."
  else
    # Pull request body (optional)
    if [ -z "${PULL_REQUEST_BODY}" ]; then
        echo "No pull request body is set, will use default."
        PULL_REQUEST_BODY="This is an automated pull request to update the container collection ${BRANCH}"
    fi
    echo "Pull request body is ${PULL_REQUEST_BODY}"

    # Pull request title (optional)
    if [ -z "${PULL_REQUEST_TITLE}" ]; then
        echo "No pull request title is set, will use default."
        PULL_REQUEST_TITLE="Update container ${BRANCH}"
    fi
    echo "Pull request title is ${PULL_REQUEST_TITLE}"

    create_pull_request "${BRANCH}" "${PULL_REQUEST_BRANCH}" "${PULL_REQUEST_BODY}" "${PULL_REQUEST_TITLE}"
  fi
}


echo "==========================================================================
START: Running Pull Request on Branch Update Action!";
main;
echo "==========================================================================
END: Finished"
