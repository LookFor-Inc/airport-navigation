const TERMINAL_D_FLOORS = {
  floors: {
    '0': {
      'url': '/svg/d/0.svg',
      'rooms': {
        'aud0': {
          'title': 'Sheremetyevo TravelRetail Heinemann',
          'mainId': '0_0_c',
          'ids': [
            '0_0_c_0_e'
          ]
        },
        'din1': {
          'title': 'Кофемания',
          'mainId': '0_1_c',
          'ids': [
            '0_1_c_0_e'
          ]
        },
        'wc2': {
          'title': 'Туалет',
          'mainId': '0_2_c',
          'ids': [
            '0_2_c_0_e'
          ]
        },
        'aud3': {
          'title': 'Детская комната',
          'mainId': '0_3_c',
          'ids': [
            '0_3_c_0_e'
          ]
        }
      },
      'vertices': {
        '0_0': {
          'x': 2699.5,
          'y': 3913.5,
          'deps': [
            '0_0_c_0_e'
          ]
        },
        '0_1': {
          'x': 2699.5,
          'y': 3874,
          'deps': [
            '0_2',
            '0_0_c_0_e'
          ]
        },
        '0_2': {
          'x': 2704.5,
          'y': 3874,
          'deps': [
            '0_1',
            '0_4',
            '0_1_c_0_e'
          ]
        },
        '0_3': {
          'x': 2704.5,
          'y': 3840,
          'deps': [
            '0_1_c_0_e'
          ]
        },
        '0_4': {
          'x': 2790.5,
          'y': 3874,
          'deps': [
            '0_2',
            '0_5'
          ]
        },
        '0_5': {
          'x': 2790.5,
          'y': 3860.5,
          'deps': [
            '0_4',
            '0_6'
          ]
        },
        '0_6': {
          'x': 3146,
          'y': 3860.5,
          'deps': [
            '0_5',
            '0_8',
            '0_2_c_0_e'
          ]
        },
        '0_7': {
          'x': 3152,
          'y': 3897.5,
          'deps': [
            '0_2_c_0_e'
          ]
        },
        '0_8': {
          'x': 3276.5,
          'y': 3855,
          'deps': [
            '0_6',
            '0_9'
          ]
        },
        '0_9': {
          'x': 3301.5,
          'y': 3862.5,
          'deps': [
            '0_8',
            '0_3_c_0_e'
          ]
        },
        '0_10': {
          'x': 3310.5,
          'y': 3891.5,
          'deps': [
            '0_3_c_0_e'
          ]
        },
        '0_0_c_0_e': {
          'x': 2699.5,
          'y': 3901,
          'deps': [
            '0_0_c',
            '0_0',
            '0_1'
          ]
        },
        '0_0_c': {
          'x': 2686.5,
          'y': 3931.5,
          'deps': [
            '0_0_c_0_e'
          ]
        },
        '0_1_c_0_e': {
          'x': 2704.5,
          'y': 3854.42,
          'deps': [
            '0_1_c',
            '0_2',
            '0_3'
          ]
        },
        '0_1_c': {
          'x': 2708.169921875,
          'y': 3820.027099609375,
          'deps': [
            '0_1_c_0_e'
          ]
        },
        '0_2_c_0_e': {
          'x': 3149.6419702338767,
          'y': 3882.9588164422394,
          'deps': [
            '0_2_c',
            '0_6',
            '0_7'
          ]
        },
        '0_2_c': {
          'x': 3152.5,
          'y': 3920,
          'deps': [
            '0_2_c_0_e'
          ]
        },
        '0_3_c_0_e': {
          'x': 3305.678029077873,
          'y': 3875.9625381398128,
          'deps': [
            '0_3_c',
            '0_9',
            '0_10'
          ]
        },
        '0_3_c': {
          'x': 3310.5,
          'y': 3916.5,
          'deps': [
            '0_3_c_0_e'
          ]
        }
      }
    }
  }
}

export default TERMINAL_D_FLOORS
