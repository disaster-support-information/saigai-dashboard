const cards = document.getElementById("cards");

disasterData.forEach(item => {
  cards.innerHTML += `
    <section class="card">
      <h2>${item.category}</h2>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <small>更新：${item.updated}</small><br>
      <a href="${item.source}" target="_blank">情報源を見る</a>
    </section>
  `;
});
