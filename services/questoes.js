const questoes = require('../dao/questoesDAO')

exports.getQuestoes = async (req, res) => {
  try {
    const questoesReturn = await questoes.getQuestoes()
    await res.status(200).send(questoesReturn)
  } catch (err) {
    res.status(400).send(err)
  }
}