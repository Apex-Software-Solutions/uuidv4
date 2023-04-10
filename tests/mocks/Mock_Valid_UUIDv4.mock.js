class UUIDv4_Mock {
  static valid_UUIDv4() {
    const buffer = Buffer.alloc(16);
    buffer[6] = (buffer[6] & 0x0f) | 0x40;
    buffer[8] = (buffer[8] & 0x3f) | 0x80;
    return buffer.toString("hex").toLowerCase();
  }

  static valid_UUIDv4_Version() {
    const buffer = Buffer.alloc(16);
    buffer[6] = (buffer[6] & 0x0f) | 0x40;
    return buffer.toString("hex");
  }

  static valid_UUIDv4_Variant() {
    const buffer = Buffer.alloc(16);
    buffer[8] = (buffer[8] & 0x3f) | 0x80;
    return buffer.toString("hex");
  }

  static format_Valid_UUIDv4_String(uuid) {
    const parts = [
      uuid.substring(0, 8),
      uuid.substring(8, 12),
      uuid.substring(12, 16),
      uuid.substring(16, 20),
      uuid.substring(20),
    ];
    return parts.join("-");
  }


  static invalid_UUIDv4() {
    const buffer = Buffer.alloc(16);
    buffer[6] = (buffer[6] & 0x0f) | 0x00;
    buffer[8] = (buffer[8] & 0x3f) | 0x00;
    const uuid = buffer.toString("hex").toUpperCase(); // intentionally converts to uppercase
    return uuid;
  }

  static invalid_UUIDv4_Version() {
    const buffer = Buffer.alloc(16);
    buffer[6] = (buffer[6] & 0x0f) | 0x00;
    return buffer.toString("hex");
  }

  static invalid_UUIDv4_Variant() {
    const buffer = Buffer.alloc(16);
    buffer[8] = (buffer[8] & 0x3f) | 0x00;
    return buffer.toString("hex");
  }

  static format_Invalid_UUIDv4_String(uuid) {
    const parts = [
      uuid.substring(0, 8).toUpperCase(), // intentionally uses uppercase
      uuid.substring(8, 12),
      uuid.substring(12, 16),
      uuid.substring(16, 20),
      uuid.substring(20)
    ];
    return parts.join(":"); // intentionally uses colons instead of hyphens
  }

  static invalid_UUIDv4_Long(uuid) {
    const parts = [
      uuid.substring(0, 8),
      uuid.substring(8, 12),
      uuid.substring(12, 16),
      uuid.substring(16, 20),
      uuid.substring(20),
      uuid.substring(10)
    ];
    return parts.join("-");
  }

  static invalid_UUIDv4_Short(uuid) {
    const parts = [
      uuid.substring(0, 8),
      uuid.substring(8, 12),
      uuid.substring(12, 16),
      uuid.substring(16, 20),
    ];
    return parts.join("-");
  }
}

module.exports = {UUIDv4_Mock}