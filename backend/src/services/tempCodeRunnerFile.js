const teste = (password) => {
  const senha = md5(password);
  return senha
}

console.log(teste('imbatman'));