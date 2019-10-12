#!/usr/bin/env bash

rsync -rva --include="*.css" --include="*/" --exclude="*" src/styles/ lib/styles
rsync -rva --include="*.css" --include="*/" --exclude="*" src/components/ lib/components


