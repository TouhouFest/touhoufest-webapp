# touhoufest-webapp 

touhoufest-webapp is a web application that seeks to create a user-friendly schedule app for conventions at a fraction of the cost (i.e. free) of alternative cost-prohibitive convention apps. 

This project uses Vite at its core, with the below extended tech stack:
- Web: Vite, Bootstrap, with GitHub Pages & Actions for automated deployments
- PWA: Vite-Plugin-PWA
- Testing: Vitest and React Testing Library
- Mobile Platforms (Android & iOS): Capacitor

## Adapting this Schedule for Your Convention

To adapt this project to fit needs of your convention, the below steps may be useful.

1. Fork this repo to make a copy of it on your GitHub account
2. `git clone` it to your local directory
3. `cd /path/to/project/touhoufest-webapp/` and `npm install` (you will need NPM installed)
4. Modify `src/events.csv` to replace with your convention's events. Several notes:
    
    a. It is **highly** recommended to open the CSV file in a spreadsheet editor of your choice. (e.g. Excel, Google Sheets, etc.) If you do so, be sure to save out to a CSV file with the `,` character used for column separation
        
    b. The formatting used in the datetime columns need to be precisely followed
        
    c. The `event_age_limit` column supports a variety of limits (e.g. "13+", "18+", etc.)
        
5. Replace the app's menupages with ones with information specific to your con by editing the ones in `src/menupages/`. Be sure to import and reference them in `src/index.jsx`
6. The "Best Girl" entry in the footer can be removed at the bottom of `src/App.tsx` if you wish
7. Modify `public/CNAME` to the website domain of your choice. This project by default uses GitHub Pages for web hosting (by virtue of it being free) so usually this should be `<yourusername>.github.io/cjnwebapp`
    a. If you wish to use a custom domain, be sure to put down that instead. For more information on getting GitHub Pages to work with custom domains, [try this link](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
8. Test the application before deploying with `npm run start` 
9. Once you're assured that the fork is ready to go, run `npm run deploy`
10. Go to "Settings" > "Code and automation" > "Pages" in your GitHub repository's settings. A few options will need to be customized:
    a. Set the Source to "Deploy from a branch"
    b. Set the Branch to "gh-pages"
    c. If you're using a custom domain, set it appropriately and wait for GitHub's DNS check to go through. You'll need to add a CNAME from your domain's account page as well, make sure it points to `<yourusername>.github.io`
11. After that, your web app should be good to go.
12. Your repository's Actions workflows (and maybe test cases) may need to be tweaked as needed.

If there are any issues, please flag them in Issues.