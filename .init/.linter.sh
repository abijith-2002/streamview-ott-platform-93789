#!/bin/bash
cd /home/kavia/workspace/code-generation/streamview-ott-platform-93789/ott_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

