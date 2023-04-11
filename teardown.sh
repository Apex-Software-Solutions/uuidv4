#! /usr/bin/bash

tear_down() {
    echo "Starting tear down"
    rm -rf ./dist
    echo "Tear down finished"
}

tear_down_build() {
     if [ -d "./dist" ] 
        then
            echo "Directory ./dist exists." 
            tear_down
        else
            echo "Error: Directory ./dist does not exists."
    fi
}

tear_down_build