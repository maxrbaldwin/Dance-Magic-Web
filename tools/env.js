const https = require('https')

// required environmental variables
const currentBranch = process.env.HEROKU_TEST_RUN_BRANCH || 'heroku'
const apiKey = process.env.HEROKU_API_KEY || '467e7ecc-abca-4a3b-a76d-07d3b76496f2'

// static variables
const host = 'api.heroku.com'
const pipeLineName = 'dance-magic-web'

// computed values
const pipeLineApiPath = pln => `/pipelines/${pln}`
const reviewAppApiPath = pipeLineId => `/pipelines/${pipeLineId}/review-apps`
const appApiPath = appId => `/apps/${appId}`

const fetchPipeline = () => {
  const options = {
    hostname: host,
    path: pipeLineApiPath(pipeLineName),
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/vnd.heroku+json; version=3'
    }
  };

  return new Promise((resolve, reject) => {
    let data = []
    const req = https.request(options, res => {
      res.on('data', chunck => {
        data.push(chunck)
      });

      res.on('end', () => {
        const dataToString = data.join('')
        const dataToJson = JSON.parse(dataToString)
        resolve(dataToJson)
      })
    }).end();

    req.on('error', err => {
      reject(err)
    });

    req.end()
  })
}

const fetchReviewApps = pipeline => {
  const { id } = pipeline
  const options = {
    hostname: host,
    path: reviewAppApiPath(id),
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/vnd.heroku+json; version=3'
    }
  };

  return new Promise((resolve, reject) => {
    let data = []
    const req = https.request(options, res => {
      res.on('data', chunck => {
        data.push(chunck)
      });

      res.on('end', () => {
        const dataToString = data.join('')
        const dataToJson = JSON.parse(dataToString)
        resolve(dataToJson)
      })
    }).end();

    req.on('error', err => {
      reject(err)
    });

    req.end()
  })
}

const getReviewAppIdByBranch = reviewApps => {
  let reviewAppId

  reviewApps.forEach(reviewApp => {
    const { branch, app } = reviewApp
    if (branch === currentBranch) {
      reviewAppId = app.id
    }
  })

  return Promise.resolve(reviewAppId)
}

const fetchReviewApp = reviewAppId => {
  const options = {
    hostname: host,
    path: appApiPath(reviewAppId),
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/vnd.heroku+json; version=3'
    }
  };

  return new Promise((resolve, reject) => {
    let data = []
    const req = https.request(options, res => {
      res.on('data', chunck => {
        data.push(chunck)
      });

      res.on('end', () => {
        const dataToString = data.join('')
        const dataToJson = JSON.parse(dataToString)
        resolve(dataToJson)
      })
    }).end();

    req.on('error', err => {
      reject(err)
    });

    req.end()
  })
}

const setReviewAppEnvVar = reviewApp => {
  const { web_url } = reviewApp

  process.env.HEROKU_REVIEW_APP_URL = web_url
}

Promise.resolve().then(fetchPipeline).then(fetchReviewApps).then(getReviewAppIdByBranch).then(fetchReviewApp).then(setReviewAppEnvVar).catch(err => {
  console.log('err: ', err);
})