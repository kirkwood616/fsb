# Filtered Students Box

## About

<p>This project is an exercise in searching & filtering students based on names and/or custom tags.</p>

<p>The student data is being pulled from a local JSON file, but is set up with an Axios service to fetch from an API endpoint. There is currently a placeholder URL in this service function.</p>

Live Site @ [https://kirkwood616.github.io/fsb/](https://kirkwood616.github.io/fsb/)

#

## Using the App

- Scroll through the list of students.

- Click the plus sign (**`+`**) sign in the upper-right corner of each student's profile to show their list of test scores that their grade average is calculated from. Click the minus sign (**`-`**) when the list is expanded to hide the list of scores.

- Search the list of students by name in the top search bar and results with matching sequential characters will be displayed.

- Add custom tags to students using the Add a tag input.

- Search by the list of students by tags you have added in the top second search bar and results with matching sequential characters in the tag names will be displayed.

- Search by name & tags at the same time and results with only matching sequential characters for both search fields will be displayed. If a name matches and the tags do not, then no results will be displayed & vice versa.

#

## Build Tools

- React
- TypeScript
- Axios
- HTML
- CSS

#

## Installation

`git clone https://github.com/kirkwood616/fsb.git`

`npm install`

`npm start`

Project will run on [http://localhost:3000](http://localhost:3000) in the browser
