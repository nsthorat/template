#!/bin/bash

# Start the webpack devserver.
npx webpack-dev-server &
pid[1]=$!

# Run the node server.
npx ts-node src/server/server.ts \
  --project ./tsconfig-server.json \
  --dev
pid[0]=$!

# When control+c is pressed, kill all process ids.
trap "kill ${pid[0]} ${pid[1]}; exit 1" INT
wait

