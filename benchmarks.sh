#!/bin/bash

(
  cd ..
  du -hcs serverless-monorepo-presentation | tail -1
)
tree -a . | tail -1