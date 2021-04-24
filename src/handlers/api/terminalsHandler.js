import terminals from '@/data/terminals'

export function isTerminalExist(terminalId) {
  return terminals.filter(terminal => terminal.id === terminalId).length > 0
}

export function getTerminalJsonData(terminalId) {
  return terminals.filter(terminal => terminal.id === terminalId)[0]
}
