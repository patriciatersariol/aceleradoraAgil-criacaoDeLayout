const respostasDoUsuario = [];

let continuar = "";
while (continuar != "n") {
  const aluno = {};
  const nomeDoAluno = prompt("Digite o nome do aluno:");
  const nota1 = parseFloat(prompt("Digite a primeira nota de: " + nomeDoAluno));
  const nota2 = parseFloat(prompt("Digite a segunda nota de: " + nomeDoAluno));
  const frequencia = parseFloat(
    prompt("Digite a frequência de: " + nomeDoAluno)
  );

  const media = (nota1 + nota2) / 2;
  const mediaFixed = media.toFixed(2);

  aluno["nome"] = nomeDoAluno[0].toUpperCase() + nomeDoAluno.substr(1);
  aluno["nota1"] = nota1;
  aluno["nota2"] = nota2;
  aluno["media"] = mediaFixed;
  aluno["frequencia"] = frequencia;

  respostasDoUsuario.push(aluno);

  continuar = prompt("Deseja continuar? Digite 's' para sim e 'n' para não.");
}

let table = document.getElementsByTagName("table")[0];
let tbody = document.createElement("tbody");

for (let i = 0; i < respostasDoUsuario.length; i++) {
  let tr = document.createElement("tr");

  const numeroTd = document.createElement("td");
  numeroTd.textContent = i + 1;

  const nomeTd = document.createElement("td");
  nomeTd.textContent = respostasDoUsuario[i].nome;

  const nota1Td = document.createElement("td");
  nota1Td.textContent = respostasDoUsuario[i].nota1;

  const nota2Td = document.createElement("td");
  nota2Td.textContent = respostasDoUsuario[i].nota2;

  const mediaTd = document.createElement("td");
  mediaTd.textContent = respostasDoUsuario[i].media;

  const frequenciaTd = document.createElement("td");
  frequenciaTd.textContent = `${respostasDoUsuario[i].frequencia}%`;

  tr.appendChild(numeroTd);
  tr.appendChild(nomeTd);
  tr.appendChild(nota1Td);
  tr.appendChild(nota2Td);
  tr.appendChild(mediaTd);
  tr.appendChild(frequenciaTd);

  if (
    respostasDoUsuario[i].media >= 6 &&
    respostasDoUsuario[i].frequencia >= 70
  ) {
    tr.classList.add("aprovado");
  } else {
    tr.classList.add("reprovado");
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
