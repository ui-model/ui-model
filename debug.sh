#!/bin/sh

rm -fr node_modules/ui-model/src
ln -s `pwd`/../ui-model/src node_modules/ui-model/src

rm -fr node_modules/ui-model-angular/src
ln -s `pwd`/../ui-model-angular/src node_modules/ui-model-angular/src
