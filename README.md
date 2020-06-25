# StuyFlow
The official website for StuyFlow.

## Instructions For Developers
These will be the instructions for the developers.
### Getting Started (Do This Once)
1.) Install [Node.js](https://nodejs.org/en/).

2.) Check that you have installed it correctly by running the following commands
from your terminal:
```
node -v
npm -v
```
You should get some numbers that indicate the version that you have installed.

3.) Clone the repository
```
git clone git@github.com:StuyFlow/StuyFlow.github.io.git
```
4.) Go into the folder and install the dependencies:
```
cd StuyFlow.github.io/
npm install
```
## Contributing
1.) Make a new branch off of the `main` branch to start doing your changes:
```
git checkout main
git checkout -b <branch-name>
```
2.) Run the client side:
```
cd stuyflow/
npm run start
```
3.) Make your changes. Most of the code is located inside of `StuyFlow.github.io/stuyflow/src/`. It is recommended that you open two tabs in your terminal. One for running the client side and the other for git related things.

3.) If you want to save your changes to your branch, **make sure you are in the root directory**:
```
git add .
git commit -m "Type message here. The quotes are necessary"
git push
```
NOTE: If you are pushing for the first time, do `git push -u origin <branch-name>`
instead to publish your branch first. Then you can use the above method for future changes.

4.) Once you are done making changes to your branch, make a pull request,
write what you changed, and request a review.

5.) The reviewer will make comments on the code and if everything is good, it will be merged to the master branch.

## People
- Jason Lin
