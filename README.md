# Booking Go Assignment v0.1.1


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
- Node v10.0.0 or higher
```

### Installing
To get your project up and ready, use either of the 2 methods to install packages from NPM, I personally prefer using Yarn due to it's deterministic nature.

```
yarn install
```

And, if you are an NPM user

```
npm install
```

For the remainder of this project, all commands will utilse Yarn. If you prefer NPM just swap out the word `yarn` for `npm`, for running tests, building projects or storybooks

### Start up the project
End with an example of getting some data out of the system or using it for a little demo

```
yarn start
```

You should see this terminal message like so.
```
Compiled successfully!

You can now view booking-go-assignment in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.10:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

<br/>

## Running the tests
### Unit Tests - TDD with Jest & Enzyme

To unit test all components
```
yarn test
```

You should get this message
```
No tests found related to files changed since last commionit.
Press `a` to run all tests, or run Jest with `--watchAlssignment$l`.

Watch Usage
 › Press a to run all tests.
 › Press p to filter by a filename regex pattern. › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

To unit test a specific component
```
yarn test <Component Name>.spec.js
```

```
yarn test CardResultValid.spec.js
```

<br/>

### End-to-end Tests - Cypress (automated UI testing)

#### Prerequisite

- Install the latest version of Chrome Browser

To start, type in the command below to start up the Cypress GUI
```
yarn run cypress
```

Then choose whether you like to run one single test or all tests.

These tests follow the spec received from BookingGo. Please see;
- search_bar_contents.spec.js - for TEST 1
- search_bar_functionality.spec.js - for TEST 2

<br/>

### Isolated UI IDE - StorybookJS (manual UI testing and component showcase)
To get a comprehensive few of all the components used to build this project. Look no further than the StorybookJS component compendium.

```
yarn run storybook
```

The tool above is useful for developing and integrating components together into a UI,spend time going through the Storybook to get a deeper understanding of the UI user experience side too!

## Build Project

```
yarn run build
```


## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
