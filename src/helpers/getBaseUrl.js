function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    const ORIGIN_HREF = window.location.origin;
    return ORIGIN_HREF;
  }

  if (process.env.REACT_APP_IS_LOCAL === 'true')
    return process.env.REACT_APP_BACK_END_URL;
}

export default getBaseUrl;
