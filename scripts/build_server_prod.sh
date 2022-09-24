#!/bin/bash

rm -rf dist/

# Create the bundle and static assets.
npx webpack

# Build the node.js JavaScript.
npx tsc --project ./tsconfig-server.json

echo
echo "Server built successfully!"
echo "You can run the server with the following:"
echo "$ ./scripts/run_server_prod.sh"
