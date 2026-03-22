import type { Question } from '../types/quiz'

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Onde foi o nosso primeiro encontro?',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQKm8PG-lJUXwAhGnYHEeR6_c1r9dfsJzObfJy-xQoKhPrSU00iHgrrGseAJ7JbRfo-puugxrBXnb_gwoIblSQrqNbP_90bcM3vqrvJWFiRp5Er1_9VEDpxLowQWH8PlGAXS3gw7Jp2aUyrfLt_jSQ3wMvTo2QEY7-u5zcFemuavkiw7Ev0RS38HfStRcmY5Ip-qPp8DbPLp3Pq8Zb92Je17VSrxCFwL9ucnRpDwLWtVmu0ByiXx7kIhIrWm-kfj5htye4XTCL3ZF',
    imageAlt: 'Cafeteria charmosa',
    options: [
      { id: 'q1-a', label: 'No Parque do Poetas', isCorrect: false },
      { id: 'q1-b', label: 'No gym', isCorrect: false },
      { id: 'q1-c', label: 'No cinema do Oeiras Parque', isCorrect: true },
    ],
    hint: 'Aquele sorriso do pinto quando te viu! 🦦💕',
  },
  {
    id: 2,
    text: 'Qual foi o primeiro filme que assistimos juntos?',
    imageUrl:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Cinema romântico',
    options: [
      { id: 'q2-a', label: 'Hamnet', isCorrect: false },
      { id: 'q2-b', label: 'Nuremberga', isCorrect: false },
      { id: 'q2-c', label: 'Mestres da Ilusão - Nada é o que parece', isCorrect: true },
    ],
    hint: 'Mesmo sem pipoquinha, a minha mão não largou a sua! 🍿🐥',
  },
  {
    id: 3,
    text: 'Qual é o apelido carinhoso que eu te dou?',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUs9ORx-bobGjEWnzTguUTl4TX0LjkNoPXE-i6BF_GaaKy3R6YJNiFelCnFqYQSryqzyLANpsrShSm6yP6lwq5QQwZh9NQqF5zNH_zW2D6Lg6g9k6BCKwVZDrlqPqqq22OE0Xk_5sGWaEXdZ6wMla60575_IP5NxxOgGZRB2xXsScwe5BSFTU7HDvsaJaCgjqOkjA3y-wpCZgGQO1_vn8wLz4zA7gwS-weOB0C62wLp1zTksRA8F2X9bGfkA0P8XDJVQJB9ZdbT0Mh',
    imageAlt: 'Lontra fofa a sorrir',
    options: [
      { id: 'q3-a', label: 'Lontra', isCorrect: false },
      { id: 'q3-b', label: 'Beldroega', isCorrect: true },
      { id: 'q3-c', label: 'Pirolito', isCorrect: false },
    ],
    hint: 'Beldroega! Uma plantinha resiliente e bonita, tal como tu. 🌿💚',
  },
  {
    id: 4,
    text: 'Em que mês começamos a namorar?',
    imageUrl:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Calendário romântico',
    options: [
      { id: 'q4-a', label: 'Fevereiro', isCorrect: true },
      { id: 'q4-b', label: 'Março', isCorrect: false },
      { id: 'q4-c', label: 'Dezembro', isCorrect: false },
    ],
    hint: 'Fevereiro — o mês em que visitamos o porto. Que mês perfeito para me apaixonar por ti! 🍂❤️',
  },
  {
    id: 5,
    text: 'Qual foi a primeira viagem que fizemos juntos?',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Praia ao pôr do sol',
    options: [
      { id: 'q5-a', label: 'Lisboa', isCorrect: false },
      { id: 'q5-b', label: 'Porto', isCorrect: true },
      { id: 'q5-c', label: 'Algarve', isCorrect: false },
    ],
    hint: 'O Porto foi mágico! Depois de encher o bandulho, conquistei o coraçãozinho da minha menina para sempre! 🌅',
  },
  {
    id: 6,
    text: 'Qual é o prato favorito do teu gorila?',
    imageUrl:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Prato delicioso caseiro',
    options: [
      { id: 'q6-a', label: 'Bacalhau à Brás', isCorrect: false },
      { id: 'q6-b', label: 'Risotto de cogumelos', isCorrect: false },
      { id: 'q6-c', label: 'Feijoada', isCorrect: true },
    ],
    hint: 'Para grandes máquinas, grandes depósitos! 🍚',
  },
]
