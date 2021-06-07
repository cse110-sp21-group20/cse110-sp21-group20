# Continuous Integration Status
Last updated: May 25, 2021

## Functional
The following are in working order:

* Basic Linting using ESLint
* Building the project with NextJS

This pipeline runs on pull requests when they are:
- opened
- synchronized (new commits to the PR branch, but may be bugged)
- reopened

## Planned
The following are planned to be added to the CI pipeline:

* Unit Tests - Jest
     - Individual BuJo Entry Buttons
     - Data Persistence
     - Index
* Integration/Validation tests?
    * Unsure as to do them manually (i.e. a 'test' user visits the website) or simply test functionality
    * Ideas:
        - Test button groups w/ data persistence?
* ~~JSDocs?~~ This has been ruled out. See [this ADR](/cse110-sp21-group20/specs/adrs/05252021-CIDocs.md)
* ~~Automatic labelling?~~ Unnecessary, the project is small enough that we don't need labels.
* Deployment - have not figured it out yet.

## Nonfunctional
The following don't work or may be bugged:

* Github Actions does not seem to properly update workflow files until you rename the workflow file or update a file in the path in which the workflow is set to run in.
~~* We cannot use branch protection because we must pay for it in private branches. Thus, we cannot enforce pull requests nor can we prevent pushes to main. This has a large impact on workflow, since we can accidentally commit to `main` and will result in unnecessary work to fix.~~ We will move forward without using branch protections.
* Github Actions does not run workflow even on synchronization of branches.
