# Smile
Smile is our design system. It contains guidelines for interface components and page layouts. It's connected to the brand guidelines in order to create consistent voice and tone content and illustrations. Also, every interface guideline is programmed with Sass and are documented automatically by SassDoc [here](https://lips-mexico.github.io/Smile/).

#### Table of contents
<!-- vscode-markdown-toc -->
* [Getting started](#Gettingstarted)
	* [Adding Smile to a project](#AddingSmiletoaproject)
	* [Developing for Smile](#DevelopingforSmile)
		* [Prerequisites](#Prerequisites)
		* [Cloning](#Cloning)
* [Further Reading](#FurtherReading)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Gettingstarted'></a>Getting started
### <a name='AddingSmiletoaproject'></a>Adding Smile to a project
There are two different files that can be imported. Both contain the same essential styles, but one is designed for devices with less computer power.
- [ ] Determine a system of device detection that determines which version of Smile is going to be imported.
- [ ] Add the correct hyperlink reference to the link tags.
- [ ] Choose a correct name for Smile Budget.
```html
<head>
  <!-- Smile -->
  <link rel="stylesheet" href="smile.min.css">
  <!-- Smile Budget -->
  <link rel="stylesheet" href="smile-budget.min.css">
</head>
```

### <a name='DevelopingforSmile'></a>Developing for Smile
#### <a name='Prerequisites'></a>Prerequisites
1. [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
2. [Homebrew](https://brew.sh/)
3. [Node](https://nodejs.org/en/)
4. [npm](https://www.npmjs.com/get-npm)
5. [Sass](https://sass-lang.com/install)
6. [Gulp](https://gulpjs.com/)
7. Gulp Dependencies
```shell
npm install --save-dev
```

#### <a name='Cloning'></a>Cloning
1. Clone the [repo](https://github.com/lips-mexico/Smile)
2. Change to the correct branch.

## <a name='FurtherReading'></a>Further Reading
* [Testing](https://github.com/lips-mexico/Smile/tree/master/app/test) - Design and carry out unit tests for mixins and functions using True and Gulp.
* [Documentation](https://github.com/lips-mexico/Smile/tree/master/docs) - Write complete and useful documentation for Sass using SassDoc and Gulp.