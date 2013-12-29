angular-maven-project
======

This project is a base-template project, which you can use for your AngularJS/Java projects.
It combines the best of two worlds (well, at least the way I see it :-) ), in regards to Maven and Grunt.
Maven will run the overall build and execute grunt tasks for JSHint and Jasmine unittests using Karma.
During development you will be able to use Grunt for developing the frontend and Yeoman for generating controller,
directive etc. (this is not completely fixed yet - have some problems with the app path).

The workflow is a follows, after cloning the project:

1. From the console in the project root, execute "mvn install" (downloads Node, npm etc.)
2. Import the project into your favorite IDE - Maven style
3. From the console, write "grunt server" (starts the prototyping mode - based on Yeoman)
4. To run e2e tests with Protractor - write "grunt protractor" (you will probably have to fix the port number and app path)
5. Generate new angular controller "yo angular:controller [XXX]" (beware, this step needs improvement - there is some manual stuff to do)
6. To run Jasmine unit tests with Karma, write "grunt karma"
7. To run JSHint write either just "grunt" og "grunt jshint:all"

At any time you can fire up the application in your favorite JEE6/7 container, but notice that the port number in the e2e tests
are hard coded to 8080.

Issues (not prioritized):

- Integrate wro4j in the workflow (must be done manually for now)
- Improve integration with Yeoman (both templates and paths)
- Integration with bower


Have fun :-)
