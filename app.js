function webhookSend() {
  const whurl = document.getElementById("basic-url").value;
  let rlmsg = document.getElementById("msg").value;
  const select = document.getElementById("select").value;
  const msg = {
    content: `${rlmsg}`,
  };
  if (select === "spam") {
    for (let i = 0; i <= 100; i++) {
      setTimeout(function () {
        fetch(whurl + "?wait=true", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(msg),
        })
          .then((a) => a.json())
          .then(console.log);
      }, 1000);
    }
  } else if (select === "r") {
    fetch(whurl + "?wait=true", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msg),
    })
      .then((a) => a.json())
      .then(console.log);
  } else {
    console.log("plz select");
  }
}
