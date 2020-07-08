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
### Contributing
1.) Make a new branch off of the `main` branch to start doing your changes:
```
git checkout main
git checkout -b <branch-name>
```
2.) Run the client side server:
```
npm run start
```
3.) Now you can make your changes. You can view it on `localhost:3000`, or any other port
if you are already using that port for some reason. Most of the code is located inside of `src/`. It is recommended that you open two tabs in your terminal. One for running the client side and the other for git related things.

3.) If you want to save your changes to your branch, **make sure you are in the root directory**:
```
git add .
git commit -m "Type message here. The quotes are necessary"
git push
```
**NOTE**: If you are pushing for the first time, do `git push -u origin <branch-name>`
instead to publish your branch first. Then you can use the above method for future changes.

4.) Once you are done making changes to your branch, make a pull request,
write what you changed, and request a review.

5.) The reviewer will make comments on the code and if everything is good, it will be merged to the master branch. If there is something that needs to be changed, the reviewer will leave a review and you just
have to make the changes and push it to the same branch. The pull request will update with those new changes.

**Warnings**: Please do not commit directly to either the `master` or the `main` branch.
The `main` branch will contain the main source code. The `master` branch contains the
website after it has been converted into a static site.

### Adding Photos For Board Members
1.) Get the picture, position title, and description from a board member.

2.) Go to [I Love Img](https://www.iloveimg.com/crop-image) to crop the image appropriately. **Please use a size that is a square**.

3.) Go to [PicResize](https://picresize.com/#) to resize the image to 500 x 500 pixels (use custom size). This will make the images load faster.

4.) Place the image in the correct year folder and add an entry to the `/src/Board/board.js` file.

## Instructions for Owners
Let's say that you just finished merging the developers' changes to the `main` branch.
To deploy the changes, go to the `main` branch and pull in the new changes:
```
git checkout main
git pull
```
Now, deploy by running this command. It will automatically push the new static website
onto the `master` branch:
```
npm run deploy
```
Check that it worked by going to [stuyflow.github.io](https://stuyflow.github.io)

## People
- Jason Lin
- Steve Wang
- Alice Ni
- Alvin Chung
- Aaron Hsu
- Isabelle Lam
