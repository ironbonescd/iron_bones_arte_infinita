const server = SERVER;

function func_img_prompt(prompt){
    return `${IMG_PROMPT} ${prompt}`;
}

async function generarPoema() {
   document.getElementById('title').innerHTML = TITLE;
   const response = await fetch(server, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          token: TOKEN,
          prompt: TEXT_PROMPT
      })
  })

  if (response.ok) {
      const data = await response.json();
      let parsedData = data.bot; // trims any trailing spaces/'\n'
      parsedData = parsedData.substring(1);
      parsedData = parsedData.trim();
      parsedData = parsedData.replace(/(?:\r\n|\r|\n)/g, '<br />');
      document.getElementById('poema').innerHTML = parsedData;
      parsedData = parsedData.replace(/<\/?[^>]+(>|$)/g, " ");
      console.log(parsedData);
      generarImg(parsedData);
  } else {
      const err = await response.text();

      document.getElementById('poema').innerHTML = "Something went wrong";
      alert(err);
  }

}

async function generarImg(prompt) {
   const prompt_img = func_img_prompt(prompt);
   console.log(prompt_img);
   const response = await fetch(`${server}/img`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          token: TOKEN,
          prompt: String(prompt_img)
      })
  })
  if (response.ok) {
      const data = await response.json();
      console.log(data);
      document.getElementById('img').innerHTML = `<image src="${data.url}"/> <br/><br/>`;
  } else {
      const err = await response.text();
      console.error(err);
      document.getElementById('img').innerHTML = "";
      alert("Something went wrong with the image");
  }

}