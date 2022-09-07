/* etapas de votação:
  CARGO:             NUMEROS:
deputado federal    4 numeros
deputado estadual   5 numeros
senador             3 numeros
governador          2 numeros
presidente          2 numeros
*/

let etapas = [
    {
        titulo: 'DEPUTADO FEDERAL',
        numeros: 4,
        candidatos: [
            {
                numero: 1111,
                nome: 'Bolsonaro',
                partido: 'BB',
                fotos: [
                    { url: 'Fotos Presidentes/22_jair_bolsonaro.jpg', legenda: 'Deputado Federal' }
                ],
            },
            {
                numero: 2222,
                nome: 'Lula',
                partido: 'LL',
                fotos: [
                    { url: 'Fotos Presidentes/13_luis_inacio_lula_da_silva.jpg', legenda: 'Deputado Federal' }
                ],
            }
        ],
    },
    {
        titulo: 'DEPUTADO ESTADUAL',
        numeros: 5,
        candidatos: [
            {
                numero: 11111,
                nome: 'Bolsonaro',
                partido: 'BB',
                fotos: [
                    { url: 'Fotos Presidentes/22_jair_bolsonaro.jpg', legenda: 'Deputado Estadual' }
                ],
            },
            {
                numero: 22222,
                nome: 'Lula',
                partido: 'LL',
                fotos: [
                    { url: 'Fotos Presidentes/13_luis_inacio_lula_da_silva.jpg', legenda: 'Deputado Estadual' }
                ],
            }
        ],
    },
    {
        titulo: 'SENADOR',
        numeros: 3,
        candidatos: [
            {
                numero: 111,
                nome: 'Bolsonaro',
                partido: 'BB',
                fotos: [
                    { url: 'Fotos Presidentes/22_jair_bolsonaro.jpg', legenda: 'Senador' }
                ],
            },
            {
                numero: 222,
                nome: 'Lula',
                partido: 'LL',
                fotos: [
                    { url: 'Fotos Presidentes/13_luis_inacio_lula_da_silva.jpg', legenda: 'Senador' }
                ],
            }
        ],
    },
    {
        titulo: 'GOVERNADOR',
        numeros: 2,
        candidatos: [
            {
                numero: 11,
                nome: 'Bolsonaro',
                partido: 'BB',
                fotos: [
                    { url: 'Fotos Presidentes/22_jair_bolsonaro.jpg', legenda: 'Governador' }
                ]
            },
            {
                numero: 22,
                nome: 'Lula',
                partido: 'LL',
                fotos: [
                    { url: 'Fotos Presidentes/13_luis_inacio_lula_da_silva.jpg', legenda: 'Governador' }
                ]
            }
        ]
    },
    {
        titulo: 'PRESIDENTE',
        numeros: 2,
        candidatos: [
            {
                numero: 22,
                nome: 'Jair Bolsonaro',
                partido: 'PSL',
                vice: 'Nicolas Cage',
                fotos: [
                    { url: 'Fotos Presidentes/22_jair_bolsonaro.jpg', legenda: 'presidente' },
                    { url: 'Fotos Presidentes/nicolas_cage_1.jpg', legenda: 'vice-presidente', small: true }
                ]
            },
            {
                numero: 13,
                nome: 'LULA',
                partido: 'PT',
                vice: 'Nicolas Cage',
                fotos: [
                    { url: 'Fotos Presidentes/13_luis_inacio_lula_da_silva.jpg', legenda: 'presidente' },
                    { url: 'Fotos Presidentes/nicolas_cage_2.jpg', legenda: 'vice-presidente', small: true }
                ]
            },
            {
                numero: 00,
                nome: 'Nicolas Cage',
                partido: 'NCAGE',
                vice: 'Nicolas Cage',
                fotos: [
                    { url: 'Fotos Presidentes/nicolas_cage_1.jpg', legenda: 'presidente' },
                    { url: 'Fotos Presidentes/nicolas_cage_2.jpg', legenda: 'vice-presidente', small: true }
                ]
            }
        ]
    }
]