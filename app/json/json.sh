#!/bin/bash
# gets new data
wget -q -N http://developer.mbta.com/Data/Red.json -O red.json
wget -q -N http://developer.mbta.com/Data/orange.json -O orange.json
wget -q -N http://developer.mbta.com/Data/blue.json -O blue.json
