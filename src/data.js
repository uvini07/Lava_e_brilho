export const WA_NUMBER = '5511981385123'
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá, gostaria de agendar um serviço')}`
export const waService = (name) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Olá, gostaria de agendar: ${name}`)}`

export const PHONE = '+55 11 98138-5123'
export const INSTAGRAM = { handle: '@lava_e_brilho', url: 'https://instagram.com/lava_e_brilho' }
export const ADDRESS = { line1: 'R. Prof. Charcot', line2: 'Santo André — SP, 09190-060' }
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=R.+Prof.+Charcot%2C+Santo+Andr%C3%A9%2C+SP%2C+09190-060%2C+Brasil'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=R.+Prof.+Charcot,+Santo+Andr%C3%A9,+SP,+09190-060&output=embed'

export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'lavagem', label: 'Lavagem' },
  { id: 'higienizacao', label: 'Higienização' },
  { id: 'pintura', label: 'Pintura' },
  { id: 'protecao', label: 'Proteção' },
  { id: 'farois', label: 'Faróis' },
  { id: 'vidros', label: 'Vidros' },
  { id: 'motos', label: 'Motos' },
]

export const SERVICES = [
  { cat: 'lavagem', name: 'Lavagem simples', desc: 'Ótima para carros que já estão há algum tempo sem um capricho por dentro e por fora.', price: '70' },
  { cat: 'lavagem', name: 'Lavagem detalhada + proteção hidrorrepelente', desc: 'Limpeza minuciosa por dentro e por fora com proteção que repele água da pintura.', price: '180', featured: true },
  { cat: 'higienizacao', name: 'Higienização de bancos de pano', desc: 'Remoção profunda de sujeira, odores e manchas dos bancos de tecido.', price: '240' },
  { cat: 'higienizacao', name: 'Higienização de bancos de couro + hidratação', desc: 'Limpeza e hidratação para manter o couro macio e sem rachaduras.', price: '180' },
  { cat: 'pintura', name: 'Lavagem de motor', desc: 'Limpeza segura do compartimento do motor.', price: '120' },
  { cat: 'pintura', name: 'Enceramento vitrificador', desc: 'Brilho intenso com camada de proteção temporária.', price: '140' },
  { cat: 'pintura', name: 'Polimento', desc: 'Remoção de marcas de uso e recuperação do brilho original da pintura.', price: '600', from: true },
  { cat: 'protecao', name: 'Vitrificação — 5 anos', desc: 'Proteção de longa duração com brilho profundo e resistência.', price: '1.100', from: true, featured: true },
  { cat: 'farois', name: 'Restauração de par de faróis — 1 ano', desc: 'Recupera a transparência e o desempenho da iluminação.', price: '80' },
  { cat: 'farois', name: 'Restauração de faróis com polímero — 2 a 5 anos', desc: 'Tratamento de maior durabilidade com camada de polímero.', price: '160' },
  { cat: 'vidros', name: 'Cristalização de vidros — 2 meses', desc: 'Repele água e melhora a visibilidade em dias de chuva.', price: '80' },
  { cat: 'vidros', name: 'Cristalização de vidros — 1 ano', desc: 'Versão de longa duração da cristalização de vidros.', price: '140' },
  { cat: 'motos', name: 'Lavagem detalhada de motos', desc: 'Cuidado completo para motocicletas, do tanque às rodas.', price: '110' },
]

export const CUSTOM = [
  { name: 'PPF', desc: 'Película de proteção contra impactos, riscos e desgaste da pintura.' },
  { name: 'Envelopamento', desc: 'Mudança de cor e acabamento com vinil premium de alta durabilidade.' },
  { name: 'Insulfilm', desc: 'Controle de luminosidade, privacidade e proteção contra raios UV.' },
]
