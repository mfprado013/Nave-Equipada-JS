const questions = [
  "O que aprendi hoje?", 
  "O que me deixou aborrecido? O que eu poderia fazer para melhorar ?", 
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0 ) => {
 process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const asewers = []
process.stdin.on("data", data => {
  asewers.push(data.toString().trim())
  if (asewers.length < questions.length) {
    ask(asewers.length)
  }else{
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Matheus ola!

  O que você aprendeu hoje foi:
  ${asewers[0]}

  O que te aborreceu e você poderia melhorar foi:
  ${asewers[1]}

  O que te deixou feliz hoje:
  ${asewers[2]}

  Você ajudou ${asewers[3]} pessoas hoje!!

  Volte amanhã para novas reflexões

  `)
})



  

