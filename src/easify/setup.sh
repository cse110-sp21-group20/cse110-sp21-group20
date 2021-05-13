#!/bin/bash
GROUP_REPO=https://github.com/cse110-sp21-group20/cse110-sp21-group20
EMAIL=""
NAME=""

warn() {
    echo '[Warning] ' "$1"
}
# Checks if git and npm are installed
checkRequirements() {
    git --version
    if [ "$?" -ne 0 ]; then
        echo "Git not installed."
        exit 1
    fi
    NPM_VER=`npm --version`
    if [ "$?" -ne 0 ]; then
        echo "npm not installed."
        exit 1
    else
        NPM_VER="${NPM_VER%%.*}"
        if [ NPM_VER -lt 7 ]; then
            warn "npm not up-to-date. Attempting to update..."
            npm update -g npm #Might need sudo here
            if [ "$?" -ne 0 ]; then
                echo "Could not update npm. (Might need sudo permissions)"
                exit 1
            fi
        fi
    fi
}

# Extracts command line args
getArgs() {
    echo "Running setup script. It may require some Github authentication; use a personal access token w/ repo permissions as a password. Press CTL+C to cancel at any time."
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
            *)
                warn "Dangling argument $1"
                shift
                ;;
        esac
    done
}
# Git setup
gitTasks() {
    echo "Configuring git. If prompted to enter a password, use a Github personal access token w/ repo permissions."
    if [ -z "$EMAIL" ]; then
        echo -n "Input GitHub email:"
        read EMAIL
    fi
    git config user.email "$EMAIL"
    if [ -z "$NAME" ]; then
        echo -n "Input name:"
        read NAME
    fi
    git config user.name "$NAME"
    git config credential.helper "cache --timeout 900"
    git remote add -f upstream "$GROUP_REPO"
    git branch master upstream/master
    git checkout master
    git push --set-upstream origin master
    echo "Git configuration complete."
}

checkRequirements

getArgs $@

gitTasks

#npm install
echo "Setting up node..."
npm install 