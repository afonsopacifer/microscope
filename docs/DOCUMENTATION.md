# Documentation

- [Installation](#Installation)
- [Create and edit its components](#create-and-edit-its components)
- [Your atomic style guide](#your-atomic-style-guide)
- [Your CSS UI framework](#your-css-ui-framework)
- [Grunt tasks list](#grunt-tasks-list)
- [Folders Structure](#folders-structure)

## Installation

**install the basic dependencies**

- [NodeJS](https://nodejs.org/en/)
- [GruntJS](http://gruntjs.com/)

**Clone this repository**
```sh
$ git clone https://github.com/afonsopacifer/microscope.git
$ cd microscope
```

**Install dependencies**
```sh
$ npm install
```

**Watch the files to build and run a static server on http://localhost:9000/**
```sh
$ grunt serve
```

## Create and edit its components

## Your atomic style guide

## Your CSS UI framework

## Grunt tasks list
- `$ grunt serve`: Watch the files to build and start a static server on http://localhost:9000/
- `$ grunt build`: Generate the miscroscope.css file
- `$ grunt lint`: Lint the microscope.css file.
- `$ grunt autoprefixer`: Autoprefixer the microscope.css file.

## Folders Structure
	.
	├── README.md
	├── CONTRIBUTING.md
	├── LICENCE.md
	├── _files/
	├── docs/
	├── config.json
	├── public/
	|   ├── assets/
	|   |   ├── index.html
	|   |   ├── miscroscope.css
	|   |   └── miscroscope.min.css
	├── source/
	|   ├── markup/
	|   |   ├── global
	|   |   ├── atoms
	|   |   ├── molecules
	|   |   ├── organisms
	|   |   ├── templates
	|   |   ├── pages
	|   |   └── all.jade
	|   ├── style/
	|   |   ├── atoms
	|   |   ├── molecules
	|   |   ├── organisms
	|   |   ├── templates
	|   |   ├── pages
	|   |   └── all.styl
	├── Gruntfile.js
	├── package.json
	└── .gitignore
