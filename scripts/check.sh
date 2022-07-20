#! /bin/bash

print_usage() {
  printf "Usage: ...nothing...\n"
}

while getopts ':hf:' OPTION; do
  case "${OPTION}" in
  f)
    type_commit="feat"
    message="${OPTARG}"
    ;;
  h | *)
    print_usage
    exit 1
    ;;
  esac
done

if [ -z "${type_commit}" ]; then
  print_usage
  exit 1
fi

echo "feature_number: $type_commit/$message"

git checkout -b $type_commit/$message &&
  git add . &&
  git commit -m "$type_commit: $message" &&
  git push origin $type_commit/$message &&
  git checkout master &&
  git pull
