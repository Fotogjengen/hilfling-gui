#!/usr/bin/env bash

rsync -rva --include="*.css" --include="*/" --exclude="*" src/styles/ grp/styles
rsync -rva --include="*.css" --include="*.svg" --include="*/" --exclude="*" src/components/ grp/components



