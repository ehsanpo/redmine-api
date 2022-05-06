#!/bin/bash
set -a # automatically export all variables
source .env
set +a

wget "${API_URL}/issues.json?assigned_to_id=222&key=${REDMINE_KEY}" -O ./src/data/redmines-issue.json

# #All Buckets
wget "${API_URL}//issues.json?query_id=342&key=${REDMINE_KEY}" -O ./src/data/redmines-allbuckets.json

# #Sprint - Team E
wget "${API_URL}/issues.json?query_id=312&key=${REDMINE_KEY}" -O ./src/data/redmines-teame.json

# #Total antal ärende for olika teams under Nuvarande sprint
wget "${API_URL}/issues.json?query_id=319&key=${REDMINE_KEY}" -O ./src/data/redmines-sprint.json