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

      curl -XPOST -H "${HEADER}" \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      "${PULLS_URL}" \
      --data "${DATA}"
      echo $?
    fi
}

main() {
  RELEASES_URL=https://api.github.com/repos/alessbell/resume/releases/latest

  RES=$(curl -sSL -H "${AUTH_HEADER}" -H "${HEADER}" --user "${GITHUB_ACTOR}" -X GET ${RELEASES_URL})
  VERSION=$(echo "${RES}" | jq --raw-output '.tag_name')
  PDF_URL="https://github.com/alessbell/resume/releases/download/${VERSION}/resume.pdf"
  echo "PDF URL: ${PDF_URL}"

  # download resume.pdf and save in static/resume.pdf
  curl -L0 "${PDF_URL}" --output ./static/resume.pdf

  git config --global push.default current
  git config --global user.email "github@bellisar.io"
  git config --global user.name "Alessia Bellisario"

  BRANCH="${BRANCH}/${VERSION}"
  git checkout -b "${BRANCH}"
  git add .
  git commit -m "Update resume to version ${VERSION}"
  git push "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git" "${BRANCH}" --force

  echo "Pull requests will go to ${PULL_REQUEST_BRANCH}"

  # Get the name of the action that was triggered
  # BRANCH=$(jq --raw-output .ref "${GITHUB_EVENT_PATH}");
  BRANCH=$(echo "${BRANCH/refs\/heads\//}")
  echo "Found branch $BRANCH"

  # If it's to the target branch, ignore it
  if [[ "${BRANCH}" == "${PULL_REQUEST_BRANCH}" ]]; then
    echo "Target and current branch are identical (${BRANCH}), skipping."
  else
    create_pull_request "${BRANCH}" "${PULL_REQUEST_BRANCH}" "${PULL_REQUEST_BODY}" "Update resume to ${VERSION}"
  fi
}

main;
