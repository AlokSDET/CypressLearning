# CypressLearning
This POC is to learn Cypress


1. Open Command prompt

2. create a Directory (mkdir cypressTest).

3. cd cypressTest

4. npm init 

initialize the npm package and give appropriate details like author name , test description.

5. npm install cypress // to install the cypress.

6. code . // to open the same folder in visual code studio.
7. we can see package.json and node modules.
8. Now we can open cypress by command 
.\node_modules\.bin\cypress open

9. or can be open cypress by adding below command in package.json 
"cypress:open" : cypress open

npm run cypress:open

10. create a file demo.spec.js and write describe it block as jasmine

once we add test, test will appear in cypress IDE and once we click on test, it will execute.

--------------------***************************************************-------------------------
1. Cypress is automation front end tool for modern web , end to end test automation, unlike selenium .Uses mocha as BDD framework.
2. we can hover mouse on test step and get what exactly happend , it captures the snapshot before performing action and after performing action.
3. it adds waits automatically.
4. Network traffic controls.
5. It gives Dashboard feel where we can see all test and results.
6. It is very fast and light wieght.
7. drawback : it execute tests only on chrome which is extension of cypress IDE.


to use the xpath :
npm install -D cypress-xpath

Then include library in your project.

// require('cypress-xpath')

cy.xpath("xpath expression").click();


