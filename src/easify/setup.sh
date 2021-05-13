#!/bin/bash
GROUP_REPO=https://github.com/cse110-sp21-group20/cse110-sp21-group20
EMAIL=""
NAME=""
# FORK=""
getArgs() {
    echo "Running setup script for Unix. Press CTL+C to exit at any time."
    while [ $# -gt 0 ]; do
        case "$1" in
            --e|--email)
                shift
                if [ -z "$1" ]; then
                    echo "Dangling flag --email"                    
                else
                    EMAIL="$1"
                fi
                shift
                ;;
            --n|--name)
                shift
                if [ -z "$1" ]; then
                    echo "Dangling flag --name"                    
                else
                    NAME="$1"
                fi
                shift
                ;;
            # --f|--fork)
            #     shift
            #     if [ -z "$1" ]; then
            #         echo "Dangling flag --fork"                    
            #     else
            #         FORK="$1"
            #     fi
            #     shift
            #     ;;
            *)
                echo "Dangling argument $1"
                ;;
        esac
    done
}

getArgs $@
echo "Configuring git..."
#Git setup
if [ -z "$EMAIL"]; then
    echo -n "Input email:"
    read EMAIL
fi
git config user.email "$EMAIL"
if [ -z "$NAME"]; then
    echo -n "Input name:"
    read NAME
fi
git config user.name "$NAME"
git remote add -f upstream "$GROUP_REPO"
git branch master upstream/master
git checkout master
git push --set-upstream origin master
echo "Git configuration complete."
#npm install
echo "Setting up node..."
npm install 