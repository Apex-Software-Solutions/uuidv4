const crypto = require("crypto");

const uuidv4 = () => {
  // Generate a random 16-byte buffer
  const buffer = crypto.randomBytes(16);

  // Set the version number to 4 (0100)
  buffer[6] = (buffer[6] & 0x0f) | 0x40;

  // Set the variant number to 2 (10)
  buffer[8] = (buffer[8] & 0x3f) | 0x80;

  // Convert the buffer to a string
  const uuid = buffer.toString("hex").toLowerCase();

  // Insert hyphens at the appropriate positions
  return `${uuid.substring(0, 8)}-${uuid.substring(8, 12)}-${uuid.substring(
    12,
    16
  )}-${uuid.substring(16, 20)}-${uuid.substring(20)}`;
};

module.exports = { uuidv4 };
