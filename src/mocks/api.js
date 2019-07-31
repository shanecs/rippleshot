const fraudLoss = {
  data: {
    cards: [
      { month: '2018-10', cards: 191590 },
      { month: '2018-09', cards: 190024 },
      { month: '2018-08', cards: 198256 },
      { month: '2018-07', cards: 186656 },
      { month: '2018-06', cards: 185545 },
      { month: '2018-05', cards: 174061 },
      { month: '2018-04', cards: 159650 },
      { month: '2018-03', cards: 159571 },
      { month: '2018-02', cards: 155431 },
      { month: '2018-01', cards: 155070 },
      { month: '2017-12', cards: 157601 },
      { month: '2017-11', cards: 156590 },
      { month: '2017-10', cards: 156372 },
      { month: '2017-09', cards: 156832 },
      { month: '2017-08', cards: 155179 },
      { month: '2017-07', cards: 158696 },
      { month: '2017-06', cards: 158819 },
      { month: '2017-05', cards: 155772 },
      { month: '2017-04', cards: 151438 },
    ],
    loss: [
      { month: '2018-10', loss: 107913.03 },
      { month: '2018-09', loss: 126298.58 },
      { month: '2018-08', loss: 142742.04 },
      { month: '2018-07', loss: 133174.23 },
      { month: '2018-06', loss: 158109.56 },
      { month: '2018-05', loss: 150104.61 },
      { month: '2018-04', loss: 151862.52 },
      { month: '2018-03', loss: 142628.53 },
      { month: '2018-02', loss: 195651.19 },
      { month: '2018-01', loss: 129546.76 },
      { month: '2017-12', loss: 86976.39 },
      { month: '2017-11', loss: 105117.20 },
      { month: '2017-10', loss: 97841.69 },
      { month: '2017-09', loss: 100138.09 },
      { month: '2017-08', loss: 125298.79 },
      { month: '2017-07', loss: 186948.13 },
      { month: '2017-06', loss: 102560.75 },
      { month: '2017-05', loss: 118325.35 },
      { month: '2017-04', loss: 127945.33 },
    ],
    lossPerCard: [
      { month: '2018-10', lossPerCard: 107913.03 / (191590/100000) },
      { month: '2018-09', lossPerCard: 126298.58 / (190024/100000) },
      { month: '2018-08', lossPerCard: 142742.04 / (198256/100000) },
      { month: '2018-07', lossPerCard: 133174.23 / (186656/100000) },
      { month: '2018-06', lossPerCard: 158109.56 / (185545/100000) },
      { month: '2018-05', lossPerCard: 150104.61 / (174061/100000) },
      { month: '2018-04', lossPerCard: 151862.52 / (159650/100000) },
      { month: '2018-03', lossPerCard: 142628.53 / (159571/100000) },
      { month: '2018-02', lossPerCard: 195651.19 / (155431/100000) },
      { month: '2018-01', lossPerCard: 129546.76 / (155070/100000) },
      { month: '2017-12', lossPerCard: 86976.39 / (157601/100000) },
      { month: '2017-11', lossPerCard: 105117.20 / (156590/100000) },
      { month: '2017-10', lossPerCard: 97841.69 / (156372/100000) },
      { month: '2017-09', lossPerCard: 100138.09 / (156832/100000) },
      { month: '2017-08', lossPerCard: 125298.79 / (155179/100000) },
      { month: '2017-07', lossPerCard: 186948.13 / (158696/100000) },
      { month: '2017-06', lossPerCard: 102560.75 / (158819/100000) },
      { month: '2017-05', lossPerCard: 118325.35 / (155772/100000) },
      { month: '2017-04', lossPerCard: 127945.33 / (151438/100000) },
    ],
  },
  events: [
    { date: '2017-10', title: 'Rippleshot Activated' }
  ],
  dataInformation: {
    cards: {
      title: 'Total Number of Cards',
      x: 'month',
      y: 'cards',
    },
    loss: {
      title: 'Total Loss',
      x: 'month',
      y: 'loss',
    },
    lossPerCard: {
      title: 'Total Loss per 100,000 Card',
      x: 'month',
      y: 'lossPerCard',
    },
  }
}

export default (endpoint) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(endpoint) {
          case '/data/fraud': resolve(fraudLoss); break;
          default: reject(Error(404));
        }
      }, 1000);
    });
};
