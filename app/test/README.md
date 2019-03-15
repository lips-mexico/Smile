# Testing

Testing is a naturally frequent need in design and development. One needs to evaluate frequently, swiftly, efficiently and consistently in order to obtain enough knowledge for building a truly usable system. This idea functions as a North Star, every component, screen, function or sequence before being tested, should be judged based on the projected value of the said test.

<!-- vscode-markdown-toc -->
* [Unit Testing](#UnitTesting)
	* [True](#True)
	* [Examples of Unit Tests](#ExamplesofUnitTests)
		* [Function Asserts](#FunctionAsserts)
		* [Mixin Asserts](#MixinAsserts)
	* [Documenting Unit Tests](#DocumentingUnitTests)
	* [Designing Unit Tests](#DesigningUnitTests)
	* [Running Unit Tests](#RunningUnitTests)
	* [Git-related](#Git-related)
* [Component Testing](#ComponentTesting)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='UnitTesting'></a>Unit Testing

This type of testing is focused only on Sass functions and mixins. Like every other language, Sass requires a testing library that contains assert functions and test reports. The library chose to fulfill this job is True.

### <a name='True'></a>True

> [True](https://oddbird.net/true/) is a full-featured unit-testing library for Sass. The core functionality is written in pure SassScript, so it can be used anywhere Sass is compiled. Advanced features are available with our test-runner integration and Mocha.

### <a name='ExamplesofUnitTests'></a>Examples of Unit Tests
To write any test, one must create a mixin that will reference a test module. The function of a test module is to group similar assertions in a documentable container. The test module is created using True's `it()` mixin.
All tests must have at least two modules: a successful test module and an exception test module.

_The name of the reference mixin must be written as follows:_

|     | Function or mixin name |      | Successful or Exception |  Id  |
|:---:|:----------------------:|:----:|:-----------------------:|:----:|
| `_` |      `display-on`      | `--` |           `s`           | `01` |

_The end result would be:_ `_display-on--s01`

```scss
@mixin _name--s01 {
  @include it('Passes the test.') {
    // List of assertions.
  }
}
@mixin _name--e01 {
  @include it('Fails the test.') {
    // List of assertions.
  }
}
```

After every test module and assertion has been written, the test unit is described using True's `describe()` mixin. The unit's name, followed by "function" or "mixin" (depending on what is being tested) must be passed as a parameter of True's  `describe()` mixin. Finally, the test module must be included inside it.

```scss
@include describe('name - function/mixin'){
  @include _name--s01;
  @include _name--e01;
}
```

#### <a name='FunctionAsserts'></a>Function Asserts

Sass functions can be tested with four different assertion mixins: `assert-true()`, `assert-false()`, `assert-equal()`, and `assert-unequal()`. More information can be found in the section of [Comparing Values](https://oddbird.net/true/docs/api-assert-values.html) inside True's documentation.

```scss
@include assert-equal(
  $assert: multiply(12, 2), 
  $expected: 24
);
```

#### <a name='MixinAsserts'></a>Mixin Asserts

```scss
@include assert('When font size is big.') {
  @include output {
  }
  @include expect {
  }
}
```

### <a name='DocumentingUnitTests'></a>Documenting Unit Tests

### <a name='DesigningUnitTests'></a>Designing Unit Tests

### <a name='RunningUnitTests'></a>Running Unit Tests

### <a name='Git-related'></a>Git-related

## <a name='ComponentTesting'></a>Component Testing

Coming up.
