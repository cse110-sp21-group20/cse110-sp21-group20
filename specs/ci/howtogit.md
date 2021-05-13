# How to use Git
This document is a guide for how to work with `git` in this group. This assumes you already have `git` installed, if not you can download it [here](https://git-scm.com/downloads). 


## Fast Setup
To make it a lot easier to setup your git stuff, I've written a script.

### Fork the repo
First, fork the group repo.

### Clone the repo
Clone the fork into your machine. Run
`git clone <fork repo link>`
If this fails because `git` cannot find the repo, you can run
`git clone https://<githubusername>@github.com/...`. Replace `githubusername` with your github username, and fill the rest of the link with the regular fork link. This may prompt you to enter a password; use a personal access token with repo access.

### Run `npm run setup`
First change directories into `src/easify`:
`cd cse110-sp21-group20/src/easify` - Note this might cause a problem if the cloned folder isn't the same name
 Then run:
 `npm run setup`
Enter your github email and name. You may be prompted to enter your github username and password. Use your actual username (not email) and once again, use a personal access token with repo access (could be the same one you used earlier). The script will proceed to set everything up, including installing node modules.

**Warning**: If `npm` is out of date, the script will attempt to update it. If it fails, you should first update it using `npm update -g npm`, and it could require admin privileges (i.e. sudo).

To know whether the script worked, you can check the fork repo. See if there is a main and a master branch. If you run `git status` in your local repo, it should say "on branch master", and is even with "origin/master".

## Manual Setup
**Note**: You can use fast setup described above, and skip this section.

This section is for setting up the group repo for the first time. If something catastrophic happened, and you would like to reset your entire working directory (aka discard ALL changes without saving - this has no undo!), you can delete your repo, and start from here again. If any of the commands fail during setup, you can delete the folder the repo is in and start over and/or message Tyler to let him know about it.

### Create a fork of the group repo
You can skip this step if you already have a fork of the group repo.

Here, we will create a fork of the repository to keep our branches more organized. I assume you already know how because the labs required you to.

### Clone the fork
If you haven't already, clone the fork into your local hard disk. 
1. Run `git clone <fork repo link>` on the command line. Make sure you switch out `<fork repo link>` with the proper link! This should clone the group repo into the same folder you ran the command. 
2. Make sure to switch into the repo folder using `cd`.

### Set your credentials
`git` needs to know who you are before it can do many things. Set your name and email (use the same email as your Github account). Make sure to replace `<email>` with your actual email and `<name>` with your name. Run:
1. `git config user.email <email>`
2. `git config user.name <name>`


### Add the group repo as a remote
Now to get updates from the parent repo, we need to set up a new remote. Run the following commands:
1. `git remote add -f upstream https://github.com/cse110-sp21-group20/cse110-sp21-group20`

This sets up a new remote, `upstream`, which you can use to pull changes from the parent repo, and adds the branches `master` and `main`.

2. `git branch master upstream/master`

This sets up the `master` branch on your local repo.

### Checkout the `master` branch
All work must be done on the `master` branch. Switch to it:

`git checkout master`

### Push master to your fork
Now you need to set up a `master` branch on your remote fork repo. Run:

`git push --set-upstream origin master`

You are set! Now you can continue to the next section and start working.
***
## Dev Process
Now that your local environment is set up, we can start working. 

### Update the local repo
At this point, your fork should not have any changes, staged or unstaged. Before you begin, make sure your fork is up-to-date. 

From `src/easify/`, you can run `npm run update`. This will update your repo. If changes were made, you may have to run `git commit` to finish the merge.

OR

Run:
1. `git pull --no-commit upstream master`
This will first fetch the remote repository, then attempt to merge it into your local master.
2. `git push`
This will update your fork with the parent repo's changes, then push those changes into your local repo.

### Do work
You can now start coding, and changing files. Make sure to commit every so often, and push to your fork.

### Update the local repo again
After committing all changes and pushing, you should update the fork again, just in case someone else had merged changes to the group repo. (The commands are the same as above)

### Pull Request
You are ready to create a pull request. Go to `Pull Requests` in the group repo page, and select `New Pull Request`. Click on `compare across forks`, then on the left side you want the group repo (cse110-sp21-group20/cse110-sp21-group20) and on the right you want your fork.
Create the pull request. Do not merge until someone else reviews your code.


## Some quick tips

### Messed up the remote URL
You can delete a remote by running

`git remote remove <remote-name>`

For example, if I wanted to delete `upstream` (because I used the wrong link earlier or some other reason), I would run `git remote remove upstream`. Now I can try adding the remote again.

For full documentation, see the [man page](https://git-scm.com/docs/git-remote).

### Undo Changes
I would refer to this article:
[https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/](https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/)

Once again, if you have any questions or the commands don't work, message Tyler.