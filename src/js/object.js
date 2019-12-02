const Cursos ={
    node: 92,
    angular: 70,
    react:50,
    backbone: 80
}
const cursosCahves = Object.keys(Cursos)
document.getElementById('cursos').innerHTML =
`
<ul>
${cursosCahves.map(curso => `<li>${curso}</li>`)}
</ul>
`

cursosEntries = Object.entries(Cursos)


document.getElementById('cursosEntries').innerHTML =
`
<ul>
${cursosEntries.map(curso => `<li>${curso[0]} - ${curso[1]} Alunos</li>`)}
</ul>
`

const cursosMap = new Map(cursosEntries)
console.log(cursosMap.get('node'))
console.log(cursosMap.has("Jaba"))
