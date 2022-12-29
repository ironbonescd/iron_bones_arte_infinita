const server = 'https://server-chat-gpt-olm8.onrender.com';
//const server = "http://localhost:5000";
async function generarPoema() {
   const response = await fetch(server, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          token: TOKEN,
          prompt: 'Escribeme un poema en el estilo de la cancion cali pachanguero pero solo pon el poema no escribas "Aqui esta el poema" o "Aqui va el poema'
      })
  })

  if (response.ok) {
      const data = await response.json();
      let parsedData = data.bot; // trims any trailing spaces/'\n'
      parsedData = parsedData.substring(1);
      parsedData = parsedData.trim();
      parsedData = parsedData.replace(/(?:\r\n|\r|\n)/g, '<br />');
      console.log(parsedData);
      document.getElementById('poema').innerHTML = parsedData;
      generarImg(parsedData);
  } else {
      const err = await response.text()

      document.getElementById('poema').innerHTML = "Something went wrong";
      alert(err)
  }

}

async function generarImg(prompt) {
   const response = await fetch(`${server}/img`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          token: TOKEN,
          prompt: prompt
      })
  })
  if (response.ok) {
      const data = await response.json();
      console.log(data);
      document.getElementById('img').innerHTML = `<image src="${data.url}"/> <br/><br/>`;
  } else {
      const err = await response.text()

      document.getElementById('img').innerHTML = "";
      alert("Something went wrong with the image");
  }

}