function generateTeamMemberCards(teamMembers) {
    let cardsHtml = '';
    teamMembers.forEach((teamMember) => {
        cardsHtml += `
        <div class="card">
        <h2>${teamMember.getName()}</h2>
        <h3>${teamMember.getRole()}</h3>
        <ul>
            <li>ID: ${teamMember.getId()}</li>
            <li>Email: ${teamMember.getEmail()}</li>
            <li>${teamMember.getRole() === 'Engineer' ? 
            `GitHub: ${teamMember.getGithub()}` : 
            `School: ${teamMember.getSchool()}`}</li>
        </ul>
    </div>
        `
    })

    return cardsHtml
}

function generateHTML(teamData) {
    return `
        <html>
            <head>
                <title>My Team</title>
            </head>
            <body>
                <h1>My Team</h1>

                <div class="card">
                    <h2>${teamData.manager.getName()}</h2>
                    <h3>${teamData.manager.getRole()}</h3>
                    <ul>
                        <li>ID: ${teamData.manager.getId()}</li>
                        <li>Email: ${teamData.manager.getEmail()}</li>
                        <li>Office number: ${teamData.manager.getOfficeNumber()}</li>
                    </ul>
                </div>

                ${generateTeamMemberCards(teamData.teamMembers)}
            </body>
        </html
`

}

module.exports = generateHTML;