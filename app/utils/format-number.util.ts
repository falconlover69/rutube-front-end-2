export function formatNumberToKey(num: number) {
    if (num >= 1_000_000_000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'G'
    if (num >= 1_000_000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'M'
    if (num >= 1_000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'

    return num
}