#!/bin/bash
cd /home/kavia/workspace/code-generation/warzone-strike-100889-c55a34cb/unity_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

