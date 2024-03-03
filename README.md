# cjnwebapp

cjnwebapp is a web application that seeks to create a user-friendly schedule app for conventions at a fraction of the cost (i.e. free) of alternative cost-prohibitive convention apps. It was originally created for Con Ja Nai (an anime convention based in Ann Arbor, MI) but can be adapted to fit the needs of other small conventions.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Website currently up at [https://schedule.conjanai.org](https://schedule.conjanai.org)

## Adapting this Schedule for Your Convention

To adapt this project to fit needs of your convention, the below steps may be useful.

1. Fork this repo to make a copy of it on your GitHub account
2. `git clone` it to your local directory
3. `cd /path/to/project/cjnwebapp` and `npm install` (you will need NPM installed)
4. Modify `src/events.csv` to replace with your convention's events. Several notes:
    
    a. It is **highly** recommended to open the CSV file in a spreadsheet editor of your choice. (e.g. Excel, Google Sheets, etc.) If you do so, be sure to save out to a CSV file with the `,` character used for column separation
        
    b. The formatting used in the datetime columns need to be precisely followed
        
    c. The `event_age_limit` column supports a variety of limits (e.g. "13+", "18+", etc.)
        
5. Replace the app's menupages with ones with information specific to your con by editing the ones in `src/menupages/`. Be sure to import and reference them in `src/index.js`
6. The "Best Waifu" entry in the footer can be removed at the bottom of `src/App.js` if you wish
7. Modify `public/CNAME` to the website domain of your choice. This project by default uses GitHub Pages for web hosting (by virtue of it being free) so usually this should be `<yourusername>.github.io/cjnwebapp`
    a. If you wish to use a custom domain, be sure to put down that instead. For more information on getting GitHub Pages to work with custom domains, [try this link](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
8. Test the application before deploying with `npm run start` 
9. Once you're assured that the fork is ready to go, run `npm run deploy`
10. Go to "Settings" > "Code and automation" > "Pages" in your GitHub repository's settings. A few options will need to be customized:
    a. Set the Source to "Deploy from a branch"
    b. Set the Branch to "gh-pages"
    c. If you're using a custom domain, set it appropriately and wait for GitHub's DNS check to go through. You'll need to add a CNAME from your domain's account page as well, make sure it points to `<yourusername>.github.io`
11. After that, your web app should be good to go.

If there are any issues, please flag them in Issues.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
