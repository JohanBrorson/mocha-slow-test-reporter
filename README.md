# mocha-slow-test-reporter

Simple experiment with mocha reporter.

## Sample output

### Fast tests

```
$ pnpm test:fast

> mocha-slow-test-reporter@1.0.0 test:fast /path/to/mocha-slow-test-reporter
> mocha 'src/**/fast.test.js' --reporter src/index.js

🎉 No slow tests found. Great work! 🎉

```

### Slow tests

```
$ pnpm test:slow

> mocha-slow-test-reporter@1.0.0 test:slow /path/to/mocha-slow-test-reporter
> mocha 'src/**/slow.test.js' --reporter src/index.js

🐌 Found 3 slow tests 🐌
┌────────────────────────────────────────────────────────────────────────────────┬──────────┐
│                                   Slow tests                                   │ Duration │
├────────────────────────────────────────────────────────────────────────────────┼──────────┤
│Addition should add two numbers slower than the default slow threshold          │        81│
│Addition should add two numbers slower than the defined slow threshold          │        13│
│Subtraction should subtract two numbers, but do it very very slow and with a ve…│        13│
└────────────────────────────────────────────────────────────────────────────────┴──────────┘

```
