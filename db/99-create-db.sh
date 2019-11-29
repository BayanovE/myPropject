#!/usr/bin/env sh

createdb myproject -U postgres
createdb myproject_test -U postgres

pg_restore -Fc -U postgres -d myproject /dumps/init.dump
