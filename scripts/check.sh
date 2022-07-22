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

replaced_message=$(echo "$message" | sed -r 's/[ .]+/_/g')
branch_name="$type_commit/$replaced_message"
commit_message="$type_commit: $message"

echo "replaced_message: $replaced_message"
echo "branch_name: $branch_name"
echo "commit_message: $commit_message"

git pull &&
  git checkout -b $branch_name &&
  git add . &&
  git commit -m "$commit_message" &&
  git push origin $branch_name &&
  git checkout master &&
  git pull
