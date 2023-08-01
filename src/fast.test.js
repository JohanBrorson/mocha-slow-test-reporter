const assert = require("assert");

describe("Addition", () => {
  it("should add two numbers faster than the default slow threshold", async () => {
    assert.equal(1 + 1, 2);
  });

  it("should add two numbers faster than the defined slow threshold", async () => {
    assert.equal(1 + 1, 2);
  }).slow(50);
});

describe("Subtraction", function () {
  it("should subtract two numbers", async () => {
    assert.equal(2 - 1, 1);
  });

  it("should subtract two numbers, but do it fast and with a very very long test name", async () => {
    assert.equal(2 - 1, 1);
  });
});
