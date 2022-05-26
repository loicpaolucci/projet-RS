


const data = {
    username: value,
    email: value2,
    password: value3
  };
  
  fetch('API_URL', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });