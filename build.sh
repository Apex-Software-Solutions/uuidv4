#! /usr/bin/bash

build() {
    echo "Starting build"
    cp -r ./package.json dist/ && cp -r ./package-lock.json dist/ && cp -r ./README.md dist/ && cp -r ./index.js dist/  && cp -r ./src/ dist/
    echo "Build finished"
}

run_build() {
    if [ -d "./dist" ] 
        then
            echo "Directory ./dist exists." 
        else
            echo "Error: Directory ./dist does not exists."
            echo "Making directory dist"
            mkdir dist
            build
    fi
}

run_build