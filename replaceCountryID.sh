#!/bin/bash

filename="countries.html"

while IFS=, read -r field1 field2
do
    echo "$field1 $field2"
    read -p "$field2" search
    read -p "$field1" replace

    if [[ $search != "" && $replace != "" ]]; then
    sed -i "s/$search/$replace/" $filename
    echo "Replaced"
    fi
done < zoomCountriesID.csv
# # Assign the filename
# filename="countries.html"

# # Take the search string
# read -p "Enter the search string: " search

# # Take the replace string
# read -p "Enter the replace string: " replace

# if [[ $search != "" && $replace != "" ]]; then
# sed -i "s/$search/$replace/" $filename
# fi