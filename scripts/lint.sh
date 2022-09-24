#!/bin/bash

echo "Checking python types with mypy..."
mypy src/

echo
echo "Linting typescript & javascript..."
npm run lint

echo
echo "Building typescript..."
npx tsc
