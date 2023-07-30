const constants = {
    ENDPOINT : process.env.NODE_ENV === 'production' ? 'https://team02mapi.webpark.tech' : 'http://localhost:8000'
  };
  
  export default constants;