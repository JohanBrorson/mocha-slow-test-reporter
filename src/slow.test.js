const assert = require("assert");

describe("Addition", () => {
  it("should add two numbers slower than the default slow threshold", async () => {
    // The default slow threshold is 75 ms
    await new Promise((r) => setTimeout(r, 80));
    assert.equal(1 + 1, 2);
  });

  it("should add two numbers slower than the defined slow threshold", async () => {
    await new Promise((r) => setTimeout(r, 12));
    assert.equal(1 + 1, 2);
  }).slow(10);
});

describe("Subtraction", function () {
  it("should subtract two numbers", async () => {
    assert.equal(2 - 1, 1);
  });

  it("should subtract two numbers, but do it very very slow and with a very very long test name", async () => {
    await new Promise((r) => setTimeout(r, 12));
    assert.equal(1 + 1, 2);
  }).slow(10);
});
