const commander = require('commander')
const inquirer = require('inquirer')
const shell = require('shelljs')
const ora = require('ora')
const jsonfile = require('jsonfile')
const { red, cyan, green, bold } = require('kleur')
let fs = require('fs')
let path = require('path')
let url = require('url')

const frameworks = [
  { title: 'React', value: 'react' },
  { title: 'Vue', value: 'vue' },
  { title: 'Svelte', value: 'svelte' },
]

;(async () => {
  let appName
  let frameworkChoice
  const program = new commander.Command()
    .version('0.0.1')
    .option('-f, --framework [framework]', 'framework choice')
    .arguments('<project-name>')
    .usage(`--framework [framework] ${green('<project-name>')}`)
    .action((name, options) => {
      appName = name
      frameworkChoice = options.framework
    })
    .allowUnknownOption()

  if (!program.framework) {
    const output = []

    frameworks.forEach(framework => {
      output.push(framework)
    })

    const prompt = {
      type: 'list',
      name: 'frameworks',
      message: 'Please choose a framework',
      pageSize: output.length + 4,
      choices: output.map(framework => ({
        name: cyan(framework.title),
        value: framework.value,
      })),
    }

    await inquirer.prompt(prompt).then(answers => {
      frameworkChoice = answers.frameworks
    })
  }

  console.log(`\n\nYou chose: ${frameworkChoice}\n\n`)
})()
