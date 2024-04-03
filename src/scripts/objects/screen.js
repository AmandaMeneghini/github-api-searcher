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
            this.userProfile.innerHTML +=    `<div class="repositories section">
                                                                        <h2>Repositórios</h2>
                                                                        <ul>${repositoriesItens}</ul>
                                                                    <div>`;
        } 
    },

    renderUserEvents(user){
        let eventsWithMessage = user.events.filter(event => {
            return event.type === "PushEvent"
        })

        eventsWithMessage.forEach(userEvent => {
        
            this.userProfile.innerHTML += `<p>${userEvent.repo.name}</p><br>
                                            <p> - ${userEvent.payload.commits[0].message}</p><br><br>`


        });
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }   
}

export { screen }