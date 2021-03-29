# Conventional Commits 

An adaption of Conventional Commits for the bookmargins project. View the  [Official Conventional Commits Docs here.](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

## Guidelines 

When making a commit, 
* `type of commit`(`scope`): `commit message`
* Optionally, add a longer commit message for bigger changes 

### Examples: 
```
feat(homepage): add login menu
```

```
fix: remove dead links
```

```
docs: add images to readme
``` 

```
test: add new test for login system

add new tests to account for case sensitivity and trailing whitespace
```


### How to Commit in Git 
#### Simple Commit (one-line message) 
```
git add <name of file/files>
git commit -m "<your message>" 
```
#### Expanded Commit (more than one message) 
```
git add <name of file/files> 
git commit -m "<primary message>" -m "<secondary message>"
```


## Types of Commits 
| Commit Type | Purpose                           |
|-------------|-----------------------------------|
| feat        | when adding new features          |
| fix         | fixing a bug                      |
| style       | features/updates related to style |
| refactor    | refactoring code                  |
| test        | adding/changing tests             | 
| docs        | adding/changing documentation     |
| chore       | code maintenence                  |
| improvement | not a bug fix or new feature, but a change |
| perf        | change to improve performance     |
| revert      | undoing a previous action         |