const cursosChave = Object.keys(Cursos).map(chave => Cursos[chave])

document.getElementById('cursoschave').innerHTML =
`
<ul>
${cursosChave.map(curso => `<li>${curso}</li>`)}
</ul>

`
const cursosKey= Object.values(Cursos)
document.getElementById("cursosValues").innerHTML =
`
<ul>
${cursosKey.map(cursos => `<li>${cursos}</li>`)}
</ul>

`
