export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Used to create a consistent payload
 *
 * @param {string} key
 * @param {any} docs
 * @returns {Object} Payload
 */
export function createListPayload(key, docs) {
  const docMap = {};

  if (docs && docs.length) {
    docs.forEach(league => (docMap[league._id] = league));
  }

  return {
    count: docs ? docs.length : 0,
    [key]: docMap,
  };
}
