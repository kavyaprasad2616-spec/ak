Here are **Git commands from scratch** — perfect **interview + revision notes** 📘🚀

---

# 🧠 Git Commands — From Scratch

## 1. Initialize Git Repository

```bash
git init
```

Creates a new Git repository in your folder.

---

## 2. Check Status

```bash
git status
```

Shows:

* modified files
* staged files
* untracked files

---

## 3. Add Files to Staging Area

Add single file:

```bash
git add file.txt
```

Add all files:

```bash
git add .
```

---

## 4. Commit Changes

```bash
git commit -m "your message"
```

Example:

```bash
git commit -m "initial commit"
```

---

## 5. Connect to Remote Repository

```bash
git remote add origin <repo-url>
```

Example:

```bash
git remote add origin https://github.com/user/repo.git
```

---

## 6. Check Remote

```bash
git remote -v
```

---

## 7. Push Code to GitHub (First Time)

```bash
git branch -M main
git push -u origin main
```

---

## 8. Push Changes (Next Times)

```bash
git push
```

---

## 9. Pull Latest Changes

```bash
git pull origin main
```

---

## 10. Clone Repository

```bash
git clone <repo-url>
```

Example:

```bash
git clone https://github.com/user/repo.git
```

---

## 11. Create New Branch

```bash
git branch branch-name
```

Example:

```bash
git branch feature-login
```

---

## 12. Switch Branch

```bash
git checkout branch-name
```

OR (modern)

```bash
git switch branch-name
```

---

## 13. Create + Switch Branch

```bash
git checkout -b branch-name
```

---

## 14. Merge Branch

```bash
git merge branch-name
```

---

## 15. View Commit History

```bash
git log
```

Short version:

```bash
git log --oneline
```

---

## 16. Remove File from Staging

```bash
git reset file.txt
```

Remove all:

```bash
git reset
```

---

## 17. Undo Last Commit (keep changes)

```bash
git reset --soft HEAD~1
```

---

## 18. Undo Last Commit (remove changes)

```bash
git reset --hard HEAD~1
```

---

## 19. Git Ignore File

Create `.gitignore`

Example:

```
node_modules/
.env
dist/
```

---

## 20. Full Workflow (Most Important ⭐)

```bash
git init
git add .
git commit -m "first commit"
git remote add origin <repo-url>
git branch -M main
git push -u origin main
```

---

## 🔥 Daily Workflow

```bash
git add .
git commit -m "message"
git push
```

---

## 🛠 Fix Push Rejected Error (like yours)

```bash
git pull origin main --rebase
git push
```

---

## 🎯 Interview Must-Know Commands

* git init
* git add .
* git commit
* git push
* git pull
* git clone
* git branch
* git checkout
* git merge
* git status


---

Want me to also give:

* Git **branching diagram**
* Git **interview questions**
* Git **GitHub workflow**
* Git **merge conflict notes**
