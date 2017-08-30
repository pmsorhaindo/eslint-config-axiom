#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# We only want to publish to npm when on master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
  echo 'testing master only deploys'
  exit 1
fi

yarn semantic-release
