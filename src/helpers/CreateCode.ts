const commonKeyRegex = /^\w([\w\d_]*)?$/i

const invert = (n: bigint) => {
  if (n <= 0n || (n & (n - 1n)) !== 0n) {
    throw new Error("O valor deve ser uma potência de 2 positiva (BigInt).")
  }

  let i = 0n
  while (n > 1n) {
    n >>= 1n
    i++
  }
  return i
}

export const createCode = (flags: Record<string, bigint>, defaultFlags?: bigint | string[]) => {
    const lines = [] as string[]

    lines.push('import { Sybits } from \'sybits\'\n')
    lines.push('const Bitfield = Sybits.create({')

    const sortedFlags = Object.entries(flags).sort(([, aValue], [, bValue]) => Number(aValue - bValue))

    for(const [flag, value] of sortedFlags) {
        lines.push(`\t${commonKeyRegex.test(flag) ? flag : `'${flag}'`}: ${BigInt(value)}n, // 1n << ${invert(BigInt(value))}n`)
    }

    if(defaultFlags && (typeof defaultFlags == 'bigint' ? defaultFlags > 0n : defaultFlags.length > 0)) {
        lines.push('}, {')
        lines.push('\tdefault: 0n,')
    }

    lines.push('})')

    return lines.join('\n')
}