# Git Commands - Complete Documentation Guide

A comprehensive guide to all essential Git commands with detailed explanations, examples, and use cases.

## Table of Contents

1. [Introduction](#introduction)
2. [Initial Setup](#initial-setup)
3. [Basic Commands](#basic-commands)
4. [Branching](#branching)
5. [Merging & Rebasing](#merging--rebasing)
6. [Remote Repositories](#remote-repositories)
7. [Stashing](#stashing)
8. [Undoing Changes](#undoing-changes)
9. [History & Inspection](#history--inspection)
10. [Advanced Commands](#advanced-commands)
11. [Configuration](#configuration)
12. [Best Practices](#best-practices)

---

## Introduction

Git is a distributed version control system used to track changes in source code. The following guide covers the most commonly used commands and their functionality.

### What is Git?
- **Version Control**: Track changes over time
- **Collaboration**: Work with multiple developers
- **Branching**: Create isolated development environments
- **History**: Review project history and revert changes

---

## Initial Setup

### `git config`
Configure Git settings globally or locally.

```bash
# Set global user name
git config --global user.name "Your Name"

# Set global user email
git config --global user.email "your.email@example.com"

# Set local repository user (overrides global)
git config user.name "Your Name"

# View all configuration settings
git config --list

# Edit configuration file
git config --global --edit
```

### `git init`
Initialize a new Git repository.

```bash
# Create a new Git repository in current directory
git init

# Create a new repository with a specific name
git init my-project
```

### `git clone`
Clone an existing repository.

```bash
# Clone a repository
git clone https://github.com/username/repository.git

# Clone into a specific directory
git clone https://github.com/username/repository.git my-folder

# Clone with specific branch
git clone -b branch-name https://github.com/username/repository.git

# Clone with depth (shallow clone - faster)
git clone --depth 1 https://github.com/username/repository.git
```

---

## Basic Commands

### `git status`
Show the status of the working directory.

```bash
# Check status
git status

# Short format
git status -s
# Output:
# A  file_added.txt
# M  file_modified.txt
# D  file_deleted.txt
# ?? untracked_file.txt
```

**Status Codes:**
- `A` - Added
- `M` - Modified
- `D` - Deleted
- `??` - Untracked
- `MM` - Modified, then modified again

### `git add`
Stage changes for commit.

```bash
# Stage specific file
git add file.txt

# Stage all changes
git add .

# Stage all changes (alternative)
git add -A

# Stage only modified files (not new files)
git add -u

# Stage files interactively
git add -p

# Stage specific directory
git add src/
```

### `git commit`
Create a commit with staged changes.

```bash
# Commit with message
git commit -m "Add new feature"

# Commit all tracked files (skip staging)
git commit -am "Update existing files"

# Add to previous commit (amend)
git commit --amend

# Commit without verification hooks
git commit --no-verify

# Commit with detailed message
git commit -m "Title" -m "Detailed description"

# Sign commit with GPG
git commit -S -m "Signed commit"
```

### `git push`
Upload commits to remote repository.

```bash
# Push to default remote and branch
git push

# Push to specific remote and branch
git push origin main

# Push all branches
git push origin --all

# Push with tags
git push origin main --tags

# Force push (use with caution!)
git push --force

# Push specific tag
git push origin v1.0.0

# Set upstream and push
git push -u origin main
```

### `git pull`
Download and merge changes from remote.

```bash
# Pull from default remote
git pull

# Pull from specific remote and branch
git pull origin main

# Pull with rebase instead of merge
git pull origin main --rebase

# Pull without merging (fetch only)
git fetch origin main
```

### `git fetch`
Download changes without merging.

```bash
# Fetch from default remote
git fetch

# Fetch from specific remote
git fetch origin

# Fetch all remotes
git fetch --all

# Fetch with pruning (remove deleted remote branches)
git fetch --prune

# Fetch specific branch
git fetch origin main
```

---

## Branching

### `git branch`
List, create, or delete branches.

```bash
# List local branches
git branch

# List all branches (local and remote)
git branch -a

# List with last commit info
git branch -v

# Create new branch
git branch feature-branch

# Create branch from specific commit
git branch feature-branch abc123

# Delete branch
git branch -d feature-branch

# Force delete branch
git branch -D feature-branch

# Delete remote branch
git branch -dr origin/feature-branch

# Rename branch
git branch -m old-name new-name

# Set tracking branch
git branch -u origin/main
```

### `git checkout`
Switch branches or restore files.

```bash
# Switch to branch
git checkout main

# Create and switch to new branch
git checkout -b feature-branch

# Switch to previous branch
git checkout -

# Restore file from HEAD
git checkout -- file.txt

# Restore file from specific commit
git checkout abc123 -- file.txt

# Discard all changes in working directory
git checkout .
```

### `git switch` (Modern alternative to checkout)
Switch between branches.

```bash
# Switch to branch
git switch main

# Create and switch to new branch
git switch -c feature-branch

# Switch to previous branch
git switch -

# Switch to remote branch
git switch origin/feature-branch
```

### `git branch -m`
Rename branches.

```bash
# Rename current branch
git branch -m new-name

# Rename specific branch
git branch -m old-name new-name

# Rename and update remote
git branch -m old-name new-name
git push origin -u new-name
git push origin --delete old-name
```

---

## Merging & Rebasing

### `git merge`
Merge one branch into another.

```bash
# Merge branch into current branch
git merge feature-branch

# Merge with custom commit message
git merge feature-branch -m "Custom merge message"

# Merge without fast-forward
git merge --no-ff feature-branch

# Abort merge
git merge --abort

# Merge with squash (combine all commits)
git merge --squash feature-branch

# Merge with interactive resolution
git merge feature-branch
# (Resolve conflicts, then git add and git commit)
```

**Merge Strategies:**
- `recursive` - Default, handles complex scenarios
- `resolve` - 3-way merge
- `ours` - Keep current branch changes
- `theirs` - Keep incoming branch changes

```bash
git merge -X ours feature-branch
```

### `git rebase`
Reapply commits on top of another branch.

```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase (edit, squash, reorder commits)
git rebase -i HEAD~3

# Rebase and keep merge commits
git rebase --remerge main

# Abort rebase
git rebase --abort

# Continue rebase after resolving conflicts
git rebase --continue

# Skip current commit during rebase
git rebase --skip
```

**Interactive Rebase Commands:**
- `pick` - Use commit
- `reword` - Use commit, edit message
- `squash` - Combine with previous commit
- `fixup` - Like squash, discard commit message
- `exec` - Run shell command
- `drop` - Remove commit

### `git cherry-pick`
Apply specific commits to current branch.

```bash
# Cherry-pick specific commit
git cherry-pick abc123

# Cherry-pick multiple commits
git cherry-pick abc123 def456 ghi789

# Cherry-pick range of commits
git cherry-pick abc123..def456

# Cherry-pick without committing
git cherry-pick -n abc123

# Continue cherry-pick after resolving conflicts
git cherry-pick --continue

# Abort cherry-pick
git cherry-pick --abort
```

---

## Remote Repositories

### `git remote`
Manage remote repositories.

```bash
# List remotes
git remote

# List remotes with URLs
git remote -v

# Add remote
git remote add origin https://github.com/username/repo.git

# Remove remote
git remote remove origin

# Rename remote
git remote rename origin upstream

# Show remote details
git remote show origin

# Change remote URL
git remote set-url origin https://github.com/username/repo.git

# Add push URL (different from fetch)
git remote set-url --push origin https://github.com/username/repo.git
```

### `git push`
Upload to remote.

```bash
# Basic push
git push

# Push to specific remote and branch
git push origin main

# Push all branches
git push origin --all

# Push all tags
git push origin --tags

# Push specific tag
git push origin v1.0.0

# Force push (dangerous!)
git push --force

# Push with lease (safer force push)
git push --force-with-lease

# Delete remote branch
git push origin --delete feature-branch

# Push new local branch to remote
git push -u origin feature-branch
```

### `git pull`
Download and merge from remote.

```bash
# Pull with merge
git pull origin main

# Pull with rebase
git pull origin main --rebase

# Pull without merging
git fetch origin main
```

### `git fetch`
Download from remote without merging.

```bash
# Fetch from all remotes
git fetch --all

# Fetch specific remote
git fetch origin

# Fetch specific branch
git fetch origin main

# Fetch with pruning
git fetch --prune

# Fetch tags
git fetch --tags
```

---

## Stashing

### `git stash`
Temporarily save changes without committing.

```bash
# Stash current changes
git stash

# Stash with custom message
git stash save "WIP: feature development"

# Stash including untracked files
git stash -u

# List stashes
git stash list

# Show stash contents
git stash show

# Show detailed stash diff
git stash show -p stash@{0}

# Apply stash (keep it)
git stash apply

# Apply specific stash
git stash apply stash@{0}

# Pop stash (apply and remove)
git stash pop

# Drop stash
git stash drop stash@{0}

# Clear all stashes
git stash clear

# Create branch from stash
git stash branch new-branch
```

---

## Undoing Changes

### `git restore`
Restore files in working directory.

```bash
# Restore file to HEAD
git restore file.txt

# Restore file to specific commit
git restore --source=abc123 file.txt

# Restore all files
git restore .

# Unstage file
git restore --staged file.txt
```

### `git reset`
Reset HEAD and working directory.

```bash
# Unstage all files (keep changes)
git reset

# Unstage specific file
git reset file.txt

# Reset to specific commit (keep changes)
git reset abc123

# Reset to specific commit (discard changes)
git reset --hard abc123

# Reset one commit back (keep changes)
git reset --soft HEAD~1

# Reset one commit back (unstage changes)
git reset --mixed HEAD~1

# Reset one commit back (discard changes)
git reset --hard HEAD~1
```

**Reset Levels:**
- `--soft` - Move HEAD, keep staged and working changes
- `--mixed` - Move HEAD and unstage, keep working changes
- `--hard` - Move HEAD, unstage, discard all changes

### `git revert`
Create new commit that undoes changes.

```bash
# Revert specific commit
git revert abc123

# Revert without committing
git revert -n abc123

# Revert with custom message
git revert abc123 -m "Revert feature X"

# Revert and continue if there are conflicts
git revert --continue

# Abort revert
git revert --abort
```

### `git clean`
Remove untracked files.

```bash
# Show what would be deleted (dry run)
git clean -n

# Delete untracked files
git clean -f

# Delete untracked files and directories
git clean -fd

# Delete untracked and ignored files
git clean -fdx

# Interactive delete
git clean -i
```

---

## History & Inspection

### `git log`
View commit history.

```bash
# Show commit history
git log

# Show last N commits
git log -n 5

# Show oneline format
git log --oneline

# Show with graph (branches)
git log --oneline --graph --all

# Show with author and date
git log --pretty=format:"%h %an %ad %s" --date=short

# Show commits by author
git log --author="Author Name"

# Show commits in date range
git log --since="2024-01-01" --until="2024-12-31"

# Show commits affecting specific file
git log -- file.txt

# Show commits with changed statistics
git log --stat

# Show detailed changes
git log -p

# Show commits matching pattern
git log --grep="feature"

# Show commits not in other branch
git log main..feature-branch

# Show all commits
git log --all

# Follow file history (including renames)
git log --follow -- file.txt
```

### `git show`
Show commit details.

```bash
# Show last commit
git show

# Show specific commit
git show abc123

# Show specific file in commit
git show abc123:path/to/file.txt

# Show commit statistics
git show --stat

# Show without patch
git show --pretty=format:"%h %s" -s
```

### `git diff`
Show differences between commits/branches.

```bash
# Show changes in working directory
git diff

# Show staged changes
git diff --staged

# Show changes between commits
git diff abc123 def456

# Show changes between branches
git diff main feature-branch

# Show specific file changes
git diff -- file.txt

# Show word-level changes
git diff --word-diff

# Show statistics
git diff --stat

# Show changes in specific directory
git diff -- src/
```

### `git blame`
Show who changed each line.

```bash
# Show blame for file
git blame file.txt

# Show blame with detailed info
git blame -l file.txt

# Show blame for specific lines
git blame -L 10,20 file.txt

# Show blame ignoring whitespace changes
git blame -w file.txt
```

### `git tag`
Create and manage tags.

```bash
# List tags
git tag

# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Create tag for specific commit
git tag v1.0.0 abc123

# Show tag details
git show v1.0.0

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0

# Push tag to remote
git push origin v1.0.0

# Push all tags
git push origin --tags
```

---

## Advanced Commands

### `git reflog`
Show reference logs.

```bash
# Show reflog
git reflog

# Show reflog for specific branch
git reflog show main

# Recover lost commits
git reflog
# Find the commit hash, then:
git checkout abc123
```

### `git bisect`
Find commit that introduced bug.

```bash
# Start bisect
git bisect start

# Mark current as bad
git bisect bad

# Mark old commit as good
git bisect good abc123

# Test current commit
# If working: git bisect good
# If broken: git bisect bad

# Reset bisect
git bisect reset
```

### `git grep`
Search in repository.

```bash
# Search for pattern
git grep "search term"

# Case-insensitive search
git grep -i "search term"

# Search in specific branch
git grep "search term" main

# Show line numbers
git grep -n "search term"

# Count matches
git grep -c "search term"

# Search in specific files
git grep "search term" -- "*.js"
```

### `git worktree`
Work with multiple branches simultaneously.

```bash
# List worktrees
git worktree list

# Create new worktree
git worktree add ../feature-branch feature-branch

# Remove worktree
git worktree remove ../feature-branch

# Repair worktree
git worktree repair
```

### `git submodule`
Manage git repositories within repositories.

```bash
# Add submodule
git submodule add https://github.com/user/repo.git path/to/submodule

# Clone with submodules
git clone --recurse-submodules https://github.com/user/repo.git

# Initialize submodules
git submodule init

# Update submodules
git submodule update

# Update to latest commit
git submodule update --remote
```

### `git hook`
Manage git hooks.

```bash
# List hooks
git hook list

# Create pre-commit hook
# Edit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

---

## Configuration

### `git settings`
Configure Git behavior.

```bash
# Set default editor
git config --global core.editor "vim"

# Set default merge tool
git config --global merge.tool "meld"

# Configure line endings (Windows)
git config --global core.autocrlf true

# Configure line endings (Mac/Linux)
git config --global core.autocrlf input

# Set default push behavior
git config --global push.default current

# Create command alias
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Show configuration
git config --list

# Edit configuration
git config --global --edit
```

---

## Best Practices

### Commit Messages
```
Format: <type>(<scope>): <subject>

<body>

<footer>

Example:
feat(auth): add login functionality

Add Google OAuth support for user authentication.
Implements JWT token generation and refresh.

Closes #123
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `perf` - Performance improvement
- `test` - Test changes
- `chore` - Build/dependency changes

### Branching Strategy

**Git Flow:**
```
main (production) ← release branches ← develop ← feature/bugfix branches
```

**Trunk-based Development:**
```
main ← short-lived feature branches (frequently merged)
```

### Workflow Examples

**Feature Development:**
```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Create Pull Request
# After review and approval:
git checkout main
git pull origin main
git merge feature/new-feature
git push origin main
```

**Hotfix:**
```bash
git checkout -b hotfix/bug-fix main
# Fix bug
git add .
git commit -m "fix: critical bug in production"
git push origin hotfix/bug-fix
# After review:
git checkout main
git merge hotfix/bug-fix
git tag v1.0.1
git push origin main --tags
```

**Keeping Fork Updated:**
```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git rebase upstream/main
git push origin main
```

### Security Best Practices
- ✅ Use SSH keys instead of HTTPS passwords
- ✅ Sign commits with GPG
- ✅ Use `.gitignore` for sensitive files
- ✅ Review pull requests carefully
- ✅ Never commit secrets or credentials
- ✅ Use branch protection rules
- ✅ Keep repository backups

### Performance Tips
- Use `--depth` for large clones
- Regularly run `git gc` (garbage collection)
- Use shallow clones for CI/CD
- Archive old branches
- Monitor repository size

---

## Troubleshooting

### Common Issues

**Lost Commits:**
```bash
git reflog
git checkout <commit-hash>
```

**Merge Conflicts:**
```bash
# View conflicts
git status
# Edit files to resolve
git add resolved-files
git commit -m "Resolve merge conflicts"
```

**Accidentally Deleted Branch:**
```bash
git reflog
git checkout -b recovered-branch <commit-hash>
```

**Undo Last Commit:**
```bash
# Keep changes
git reset --soft HEAD~1

# Discard changes
git reset --hard HEAD~1
```

**Fix Commit Message:**
```bash
git commit --amend -m "New message"
```

---

## Useful Aliases

Add to `.gitconfig`:

```bash
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --graph --oneline --all
    amend = commit --amend --no-edit
    contributions = shortlog --summary --numbered
    cleanup = !git branch --merged | grep -v '^*' | xargs git branch -d
```

---

## Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## Quick Reference Card

| Command | Purpose |
|---------|---------|
| `git init` | Initialize repository |
| `git clone` | Clone repository |
| `git add` | Stage changes |
| `git commit` | Create commit |
| `git push` | Push to remote |
| `git pull` | Pull from remote |
| `git branch` | Manage branches |
| `git checkout` | Switch branches |
| `git merge` | Merge branches |
| `git rebase` | Reapply commits |
| `git log` | View history |
| `git diff` | Show changes |
| `git status` | Check status |
| `git tag` | Create tags |
| `git reset` | Reset changes |
| `git stash` | Stash changes |

---

## Version

Created: 2024
Last Updated: April 10, 2026
Git Version: 2.40+

---

For more help: `git help <command>`

Happy coding! 🚀
