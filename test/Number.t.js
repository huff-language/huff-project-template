const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let number;

describe("Greeter", function () {
  beforeEach(async function () {
    const Number = await ethers.getContractFactory("Number");
    number = await Number.deploy();
    await number.deployed();
  });
  it("Number is deployed", async function () {
    expect(number.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
  it("Number can be set", async function () {
    await number.setNumber(100);
    expect(await number.getNumber()).to.equal(100);
    expect(await number.getNumber()).to.not.equal(10);
  });
});
