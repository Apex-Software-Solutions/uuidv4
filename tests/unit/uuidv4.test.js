const chai = require("chai");
const expect = chai.expect;
const { UUIDv4_Mock } = require('../mocks/Mock_Valid_UUIDv4.mock');
const { describe } = require("mocha");

describe("[PASS]: Valid UUIDv4", () => { 
  it("[PASS]: should generate a valid UUIDv4", () => {
    const uuid = UUIDv4_Mock.format_Valid_UUIDv4_String(UUIDv4_Mock.valid_UUIDv4());
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    expect(uuid).to.match(regex);
  });

  it("[PASS]: should generate a different UUIDv4 on each call", () => {
    const uuid1 = UUIDv4_Mock.format_Valid_UUIDv4_String(UUIDv4_Mock.valid_UUIDv4());
    const uuid2 = UUIDv4_Mock.format_Valid_UUIDv4_String(UUIDv4_Mock.valid_UUIDv4());
    expect(uuid1).to.equal(uuid2);
  });

  it("[PASS]: should have the same length and format every time", () => {
    const uuid = UUIDv4_Mock.format_Valid_UUIDv4_String(UUIDv4_Mock.valid_UUIDv4());
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    expect(uuid).to.have.lengthOf(36);
    expect(uuid).to.match(regex);
  });

  /**
   * We check the character at index 14 of the generated UUIDv4 string to determine its version number because the version number is encoded in the UUIDv4 string at that position.
   * According to the UUIDv4 specification, the version number of the UUID is encoded in the four most significant bits of the 7th octet of the UUID.
   * These four bits correspond to the hexadecimal values 8, 9, A, and B, so the version number can be either 8, 9, A, or B.
   * To extract the version number from the UUIDv4 string, we can look at the character at index 14 of the string, which corresponds to the 7th octet.
   * We know that the most significant bits of this octet should be 0100 (binary) or 4 (hexadecimal), so the character at index 14 should be the character '4'.
   * If the `uuidv4` function were to produce a UUIDv4 with a different version number, it would mean that the UUIDv4 is not compliant with the specification and may not be compatible with other UUIDv4 implementations.
   * Therefore, we test that the character at index 14 is '4' to ensure that the generated UUIDv4 is compliant with the specification and can be used in a variety of contexts.
   */
  it("[PASS]: should have a version number of 4", () => {
    const uuid = UUIDv4_Mock.format_Valid_UUIDv4_String(UUIDv4_Mock.valid_UUIDv4());
    expect(uuid.charAt(14)).to.equal("4");
  });

  /**
   * We test that the generated UUIDv4 should have a variant number of 2 because the variant bits of the UUIDv4 specification are defined as follows:
   * For UUIDs with a version number of 1 or 2, the variant bits are defined as 10x, where x can be any value.
   * For UUIDs with a version number of 3, 4, or 5, the variant bits are defined as 10x, where x must be either 0, 1, or 2.
   * Since UUIDv4 has a version number of 4, we know that its variant bits should be 10x, where x can be any value.
   * However, the 10x variant is the only variant that is currently defined, so we test for this variant specifically.
   * If the `uuidv4` function were to produce a UUIDv4 with variant bits that are not 10x, it would mean that the UUIDv4 is not compliant with the specification and may not be compatible with other UUIDv4 implementations.
   * Therefore, we test that the variant bits are 10x to ensure that the generated UUIDv4 is compliant with the specification and can be used in a variety of contexts.
   */
  it("[PASS]: should have a variant number of 2", () => {
    const uuid = UUIDv4_Mock.format_Valid_UUIDv4_String(UUIDv4_Mock.valid_UUIDv4());
    const variant = uuid.charAt(19);
    expect(variant).to.satisfy(
      (v) => v === "8" || v === "9" || v === "a" || v === "b"
    );
  });
});

describe('[FAIL]: Invalid UUIDv4', () => {
  it("[FAIL]: should fail to generate a valid UUIDv4", () => {
    const uuid = UUIDv4_Mock.format_Invalid_UUIDv4_String(UUIDv4_Mock.invalid_UUIDv4());
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    expect(uuid).to.not.match(regex);
  });

  it("[FAIL]: should fail to generate a different UUIDv4 on each call", () => {
    const uuid1 = UUIDv4_Mock.format_Invalid_UUIDv4_String(UUIDv4_Mock.invalid_UUIDv4());
    const uuid2 = UUIDv4_Mock.format_Invalid_UUIDv4_String(UUIDv4_Mock.invalid_UUIDv4());
    expect(uuid1).to.equal(uuid2);
  });

  it("[FAIL]: should not have the same length and format every time", () => {
    const uuid = UUIDv4_Mock.format_Invalid_UUIDv4_String(UUIDv4_Mock.invalid_UUIDv4());
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    expect(uuid).to.be.lengthOf(36);
    expect(uuid).to.not.match(regex);
  });

  /**
   * We check the character at index 14 of the generated UUIDv4 string to determine its version number because the version number is encoded in the UUIDv4 string at that position.
   * According to the UUIDv4 specification, the version number of the UUID is encoded in the four most significant bits of the 7th octet of the UUID.
   * These four bits correspond to the hexadecimal values 8, 9, A, and B, so the version number can be either 8, 9, A, or B.
   * To extract the version number from the UUIDv4 string, we can look at the character at index 14 of the string, which corresponds to the 7th octet.
   * We know that the most significant bits of this octet should be 0100 (binary) or 4 (hexadecimal), so the character at index 14 should be the character '4'.
   * If the `uuidv4` function were to produce a UUIDv4 with a different version number, it would mean that the UUIDv4 is not compliant with the specification and may not be compatible with other UUIDv4 implementations.
   * Therefore, we test that the character at index 14 is '4' to ensure that the generated UUIDv4 is compliant with the specification and can be used in a variety of contexts.
   */
  it("[FAIL]: should have a version number other than 4", () => {
    const uuid = UUIDv4_Mock.format_Invalid_UUIDv4_String(UUIDv4_Mock.invalid_UUIDv4());
    expect(uuid.charAt(14)).to.not.equal("4");
  });

  /**
   * We test that the generated UUIDv4 should have a variant number of 2 because the variant bits of the UUIDv4 specification are defined as follows:
   * For UUIDs with a version number of 1 or 2, the variant bits are defined as 10x, where x can be any value.
   * For UUIDs with a version number of 3, 4, or 5, the variant bits are defined as 10x, where x must be either 0, 1, or 2.
   * Since UUIDv4 has a version number of 4, we know that its variant bits should be 10x, where x can be any value.
   * However, the 10x variant is the only variant that is currently defined, so we test for this variant specifically.
   * If the `uuidv4` function were to produce a UUIDv4 with variant bits that are not 10x, it would mean that the UUIDv4 is not compliant with the specification and may not be compatible with other UUIDv4 implementations.
   * Therefore, we test that the variant bits are 10x to ensure that the generated UUIDv4 is compliant with the specification and can be used in a variety of contexts.
   */
  it("[FAIL]: should fail a variant number of that is not 2", () => {
    const uuid = UUIDv4_Mock.format_Invalid_UUIDv4_String(UUIDv4_Mock.invalid_UUIDv4());
    const variant = uuid.charAt(19);
    expect(variant).to.not.satisfy(
      (v) => v === "8" || v === "9" || v === "a" || v === "b"
    );
  });

  it('[FAIL]: should fail due to having a length less than 36', () => {
    const uuid = UUIDv4_Mock.invalid_UUIDv4_Short(UUIDv4_Mock.valid_UUIDv4());

    expect(uuid.length).to.be.lessThan(36);
    expect(uuid.length).to.equal(23);
  });

  it('[FAIL]: should fail due to having a length greater than 36', () => {
    const uuid = UUIDv4_Mock.invalid_UUIDv4_Long(UUIDv4_Mock.valid_UUIDv4());

    expect(uuid.length).to.be.greaterThan(36);
    expect(uuid.length).to.equal(59);
  });
})