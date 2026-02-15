function AsyncState({ loading, error, loadingFallback, errorFallback, children }) {

  if (loading) {
    return loadingFallback;
  }

  if (error) {
    return errorFallback;
  }

  return children;
}

export default AsyncState;