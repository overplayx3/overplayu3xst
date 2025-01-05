document.getElementById('player-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const playerId = document.getElementById('player-id').value;
    const playerStatsDiv = document.getElementById('player-stats');

    // Limpar dados anteriores
    playerStatsDiv.innerHTML = '<p>Buscando dados...</p>';

    try {
        // Exemplo: Chamada para API pública (troque pelo endpoint correto)
        const response = await fetch(`https://api.overwatchtracker.com/player/${DRAGON-21965}`);
        const data = await response.json();

        if (data.error) {
            playerStatsDiv.innerHTML = `<p>Erro: ${data.error}</p>`;
        } else {
            playerStatsDiv.innerHTML = `
                <h3>Estatísticas de ${data.name}</h3>
                <p>Vitórias: ${data.wins}</p>
                <p>Derrotas: ${data.losses}</p>
                <p>Eliminações: ${data.eliminations}</p>
            `;
        }
    } catch (error) {
        playerStatsDiv.innerHTML = '<p>Erro ao buscar dados. Tente novamente mais tarde.</p>';
    }
});