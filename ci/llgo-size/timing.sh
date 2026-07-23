#!/usr/bin/env bash

time_command() {
  local label="$1"
  shift
  echo "::group::$label"
  /usr/bin/time -f "[timing] $label | real=%E user=%U sys=%S maxrss=%MKB" "$@"
  echo "::endgroup::"
}
