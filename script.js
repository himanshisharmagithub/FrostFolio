const scriptURL = 'https://script.google.com/macros/s/AKfycbzyySC_RTqpBTioXMhBLCSFRUKRgSBd5hG3LvpVO6HpUNup79Bpg8DwB0Zdv0ml__hE/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully! "
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

