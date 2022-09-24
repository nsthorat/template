#!/bin/bash

echo
echo "Linting typescript & javascript..."
npm run lint

echo
echo "Building typescript..."
npx tsc
