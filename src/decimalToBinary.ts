const BINARY_CHARS = ['0', '1'];
type BinaryChars = ('0' | '1')[];

const isBinaryChar = (char: string): char is '0' | '1' => BINARY_CHARS.includes(char);

const normalizedBinaryString = (values: string): BinaryChars => {
  const binaryChars = [] as BinaryChars;
  for (const char of values) {
    if (!isBinaryChar(char)) {
      throw new Error(`we got ${char} but it should have been ${BINARY_CHARS}`);
    }
    binaryChars.push(char);
  }
  return binaryChars;
};

export function decimalToBinary(dec: number): BinaryChars {
  const binary = (dec >>> 0).toString(2);
  return normalizedBinaryString(binary.padStart(6, '0'));
}

export function dec2bin(dec: number): string {
  const bin = (dec >>> 0).toString(2);
  let padding = '';

  for (let i = 0; i < 6 - bin.length; i++) {
    padding += '0';
  }

  return padding + bin;
}
