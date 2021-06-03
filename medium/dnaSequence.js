// Using an object
// const dna = (str) => {
//     const res = []
//     const seen = {}

//     for(let i = 0; i + 9 < str.length; i++) {
//         let seq = str.slice(i, i+10)
//         seen[seq] = seen[seq] + 1 || 1

//         if(seen[seq] === 2) {
//             res.push(seq)
//         }
//     }
//     return res
// }

// using sets

const dna = (str) => {
    let pastSeq = new Set()
    let res = new Set()

    for(let i = 0; i <= str.length - 10; i++) {
        let comparable = str.substring(i, i+10)
        pastSeq.has(comparable) ? res.add(comparable) : pastSeq.add(comparable)
    }
    return [...res]
}

const str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
console.log(dna(str))