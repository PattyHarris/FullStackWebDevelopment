# UltimateWeb Tutorial

## Git

### macOS Terminal Basics

1. "cd" without any ".." will take you back to "home" base.

2. Use "touch" to create files.

3. "mv" and "cp" shown.

4. "rm" and "rmdir", including rm -R (for folders with files).

### Git Basics

1. Initialize the repository:
<code>
> git init
</code>

2. Add the file - status will show that the files is currently not tracked.
<code>
> git status
> git add Readme-Git.md
> git status
</code>

The last status will show the file is added but not committed.

3. Commit the file
<code>
> git commit -m "Add some comment about the change"
> git status
</code>

4. To "add" a file that is modified - same as for an untracked file..
<code>
> git add Readme-Git.md
</code>

5. Add all the untracked files (can be dangerous, so be careful)
<code>
> git add -A
</code>

6. Checkouta prior version - use "git log" and then copy the first 7 digits of the UUID.
For example
<code>
commit fe3ef301e9b36efa6b66359ea7d47aa4349526c7
Author: Unknown <patriciaharris@hotmail.com>
Date:   Mon Oct 23 11:08:33 2017 -0700

    Pinging blog with domain name
    
    Setup the nameservers on GoDaddy so that I can ping the domain name and 
    get the blog website to show without manually entering the IP.
</code>

To checkout this commit:
<code>
> git checkeout fe3ef30n2
</code>

Then to get back to "main" code, you'd "git checkout master"

### Setting up Github on macOS

1. Setup an SSH key (Google github ssh key) - see the steps for generating a new SSH key -
not sure why we're doing this?

### Github vs Bitbucket

Bitbucket has free private repositories....and that's about it.

### Local & Remote Repositories

1. Add the remote repository to github and then use 
<code>
> git remote add origin https://github.com/PattyHarris/FullStackWebDevelopment.git
> git remote -v
</code>

2. 


### Wprking Through Git Merge Conflicts

### Exercise: Pushing to Github

