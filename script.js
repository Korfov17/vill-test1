document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const profession = document.getElementById('profession').value;
  const biome = document.getElementById('biome').value;
  const level = document.getElementById('level').value;
  const buy = document.getElementById('buy').value;
  const buyCount = document.getElementById('buyCount').value;
  const sell = document.getElementById('sell').value;
  const sellCount = document.getElementById('sellCount').value;

  const invuln = document.getElementById('invuln').checked ? "Invulnerable:1," : "";
  const silent = document.getElementById('silent').checked ? "Silent:1," : "";
  const noai = document.getElementById('noai').checked ? "NoAI:1," : "";

  const command = `/summon villager ~ ~1 ~ {${invuln}${silent}${noai}VillagerData:{profession:${profession},level:${level},type:${biome}},Offers:{Recipes:[{buy:{id:"${buy}",Count:${buyCount}},sell:{id:"${sell}",Count:${sellCount}}]}}`;

  document.getElementById('output').textContent = command;
});