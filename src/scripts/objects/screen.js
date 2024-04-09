const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `  <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possuí nome cadastrado 😢'}</h1>
                                                <p>${user.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                                                <p>👥seguidores ${user.followers}</p>
                                                <p>👥seguindo ${user.following}</p>
                                            </div>
                                        </div>`


        let repositoriesItens = "";
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`
        });

        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=   `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            <div>`;
        } 
    },

    renderUserEvents(user){
        let eventWithMessage = user.events.filter(event => {
            return event.type === "PushEvent"
        })

        let eventsItens = "";
        eventWithMessage.forEach(userEvent => {
            eventsItens += `<li class="repositorie-name">${userEvent.repo.name}<p class="commit-message">- ${userEvent.payload.commits[0].message}</p></li>`
        });

        if(eventWithMessage.length > 0){
            this.userProfile.innerHTML +=   `<div class="events-container section">
                                                <h3>Eventos</h3>
                                                <ul class="event">${eventsItens}</ul>
                                            </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }   
}

export { screen }