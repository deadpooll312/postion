export const setStorageItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorageItem = (key) => {
  try {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key));
    }
  } catch (err) {
    console.error(err);
  }
};

export const removeStorageItem = (key) => {
  localStorage.removeItem(key);
};
