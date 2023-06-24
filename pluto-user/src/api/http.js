import config from './config'

const onFetchSuccess = (response, cb) => {
  if (response.redirect.length > 0) {
    window.location = response.redirect
  }
  if (response.success) {
    cb && cb(null, response.data)
  }
  cb && cb(new Error(response.message), null)
}

const onFetchError = (error, cb) => {
  cb && cb(error, null)
}

export default {
  get (path, cb) {
    return fetch(`${config.basePath}${path}`)
      .then(res => res.json())
      .then(data => onFetchSuccess(data, cb))
      .catch(error => onFetchError(error, cb))
  },
  post (path, data, cb) {
    return fetch(`${config.basePath}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => onFetchSuccess(data, cb))
      .catch(error => onFetchError(error, cb))
  },
  put (path, data, cb) {
    return fetch(`${config.basePath}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => onFetchSuccess(data, cb))
      .catch(error => onFetchError(error, cb))
  },
  delete (path, data, cb) {
    return fetch(`${config.basePath}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => onFetchSuccess(data, cb))
      .catch(error => onFetchError(error, cb))
  }
}
